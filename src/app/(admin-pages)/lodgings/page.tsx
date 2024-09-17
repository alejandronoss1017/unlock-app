import LodgingsTable from '@/components/lodgings/lodgings-table'
import { createClient } from '@/lib/supabase/server'

const ITEMS_PER_PAGE = 5

export default async function Page({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const page = Number(searchParams?.page ?? 1) - 1
  const searchTerm = searchParams?.searchTerm ?? ''

  const from = page * ITEMS_PER_PAGE
  const to = from + ITEMS_PER_PAGE - 1

  const supabase = createClient()
  const { data: lodgings, count } = await supabase
    .from('lodging')
    .select('*', {
      count: 'exact'
    })
    .like('name', `%${searchTerm}%`)
    .range(from, to)

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
      <LodgingsTable
        lodgings={lodgings ?? []}
        totalItems={count ?? 0}
        rowsPerPage={ITEMS_PER_PAGE}
      />
    </>
  )
}
