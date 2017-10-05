import React, { Component } from 'react'

class NavBar extends Component {
    render() {
        return (
            <div className='navbar'>
                <a href='#description'>Our Story</a>
                <a href='#menu'>Menu</a>
                <h1>Tom's Pizza Express</h1>
                <a href='#locations'>Locations</a>
                <a href='#contact'>Contact</a>
            </div>
        )
    }
}

export default NavBar