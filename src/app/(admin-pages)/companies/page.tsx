import CompaniesTable from '@/components/companies/companies-table'
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

  const supabase = await createClient()
  const { data: companies, count } = await supabase
    .from('company')
    .select('*', {
      count: 'exact'
    })
    .like('name', `%${searchTerm}%`)
    .range(from, to)

  return (
    <>
      <CompaniesTable
        companies={companies ?? []}
        rowsPerPage={ITEMS_PER_PAGE}
        totalItems={count ?? 0}
      />
    </>
  )
}
