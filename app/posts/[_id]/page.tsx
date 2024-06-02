
import Post from '@/app/components/Post';
import { sanityClient, urlFor } from '@/sanity/config'
import { QueryParams, groq } from 'next-sanity'
import Link from 'next/link'

export async function generateStaticParams() {
  const postsQuery = groq`
      * [_type == "post"] {
        ...,
      } | order(_createdAt desc)
    `;
  const posts = await sanityClient.fetch(postsQuery);

  return posts.map((post: any) => ({
    _id: post._id,
  }))
}

export default async function Page({ params }: { params: QueryParams }) {
  console.log(params)
  const postQuery = groq`
      * [_type == "post" && _id == $_id][0]
    `;
    const post = await sanityClient.fetch(postQuery, params);
  if (!post) {
    return
  }
  return <Post post={post} />
}