import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    nickname: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailReg.test(formData.email)) {
      alert("이메일 형식이 잘못되었습니다.");
      return;
    }
    if (formData.nickname === "") {
      alert("닉네임을 입력해 주세요!");
      return;
    }
    if (formData.password.length < 8) {
      alert("비밀번호를 8자 이상 입력해주세요!");
      return;
    }
    if (formData.password !== formData.passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다!");
      return;
    }
    const { data, error } = await supabase.auth.signUp({
      email,
      nickname,
    });
    console.log("signup: ", { data, error }); // data에 뭐 들어있는지 확인하기
    setUser(data.user);

    alert("회원가입이 완료되었습니다!");
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">회원가입</h1>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nickname">닉네임</label>
          <input
            className="border border-gray-300 rounded-md p-2"
            id="nickname"
            type="text"
            value={formData.nickname}
            onChange={handleInputChange}
            placeholder="닉네임을 입력해주세요"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">이메일</label>
          <input
            className="border border-gray-300 rounded-md p-2"
            id="email"
            type="text"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="이메일을 입력해주세요"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">비밀번호</label>
          <input
            className="border border-gray-300 rounded-md p-2"
            id="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="비밀번호를 입력해주세요"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="passwordConfirm">비밀번호 확인</label>
          <input
            className="border border-gray-300 rounded-md p-2"
            id="passwordConfirm"
            type="password"
            value={formData.passwordConfirm}
            onChange={handleInputChange}
            placeholder="비밀번호를 다시 입력해주세요"
          />
        </div>
        <button
          type="submit"
          className="bg-pink-300 text-white rounded-md p-2 mt-4"
        >
          회원가입
        </button>
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="bg-pink-300  text-white rounded-md p-2 mt-2"
        >
          로그인하러가기
        </button>
      </form>
    </div>
  );
};

export default Signup;
