import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://cwrsksywjbadkxnpibia.supabase.co'
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3cnNrc3l3amJhZGt4bnBpYmlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4Nzg1NzYsImV4cCI6MjAwNjQ1NDU3Nn0.D7P2D0mU4MEs6taTe3lWH2R5qSiAUhNDUwa4M7Q-xvw" // Replace this with your actual Supabase key
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3cnNrc3l3amJhZGt4bnBpYmlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4Nzg1NzYsImV4cCI6MjAwNjQ1NDU3Nn0.D7P2D0mU4MEs6taTe3lWH2R5qSiAUhNDUwa4M7Q-xvw" // Replace this with your actual Supabase key

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;