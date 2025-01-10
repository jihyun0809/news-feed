import React from "react";
import { Link } from "react-router-dom";
import Feed from "../components/Feed";
import Comment from "../components/Comment";
import CommentForm from "../components/CommentForm";

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
          <Link
            to="/feeds/update/1"
            className="bg-yellow-300 opacity-90 text-black px-4 py-2 rounded-lg"
          >
            수정
          </Link>
          <button className="bg-red-500 opacity-90 text-white px-4 py-2 rounded-lg">
            삭제
          </button>
        </div>
      </div>

      {/* 게시글 내용 */}
      <Feed />

      {/* 댓글 목록 */}
      <div className="flex flex-col gap-0.5">
        <Comment />
        <Comment />
        <Comment />
      </div>
      {/* 댓글 섹션 */}
      <CommentForm />
    </div>
  );
};

export default Detail;
