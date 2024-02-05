import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = 'https://rafohykiwizvpltczana.supabase.co';
const supabaseKey =
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhZm9oeWtpd2l6dnBsdGN6YW5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2NjA4MTIsImV4cCI6MjAxOTIzNjgxMn0.Gk7ytcfPAVYmduu0pJPm2JE-87RsJHDRxbRuWEuXqe8';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
