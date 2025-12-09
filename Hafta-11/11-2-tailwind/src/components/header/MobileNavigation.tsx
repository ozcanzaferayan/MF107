import { links } from "./Links";

const MobileNavigation = () => {
  return (
    <div
      className="grid md:hidden border-t border-slate-200
        px-2 pt-2 pb-3 gap-1
    "
    >
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="px-3 py-2 rounded-md text-sm font-medium
            hover:text-orange-600
            hover:bg-orange-50
            transition duration-200
          "
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default MobileNavigation;
