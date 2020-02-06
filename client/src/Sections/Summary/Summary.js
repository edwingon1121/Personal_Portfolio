import React from 'react';
import LinkButton from '../../Containers/LinkButton';
import Intro from './Intro';
import './summary.css';

const Summary = () => {
    return (
        <div id="summary">
            <h2>Edwin Gonzalez</h2>
            <h3>Full Stack Developer</h3>
            <div className='contains-profiles'>
                <LinkButton link='https://github.com/edwingon1121' imgUrl={'https://d1bx69z06fa2ip.cloudfront.net/GitHub.png'} imgAlt="Github" title='GitHub'/>
                <LinkButton link='https://www.linkedin.com/in/edwin-gonzalez-5ba885a1/' imgUrl={'https://d1bx69z06fa2ip.cloudfront.net/linkedin.png'} imgAlt="Linkedin" title='LinkedIn'/>
            </div>
            <br/>
            <hr style={{'width': '70%'}}/>
            <Intro/>
            
        </div>
    )
}

export default Summary;