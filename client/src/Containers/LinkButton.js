import React from 'react';

const LinkButton = (props) => {
    return (
        <a className="link-button" href={props.link} target='_blank'rel='noopener noreferrer'>
            <img className='logo-social' src={props.imgUrl} alt={props.imgAlt}/>
            {props.title}
        </a>
    
    )
}

export default LinkButton;