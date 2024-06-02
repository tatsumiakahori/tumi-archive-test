
import { sanityClient, urlFor } from '@/sanity/config'
import { groq } from 'next-sanity'
import Link from 'next/link'
import { Post } from '@/app/types'
import Posts from '../components/Posts'
  
export default async function Page() {
    const postsQuery = groq`
      * [_type == "post"] {
        ...,
      } | order(_createdAt desc)
    `;
    const posts = await sanityClient.fetch(postsQuery);
    console.log(posts)
    
    return <Posts posts={posts} />
}