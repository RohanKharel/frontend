import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button/Button.js'

class Registration extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            // username: '',
            // password: ''

        }

        // this.setState({[e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault();
        fetch('http://localhost:3024/registration',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state) //JSON.parse(this.state)
        })
        .then((response) => {

        })
        .catch(function(error){

        })
        

    }

    render(){
             return (
                   <form onSubmit={this.submitHandler} >
                        <label>
                            Firstname:
                         <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                        </label>

                        <label>
                            Lastname:
                         <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                        </label>

                        <label>
                            Address:
                         <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                        </label>
                        
                        <label>
                            Username:
                         <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                        </label>
                        <label>

                            Password:
                         <input type="password" name="username" value={this.state.username} onChange={this.handleChange}/>
                        </label>
                        
                       <div>
                       <Button label="SignUp"/>
                       </div>
                  </form>
        
             )}

}

export default Registration
