'use client'

import {  Input } from '@nextui-org/react'
import {  Search } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { useDebounceCallback } from 'usehooks-ts'

interface TableTopContentProps {
  addButton: Readonly<React.ReactNode>
}

export default function TableTopContent({
  addButton
}: Readonly<TableTopContentProps>) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get('searchTerm') ?? ''
  )

  const handleSearch = (value: string) => {
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set('searchTerm', value)
    } else {
      params.delete('searchTerm')
    }

    params.delete('page')
    router.push(`${pathname}?${params.toString()}`)
  }

  const debounce = useDebounceCallback(handleSearch, 300)

  const onSearchChange = (value: string) => {
    if (value) {
      setSearchTerm(value)
      debounce(value)
    } else {
      setSearchTerm('')
      debounce('')
    }
  }

  const onClear = () => {
    setSearchTerm('')
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between gap-3 items-end">
        <Input
          isClearable
          variant="bordered"
          className="w-full sm:max-w-[44%]"
          placeholder="Search by name..."
          startContent={<Search size={16} />}
          value={searchTerm}
          onClear={onClear}
          onValueChange={onSearchChange}
        />
        <div className="flex gap-3">{addButton}</div>
      </div>
    </div>
  )
}
