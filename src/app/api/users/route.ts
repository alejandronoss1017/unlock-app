import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function GET() {
  const { rows } = await sql`SELECT * FROM public.user_account`
  return NextResponse.json(rows, {
    status: 200
  })
}
