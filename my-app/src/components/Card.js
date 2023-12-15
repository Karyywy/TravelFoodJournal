import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Card(props) {
    return (
        <div className="card">
            <img src={`../images/${props.item.img}`}/> 

            <div className="card-info">
                <div className="location-info">
                    <h3>
                    <FontAwesomeIcon icon={faLocationDot} style={{color: "#bd476b",}} /> {' '}
                    {props.item.location}
                    </h3>
                    <a href={props.item.map} className="location-map">
                    View on Google Maps </a>
                </div>

                <div className="info-container">
                    <h2 className="info-name">{props.item.name}</h2>
                    <span className="info-date">{props.item.date}</span>
                    <p className="info-description">{props.item.description}</p> 
                </div>
            </div>
        </div>
)
}


