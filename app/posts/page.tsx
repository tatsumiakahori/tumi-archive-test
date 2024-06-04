import { SanityDocument, groq } from 'next-sanity'
import Posts from '../components/Posts'

import { sanityFetch } from "@/app/utils/sanity/fetch"
import { POSTS_QUERY } from "@/app/utils/sanity/queries"
  
export default async function Page() {
    const posts = await sanityFetch<SanityDocument[]>({
        query: POSTS_QUERY,
      })
    
    return <Posts posts={posts} />
}