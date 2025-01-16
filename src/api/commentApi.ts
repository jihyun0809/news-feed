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

export const fetchCommentsWithUserByFeedId = async (
  feedId: string 
) => {
  if (!feedId) throw new Error("feedId는 필수입니다");
  const { data, error } = await supabase
    .from("comments")
    .select(
      `*, 
        user:user_id (
          id,
          email,
          nickname,
          img_url
        )
      `
    )
    .eq("feed_id", feedId)
    .order("created_at", { ascending: true });
  if (error) throw error;
  return data;
};