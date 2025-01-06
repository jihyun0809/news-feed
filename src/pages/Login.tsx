import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import supabase from "../utils/supabase.ts";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (error) {
        if (error?.message === "Invalid login credentials") {
          return alert("이메일 또는 비밀번호를 확인해주세요.");
        }
        throw error;
      }

      navigate("/");
    } catch (error: unknown) {
      return alert(`로그인에 실패했습니다. ${error}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">로그인</h1>
      <form
        className="flex flex-col gap-4 w-80"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm">
            이메일
          </label>
          <input
            className="border border-gray-300 rounded-md p-2"
            id="email"
            type="email"
            placeholder="이메일을 입력해주세요."
            {...register("email", {
              required: "이메일을 입력해주세요.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "유효한 이메일 주소를 입력해주세요.",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">
              {errors.email.message as string}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm">
            비밀번호
          </label>
          <input
            id="password"
            type="password"
            className="border border-gray-300 rounded-md p-2"
            placeholder="비밀번호를 입력해주세요."
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
              minLength: {
                value: 8,
                message: "비밀번호는 최소 8자리 이상이어야 합니다.",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message as string}
            </span>
          )}
        </div>
        <button
          className="py-2 px-4 bg-red-200 text-gray-700 hover:bg-red-300 transition-colors rounded-md"
          type="submit"
        >
          로그인
        </button>
        <Link
          className="py-2 px-4 text-center bg-yellow-100 text-gray-700 rounded-md hover:bg-yellow-200 transition-colors"
          to="/signup"
        >
          회원가입하러 가기
        </Link>
      </form>
    </div>
  );
};

export default Login;
