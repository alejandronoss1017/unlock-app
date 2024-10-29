import { createClient } from '@/lib/supabase/server'

export default async function Page() {
  const supabase = await createClient()
  const { data: event } = await supabase
    .from('event')
    .select()
    .eq(`event_id`, 1)

  return <pre>{JSON.stringify(event, null, 2)}</pre>
}
