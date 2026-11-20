import { BackdropOverlayProps } from "@/types/props/common.props.types";

const BackdropOverlay = ({ when, callback }: BackdropOverlayProps) => {
  return (
    // Mouse-only shortcut; keyboard users close the sidebar with Escape.
    <div
      aria-hidden="true"
      className={`fixed z-40 inset-0 bg-overlay transition-all duration-500 ${
        when
          ? "opacity-60 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onMouseDown={callback}
    />
  );
};

export default BackdropOverlay;
