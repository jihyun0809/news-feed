import supabase from "../utils/supabase";

export const fetchComments = async (feedId: string) => {
  const { count, error } = await supabase
    .from("comments")
    .select("*", { count: "exact", head: true })
    .eq("feed_id", feedId);
  if (error)
    throw new Error(`Failed to fetch comments count: ${error.message}`);
  return count;
};
