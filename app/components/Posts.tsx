import Link from "next/link";
import { SanityDocument } from "next-sanity";

export default async function Posts({ posts }: { posts: SanityDocument[] }) {
  return (
    <div>
      <h1>Posts</h1>
      <hr className="mb-1"/>
      {posts && (
        <div>
          <div
            className='grid'
          >
            {posts.map((post) => (
              <Link
                className='card inline-block'
                key={post._id}
                href={`posts/${post.slug.current}`}>
                <div className='card'>
                  <h3>・{post.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}