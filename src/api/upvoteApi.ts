import supabase from "../utils/supabase";

export const fetchUpvotes = async (feedId: string) => {
  const { count, error } = await supabase
    .from("upvotes")
    .select("*", { count: "exact", head: true })
    // count:"exact"=>정확한 row개수를 가져온다
    // head:true 데이터를 실제로 가져오지 않고 row수만 확인한다
    .eq("feed_id", feedId);
  if (error) throw new Error(`Failed to fetch upvotes count: ${error.message}`);
  return count;
};
