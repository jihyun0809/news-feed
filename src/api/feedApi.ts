import supabase from "../utils/supabase";

export const fetchFeeds = async () => {
  const { data, error } = await supabase.from("feeds").select("*");
  if (error) {
    alert("에러 발생!");
  }
  return data;
};

export const getFeedById = async (id: string) => {
  const { data, error } = await supabase.from("feeds").select("*").eq("id", id);
  if (error) {
    throw new Error(error.message);
  }
  if (data.length === 0) {
    throw new Error("해당 글이 존재하지 않습니다.");
  }
  return data[0];
};
