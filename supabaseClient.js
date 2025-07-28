import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://awaliaqtxlwvtesxmxia.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3YWxpYXF0eGx3dnRlc3hteGlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0MDQ5MjMsImV4cCI6MjA2ODk4MDkyM30.Jqr7he0jDrn9bEHELBA8zlC6zdVnlScbhynSDAF2coI'
export const supabase = createClient(supabaseUrl, supabaseKey)