import { Fragment, useState } from 'react'
import { Transition } from '@headlessui/react'
import Hero from './Hero'
import Button from './Base/Button'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  // Menu items array to populate both desktop and mobile links
  const menuItems = [
    {
      name: 'Home',
      url: '#',
    },
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'How it works',
      url: '#how-it-works',
    },
    {
      name: 'Benefits',
      url: '#benefits',
    },

    {
      name: 'FAQs',
      url: '#faqs',
    },

  ]

  return (
    <>
      {/* Main Header Section: Simple with Actions Alternate */}
      <div className='sticky top-0 z-10'>
        <div className='text-gray-100 bg-slate-950/60 backdrop-blur-lg after:w-full after:absolute after:bottom-0 after:h-px after:bg-radial-border'>
          {/* Main Header */}
          <header
            id='page-header'
            className='relative flex flex-none items-center py-8'>
            {/* Main Header Content */}
            <div className='flex text-center items-center justify-between container xl:max-w-7xl mx-auto px-4 lg:px-8'>
              {/* Left Section */}
              <div className='flex items-center gap-6'>
                {/* Logo */}
                <Link
                  href='#'
                  className='group inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300'>
                  <Image
                    src='/Logo.svg'
                    height={40}
                    width={200}
                    className='h-10'
                    alt='Tendrs Logo'
                  />
                </Link>
              </div>
              <nav className='hidden lg:block space-x-3 md:space-x-6 bg-white/5 px-6 py-2 rounded-full border border-slate-700'>
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.url}
                    className='text-sm font-semibold text-gray-900 hover:text-purple-600 dark:text-gray-100 dark:hover:text-purple-400'>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </nav>
              {/* Right Section */}
              <div className='flex items-center'>
                {/* Actions */}
                <div className='flex items-center justify-center gap-2'>
                  <Button
                    size='sm'
                    title='Join the waitlist'
                    link='#waitlist-form'
                  />
                </div>
                {/* END Actions */}
                {/* Open Mobile Navigation */}
                <div className='lg:hidden ml-3'>
                  <button
                    onClick={() => setMobileNavOpen(true)}
                    type='button'
                    className='inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700'
                    aria-controls='tkMobileNav'>
                    <svg
                      className='hi-mini hi-bars-3 inline-block w-5 h-5'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'>
                      <path
                        fillRule='evenodd'
                        d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                </div>
                {/* END Open Mobile Navigation */}
              </div>
              {/* END Right Section */}
            </div>
            {/* END Main Header Content */}
            {/* Mobile Navigation */}
            <Transition
              as={Fragment}
              show={mobileNavOpen}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 scale-50'
              enterTo='opacity-100 scale-100'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-50'>
              <nav
                id='tkMobileNav'
                className='absolute inset-0 h-max m-4 rounded-lg z-50 overflow-auto origin-top-right bg-white/95 shadow-lg sm:container sm:mx-auto lg:hidden dark:bg-slate-950'
                tabIndex={-1}
                aria-labelledby='tkMobileNavLabel'
                aria-modal='true'
                role='dialog'>
                <div className='flex items-center justify-between py-6 p-6'>
                  {/* Logo */}
                  <a
                    id='tkMobileNavLabel'
                    href='#'
                    className='group inline-flex items-center justify-start space-x-2 font-bold text-lg tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300'>
                    <Image
                      src='/Logo.svg'
                      height={40}
                      width={150}
                      className='h-10'
                      alt='Tendrs Logo'
                    />
                  </a>
                  {/* END Logo */}
                  {/* Close Mobile Navigation */}
                  <button
                    onClick={() => setMobileNavOpen(false)}
                    type='button'
                    className='inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200  text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700'>
                    <svg
                      className='hi-mini hi-x-mark inline-block w-5 h-5 -mx-0.5'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'>
                      <path d='M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z' />
                    </svg>
                  </button>
                  {/* END Close Mobile Navigation */}
                </div>
                <div className='h-px bg-gray-200/75 dark:bg-gray-700/75' />
                <nav className='flex flex-col gap-2 px-6 py-5'>
                  {menuItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      className='py-1 text-sm font-semibold text-gray-900 hover:text-purple-600 dark:text-gray-100 dark:hover:text-purple-400'>
                      <span>{item.name}</span>
                    </a>
                  ))}
                </nav>
                <div className='h-px bg-gray-200/75 dark:bg-gray-700/75' />
                <div className='flex flex-col gap-2 p-6 sm:flex-row'>
                  <Button
                    size='sm'
                    link='#waitlist-form'
                    title='Join the waitlist'
                    onClick={() => setMobileNavOpen(false)}
                  />
                </div>
              </nav>
            </Transition>
            {/* END Mobile Navigation */}
            {/* Mobile Navigation Backdrop */}
            <Transition
              as={Fragment}
              show={mobileNavOpen}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <div
                onClick={() => setMobileNavOpen(false)}
                className='absolute inset-0 h-screen z-40 bg-gray-900 bg-opacity-20 backdrop-blur-sm will-change-auto dark:bg-opacity-80 lg:hidden'
              />
            </Transition>
            {/* END Mobile Navigation Backdrop */}
          </header>
          {/* END Main Header */}
        </div>
      </div>
      {/* END Main Header Section: Simple with Actions Alternate */}
    </>
  )
}
