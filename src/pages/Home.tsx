import { Link } from "react-router-dom";
import Feed from "../components/Feed";
import { useQuery } from "@tanstack/react-query";
import { fetchFeeds } from "../api/feedApi";

const Home = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["feeds"],
    queryFn: fetchFeeds,
  });


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>에러가 발생했습니다: {error.message}</div>;
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
      <div className="flex flex-col gap-4">
        {data && data.map((feed) => <Feed key={feed.id} feed={feed} />)}
      </div>
    </div>
  );
};

export default Home;
