import React from 'react';


const Intro = (props) => {
  return(
    <div className='introduction'>
      <div className='profile-pic'>
        <img src={'https://d1bx69z06fa2ip.cloudfront.net/profile.jpg'} alt={'Edwin playing conquest after winning the Rose bowl'}/>
      </div>
      <div className="caption">
        <h5>Hello, I'm Edwin Gonzalez! I am a Full Stack Developer with a background in mathematics. I have created websites, automated scripts, a Chrome extension, and even a data visualization tool. 
          My ultimate goal as a developer, is not only to gain expertise and experience working with various tech stacks, but to later dive into DevOps and enforcing best security practices.
          When I am not creating applications, you can find me exploring the world of music.
          <span className='fun-fact'><b> Fun Fact:</b> I marched in the USC Trojan Marching Band this past season as a Teaching Assistant and marched in the Rose Parade in 2017.</span>
           
        </h5>
      </div>

    </div>
  )
}

export default Intro;