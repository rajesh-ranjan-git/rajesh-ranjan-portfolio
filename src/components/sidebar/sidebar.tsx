"use client";

import { useEffect, useRef } from "react";
import { FaHouse } from "react-icons/fa6";
import { useAppStore } from "@/store/store";
import { menuItems } from "@/config/sidebar.config";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useSectionNavigation } from "@/hooks/useSectionNavigation";
import SidebarFooter from "@/components/sidebar/sidebar.footer";
import SidebarHeader from "@/components/sidebar/sidebar.header";
import BackdropOverlay from "@/components/ui/overlays/backdrop.overlay";

const Sidebar = () => {
  const sidebarToggle = useAppStore((state) => state.sidebarToggle);
  const setSidebarToggle = useAppStore((state) => state.setSidebarToggle);

  const sidebarRef = useRef<HTMLDivElement>(null);

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

  return (
    <>
      <aside
        className={`fixed inset-y-0 flex flex-col bg-ink rounded-r-md h-dvh max-h-dvh text-sidebar-text overflow-hidden transition-all ease-in-out duration-700 z-50 ${
          sidebarToggle ? "w-72 p-2" : "w-0 p-0 md:w-16 md:p-2"
        }`}
        ref={sidebarRef}
      >
        <SidebarHeader />

        <nav className="flex flex-1 w-full min-h-0 overflow-x-hidden overflow-y-auto no-scrollbar">
          <ul className="flex flex-col gap-1 2xl:gap-5 py-1 w-full">
            {menuItems && menuItems.length > 0 ? (
              menuItems.map((item) => {
                const Icon = item?.icon;

                return (
                  <li
                    className={`flex justify-start items-center gap-4 p-2 px-3 rounded-md w-full h-10 overflow-hidden text-xl transition-all duration-500 hover:bg-accent-blue cursor-pointer shrink-0 ${activeSection === item.id ? "bg-accent-blue" : ""}`}
                    key={item.id}
                  >
                    <button
                      type="button"
                      className="flex items-center w-full cursor-pointer"
                      onClick={() => {
                        scrollToSection(item.id);
                        handleListItemAction();
                      }}
                    >
                      <div className="flex justify-center items-center w-6 min-w-6">
                        <Icon />
                      </div>

                      {sidebarToggle && (
                        <div className="px-3 w-full text-lg whitespace-nowrap">
                          <p className="w-full text-left">{item?.label}</p>
                        </div>
                      )}
                    </button>
                  </li>
                );
              })
            ) : (
              <li className="flex justify-start items-center gap-4 p-2 px-3 rounded-md w-full h-10 overflow-hidden text-xl transition-all ease-in-out bg-accent-blue cursor-pointer shrink-0">
                <div className="flex justify-center items-center w-6 min-w-6">
                  <FaHouse />
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
