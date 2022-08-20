import { useState } from 'react'
import '../SCSS/Components/ColorChanger.scss'

function ColorChanger({ children }) {
    const [ style, setStyle ] = useState({
        color: "#fff",
        backgroundColor: "#111"
    })

    const MouseMove = (event) => {
        const [ x, y ] = [ event.pageX / (window.innerWidth  / 255),
                           event.pageY / (window.innerHeight / 255) ];

        const bg_r = x
        const bg_g = (255 - y)
        const bg_b = (x + y) / 2

        const r = (255 - bg_r)
        const g = (255 - bg_g)
        const b = (255 - bg_b)

        setStyle({
            color: `rgb(${r}, ${g}, ${b})`,
            backgroundColor: `rgb(${bg_r}, ${bg_g}, ${bg_b})`
        })
    }

    return (
        <div onMouseMove={MouseMove} className='color-changer' style={style}>
            {children}
        </div>
    )
}

export default ColorChanger