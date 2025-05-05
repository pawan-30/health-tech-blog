import Link from "next/link"

export default function Header() {
  return (
    <header className="w-full py-6 px-4 md:px-12 lg:px-24">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-semibold tracking-tight">
            <span className="hourglass-icon inline-block mr-2">⌛</span>
            <span>EON.HEALTH</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link href="/about-us" className="text-sm font-medium hover:text-gray-300 transition-colors">
            About Us
          </Link>
          <Link href="/blogs" className="text-sm font-medium hover:text-gray-300 transition-colors">
            Blog
          </Link>
          <Link href="/join-waitlist" className="text-sm font-medium hover:text-gray-300 transition-colors">
            Join Waitlist
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-gray-300 transition-colors">
            Contact
          </Link>
        </nav>
        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </button>
      </div>
    </header>
  )
}
