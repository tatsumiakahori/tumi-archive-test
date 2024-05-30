import { sanityClient } from "@/sanity/config";
import { groq } from "next-sanity";
import { Post } from "@/app/types";

/**
 * SanityからWorkデータを全件取得する
 */
export const fetchWorks = async () => {
  const postsQuery = groq`
    * [_type == "post"] {
      ...,
    } | order(_createdAt desc)
  `;
  const posts: Post[] = await sanityClient.fetch(postsQuery);
  return posts;
};

/**
 * Sanityから特定のPostデータを1件取得する
 * @param id PostのID
 */
export const fetchWorkData = async (id: string) => {
  const postQuery = groq`
    * [_type == "post" && _id == "${id}"] {
      ...,
    }
  `;
  try {
    const post: Post = await sanityClient.fetch(postQuery);
    return post;
  } catch (e) {
    console.log(e);
  }
};

