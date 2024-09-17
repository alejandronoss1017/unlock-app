import { createClient } from '@/lib/supabase/server'

export default async function Page() {
  const supabase = createClient()
  const { data: lodgings } = await supabase.from('lodging').select()

  //   const channels = supabase
  //     .channel('custom-insert-channel')
  //     .on(
  //       'postgres_changes',
  //       { event: 'INSERT', schema: 'public', table: 'lodging_entry_exit' },
  //       (payload) => {
  //         console.log('Change received!', payload)
  //       }
  //     )
  //     .subscribe()

  return (
    <>
      <pre>{JSON.stringify(lodgings, null, 2)}</pre>
    </>
  )
}
