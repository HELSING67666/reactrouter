import { React } from 'react'
import { Outlet } from 'react-router-dom'
import { BlogLink } from './BlogLink'
import { blogdata } from './blogdata'

function BlogPage () {
  return (
        <>
            <h1>Blog Page</h1>
            <Outlet/>
            <ul>
              {blogdata.map(post => (
                <BlogLink key={post.slug} post={post} />
              ))}
            </ul>
        </>
  )
}

export { BlogPage }
