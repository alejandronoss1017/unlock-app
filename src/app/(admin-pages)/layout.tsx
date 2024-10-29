'use client'

import ThemeToggle from '@/components/theme-toggle'
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from '@nextui-org/react'
import { LogOut, Unlock, User } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function AdminLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const pathname = usePathname()

  const navItems = [
    { name: 'Companies', href: '/companies' },
    { name: 'Events', href: '/events' },
    { name: 'Lodgings', href: '/lodgings' }
  ]

  return (
    <>
      <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen} isBordered>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Unlock size={24} />
            <p className=" pl-4 font-bold text-inherit">Unlock</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {navItems.map((item) => (
            <NavbarItem
              key={item.name}
              isActive={pathname.startsWith(item.href)}
            >
              <Link
                color={
                  pathname.startsWith(item.href) ? 'primary' : 'foreground'
                }
                href={item.href}
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <ThemeToggle />
          </NavbarItem>
          
          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly variant="light" aria-label="User menu">
                  <User size={24} />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="User actions">
                <DropdownItem
                  key="logout"
                  color="danger"
                  startContent={<LogOut size={18} />}
                  href="/sign-up"
                >
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
          
        </NavbarContent>
        <NavbarMenu>
          {navItems.map((item) => (
            <NavbarMenuItem key={`${item.name}`}>
              <Link
                color={
                  pathname.startsWith(item.href) ? 'primary' : 'foreground'
                }
                className="w-full"
                href={item.href}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <main className="h-full p-8">{children}</main>
    </>
  )
}