import React from "react";

const FeedForm = () => {
  //더미더미데이터
  const posts = [
    {
      id: 1,
      title: "안녕!",
      content: "안녕안녕",
      createdAt: "2024.11.11",
      commentsCount: 4,
      votes: 2,
    },
    {
      id: 2,
      title: "안녕",
      content: "안녕",
      createdAt: "2024.11.12",
      commentsCount: 1,
      votes: 0,
    },
    {
      id: 3,
      title: "안녕?",
      content: "안녕?",
      createdAt: "2024.11.12",
      commentsCount: 0,
      votes: 1,
    },
    {
      id: 4,
      title: "안녕",
      content: "안녕안녕?",
      createdAt: "2024.12.27",
      commentsCount: 1,
      votes: 0,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex justify-between bg-white shadow-md p-6 rounded-lg"
        >
          <div className="flex flex-col items-center">
            <button className="text-green-300 text-xl font-bold">▲</button>
            <p className="text-gray-700">{post.votes}</p>
            <button className="text-gray-500 text-xl font-bold">▼</button>
          </div>
          <div className="flex-1 px-6 min-w-0 flex flex-col gap-2">
            <h2 className="text-blue-950 text-xl font-bold">{post.title}</h2>
            <p className="text-gray-600 truncate">{post.content}</p>
            <p className="text-sm text-gray-400">작성일: {post.createdAt}</p>
          </div>
          <div className="flex items-center">
            <div className="flex items-center gap-1 text-gray-500">
              <span>{post.commentsCount}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedForm;
