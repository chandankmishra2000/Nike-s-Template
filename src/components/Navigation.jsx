import React from 'react'

export default function Navigation() {
  return (
    <div>
       <nav className='container'>
        <div className="logo">
            <img src="images/Nike.png" alt="logo"  />
        </div>
        <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  )
}
