import React, { Component } from 'react'
import MenuItem from './MenuItem.jsx'
import PizzaData from '../pizzaData.js'

class MenuList extends Component {
    render() {

        const menuItem = PizzaData.map((pizza, index) => {
            return <MenuItem name={pizza.name} price={pizza.price} description={pizza.description} image={pizza.image} />
        })

        return (
            <div id='menu' className='menu'>
                <h1>Menu</h1>
                <div className='menu-container'>
                    {menuItem}
                </div>
            </div>
        )
    }
}

export default MenuList 