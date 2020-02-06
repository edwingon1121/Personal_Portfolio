import React from 'react';

const DownloadContain = (props) => {
    return (
        <div className='downloadable-content'>
            <h4>{props.title}</h4>
            <img src={props.src} alt="random-content"/>
            <a href={props.href} target='_blank' rel='noopener noreferrer' className='download-button'>{props.buttonText} ></a>
        </div>
    )
};

export default DownloadContain;