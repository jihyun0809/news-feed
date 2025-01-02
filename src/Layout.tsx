import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const Layout = () => {
  return (
    <div>
      {/* 여기에 다른 페이지들이 들어옵니다. */}
      <Header />
      <Outlet />
      <h1>Footer</h1>
    </div>
  );
};
export default Layout;
