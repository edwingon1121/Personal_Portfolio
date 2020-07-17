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
                <div class="terminal-display">
                    <div class="prompt">edwin@edwingon.com <span>$</span> </div>
                    <div class="txt-input">ls</div>
                    <div class="square"></div>
                </div>
                <div class="output">
                    <div class="output"><div class="output-row">
                        <span class="file">Applications</span>
                        <span class="directory">Projects</span>
                        <span class="directory">Testing</span>
                        <span class="directory">Security</span>
                        <span class="file">Web</span>
                        <span class="directory">Containers</span>
                    </div>
                        <div class="output-row"><span class="file">Automation</span><span class="directory">Curiosity</span><span class="directory">Travel</span><span class="directory">Adventure</span><span class="directory">Frontend</span><span class="directory">Backend</span></div><div class="output-row"><span class="file">API</span><span class="directory">Teamwork</span><span class="file">Cloud</span><span class="file">Javascript</span><span class="file">Python</span><span class="directory">IDE</span></div><div class="output-row"><span class="file">Relational</span><span class="file">NoSQL</span><span class="file">Learning</span><span class="directory">Always</span><span class="file">Frameworks</span><span class="directory">Music</span></div><div class="output-row"><span class="file">Photography</span><span class="directory">Cars</span><span class="file">Future</span><span class="directory">laboris</span><span class="file">commodo</span><span class="directory">consequat</span></div><div class="output-row"><span class="file">Duis</span><span class="file">aute</span><span class="file">irure</span><span class="file">dolor</span><span class="file">If</span><span class="directory">You</span></div><div class="output-row"><span class="file">Are</span><span class="file">Reading</span><span class="directory">This</span><span class="directory">You</span><span class="directory">Are</span><span class="directory">Great</span></div></div>
                </div>
                <br />
                <div class="terminal-display">
                    <div class="prompt">edwin@edwingon.com <span>$</span> </div>
                    <div class="square"></div>
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