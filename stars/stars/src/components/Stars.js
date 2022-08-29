import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { v4 } from 'uuid'

import '../scss/components/Stars.scss'

const Stars = ({ numStars = 0 }) => {
    const [ stars, setStars ] = useState(3)

    const handlerClick = (i) => () =>
        setStars(i)

    return (
        <div className='stars'>
            {
                [...Array(numStars)].map((_, i) =>
                  <FaStar className={`star ${i <= stars ? 'star-active' : ''}`} onClick={handlerClick(i)} key={v4()} /> )
            }
        </div>
    )
}

export default Stars