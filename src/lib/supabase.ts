import { createClient } from '@supabase/supabase-js'

// Oeffentliche Werte (der publishable Key ist absichtlich oeffentlich und durch
// die Zugriffsregeln/Funktionen in der Datenbank geschuetzt).
export const SUPABASE_URL = 'https://aijnbmzszpzmqztbndzs.supabase.co'
export const SUPABASE_KEY = 'sb_publishable_rk0U6mxzEIoqLkO95gXeFQ_E5_ECfum'

export const cloudEnabled = !!SUPABASE_URL && !!SUPABASE_KEY

// Wir nutzen KEIN Supabase-Auth (keine E-Mail/Login), daher Session aus.
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false }
})
