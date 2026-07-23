import ThemeToggle from "@/components/theme/theme.toggle";
import MenuButton from "@/components/ui/buttons/menu.button";

const FloatingMenu = () => {
  return (
    <div className="top-0 md:top-2 right-2 z-20 fixed flex items-center gap-2 py-2">
      <ThemeToggle />

      <div className="md:hidden">
        <MenuButton />
      </div>
    </div>
  );
};

export default FloatingMenu;
