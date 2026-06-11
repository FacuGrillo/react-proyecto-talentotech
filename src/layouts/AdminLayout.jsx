import { Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <main className="admin-main">
      <Outlet />
    </main>
  );
};
