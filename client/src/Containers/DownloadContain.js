import React from 'react';

const DownloadContain = (props) => {
    return (
        <div className='downloadable-content'>
             <img src={props.src} alt="random-content"/>
            <h4>{props.title}</h4>
            <a href={props.href} target='_blank' rel='noopener noreferrer' className='download-button'>{props.buttonText} <span className='arrow'>></span></a>
        </div>
    )
};

export default DownloadContain;