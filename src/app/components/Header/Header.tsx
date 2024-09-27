import React from 'react'

function Header() {
  return (
    <div className='flex justify-between mt-8'>
        <div>
            <a href="/">Rakshit</a>
        </div>
        <nav className='flex gap-8'>
            <a href="/resume">Resume</a>
            <a href="/posts">Posts</a>
        </nav>
    </div>
  )
}

export default Header