import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {

    return (
        <nav>
            <FontAwesomeIcon icon={faEarthAmericas} style={{color: "#ffffff",}}/> 
            <span className="nav-title">My Travel & Food Journal</span>
        </nav>
    )
}