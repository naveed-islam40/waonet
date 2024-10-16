import { useState } from 'react'
import {Link} from 'react-router-dom'
import NavbarTop from "./NavbarTop"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
      <NavbarTop />
      <nav className="bg-gradient-to-br from-[#33376a] to-[#1b052e] border-b text-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[80px]">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <img className="h-[200px] w-[202px]" src="/waoologo.png" alt="Waonet Logo" />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="bg-[#666ED37D] px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#666ED37D]">About Us</Link>
                <Link href="/services" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#666ED37D]">Services</Link>
                <Link href="/portfolio" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#666ED37D]">Portfolio</Link>
                <Link href="/blog" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#666ED37D]">Blog</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Link href="/free-consultation" className="px-4 py-2 rounded-md text-sm font-medium mr-2 border-2">Free Consultation</Link>
            <Link href="/contact" className="bg-[#6366f1] px-4 py-2 rounded-md text-sm font-medium shadow-md shadow-[#666ED39E]">Contact Now</Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#312e81] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="bg-[#312e81] block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#312e81]">About Us</Link>
            <Link href="/services" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#312e81]">Services</Link>
            <Link href="/portfolio" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#312e81]">Portfolio</Link>
            <Link href="/blog" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#312e81]">Blog</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-[#312e81]">
            <div className="px-2 space-y-1">
              <Link href="/free-consultation" className="block px-3 py-2 rounded-md text-base font-medium bg-[#312e81]">Free Consultation</Link>
              <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium bg-[#6366f1]">Contact Now</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
    </div>
  )
}

