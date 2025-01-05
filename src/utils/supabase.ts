import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zslcwjcrbtmcextoxtwu.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
//기존에 있던걸 바꾸기!
// /VITE_SUPABASE_KEY를 env파일로
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
