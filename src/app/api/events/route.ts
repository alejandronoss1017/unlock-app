import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function GET() {
  const { rows } = await sql`SELECT * FROM public.event`
  return NextResponse.json(rows, {
    status: 200
  })
}
