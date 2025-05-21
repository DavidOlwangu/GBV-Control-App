import { AppState } from 'react-native'
import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kzrsugcrawvyasggctiw.supabase.co';
const supabaseAnonKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6cnN1Z2NyYXd2eWFzZ2djdGl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxMzAzNTgsImV4cCI6MjA2MjcwNjM1OH0.175VxnS6L6HFCbYtCrttDcNNMreMBBvMr778o3mIfto';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})