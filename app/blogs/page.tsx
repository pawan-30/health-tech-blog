import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import { blogPosts } from "@/lib/blog-data"

export default function BlogsPage() {
  return (
    <div className="container mx-auto px-4 md:px-12 lg:px-24 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-4 mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Health Insights</h1>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">We Share</h2>
          <p className="text-xl text-gray-400 mt-8 max-w-2xl">
            Exploring the latest in health technology and holistic wellness for optimal longevity.
          </p>
        </div>

        <div className="grid gap-12 md:gap-16">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blogs/${post.slug}`} className="group block">
              <div className="grid md:grid-cols-2 gap-8 items-start">
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
                <div className="space-y-4">
                  <div className="text-sm text-gray-400">{formatDate(post.date)}</div>
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight group-hover:text-pink-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400">{post.excerpt}</p>
                  <div className="inline-flex items-center text-pink-500 font-medium">
                    Read Article
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
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
