import CompaniesTable from '@/components/companies/companies-table'
import { createClient } from '@/lib/supabase/server'

export default async function Page() {
  const supabase = createClient()
  const { data: companies, count } = await supabase
    .from('company')
    .select('*', {
      count: 'exact'
    })
    .range(0, 9)

  return (
    <>
      <CompaniesTable />
      <pre>{JSON.stringify(companies, null, 2)}</pre>
      <pre>{JSON.stringify(count, null, 2)}</pre>
    </>
  )
}
