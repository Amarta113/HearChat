'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from '@clerk/nextjs'
import { BookHeadphones } from 'lucide-react'

const navItems = [
  { label: 'Library', href: '/' },
  { label: 'Add New', href: '/books/new' },
]

const Navbar = () => {
  const pathName = usePathname()
  const {user} = useUser()

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[var(--bg-primary)]">
      <div className="wrapper navbar-height py-4 flex justify-between items-center mx-8">
        {/* Logo */}
        <Link href="/" className="flex gap-2 items-center">
          <BookHeadphones className="h-7 w-7" strokeWidth={2} />
          <span className="logo-text">Bookified</span>
        </Link>
    
        {/* Nav links + auth controls grouped on the right */}
        <nav className="flex items-center gap-6 sm:gap-8">
          {navItems.map(({ label, href }) => {
            const isActive =
              pathName === href || (href !== '/' && pathName.startsWith(href))

            return (
              <Link
                href={href}
                key={label}
                className={cn(
                  'nav-link-base',
                  isActive ? 'nav-link-active' : 'text-black hover:opacity-70'
                )}
              >
                {label}
              </Link>
            )
          })}

          <Show when="signed-out">
            <div className="flex items-center gap-3">
              <SignInButton mode="modal">
                <div className='nav-user-link'>
                    <UserButton />
                    {user?.firstName && (
                        <Link href="/subscriptions" className='nav-user-name'>{user.firstName}</Link>
                    )}
                </div>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="bg-[#EAA0A2] hover:bg-purple-800 text-white rounded-full font-medium text-sm sm:text-base h-10 px-4 sm:px-5 cursor-pointer transition-colors">
                  Sign Up
                </button>
              </SignUpButton>
            </div>
          </Show>

          <Show when="signed-in">
            <UserButton />
          </Show>
        </nav>
      </div>
    </header>
  )
}

export default Navbar