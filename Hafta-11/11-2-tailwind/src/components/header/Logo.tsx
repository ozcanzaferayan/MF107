import { Heart } from "lucide-react";

const Logo = () => {
  return (
    <a href="#" className="flex items-center gap-3">
      <div className="bg-orange-500 p-3 rounded-full">
        <Heart color="white" />
      </div>
      <span className="text-2xl">Vet</span>
    </a>
  );
};

export default Logo;
