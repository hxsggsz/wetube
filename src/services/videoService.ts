import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const PUBLIC_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

export const supabase = createClient(PROJECT_URL!, PUBLIC_KEY!)

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
