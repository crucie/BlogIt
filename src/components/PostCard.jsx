import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'


function PostCard({$id, title , featuredImages}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='bg-gray-100 w-full rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
            <img src={appwriteService.getFilePreview(featuredImages)} alt={title} className='rounded-xl'/>
        </div>
        <h2 className='font-bold text-xl'>
            {title}
        </h2>
    </div>
    </Link>
  )
}

export default PostCard