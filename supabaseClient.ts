import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = "https://inmsmdoahpmawxwpufsx.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlubXNtZG9haHBtYXd4d3B1ZnN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1NTUxNDAsImV4cCI6MjA2MjEzMTE0MH0.3Y7NTBROH3wlWfkQRWz4Ul5uUXyFSjh8i1Z20zALY88"

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
