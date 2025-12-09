import { Heart, Home, Search, User } from "lucide-react";

const Footer = () => {
  return (
    <div
      className="fixed bottom-0 w-full flex justify-around py-4 
    border-t-2 border-t-gray-100"
    >
      <Home className="cursor-pointer hover:text-blue-500 transition" />
      <Search className="cursor-pointer hover:text-blue-500 transition" />
      <Heart className="cursor-pointer hover:text-blue-500 transition" />
      <User className="cursor-pointer hover:text-blue-500 transition" />
    </div>
  );
};

export default Footer;
