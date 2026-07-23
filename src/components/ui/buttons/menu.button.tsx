"use client";

import { useAppStore } from "@/store/store";
import Hamburger from "@/components/ui/buttons/hamburger";

const MenuButton = () => {
  const sidebarToggle = useAppStore((state) => state.sidebarToggle);
  const setSidebarToggle = useAppStore((state) => state.setSidebarToggle);

  return (
    <button
      type="button"
      data-sidebar-menu-button="true"
      className={`p-2 border-0 rounded-md outline-none font-bold text-2xl transition-all ease-in-out hover:bg-accent-blue cursor-pointer ${sidebarToggle ? "bg-accent-blue" : "bg-ink"}`}
      onMouseDown={(event) => event.stopPropagation()}
      onClick={(event) => {
        event.stopPropagation();
        setSidebarToggle(!sidebarToggle);
      }}
    >
      <div className="p-1 w-8 h-8">
        <Hamburger />
      </div>
    </button>
  );
};

export default MenuButton;
