import { createClient } from '@/lib/supabase/server'

export default async function Page() {
  const supabase = createClient()
  const { data: lodging } = await supabase
    .from('lodging')
    .select()
    .eq(`lodging_id`, 1)

  return <pre>{JSON.stringify(lodging, null, 2)}</pre>
}
