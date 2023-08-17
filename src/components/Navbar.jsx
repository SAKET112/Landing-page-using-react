import React from 'react'

const Navbar = () => {
  return (
   <>
    <nav className='container'>
        {/* Brand logo */}
        <div className="logo">
          <img src='../public/images/brand_logo.png' alt="logo" />
        </div>

        {/* menu_lists */}
        <ul>
          <li href = '#'>Menu</li>
          <li href = '#'>Location</li>
          <li href = '#'>About</li>
          <li href = '#'>Contact</li>
          </ul>

        {/* login button */}

        <button>Login</button>
      </nav>
   </>
  )
}

export default Navbar