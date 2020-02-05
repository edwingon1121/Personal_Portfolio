import React, { Component } from 'react';

import Input from './Components/Input';
import Select from './Components/Select';
import TextArea from './Components/TextArea';
import Button from './Components/Button';

import './form.css';
import Loading from './Components/Loading/Loading';


class Form extends Component {
  constructor(){
    super();
      this.state = {
        first_name: "",
        last_name: "",
        viewer: "Friend",
        email: "",
        message: "",
        load : {
          failed: undefined,
          loading: undefined,
          content:""
        }
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleClear = this.handleClear.bind(this);
  }

  handleChange(e){
    const {name, value } = e.target;
    this.setState((prevState) => { return { ...prevState,[name]: value} })
  }

  //Check if first and last name, and email filled
  // First name longer than two letters
  validEmail(email) {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)
  }

  validName(name) {
    return !(/[^\w\s]/g.test(name))
  }

  validateEntries() {
    const {first_name, last_name, email} = this.state
 
    const vEmail = this.validEmail(email);
    const vFName = this.validName(first_name);
    const vLName = this.validName(last_name);

    //Not allowed to submit
    if((!(first_name.length > 1) || !vFName)|| ((!last_name.length > 1) || !vLName)|| !vEmail) return false
    return true
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({load: {
      loading:true, content:''
    }})

    const result = this.validateEntries();

    if (result){
      const url = 'api/create-user';
      fetch(url,{
        method: 'POST',
        body: JSON.stringify({"first_name": this.state.first_name, 
          "last_name":this.state.last_name, 
          "email":this.state.email, 
          "message":this.state.message,
        "viewer": this.state.viewer }),
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(response => {
        if (response.status >= 400 && response.status < 600) {
          throw new Error("Bad response from server");
        }
        this.setState({load: {
          loading:false, content:'Submission Complete!', failed: false
        }})
      }).catch(err => {
        this.setState({load: {
          loading:false, failed:true
        }})
      })
    } else {
      this.setState({load: {
        loading:false, failed:true
      }})
      setTimeout(()=> this.setState({load: {
        loading:undefined, failed:undefined
      }}),3000)
    }
  }

  handleClear(e){
    e.preventDefault();

    this.setState({
      firstName: "",
      lastName:"",
      viewer: "",
      email: "",
      message: ""
    });
  }

  render(){
    console.log('loading: ', this.state.load.loading);
    console.log('failed: ', this.state.load.failed );
    return(
      <div id="contact">
      <div className="contains-form">
        <div className='header'>
			    <h2>Contact Me</h2>
		    </div>
        <form className={'form'}onSubmit={this.handleSubmit}>
          {this.state.load.loading === undefined ? (
          <>
          <em><span className="required-span">*</span> Required</em>
          <br/>
          <hr/>
          <div className='name-fields'>
            <Input
              className={"fields name"}
              name={"first_name"}
              label={'First Name:'}
              type={"text"}
              placeholder={"Bobby"}
              value={this.state.first_name}
              required={true}
              handleChange={this.handleChange}
            />
            <Input
              className={"fields name"}
              name={"last_name"}
              label={'Last name:'}
              type={"text"}
              placeholder={"Hill"}
              value={this.state.last_name}
              required={true}
              handleChange={this.handleChange}
            />
          </div>
            <Input
              className={"fields"}
              name={"email"}
              label={'Email:'}
              type={"email"}
              required={true}
              placeholder={"bhill@email.com"}
              value={this.state.email}
              handleChange={this.handleChange}
            />
            <Select
              className={"select-iam fields"}
              name={'viewer'}
              label={'Viewer Type: '}
              placeholder={'--'}
              value={this.state.viewer}
              options={['Friend','Recruiter','Other']}
              handleChange={this.handleChange}
            />
            <TextArea
              className={'fields'}
              name={'message'}
              label={'Message:'}
              placeholder={'Enter message.'}
              value={this.state.message}
              handleChange={this.handleChange}
            />
          <div className="buttons-contain">
            <Button
                className={'submit button-form'}
                type={"submit"}
                disabled={false}
                action={this.handleSubmit}
                content={'Submit'}/>
              
              <Button
                className={'reset button-form'}
                type={"reset"}
                disabled={false}
                action={this.handleClear}
                content={'Reset'}/>
            </div>
            </>) : <Loading load={this.state.load.loading} fail={this.state.load.failed} title={!this.state.load.failed? this.state.load.content:  <p className='required-span'>Please make sure all required fields are filled.</p>} />
           }
        </form>
      </div>
      </div>
    )
  }
}

export default Form;