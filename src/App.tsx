import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/feeds/:id" element={"/상세페이지"} />
          <Route path="/feeds/create" element={"/추가페이지"} />
          <Route path="/mypage" element={"/마이 페이지"} />
        </Route>
        <Route path="/signup" element={"/회원가입 페이지"} />
        <Route path="/login" element={"/로그인 페이지"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
