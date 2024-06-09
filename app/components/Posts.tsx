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
      <hr className="mb-4"/>
      <ResponsiveMasonry columnsCountBreakPoints={{350: 2, 750: 3, 900: 5}}>
        <Masonry gutter='18px'>
        {posts?.map((post) => (
              <Link
                key={post._id}
                href={`posts/${post.slug.current}`}>
                <div className='relative h-full'>
                    <Image
                      src={urlFor(post.mainImage).auto("format").fit("max").url()}
                      alt={post.mainImage.alt || ""}
                      className="object-cover float-left m-0 rounded-lg"
                      quality={100}
                      width={500}
                      height={500}
                    />
                  <div className="absolute bottom-0 w-full p-2 rounded-b-lg bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:2px_2px]">
                    <h2 className="text-xs text-white">{post.slug.current}</h2>
                  </div>
                </div>
              </Link>
            ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  )
}