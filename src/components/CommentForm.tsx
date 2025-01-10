import React from "react";

const CommentForm = () => {
  return (
    <>
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
    </>
  );
};

export default CommentForm;
