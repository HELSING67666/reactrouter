import { React } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { blogdata } from './blogdata'

function BlogPost () {
  const navigate = useNavigate()
  const { slug } = useParams()
  const post = blogdata.find(post => post.slug === slug)

  const returnToBlog = () => {
    navigate('/blog')
  }

  return (
        <>
            <h1>{post.title}</h1>
            <button onClick={returnToBlog}>Back</button>
            <h1>{post.author}</h1>
            <h1>{post.content}</h1>

        </>
  )
}

export { BlogPost }
