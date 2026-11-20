"use client";

import { useEffect, useRef } from "react";
import splashStyles from "@/styles/splash.module.css";
import { SplashScreenProps } from "@/types/props/splash.props.types";
import SplashLoader from "@/components/ui/splash/splash.loader";
import { SPLASH_DURATION } from "@/config/common.config";

export const SPLASH_ATTRIBUTE = "data-splash-screen";

// Progress of every running animation, per element and per
// "pseudo-element|animation-name", so it can be restored after the dialog is
// re-opened.
type AnimationSnapshot = Map<Element, Map<string, CSSNumberish | null>>;

const describeAnimation = (animation: Animation) => {
  const effect = animation.effect as KeyframeEffect | null;
  const name = (animation as CSSAnimation).animationName ?? "";

  return {
    target: effect?.target ?? null,
    key: `${effect?.pseudoElement ?? ""}|${name}`,
  };
};

const snapshotAnimations = (root: Element): AnimationSnapshot => {
  const snapshot: AnimationSnapshot = new Map();

  for (const animation of root.getAnimations({ subtree: true })) {
    const { target, key } = describeAnimation(animation);
    if (!target) continue;

    if (!snapshot.has(target)) snapshot.set(target, new Map());
    snapshot.get(target)?.set(key, animation.currentTime);
  }

  return snapshot;
};

const restoreAnimations = (root: Element, snapshot: AnimationSnapshot) => {
  for (const animation of root.getAnimations({ subtree: true })) {
    const { target, key } = describeAnimation(animation);
    const time = target ? snapshot.get(target)?.get(key) : undefined;

    if (time != null) animation.currentTime = time;
  }
};

const SplashScreen = ({
  loadingText = "Loading...",
  endingText = "Welcome...",
  backgroundColor = "var(--bg)",
  className = "",
  duration = SPLASH_DURATION,
  onSkip,
}: SplashScreenProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const animationSnapshotRef = useRef<AnimationSnapshot | null>(null);

  // A modal dialog makes the rest of the page inert natively while the splash
  // covers it, without touching attributes other components manage. The
  // server renders it open (so it shows before hydration); re-opening it as
  // modal here moves it to the top layer.
  //
  // Closing the dialog sets display: none, which cancels its CSS animations,
  // and showModal() would start them again from zero — the intro would play
  // twice. Their progress is captured before the swap and restored after it.
  // The snapshot is kept in a ref so StrictMode's second effect run (after its
  // cleanup already closed the dialog) restores it too.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (dialog.open) {
      animationSnapshotRef.current = snapshotAnimations(dialog);
      dialog.close();
    }

    dialog.showModal();

    if (animationSnapshotRef.current) {
      restoreAnimations(dialog, animationSnapshotRef.current);
    }

    return () => {
      dialog.close();

      // Restart keyboard navigation from the top of the document, so the
      // first Tab after the intro reaches the skip link instead of whatever
      // follows the removed dialog.
      const root = document.documentElement;
      const hadTabIndex = root.hasAttribute("tabindex");

      if (!hadTabIndex) root.setAttribute("tabindex", "-1");
      root.focus({ preventScroll: true });
      if (!hadTabIndex) root.removeAttribute("tabindex");
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      open
      {...{ [SPLASH_ATTRIBUTE]: "" }}
      aria-label={loadingText}
      onCancel={(event) => {
        // Escape skips the intro instead of leaving a half-closed dialog.
        event.preventDefault();
        onSkip?.();
      }}
      className={`fixed inset-0 z-100 m-0 p-0 border-0 w-screen max-w-none h-screen max-h-none overflow-hidden backdrop:bg-transparent focus:outline-none ${className}`}
      style={{ backgroundColor }}
    >
      <span className="sr-only">{loadingText}</span>

      <div
        aria-hidden="true"
        className={`w-full h-full overflow-hidden ${splashStyles.splash_screen}`}
      >
        <SplashLoader
          loadingText={loadingText}
          endingText={endingText}
          duration={duration}
        />
      </div>
    </dialog>
  );
};

export default SplashScreen;
