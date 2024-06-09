import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)] | order(publishedAt desc)`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;