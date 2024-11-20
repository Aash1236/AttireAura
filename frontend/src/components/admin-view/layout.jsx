import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./sidebar";
import AdminHeder from "./header";

const AdminLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="flex w-full min-h-screen">
      {/* Admin sidebar */}
      <AdminSidebar open={openSidebar} setOpen={setOpenSidebar} />
      <div className="flex flex-col flex-1">
        {/* admin header */}
        <AdminHeder setOpen={setOpenSidebar} />
        <main className="flex flex-1 p-4 bg-muted/40 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
