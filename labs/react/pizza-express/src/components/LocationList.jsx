import React, { Component } from 'react'
import Location from './Location.jsx'
import LocationData from '../locationData.js'

class LocationList extends Component {
    render() {

        const ahh = LocationData.map((spot, index) => {
            return <Location name={spot.name} address={spot.address} phone={spot.phone} />
        })

        return (
            <div id='locations'>
                <h1>Locations :</h1>
                <div className='locations'>
                    {ahh}
                </div>
            </div>
        )
    }
}

export default LocationList