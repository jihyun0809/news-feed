import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>Header</h1>
      {/* 여기에 다른 페이지들이 들어옵니다. */}
      <Outlet />
      <h1>Footer</h1>
    </div>
  );
};
export default Layout;
