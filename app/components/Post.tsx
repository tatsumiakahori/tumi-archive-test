export default async function Post({ post }: {post: any}) {
    const { title, body } = post
    return (
      <div>
          <h1>Post</h1>
          <div>
            <h1>{title}</h1>
            <p>{body[0].children[0].text}</p>
          </div>
      </div>
    )
  }