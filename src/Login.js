import React from 'react';
import "./App.css";
import { Form , Label , Button, Control , Group , Col} from "react-bootstrap";


export default class Login extends React.Component {
    constructor (props){
        super(props);
         this.handleChange = this.handleChange.bind(this);
         this.handleChangepass = this.handleChange.bind(this);
    }
    state  ={
            ememail: false,
            empass : false ,
            message: false,
            email : "",
            pass : ""
        }
    
     // Crate function Validation
    ValidationValue = (event) => {    
        this.setState({ email: this.refs.email.value ,  pass: this.refs.pass.value });
        if (this.state.email === "") {
            this.state.ememail = true; 
        } else if (this.state.pass==="") {
            this.state.empass = true;  
        } else {
             this.state.ememail = false; 
              this.state.empass = false;           
              if(this.state.email==="veasna@gmail.com" && this.state.pass ==="123"){
                     alert("Log In Successfull");
              }else{
                     alert("Please Try Again");
              }
        }
    }   
    //Create funtion Login Event on Click Buttom Log In
    login = (event) => {
        this.ValidationValue ();  
       //alert(this.state.value);
    }
    //Create Handle
      handleChange(event) {
        this.setState({
             email : event.target.value
            });
  }
     handleChangepass(event) {
        this.setState({pass: event.target.value});
  }

    render() {
        const { email, pass, ememail, empass }= this.state;
        return (
            < div className="container">
                <div className="row justify-content-center mt-5">
                        <Col md={6} sm={6} xl={6}>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control  ref="email"  type="email" placeholder="Enter email" />
                                {this.state.ememail ? <Form.Text className="text-danger">plese Enter Email</Form.Text> : null}
                            </Form.Group>
                               {/* <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control value={this.state.value} name="email" onChange={this.handleChange}  type="email" placeholder="Enter email" />
                                {this.state.ememail ? <Form.Text className="text-danger">plese Enter Email</Form.Text> : null}
                            </Form.Group> */}

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control ref="pass" type="password" placeholder="Password" />
                                {this.state.empass ? <Form.Text className="text-danger">plese Enter Password</Form.Text> : null}
                            </Form.Group>   

                              {/* <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={this.handleChangepass}  type="password" placeholder="Password" />
                                {this.state.empass ? <Form.Text className="text-danger">plese Enter Password</Form.Text> : null}
                            </Form.Group>  */}

                            <Button xl="auto" variant="primary text-center" onClick={this.login}>
                                Log In
                            </Button>                                                      
                        </Form>                               
                        </Col>    
                    </div>
             </div>
        )
   }
}