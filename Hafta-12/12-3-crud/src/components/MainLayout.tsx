import { NavLink, Outlet } from "react-router";

const MainLayout = () => {
  const activeCls = "border-b-2 border-b-blue-500";
  const defaultCls = "";

  const getClassname = ({ isActive }: { isActive: boolean }) =>
    isActive ? activeCls : defaultCls;
  return (
    <>
      <nav className="sticky top-0 w-full shadow bg-white p-4 flex gap-4">
        <NavLink className={getClassname} to={"/"} end>
          Anasayfa
        </NavLink>
        <NavLink className={getClassname} to={"/products"} end>
          Ürünler
        </NavLink>
        <NavLink className={getClassname} to={"/products/1"} end>
          Detay
        </NavLink>
        <NavLink className={getClassname} to={"/products/add"} end>
          Ekle
        </NavLink>
        <NavLink className={getClassname} to={"/products/1/delete"} end>
          Sil
        </NavLink>
        <NavLink className={getClassname} to={"/products/1/edit"} end>
          Güncelle
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default MainLayout;
