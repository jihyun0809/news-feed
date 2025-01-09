import React from "react";
import { Link } from "react-router-dom";
import Feed from "../components/Feed";

const Detail = () => {
  return (
    <div className="flex flex-col gap-6 p-6min-h-screen">
      {/* 뒤로가기 버튼 */}
      <div className="flex justify-between items-center">
        <Link to="/" className="text-sm flex items-center gap-2">
          <span className="text-blue-900 font-bold">{`<`}</span>
          <span className="text-gray-600">뒤로가기</span>
        </Link>
        <div className="flex gap-2">
          <button className="bg-yellow-200 opacity-90 text-black px-4 py-2 rounded-lg">
            수정
          </button>
          <button className="bg-red-500 opacity-90 text-white px-4 py-2 rounded-lg">
            삭제
          </button>
        </div>
      </div>

      {/* 게시글 내용 */}
      <Feed />

      {/* 댓글 목록 */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800">1 Comments</h3>
        <div className="flex items-start gap-4 mt-4">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
            <span className="text-black">A</span>
          </div>
          <div>
            <p className="text-gray-800 font-semibold">aaaa@naver.com</p>
            <p className="text-gray-600 mt-1">asdfasdfasdf</p>
          </div>
        </div>
      </div>

      {/* 댓글 섹션 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mt-4">
          <textarea
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="댓글 작성"
          ></textarea>
          <button className="mt-2 w-full bg-green-300 text-gray-600 py-2 rounded-lg">
            작성
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
