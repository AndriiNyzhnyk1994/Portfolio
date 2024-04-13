import React from 'react'
import './style.css'
import sun from './icons/sun.svg'
import moon from './icons/moon.svg'

function ButtonDarkMode() {
    return (
        <button className="dark-mode-btn">
            <img src={moon} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={sun} alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
    )
}

export default ButtonDarkMode