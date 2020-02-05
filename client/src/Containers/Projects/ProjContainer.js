import React, { Component } from 'react';
import git from '../../images/icons/GitHub.png';
import LinkButton from '../../Components/LinkButton';

class  ProjContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  showOption = () => this.setState({show:true})

  hideOptions = () => this.setState({show:false})

  render(){
    console.log(this.props.imgLinks)
    return (
      <div className='project'>
        <h4>{this.props.title}</h4>
        <div className='image-project'>
          <img src={this.props.src} className='project-image' alt={this.props.alt} style={this.props.style}/> 
          {/* <div className='contains-icons'>
            <a className='' href='' target='_blank'><img src={git} alt='github icon'/></a>
          </div> */}
          {/* <div><a href='' target='_blank'><img src={}/></a></div> */}
          <div className="hover-icon">
            {this.props.imgLinks.map((l,i) => <LinkButton key={i} link={l.link} imgUrl={l.img} imgAlt={l.alt} />)}
          </div>
        </div>
        <div className='project-text'>
          <h5>{this.props.description}</h5>
        </div>
        <div>
          <ul className='technologies'>
          {this.props.tech.map((t,i) =>  
            <li key={i}>
              <img src={t.src} alt={t.alt} className={'icons-tech'}/>
            </li> 
          )}
          </ul>
            
          </div>
      </div>
      )
    } 
}

export default ProjContainer;