import Link from "next/link";

export default async function Post({ post }: {post: any}) {
    const { title, body } = post
    return (
      <div>
          <h1>Post</h1>
          <div>
            <h1>{body[0].children[0].text}</h1>
          </div>
      </div>
    )
  }