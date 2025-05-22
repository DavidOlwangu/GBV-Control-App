import { AppState } from 'react-native'
import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://luqxjsesdwxcxtnfmgpw.supabase.co'
const supabaseAnonKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1cXhqc2VzZHd4Y3h0bmZtZ3B3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0OTQ3MzgsImV4cCI6MjA2MzA3MDczOH0.SK1nn5SIOiK1Kj1qvqYOCYEFUn7R-hGqARZ3ctNBIFo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})