// supabase.js
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const supabaseUrl = "https://ncdvjkdhczfegwxcdhhz.supabase.co";
const supabaseKey = "sb_publishable_M5ocjopAxTiGQYjeRIEBDg_8fWEi4Ww";

export const supabase = createClient(supabaseUrl, supabaseKey);
