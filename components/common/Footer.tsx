import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-100 border border-gray-300">
        <div className="container xl:max-w-7xl mx-auto px-4 py-6 lg:px-8 ">
          <div className="flex flex-col md:flex-row-reverse md:justify-between space-y-6 md:space-y-0 text-center md:text-left text-sm">
            <nav className="space-x-2 sm:space-x-4">
              {/* <Link
                href="#"
                className="font-medium text-gray-500 hover:text-gray-600 transition"
              >
                Share Now
              </Link>
              <span>|</span> */}
              <Link
                href="#"
                className="font-medium text-gray-500 hover:text-gray-600 transition"
              >
                Terms of Service
              </Link>
              <span>|</span>
              <Link
                href="#"
                className="font-medium text-gray-500 hover:text-gray-600 transition"
              >
                Privacy Policy
              </Link>
            </nav>
            <div className="text-gray-400">
              ©
              <span className="ml-1 font-medium">
                All Rights Reserved. | Terobots Enterprise AI Pvt. Ltd.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
