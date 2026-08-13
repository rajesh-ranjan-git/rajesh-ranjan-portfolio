"use client";

import { MenuProps } from "@/types/props/common.props.types";
import useStore from "@/store/store";
import Hamburger from "@/components/ui/buttons/hamburger";

const MenuButton = ({ side }: MenuProps) => {
  const sidebarToggle = useStore((state) => state.sidebarToggle);
  const setSidebarToggle = useStore((state) => state.setSidebarToggle);

  return (
    <button
      type="button"
      data-sidebar-menu-button="true"
      aria-label="Sidebar Menu"
      className={`p-2 border-0 rounded-md outline-none font-bold text-2xl transition-all ease-in-out hover:bg-accent-blue cursor-pointer ${sidebarToggle ? "bg-accent-blue" : "bg-ink"}`}
      onMouseDown={(event) => event.stopPropagation()}
      onClick={(event) => {
        event.stopPropagation();
        setSidebarToggle(!sidebarToggle);
      }}
    >
      <div className="p-1 w-8 h-8">
        <Hamburger side={side} />
      </div>
    </button>
  );
};

export default MenuButton;
