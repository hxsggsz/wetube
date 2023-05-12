import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = process.env.PROJECT_URL
const PUBLIC_KEY = process.env.PUBLIC_KEY
export const supabase = createClient(PROJECT_URL!, PUBLIC_KEY!);

export default function videoService() {
  return {
    getAllVideos() {
      return supabase.from("video").select("*");
    },
    setNewVIdeo() {
      return supabase.from("video")
    }
  };
}
