'use client'

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from '@nextui-org/react'
import { EllipsisVertical, Eye, Pencil, Plus, Trash } from 'lucide-react'
import { useCallback } from 'react'
import TableTopContent from '@/components/table-top-content'
import TableBottomContent from '@/components/table-bottom-content'

import { parseAbsoluteToLocal } from '@internationalized/date'

import { Event } from '@/types'

const columns = [
  { name: 'ID', uid: 'event_id' },
  { name: 'NAME', uid: 'name' },
  { name: 'DESCRIPTION', uid: 'description' },
  { name: 'START DATE', uid: 'start_date' },
  { name: 'FINISH DATE', uid: 'finish_date' },
  { name: 'ACTIONS', uid: 'actions' }
]

interface EventsTableProps {
  rowsPerPage: number
  totalItems: number
  events: Event[]
}

export default function EventsTable({
  rowsPerPage,
  totalItems,
  events
}: Readonly<EventsTableProps>) {
  const renderCell = useCallback((event: Event, columnKey: React.Key) => {
    const cellValue = event[columnKey as keyof Event]

    const startDate = parseAbsoluteToLocal(event.start_date)
    const finishDate = parseAbsoluteToLocal(event.finish_date)

    switch (columnKey) {
      case 'event_id':
        return event.event_id
      case 'name':
        return event.name
      case 'description':
        return event.description
      case 'start_date':
        return (
          <div>
              {`${startDate.day}/${startDate.month}/${startDate.year}`}
          </div>
        )
      case 'finish_date':
        return (
          <div>
              {`${finishDate.day}/${finishDate.month}/${finishDate.year}`}
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
                  href={`events/${event.event_id}`}
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
              href="/events/create"
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
      <TableBody emptyContent={'No companies found'} items={events}>
        {(item) => (
          <TableRow key={item.event_id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
