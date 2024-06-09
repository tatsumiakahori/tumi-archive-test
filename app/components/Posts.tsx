"use client";

import Link from "next/link";
import { SanityDocument } from "next-sanity";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import imageUrlBuilder from "@sanity/image-url"
import Image from "next/image";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"

const urlFor = (source: any) => imageUrlBuilder({ projectId, dataset }).image(source)

export default function Posts({ posts }: { posts: SanityDocument[] }) {
  return (
    <div>
      <h1>Posts</h1>
      <hr className="mb-4"/>
      <ResponsiveMasonry columnsCountBreakPoints={{350: 3, 750: 4, 900: 5}}>
        <Masonry gutter='18px'>
        {posts?.map((post) => (
              <Link
                className='card inline-block'
                key={post._id}
                href={`posts/${post.slug.current}`}>
                <div className='card'>
                  <Image
                    className="float-left m-0 rounded-lg"
                    src={urlFor(post.mainImage).auto("format").fit("max").url()}
                    width={500}
                    height={500}
                    alt={post.mainImage.alt || ""}
                  />
                </div>
              </Link>
            ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  )
}