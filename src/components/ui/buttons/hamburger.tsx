import { MenuProps } from "@/types/props/common.props.types";
import { useAppStore } from "@/store/store";

const Hamburger = ({ side }: MenuProps) => {
  const sidebarToggle = useAppStore((state) => state.sidebarToggle);

  return (
    <div
      className={`relative w-full h-full ${side === "left" ? "rotate-0" : "rotate-180"}`}
    >
      <span
        className="top-0 left-0 absolute bg-sidebar-text rounded-md w-full h-1 transition-all duration-300 ease-in-out"
        style={
          sidebarToggle
            ? {
                top: "50%",
                transform: "translate(0, -50%) rotate(45deg)",
              }
            : {
                top: "0%",
                transform: "none",
              }
        }
      ></span>
      <span
        className={`top-1/2 left-0 absolute bg-sidebar-text rounded-md w-[80%] h-1 transition-all -translate-y-1/2 duration-300 ease-in-out ${
          sidebarToggle && "w-0 opacity-0"
        }`}
      ></span>
      <span
        className="top-full left-0 absolute bg-sidebar-text rounded-md w-full h-1 transition-all -translate-y-full duration-300 ease-in-out"
        style={
          sidebarToggle
            ? {
                top: "50%",
                transform: "translate(0, 50%) rotate(-45deg)",
              }
            : {
                top: "100%",
                transform: "none",
              }
        }
      ></span>
    </div>
  );
};

export default Hamburger;
