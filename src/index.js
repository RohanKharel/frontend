// var test = () => {
//     console.log('Hello');
// }
// new Date().toLocaleTimeString();



// //component based reusable
// //function use, class (use to make components)

// // function Button (props){ //this is a component which can be reused

// // return <button type="submit">{props.label}</button>
// // }

// // function Button (props){
// //    return React.createElement(
// //         'button',
// //         {type:'submit'},
// //         props.label
    
// //     )
// // }



// // ReactDOM.render(<Button label="save" xyz ="123"/>, document.getElementById('react'))
// // ReactDOM.render(<Button label="cancel" xyz ="123"/>, document.getElementById('reactt'))

// //class based

// // class Buttonn extends React.Component{
// //     render(){
// //         return(
// // <button>{this.props.label}</button>
// //         )
        
// //     }
// // }

// // ReactDOM.render(<Buttonn label="save" />, document.getElementById('react'))







// //jsx //not a tempaliting engine
// // var Thisclass = 'This is react class';
// // const element = <h1>current Class: {Thisclass}</h1>

// // ReactDOM.render(
    
// //     element,

// //     document.getElementById('react')
// // )

// //require('react) module.exports
// //common js architecture

// //es6

// //import -> exports default

// // ReactDOM.render(
// //     //what
// //     React.createElement(
// //         'div',
// //         null,
// //         'This is testing',
// //         react.createElement('input'), //child1
// //         react.createElement('p',null, new Date().toLocaleTimeString()) //child2 
// //     ),

// //     //where
// //     document.getElementById('react')
// // )

// // const renderer = () => {
// // document.getElementById('normal').innerHTML=
// // '<div><input />${new Date().toLocaleTimeString()}</div>';
// // }

// // setInterval(renderer,1000);


// //react state

// class Test extends React.Component {

//     //Initialize
//     // Mount
//     //Update
//     //Unmount

//     constructor(props){  //test class initialize garne
//         super(props) //base class initialize garne

//         this.state = {testVar:123, tesreacttVarr:233552} //this should always be an object
//     }
//     componentWillMount(){
//         console.log('this is before component will mount in html DOM')
//     }

//     componentDidMount(){
//         //data fetch garne kaam //data display garne kaam yaha huncha
//         this.setState({
//             testVar:789
//         })
//     }

//     shouldComponentUpdate(nextProps, nextState){
        //default value is true, so this function returns true

        // this.state.testVar //123
        // this.nextState.testVar //789

//         return this.state.testVar !== nextState.testVar

//         //compare these two, if there is a difference then probably update
//         console.log(nextState)

//     }

//     componentWillUpdate(nextProps, nextState){
//         console.log(nextProps,nextState)

//     }

//     componentDidUpdate(prevProps,prevState){
//         console.log(prevProps, prevState)

//     }
//     render(){

//         return(
//         <h1>{this.state.testVar}</h1>

//         )

//     }

// }

// ReactDOM.render(<Test label="what"/>, document.getElementById('normal'))

// class Buttoon extends React.Component{
//     constructor(){
//         //initial state

//         super(props)

//         console.log(this)

//         this.state = {test:123}

//         //this //if written in 
//         this.submitHandler = this.submitHandler.bind(this)
//     }

//     submitHandler2 = () => {
//         event.preventDefault()
//         console.log('submit button clicked using class properties')
//     }

//     //plugin -proposal-class-properties

//     submitHandler(event){

//         event.preventDefault()
//         console.log('submit button clicked')

//     }

//     render(){

//         return (
//         <button onClick = {this.submitHandler}>Click This</button>
//         )
//     }
// }

// ReactDOM.render(<Buttoon />, document.getElementById('normal1'))


//forms or form handling


// class Myform extends React.Component{
//     constructor(props){
//         super(props)

//         this.state = {
//             username:'',
//             validationM:''

//         }

//         this.handleChange = this.handleChange.bind(this)
//         this.submitHandler = this.submitHandler.bind(this)
//     }

//     handleChange = (event) => {

//        console.log(event.target.value)

//        //after validation

//        this.setState (
          
//        {
//        username : event.target.value,
//        validationM 

//     }
//        )

//        console.log(this.state.username)
//        console.log(event.target.value)
// }

//     submitHandler = (event) => {
//         console.log(this.state.username)

//         //will submit the form POST API

//     }

//     render(){
//         return (
//             <form onSubmit={this.submitHandler} >
//                 <label>
//                     Username:
//                     <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
//                 </label>
//                 <p>
//                     {this.state.validationM}
//                 </p>
//                 <input type="submit" value="submit" />
//             </form>



//         )
//     }
// }

// ReactDOM.render(<Myform />, document.getElementById('forms'));

import React, { Fragment } from 'react';
import ReactDOM, { render } from 'react-dom';
import Login from './Login/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'

import {BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Registration from './Registration/Registration';
import { Col, Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

//react navigation // react native
//react

class Index extends React.Component{
    constructor(){
    super()
    this.state = {
        xyz:10
    }
}

Footer = () => {
    return(
        <Container>
        <Row>
            <Col sm={4}>
                Contact Us:
                Phone no:
                email:test@test.com
            </Col>
            <Col sm={4}>
                Copyright2020  
            </Col>
            <Col sm={4}>
                Map
            </Col>
        </Row>
        </Container>
        
       
    )
}

    render(){
        return(
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/*">Home</Link>
                                </li>
                            <li>
                            <Link to="/Login">Login</Link>
                                </li>
                            <li>
                            <Link to="/Registration">Registration</Link>
                                </li>
                            <li>
                            <Link to="/User's List">User's List</Link>
                                </li>
                            <li>
                            <Link to="/Logout">Logout</Link>
                                </li>
                        </ul>
                    </nav>
                    <Nav
  activeKey="/home"
  onSelect={selectedKey => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>

                </div>

                <switch>
                    {/* <Route path="/">
                        <Home/>

                    </Route> */}

                    {/* <Route path="/Login" component={Login}/> */}

                    <Route exact path="/login">
                        <Login/>

                    </Route>

                    {/* <Route path="/Registration" component={Registration}/> */}

                    <Route exact path="/registration">
                        <Registration/>
                    </Route>
                </switch>
            </Router>
            
        )

        // JSX wrapping error ayo vane div banayera garne
       
       
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));

export default Footer



