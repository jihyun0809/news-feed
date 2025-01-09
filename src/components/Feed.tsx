import React from "react";
import { Link } from "react-router-dom";

const Feed = () => {
  return (
    <div className="flex flex-col gap-4">
      <Link
        to="/feeds/1"
        className="flex justify-between bg-white shadow-md p-6 rounded-lg"
      >
        <div className="flex flex-col items-center">
          <button className="text-green-300 text-xl font-bold">▲</button>
          <div className="text-gray-700">1</div>
          <button className="text-gray-500 text-xl font-bold">▼</button>
        </div>
        <div className="flex-1 px-6 min-w-0 flex flex-col gap-2">
          <h2 className="text-blue-950 text-xl font-bold">제목</h2>
          <p className="text-gray-600 truncate">내용</p>
          <p className="text-right text-sm text-gray-400">작성일:2025.01.09</p>
        </div>
        <div className="flex items-center">
          <div className="flex items-center gap-1 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 4.5H3.75a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h4.5l3 3v-3h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25z"
              />
            </svg>
            <span>1</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Feed;
