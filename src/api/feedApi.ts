import supabase from "../utils/supabase";

export const fetchFeeds = async () => {
  const { data, error } = await supabase.from("feeds").select("*");
  if (error) {
    alert("에러 발생!");
  }
  return data;
};
