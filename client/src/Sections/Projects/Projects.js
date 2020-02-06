import React from 'react';
import './projects.css';
import ProjContainer from '../../Containers/ProjContainer';

const projects = [
    { src: 'https://d1bx69z06fa2ip.cloudfront.net/because_the_internet.jpg', alt: "Childish Gambino Because the Internet", 
    title: "Tribute Page", 
    description: "A static site tribute to Donald Glover aka Childish Gambino which displays content about his career in entertainment mediums from acting, writing, and musical perfromance. Hosted through AWS S3 bucket and CDN delivered through Cloudfront. Information on albums is data pulled from ITunes API using Python script.",
    tech:[{src: 'https://d1bx69z06fa2ip.cloudfront.net/html5.png', alt:'HTML5 icon'}, {src: 'https://d1bx69z06fa2ip.cloudfront.net/css-3.png', alt: 'CSS3 icon'},{src: 'https://d1bx69z06fa2ip.cloudfront.net/javascript.svg', alt:'JS icon'}, {src: 'https://d1bx69z06fa2ip.cloudfront.net/python.svg', alt:'Python icon'}, {src: 'https://d1bx69z06fa2ip.cloudfront.net/aws.png', alt: 'Aws icon'}],
    links:[{link:'https://github.com/edwingon1121/TributePage',alt:'Github Icon', img:'https://d1bx69z06fa2ip.cloudfront.net/GitHub.png'},{link:'https://dgxdmb7cy0hdc.cloudfront.net/',alt:'AWS', img:'https://d1bx69z06fa2ip.cloudfront.net/aws.png'}]
    }, 
    { src: 'https://d1bx69z06fa2ip.cloudfront.net/ClockWork.png', alt: "Analog Clock", 
    title: "Clock Work", 
    description: "An application where a user can see current time in a analog or digital clock, a simple form ask how the user is feeling, as well as a simple weather forecast based on user's location (Weather brought to you by National Weather Service API) and a simple form that posts to a MongoDB database and routes managed through Node.js and Express.",
    tech:[{src: 'https://d1bx69z06fa2ip.cloudfront.net/node.png', alt:'Node icon'}, {src: 'https://d1bx69z06fa2ip.cloudfront.net/logo.svg', alt: 'React icon'}, {src: 'https://d1bx69z06fa2ip.cloudfront.net/MongoDB.svg', alt: 'MongoDb icon'}],
    links:[{link:'https://github.com/edwingon1121/Clock-Work',alt:'Github Icon', img:'https://d1bx69z06fa2ip.cloudfront.net/GitHub.png'}]
    },{ src: 'https://d1bx69z06fa2ip.cloudfront.net/eg-logo.png', alt: "GitHub OctoCat", 
    title: "Porfolio Project", 
    style:{'padding': '16px','background':'black'},
    description: "Welcome again! Here is a glance at what projects I have been working on, where you can see my professional documents, and even where you can contact me if you are interested in working with me or even in just saying hello! Hosted on AWS.",
    tech:[{src: 'https://d1bx69z06fa2ip.cloudfront.net/logo.svg', alt: 'Personal logo'},{src: 'https://d1bx69z06fa2ip.cloudfront.net/node.png', alt:'Node icon'}, {src: 'https://d1bx69z06fa2ip.cloudfront.net/aws.png', alt: 'Aws icon'}],
    links:[{link:'https://github.com/edwingon1121/Personal_Portfolio', alt:'Github Icon', img:'https://d1bx69z06fa2ip.cloudfront.net/GitHub.png'}]
}]

const Projects = () => {

    return (
        <div id='projects'>
            { projects.map((p) => 
            <ProjContainer 
                key={p.title}
                src={p.src} 
                alt={p.alt}
                title={p.title}
                description={p.description}
                tech={p.tech}
                style={p.style}
                imgLinks={p.links}
            />)}
        </div>
    )
}

export default Projects;