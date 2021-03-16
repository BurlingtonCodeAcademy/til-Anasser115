import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <div id="navBar">
           <Link id="navBar-link" to='/'>Today I Learned</Link> 
           {/* up button */}
        </div>
    )
}
