import React from 'react';
import LinkButton from '../../Containers/LinkButton';
import Intro from './Intro';
import './summary.css';

const Summary = () => {
    const str = "Applications    Projects    Testing    Security    Web    Containers    Automation    Curiosity    Travel    Adventure    Frontend    Backend    API    Teamwork    Cloud    Javascript    Python    IDE    Relational    NoSQL    Learning    Always    Frameworks    Music    Photography    Cars    Future    laboris    commodo    consequat    Duis    aute    irure    dolor    If    You    Are    Reading    This    You    Are    Great"
    let row;


    return (
        <div id="summary">
            <div className="background-terminal">
                <div className="terminal-display">
                    <div className="prompt">edwin@edwingon.com <span>$</span> </div>
                    <div className="txt-input">ls</div>
                    <div className="square"></div>
                </div>
                <div className="output">
                    <div className="output"><div className="output-row">
                        <span className="file">Applications</span>
                        <span className="directory">Projects</span>
                        <span className="directory">Testing</span>
                        <span className="directory">Security</span>
                        <span className="file">Web</span>
                        <span className="directory">Containers</span>
                    </div>
                        <div className="output-row"><span className="file">Automation</span><span className="directory">Curiosity</span><span className="directory">Travel</span><span className="directory">Adventure</span><span className="directory">Frontend</span><span className="directory">Backend</span></div><div className="output-row"><span className="file">API</span><span className="directory">Teamwork</span><span className="file">Cloud</span><span className="file">Javascript</span><span className="file">Python</span><span className="directory">IDE</span></div><div className="output-row"><span className="file">Relational</span><span className="file">NoSQL</span><span className="file">Learning</span><span className="directory">Always</span><span className="file">Frameworks</span><span className="directory">Music</span></div><div className="output-row"><span className="file">Photography</span><span className="directory">Cars</span><span className="file">Future</span><span className="directory">laboris</span><span className="file">commodo</span><span className="directory">consequat</span></div><div className="output-row"><span className="file">Duis</span><span className="file">aute</span><span className="file">irure</span><span className="file">dolor</span><span className="file">If</span><span className="directory">You</span></div><div className="output-row"><span className="file">Are</span><span className="file">Reading</span><span className="directory">This</span><span className="directory">You</span><span className="directory">Are</span><span className="directory">Great</span></div></div>
                </div>
                <br />
                <div className="terminal-display">
                    <div className="prompt">edwin@edwingon.com <span>$</span> </div>
                    <div className="square"></div>
                </div>
            </div>
            <div className="container-summary">
                <h1>Edwin Gonzalez</h1>
                <h2>Full Stack Developer</h2>
                <div className='contains-profiles'>
                    <LinkButton link='https://github.com/edwingon1121' imgUrl={'https://d1bx69z06fa2ip.cloudfront.net/GitHub.png'} imgAlt="Github" title='GitHub' />
                    <LinkButton link='https://www.linkedin.com/in/edwin-gonzalez-5ba885a1/' imgUrl={'https://d1bx69z06fa2ip.cloudfront.net/linkedin.png'} imgAlt="Linkedin" title='LinkedIn' />
                </div>
                <br />
                <hr style={{ 'width': '70%' }} />
                <Intro />
            </div>

        </div>

    )
}

export default Summary;