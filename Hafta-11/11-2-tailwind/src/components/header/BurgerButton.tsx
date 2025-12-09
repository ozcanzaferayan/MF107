import { Menu, X } from "lucide-react";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const BurgerButton = ({ isOpen, setIsOpen }: Props) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex md:hidden text-slate-700 hover:text-orange-600
        hover:bg-orange-50 p-2 rounded cursor-pointer transition"
    >
      {isOpen ? <X /> : <Menu />}
    </button>
  );
};

export default BurgerButton;
