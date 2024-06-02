import Link from "next/link";
import { Post } from "../types";

export default async function Posts({ posts }: {posts: Post[]}) {
    return (
      <div>
          <h1>Posts</h1>
        {posts && (
          <div>
            <div
              style={{ display: 'grid', gap: '1px', gridTemplateColumns: '2fr 2fr 2fr' }}
            >
  
              {posts.map((post: Post) => (
                <Link
                  className='card'
                  key={post._id}
                  href={`posts/${post._id}`}>
                  <div className='card'>
                    {/* <img
                      src={urlFor(post.image)}
                      alt={post.name}
                      style={{ height: '70%', }}
                    /> */}
                    <h3>{post.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }