import { useState } from "react";
import BurgerButton from "./BurgerButton";
import Links from "./Links";
import Logo from "./Logo";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
  // usss
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg top-0 z-10 sticky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Logo />
          <Links />
          <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        {isOpen && <MobileNavigation />}
      </div>
    </header>
  );
};

export default Header;
