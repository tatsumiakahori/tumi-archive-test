import Image from "next/image"
import { PortableText } from "@portabletext/react"
import imageUrlBuilder from "@sanity/image-url"
import { SanityDocument } from "next-sanity"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"

const urlFor = (source: any) =>
  imageUrlBuilder({ projectId, dataset }).image(source)

export default async function Post({ post }: {post: SanityDocument}) {
    const { title, body, mainImage } = post
    return (
      <div>
          <h1>Post</h1>
          <div>
            <h1>{title}</h1>
            {mainImage ? (
                <Image
                className="float-left m-0 w-1/3 mr-4 rounded-lg"
                src={urlFor(mainImage).auto("format").fit("max").url()}
                width={500}
                height={500}
                alt={mainImage.alt || ""}
                />
            ) : null}
            {body ? <PortableText value={body} /> : null}
          </div>
      </div>
    )
  }