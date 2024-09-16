import { createClient } from '@/lib/supabase/server'

export default async function Page() {
  const supabase = createClient()
  const { data: events } = await supabase.from('event').select()
  return <pre>{JSON.stringify(events, null, 2)}</pre>
}
