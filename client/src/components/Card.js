import React,{ useState } from 'react'
import './Card.css'

function Card({name, about, job}) {

    return (
        <div className='Card'>
            <div className='upper-container'>
                <div className='image-container'>
                    <img src="https://th.bing.com/th?id=OIP.9zsKX69NwDE9QimeSvW0hQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2 " alt= '' height="100px" width="100px" />
                </div>
            </div>
            <div className='lower-container'>
                <h3> { name } </h3>
                <h4> { job } </h4>
                <p> { about } </p>
                <button>Visit Profile</button>
            </div>
        </div>
    )
}

export default Card;