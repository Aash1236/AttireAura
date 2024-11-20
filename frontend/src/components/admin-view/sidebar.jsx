import { ChartArea } from "lucide-react";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import {
  BaggageClaim,
  Icon,
  icons,
  LayoutDashboard,
  ShoppingBasket,
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";

export const adminSidebarMenuItems = [
  {
    id: "dashboard",
    label: "dashboard",
    path: "/admin/dashboard",
    Icon: <LayoutDashboard />,
  },
  {
    id: "products",
    label: "products",
    path: "/admin/products",
    Icon: <ShoppingBasket />,
  },
  {
    id: "orders",
    label: "orders",
    path: "/admin/orders",
    Icon: <BaggageClaim />,
  },
];
function MenuItems({ setOpen }) {
  const navigate = useNavigate();
  return (
    <nav className="flex flex-col gap-2 mt-8">
      {adminSidebarMenuItems.map((menuItem) => (
        <div
          key={menuItem.id}
          onClick={() => {
            navigate(menuItem.path);
            setOpen ? setOpen(false) : null;
          }}
          className="flex items-center gap-2 px-3 py-2 text-xl rounded-md cursor-pointer text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          {menuItem.Icon}
          <span>{menuItem.label}</span>
        </div>
      ))}
    </nav>
  );
}

const AdminSidebar = ({ open, setOpen }) => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64">
          <div className="flex flex-col h-full">
            <SheetHeader className="border-b">
              <SheetTitle className="flex gap-2 mt-6 mb-6">
                {" "}
                <ChartArea size={30} />
                <span className="text-2xl font-extrabold">Admin Panel</span>
              </SheetTitle>
            </SheetHeader>
            <MenuItems setOpen={setOpen} />
          </div>
        </SheetContent>
      </Sheet>
      <aside className="flex-col hidden w-64 p-6 border-r bg-background lg:flex">
        <div
          onClick={() => navigate("/admin/dashboard")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <ChartArea size={30} />
          <h1 className="text-2xl font-extrabold">Admin Panel</h1>
        </div>
        <MenuItems />
      </aside>
    </Fragment>
  );
};

export default AdminSidebar;
