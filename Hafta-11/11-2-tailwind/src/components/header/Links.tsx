export const links = [
  {
    name: "Anasayfa",
    href: "/",
  },
  {
    name: "Hakkımızda",
    href: "/about",
  },
  {
    name: "Hizmetler",
    href: "/services",
  },
  {
    name: "Iletişim",
    href: "/contact",
  },
];

const Links = () => {
  return (
    <nav className="hidden md:flex gap-8">
      {links.map((link) => (
        <a key={link.href} href={link.href}>
          {link.name}
        </a>
      ))}
    </nav>
  );
};

export default Links;
