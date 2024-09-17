'use client'

import { Pagination } from '@nextui-org/react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

interface TableBottomContentProps {
  totalItems: number
  rowsPerPage: number
}

export default function TableBottomContent({
  totalItems,
  rowsPerPage
}: Readonly<TableBottomContentProps>) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const [page, setPage] = useState(Number(searchParams.get('page') ?? 1))

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', newPage.toString())
    router.push(`${pathname}?${params.toString()}`)
    setPage(newPage)
  }

  useEffect(() => {
    const newPage = Number(searchParams.get('page') ?? 1)
    if (newPage !== page) {
      setPage(newPage)
    }
  }, [searchParams, page])

  return (
    <div className="py-2 px-2 flex justify-between items-center">
      <span className="text-small text-default-400">
        Total {totalItems} items
      </span>
      <Pagination
        isCompact
        showControls
        showShadow
        color="primary"
        page={page}
        total={Math.ceil(totalItems / rowsPerPage)}
        onChange={handlePageChange}
      />
    </div>
  )
}
