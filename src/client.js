import { createClient } from '@supabase/supabase-js'

const URL = 'https://udjtaydkwmqblyjwzash.supabase.co'
const API_KEY = 'sb_publishable_W5asaxS0LjJIaHglJTauBw_V88z78EZ'

export const supabase = createClient(URL, API_KEY)