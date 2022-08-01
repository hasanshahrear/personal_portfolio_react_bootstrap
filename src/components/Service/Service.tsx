import React from 'react'
import './Service.css'

type ServiceType = {
    url: string;
    title: string;
    text: string;
}

const Service = (props:ServiceType) => {
    const {url, title, text} = props;

    return (
        <div className='service text-center'>
            <div className='service-image'>
                <img src={url} alt="icon" />
            </div>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default Service