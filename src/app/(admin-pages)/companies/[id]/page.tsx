import { createClient } from '@/lib/supabase/server'

export default async function Page() {
  const supabase = await createClient()
  const { data: company } = await supabase
    .from('company')
    .select()
    .eq(`company_id`, 1)

  return <pre>{JSON.stringify(company, null, 2)}</pre>
}
