import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://sdrsduyvpgydxlxzswzl.supabase.co";
const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkcnNkdXl2cGd5ZHhseHpzd3psIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxOTQwNDYsImV4cCI6MTk4Mzc3MDA0Nn0.7k99uEvsLo5lFM09_v6n2Ay_aNSgE6qncexv6wyw8-U";
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
