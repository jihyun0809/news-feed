import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../utils/supabase";

const Signup = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    nickname: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 이메일 형식 검증
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(values.email)) {
      return alert("올바른 이메일 형식이 아닙니다.");
    }

    // 비밀번호 검증
    if (values.password.length < 8) {
      return alert("비밀번호는 8자 이상이어야 합니다.");
    }
    if (values.password !== values.passwordConfirm) {
      return alert("비밀번호가 일치하지 않습니다.");
    }

    try {
      // 회원가입 시도
      const { error: signUpError, data } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
      });

      if (signUpError) {
        if (signUpError.message === "User already registered") {
          return alert("이미 가입된 이메일입니다.");
        }
        throw signUpError;
      }

      // users 테이블에 데이터 삽입
      const userId = data.user?.id;
      if (!userId) {
        throw new Error(
          "회원가입에 실패했습니다. 사용자 ID를 가져올 수 없습니다."
        );
      }

      const { error: userInsertError } = await supabase.from("users").insert({
        id: userId,
        email: values.email,
        nickname: values.nickname,
      });

      if (userInsertError) {
        console.error("User Insert Error:", userInsertError);
        return alert(`회원 정보 저장 실패: ${userInsertError.message}`);
      }

      navigate("/");
    } catch (error) {
      console.error("Unexpected Error:", error);
      if (error instanceof Error) {
        alert(`회원가입에 실패했습니다: ${error.message}`);
      } else {
        alert("알 수 없는 오류가 발생했습니다.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">회원가입</h1>
      <form className="flex flex-col gap-4 w-80" onSubmit={onSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm">
            이메일
          </label>
          <input
            className="border border-gray-300 rounded-md p-2"
            id="email"
            name="email"
            type="email"
            placeholder="이메일을 입력해주세요."
            value={values.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="nickname" className="text-sm">
            닉네임
          </label>
          <input
            className="border border-gray-300 rounded-md p-2"
            id="nickname"
            name="nickname"
            type="text"
            placeholder="닉네임을 입력해주세요."
            value={values.nickname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm">
            비밀번호
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="border border-gray-300 rounded-md p-2"
            placeholder="비밀번호를 입력해주세요."
            value={values.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="passwordConfirm" className="text-sm">
            비밀번호 확인
          </label>
          <input
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            className="border border-gray-300 rounded-md p-2"
            placeholder="비밀번호를 한 번 더 입력해주세요."
            value={values.passwordConfirm}
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="py-2 px-4 bg-red-200  text-gray-700  hover:bg-red-300 transition-colors rounded-md"
          type="submit"
        >
          회원가입
        </button>
        <Link
          className="py-2 px-4 text-center bg-yellow-100 text-gray-700 rounded-md hover:bg-yellow-200 transition-colors"
          to="/login"
        >
          로그인하러 가기
        </Link>
      </form>
    </div>
  );
};

export default Signup;
