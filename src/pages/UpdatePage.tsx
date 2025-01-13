import FeedForm from "../components/FeedForm";

export default function UpdatePage() {
  return (
    <FeedForm pageTitle="글 수정">
      <button className="bg-pink-300 text-gray-800 px-4 py-2 rounded-lg">
        수정
      </button>
    </FeedForm>
  );
}
