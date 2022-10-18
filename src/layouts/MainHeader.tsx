import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function MainHeader() {
  return (
    <div className='bg-gray-800 text-gray-100 flex justify-between w-full '>
      <a href='/#' className='block p-4 text-white font-bold'>
        Movie
      </a>

      <div className='flex items-center justify-center '>
        <div className='flex border-2 rounded'>
          <input type='text' className='px-4 py-2 w-56' placeholder='Search...' />
          <button className='px-4 text-white bg-gray-600 border-l '>Search</button>
        </div>
      </div>
      {/* {auth?.user ? (
        <div className="flex justify-center items-center gap-4 mr-10">
          <div>Hello {auth.user}</div>
          <button
            variant="contained"
            onClick={() => auth.signOut(() => navigate("/"))}
          >
            Logout{" "}
          </button>
        </div>) */}

      <Link className='flex justify-center items-center gap-4 mr-10' to={'/login'}>
        {' '}
        Sign In
      </Link>
    </div>
  )
}

export default MainHeader
