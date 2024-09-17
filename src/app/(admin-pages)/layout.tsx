'use client'

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from '@nextui-org/react'
import { Unlock } from 'lucide-react'
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
      <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
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

        {/* End content of the navbar */}
        {/* <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent> */}
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
      {children}
    </>
  )
}
