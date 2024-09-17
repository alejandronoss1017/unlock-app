'use client'

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Link
} from '@nextui-org/react'

import TableBottomContent from '@/components/table-bottom-content'
import TableTopContent from '@/components/table-top-content'

import { EllipsisVertical, Eye, Pencil, Plus, Trash } from 'lucide-react'
import { useCallback } from 'react'
import { Company } from '@/types'
import { parseAbsoluteToLocal } from '@internationalized/date'

const columns = [
  { name: 'ID', uid: 'company_id' },
  { name: 'NAME', uid: 'name' },
  { name: 'CREATED AT', uid: 'created_at' },
  { name: 'ACTIONS', uid: 'actions' }
]

interface CompaniesTableProps {
  rowsPerPage: number
  totalItems: number
  companies: Company[]
}

export default function CompaniesTable({
  rowsPerPage,
  totalItems,
  companies
}: Readonly<CompaniesTableProps>) {
  const renderCell = useCallback((company: Company, columnKey: React.Key) => {
    const cellValue = company[columnKey as keyof Company]

    const createdAt = parseAbsoluteToLocal(company.created_at)


    switch (columnKey) {
      case 'company_id':
        return company.company_id
      case 'name':
        return company.name
      case 'created_at':
        return (
          <div>
              {createdAt.day}/{createdAt.month}/{createdAt.year}
          </div>
        )
      case 'actions':
        return (
          <div className="relative flex justify-center items-center gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <EllipsisVertical size={20} className="text-default-300" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem
                  startContent={<Eye size={20} className="text-primary" />}
                  href={`companies/${company.company_id}`}
                >
                  View
                </DropdownItem>
                <DropdownItem
                  startContent={<Pencil size={20} className="text-warning" />}
                >
                  Edit
                </DropdownItem>
                <DropdownItem
                  startContent={<Trash size={20} className="text-danger" />}
                >
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        )
      default:
        return cellValue
    }
  }, [])

  return (
    <Table
      aria-label="Example table with custom cells, pagination and sorting"
      isHeaderSticky
      topContent={
        <TableTopContent
          addButton={
            <Button
              as={Link}
              href="/companies/create"
              color="primary"
              endContent={<Plus size={16} />}
            >
              Add New
            </Button>
          }
        />
      }
      bottomContent={
        <TableBottomContent rowsPerPage={rowsPerPage} totalItems={totalItems} />
      }
      bottomContentPlacement="outside"
      classNames={{
        wrapper: 'max-h-[382px]'
      }}
      selectionMode="single"
      topContentPlacement="outside"
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === 'actions' ? 'center' : 'start'}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={'No companies found'} items={companies}>
        {(item) => (
          <TableRow key={item.company_id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
