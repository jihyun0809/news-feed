import React from "react";
const Comment = () => {
  return (
    <>
      <div className="flex flex-col  p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800">1 Comments</h3>
        <div className="flex items-start gap-4 mt-4">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
            <span className="text-black">A</span>
          </div>
          <div className="flex flex-1 flex-col gap-y-1.5">
            <div className="text-gray-800 font-semibold">닉네임</div>
            <div className="text-gray-600 mt-1 pb-3">내용</div>
          </div>

          <div className="flex items-end gap-2">
            <button className="bg-yellow-300 opacity-90 text-black px-4 py-2 rounded-lg">
              수정
            </button>
            <button className="bg-red-500 opacity-90 text-white px-4 py-2 rounded-lg">
              삭제
            </button>
          </div>
        </div>
        <hr className="m-0 border-t border-gray-200" />
      </div>
    </>
  );
};

export default Comment;
