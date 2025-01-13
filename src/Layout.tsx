import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const Layout = () => {
  return (
    <div>
      {/* 여기에 다른 페이지들이 들어옵니다. */}
      <Header />
      <div className="max-w-screen-lg mx-auto px-10 mb-10">
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
