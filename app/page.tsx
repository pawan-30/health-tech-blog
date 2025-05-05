import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/lib/blog-data"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Your Body Talks</h1>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight">We Translate</h2>
              </div>
              <p className="text-xl text-gray-400 max-w-xl">
                Introducing <span className="text-pink-500 font-semibold">EON.HEALTH</span>, your AI Companion for a
                Unique Journey to Holistic Longevity and Maximum Functionality.
              </p>
              <div className="space-y-4">
                <div className="text-sm text-gray-400">Available on</div>
                <div className="flex flex-wrap gap-4">
                  <Link href="#" className="block">
                    <Image
                      src="/placeholder.svg?height=50&width=150"
                      alt="TestFlight"
                      width={150}
                      height={50}
                      className="h-12 w-auto"
                    />
                  </Link>
                  <Link href="#" className="block">
                    <Image
                      src="/placeholder.svg?height=50&width=150"
                      alt="Google Play"
                      width={150}
                      height={50}
                      className="h-12 w-auto"
                    />
                  </Link>
                </div>
                <Link
                  href="/join-waitlist"
                  className="inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-medium text-white shadow-lg gradient-btn"
                >
                  JOIN THE WAITLIST
                </Link>
              </div>
            </div>
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <Image
                src="/placeholder.svg?height=600&width=300"
                alt="EON.HEALTH App"
                width={300}
                height={600}
                className="mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-secondary">
        <div className="container px-4 md:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-4 mb-12 text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Latest Insights</h2>
              <p className="text-xl text-gray-400 mt-4">
                Explore our latest articles on health technology and wellness
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.slice(0, 3).map((post) => (
                <Link key={post.slug} href={`/blogs/${post.slug}`} className="group block">
                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-lg aspect-video">
                      {post.slug === "longevity-breakthroughs-are-going-mainstream" ? (
                        <Image
                          src="/images/longevity-economist.png"
                          alt={post.title}
                          width={600}
                          height={340}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <Image
                          src={post.thumbnail || "/placeholder.svg"}
                          alt={post.title}
                          width={600}
                          height={340}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                    </div>
                    <h3 className="text-xl font-bold leading-tight group-hover:text-pink-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 line-clamp-2">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/blogs"
                className="inline-flex items-center text-pink-500 font-medium hover:text-pink-400 transition-colors"
              >
                View all articles
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
                  className="ml-2 h-4 w-4"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full py-12 bg-black border-t border-gray-800">
        <div className="container px-4 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <span className="text-xl font-semibold tracking-tight">
                <span className="hourglass-icon inline-block mr-2">⌛</span>
                <span>EON.HEALTH</span>
              </span>
            </div>
            <div className="flex flex-wrap gap-8 justify-center">
              <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about-us" className="text-sm text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/blogs" className="text-sm text-gray-400 hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/join-waitlist" className="text-sm text-gray-400 hover:text-white transition-colors">
                Join Waitlist
              </Link>
              <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} EON.HEALTH. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
