'use client'

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from '@nextui-org/react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, systemTheme } = useTheme()
  const [selectedKeys, setSelectedKeys] = useState(new Set<string>(['system']))

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button isIconOnly variant="light">
            {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Theme actions"
          onAction={(key) => {
            if (key === 'dark') {
              setTheme('dark')
            } else if (key === 'light') {
              setTheme('light')
            } else if (key === 'system') {
              setTheme(systemTheme ?? 'dark')
            }
          }}
          selectionMode="single"
          disallowEmptySelection
          selectedKeys={selectedKeys}
          onSelectionChange={(keys) => {
            setSelectedKeys(keys as Set<string>)
          }}
          defaultSelectedKeys={selectedKeys}
        >
          <DropdownItem key="dark">Dark</DropdownItem>
          <DropdownItem key="light">Light</DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  )
}
