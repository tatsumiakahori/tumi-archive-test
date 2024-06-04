import Post from '@/app/components/Post';
import { sanityFetch } from '@/app/utils/sanity/fetch';
import { POSTS_QUERY, POST_QUERY } from '@/app/utils/sanity/queries';
import { QueryParams, SanityDocument, groq } from 'next-sanity'
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await sanityFetch<SanityDocument[]>({
    query: POSTS_QUERY,
    perspective: "published",
    stega: false,
  })

  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

export default async function Page({ params }: { params: QueryParams }) {
  const post = await sanityFetch<SanityDocument>({ query: POST_QUERY, params })
  if (!post) {
    return notFound()
  }
  return <Post post={post} />
}