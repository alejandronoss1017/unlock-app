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
import { Lodging } from '@/types'
import { parseAbsoluteToLocal } from '@internationalized/date'

const columns = [
  { name: 'ID', uid: 'lodging_id' },
  { name: 'NAME', uid: 'name' },
  {name: 'CITY',uid: 'city'},
  {name: 'ADDRESS',uid: 'address'},
  { name: 'CREATED AT', uid: 'created_at' },
  { name: 'ACTIONS', uid: 'actions' }
]

interface LodgingTableProps {
  rowsPerPage: number
  totalItems: number
  lodgings: Lodging[]
}

export default function LodgingsTable({
  rowsPerPage,
  totalItems,
  lodgings
}: Readonly<LodgingTableProps>) {
  const renderCell = useCallback((lodging: Lodging, columnKey: React.Key) => {
    const cellValue = lodging[columnKey as keyof Lodging]

    const createdAt = parseAbsoluteToLocal(lodging.created_at)

    switch (columnKey) {
      case 'lodging_id':
        return lodging.lodging_id
      case 'name':
        return lodging.name

      case 'city':
        return lodging.city

      case 'address':
        return lodging.address

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
                  href={`lodgings/${lodging.lodging_id}`}
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
              href="/lodging/create"
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
      <TableBody emptyContent={'No companies found'} items={lodgings}>
        {(item) => (
          <TableRow key={item.lodging_id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
