import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://sdrsduyvpgydxlxzswzl.supabase.co"
let PUBLIC_KEY
if(process.env.PUBLIC_KEY) {
  PUBLIC_KEY = process.env.PUBLIC_KEY
}

export const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

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
