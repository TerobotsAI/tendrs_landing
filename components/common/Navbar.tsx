'use client'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button'
import useScrollPosition from '@/hooks/useScrollPosition'
import { cn } from '@/lib/utils'

const navigation = [
  {
    name: 'Benefits',
    href: '#benefits'
  },
  {
    name: 'Use Cases',
    href: '#use-cases'
  },
  { name: 'FAQs', href: '#faqs' }
]

export default function Navbar() {
  const scrollPos = useScrollPosition()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header
      className={cn(
        'sticky top-0 z-50 bg-accent text-white transition-all duration-300 ease-in-out',
        scrollPos > 100 && 'bg-white shadow-lg text-slate-800'
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Tendrs.ai</span>
            <Image
              height={40}
              width={200}
              className="h-8 w-auto"
              src={
                scrollPos > 100
                  ? '/brand/new-logo.svg'
                  : '/brand/new-logo-white.svg'
              }
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            size="sm"
            variant={scrollPos > 100 ? 'default' : 'secondary'}
            className={cn(
              scrollPos > 100 ? '' : 'text-accent bg-white hover:bg-accent-500 hover:text-white'
            )}
          >
            <Link href="https://app.tendrs.ai">Get Started</Link>
          </Button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                height={32}
                width={150}
                className="h-8 w-auto"
                src="/brand/new-logo.svg"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <Button
                >
                  <Link href="https://app.tendrs.ai">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
