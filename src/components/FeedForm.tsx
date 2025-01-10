import React from "react";

const FeedForm = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">제목</h1>
      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-lg font-bold text-gray-800">
            제목
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="제목"
            className="p-3 rounded-lg border border-gray-300"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="content" className="text-lg font-bold text-gray-800">
            내용
          </label>
          <textarea
            id="content"
            name="content"
            placeholder="내용"
            className="p-3 rounded-lg border border-gray-300 h-[400px] resize-none"
          />
        </div>
        <button className="flex flex-col items-center bg-green-200 opacity-80 p-3 rounded-md">
          저장
        </button>
      </form>
    </div>
  );
};

export default FeedForm;
