import React from "react";
import { Link } from "react-router-dom";
import FeedForm from "../components/FeedForm";

const Home = () => {
  return (
    <div className="max-w-screen-lg mx-auto min-h-[cc(100vh-100px)] px-10 mb-10:">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">글 목록</h1>
        <Link
          to="/feeds/create"
          className="bg-white text-gray-900 px-4 py-2 rounded-md"
        >
          글쓰기
        </Link>
      </div>
      <div>
        <FeedForm/>
      </div>
    </div>
  );
};

export default Home;
