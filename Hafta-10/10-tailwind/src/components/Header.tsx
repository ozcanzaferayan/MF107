// rafce

import { Cat } from "lucide-react";

const Header = () => {
  return (
    <div className="sticky bg-white shadow top-0 z-10">
      <div className="flex gap-4 p-4">
        <a href="#" className="flex-1 flex gap-2">
          <Cat />
          <span>Vet</span>
        </a>
        <a href="#">Anasayfa</a>
        <a href="#">Hakkımızda</a>
        <a href="#">Iletişim</a>
      </div>
    </div>
  );
};

export default Header;
