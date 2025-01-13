import FeedForm from "../components/FeedForm";

export default function CreatePage() {
  return (
    <FeedForm pageTitle="글 추가">
      <button className="bg-green-300 text-gray-800 px-4 py-2 rounded-lg">
        추가
      </button>
    </FeedForm>
  );
}
