import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { fetchComments } from "../api/commentApi";
import { fetchUpvotes } from "../api/upvoteApi";

interface FeedProps {
  id: string;
  title: string;
  content: string;
  created_at: string;
  user_id: string;
}
const Feed = ({ feed }: { feed: FeedProps }) => {
  const {
    data: commentsCount,
    isLoading: commentsCountLoading,
    error: commentsCountError,
  } = useQuery({
    queryKey: ["feeds", feed.id, "comments", "count"],
    queryFn: () => fetchComments(feed.id),
    enabled: !!feed.id,
  });

  const {
    data: upvotesCount,
    isLoading: upvotesCountLoading,
    error: upvotesCountError,
  } = useQuery({
    queryKey: ["feeds", feed.id, "upvotes", "count"],
    queryFn: () => fetchUpvotes(feed.id),
    enabled: !!feed.id,
  });
  if (commentsCountLoading) return <div>Loading...</div>;
  if (commentsCountError)
    return <div>에러가 발생했습니다: {commentsCountError.message}</div>;

  if (upvotesCountLoading) return <div>Loading...</div>;
  if (upvotesCountError)
    return <div>에러가 발생했습니다: {upvotesCountError.message}</div>;

  return (
    <div className="flex flex-col gap-4">
      <Link
        to="/feeds/1"
        className="flex justify-between bg-white shadow-md p-6 rounded-lg"
      >
        <div className="flex flex-col items-center">
          <button className="text-green-300 text-xl font-bold">▲</button>
          <div className="text-gray-700">{upvotesCount}</div>
          <button className="text-gray-500 text-xl font-bold">▼</button>
        </div>
        <div className="flex-1 px-6 min-w-0 flex flex-col gap-2">
          <h2 className="text-blue-950 text-xl font-bold">{feed.title}</h2>
          <p className="text-gray-600 truncate">{feed.content}</p>
          <p className="text-right text-sm text-gray-400">
            {new Date(feed.created_at).toLocaleDateString()}
          </p>
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
            <span>{commentsCount}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Feed;
