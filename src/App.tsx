import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyPage from "./pages/MyPage";
import AuthProvider from "./providers/AuthProvider";
import Detail from "./pages/Detail";
import CreatePage from "./pages/CreatePage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/feeds/:id" element={<Detail />} />
            <Route path="/feeds/create" element={<CreatePage />} />
            <Route path="/feeds/update/:id" element={<CreatePage />} />
            <Route path="/mypage" element={<MyPage />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
