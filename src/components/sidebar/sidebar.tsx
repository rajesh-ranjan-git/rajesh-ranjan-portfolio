"use client";

import { useEffect, useRef } from "react";
import { FaHouse } from "react-icons/fa6";
import useStore from "@/store/store";
import { menuItems } from "@/config/sidebar.config";
import useOutsideClick from "@/hooks/useOutsideClick";
import useSectionNavigation from "@/hooks/useSectionNavigation";
import useScreenWidthCheck from "@/hooks/useScreenWidthCheck";
import { getFocusableElements } from "@/helpers/common.helpers";
import SidebarFooter from "@/components/sidebar/sidebar.footer";
import SidebarHeader from "@/components/sidebar/sidebar.header";
import BackdropOverlay from "@/components/ui/overlays/backdrop.overlay";

const Sidebar = () => {
  const sidebarToggle = useStore((state) => state.sidebarToggle);
  const setSidebarToggle = useStore((state) => state.setSidebarToggle);

  const sidebarRef = useRef<HTMLDivElement>(null);

  // Below md the collapsed sidebar is 0px wide, so its links must leave the
  // tab order; from md up the icon rail stays visible and usable.
  const { isMobileScreenWidth } = useScreenWidthCheck();
  const isHiddenRail = !sidebarToggle && isMobileScreenWidth;

  const handleListItemAction = () => {
    if (sidebarToggle) setSidebarToggle(false);
  };

  useOutsideClick({
    ref: sidebarRef,
    when: sidebarToggle,
    callback: () => setSidebarToggle(false),
    eventType: "mousedown",
  });

  const { activeSection, scrollToSection } = useSectionNavigation({
    sectionIds: menuItems.map((item) => item.id),
  });

  useEffect(() => {
    document.documentElement.classList.toggle("sidebar-open", sidebarToggle);
    document.body.classList.toggle("sidebar-open", sidebarToggle);

    return () => {
      document.documentElement.classList.remove("sidebar-open");
      document.body.classList.remove("sidebar-open");
    };
  }, [sidebarToggle]);

  // While open the sidebar behaves like a dialog: focus moves in, Tab cycles
  // inside it, Escape closes it, and focus returns to whatever opened it.
  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebarToggle || !sidebar) return;

    const opener =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    if (!sidebar.contains(document.activeElement)) {
      getFocusableElements(sidebar)[0]?.focus();
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSidebarToggle(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = getFocusableElements(sidebar);
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (!sidebar.contains(active)) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      // Don't steal focus if navigation already moved it to a section.
      const active = document.activeElement;
      const focusLeftBehind =
        !active || active === document.body || sidebar.contains(active);

      if (focusLeftBehind && opener?.isConnected) opener.focus();
    };
  }, [sidebarToggle, setSidebarToggle]);

  return (
    <>
      <aside
        id="sidebar"
        aria-label="Site"
        inert={isHiddenRail}
        className={`fixed inset-y-0 flex flex-col bg-ink rounded-r-md h-dvh max-h-dvh text-sidebar-text overflow-hidden transition-all ease-in-out duration-700 z-50 [--focus-ring:var(--sidebar-text)] ${
          sidebarToggle ? "w-72 p-2" : "w-0 p-0 md:w-16 md:p-2"
        }`}
        ref={sidebarRef}
      >
        <SidebarHeader />

        <nav
          aria-label="Sections"
          className="flex flex-1 w-full min-h-0 overflow-x-hidden overflow-y-auto no-scrollbar"
        >
          <ul className="flex flex-col gap-1 2xl:gap-5 py-1 w-full">
            {menuItems && menuItems.length > 0 ? (
              menuItems.map((item) => {
                const Icon = item?.icon;
                const isActive = activeSection === item.id;

                return (
                  <li
                    className={`flex justify-start items-center gap-4 p-2 px-3 rounded-md w-full h-10 overflow-hidden text-xl transition-all duration-500 hover:bg-accent-blue cursor-pointer shrink-0 ${isActive ? "bg-accent-blue" : ""}`}
                    key={item.id}
                  >
                    <button
                      type="button"
                      aria-current={isActive ? "location" : undefined}
                      className="flex items-center w-full cursor-pointer"
                      onClick={() => {
                        scrollToSection(item.id);
                        handleListItemAction();
                      }}
                    >
                      <div className="flex justify-center items-center w-6 min-w-6">
                        <Icon aria-hidden="true" />
                      </div>

                      {sidebarToggle ? (
                        <div className="px-3 w-full text-lg whitespace-nowrap">
                          <p className="w-full text-left">{item?.label}</p>
                        </div>
                      ) : (
                        <span className="sr-only">{item?.label}</span>
                      )}
                    </button>
                  </li>
                );
              })
            ) : (
              <li className="flex justify-start items-center gap-4 p-2 px-3 rounded-md w-full h-10 overflow-hidden text-xl transition-all ease-in-out bg-accent-blue cursor-pointer shrink-0">
                <div className="flex justify-center items-center w-6 min-w-6">
                  <FaHouse aria-hidden="true" />
                </div>

                {sidebarToggle && (
                  <div className="px-3 w-full text-lg whitespace-nowrap">
                    <p className="w-full text-left">Home</p>
                  </div>
                )}
              </li>
            )}
          </ul>
        </nav>

        <SidebarFooter />
      </aside>

      <BackdropOverlay
        when={sidebarToggle}
        callback={() => setSidebarToggle(false)}
      />
    </>
  );
};

export default Sidebar;
