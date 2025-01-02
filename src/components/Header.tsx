import React, { useState } from "react";

const Header = () => {
  const [user, setUser] = useState(null); // 유저 상태 관리

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      setUser(null); // 유저 상태 초기화
      alert("로그아웃되었습니다.");
    } else {
      console.error("로그아웃 실패:", error.message);
    }
  };

  return user ? (
    <header className="flex justify-between items-center p-4 border-b border-gray-200 bg-white mb-10">
      <div>
        <a href="/" data-discover="true">
          <img src="/logo.svg" alt="logo" />
        </a>
      </div>
      <div className="flex items-center gap-2">
        <a
          href="/mypage"
          data-discover="true"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          {/* {user.nickname || "마이페이지"} */}
        </a>
        <button
          onClick={handleLogout}
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          로그아웃
        </button>
      </div>
    </header>
  ) : (
    <header className="flex justify-between items-center p-4 border-b border-gray-200 bg-white mb-10">
      <div>
        <a href="/" data-discover="true">
          <img src="/logo.svg" alt="logo" />
        </a>
      </div>
      <div className="flex items-center gap-2">
        <a
          href="/login"
          data-discover="true"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          로그인
        </a>
        <a
          href="/signup"
          data-discover="true"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          회원가입
        </a>
      </div>
    </header>
  );
};

export default Header;
