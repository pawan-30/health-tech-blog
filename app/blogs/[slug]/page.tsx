import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { formatDate } from "@/lib/utils"
import { blogPosts } from "@/lib/blog-data"

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 md:px-12 lg:px-24 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blogs"
          className="inline-flex items-center text-sm text-gray-400 hover:text-pink-500 mb-12 transition-colors"
        >
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
            className="mr-2 h-4 w-4"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to all articles
        </Link>

        <article className="prose prose-invert prose-lg max-w-none">
          <div className="not-prose mb-8">
            <div className="text-sm text-gray-400 mb-4">{formatDate(post.date)}</div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">{post.title}</h1>
          </div>

          <div className="mb-12 overflow-hidden rounded-lg">
            <Image
              src={post.thumbnail || "/placeholder.svg"}
              alt={post.title}
              width={1200}
              height={675}
              className="w-full aspect-video object-cover"
              priority
            />
          </div>

          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <h3 className="text-2xl font-bold mb-6">Continue Reading</h3>
          <div className="grid gap-8 md:grid-cols-2">
            {blogPosts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link key={relatedPost.slug} href={`/blogs/${relatedPost.slug}`} className="group block">
                  <div className="space-y-3">
                    <div className="overflow-hidden rounded-lg aspect-video">
                      <Image
                        src={relatedPost.thumbnail || "/placeholder.svg"}
                        alt={relatedPost.title}
                        width={600}
                        height={340}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="font-bold group-hover:text-pink-500 transition-colors">{relatedPost.title}</h4>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
