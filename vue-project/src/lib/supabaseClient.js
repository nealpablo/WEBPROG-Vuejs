import { createClient } from '@supabase/supabase-js'
 
export const supabase = createClient('https://pslfckdmcapbukgvtrat.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzbGZja2RtY2FwYnVrZ3Z0cmF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxMzY2MzYsImV4cCI6MjA1NDcxMjYzNn0.2JXHiv6qmeg-X79oS5hbX8k3ChxGsvIAoYkQTCeL1s4')