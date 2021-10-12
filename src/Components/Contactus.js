import React, { Component } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap-floating-label';
import Footer from './Footer';
import Navbarcomponent from './Navbarcomponent';
const regexname = /^[a-zA-Z]+$/;
const regexemail = /\S+@\S+\.\S+/;;
const regextmobile = /^[0-9]{10}$/;
const regexpassword = /^([a-zA-Z0-9_-]){3,50}$/
export class Contactus
    extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            mobile: "",
            comment: "",
            confirm_password: "",
            errorname: "",
            erroremail: "",
            errormobile: "",
            errorpassword: "",
            errorconfirmpassword: "",
            errorcomment:"",
            status: 0
        }
        this.handler = this.handler.bind(this)
        this.submit = this.submit.bind(this)
    }

    handler = (event) => {
        console.log(event)
        const name = event.target.name;
        const value = event.target.value;
        if (name == "name") {

            if (!regexname.test(value)) {
                this.setState({ errorname: "name error" })

            }
            else {
                this.setState({ errorname: "" })
            }
        }
        if (name == "email") {

            if (!regexemail.test(value)) {
                this.setState({ erroremail: "email error" })
            }
            else {
                this.setState({ erroremail: "" })
            }
        }
        if (name == "mobile") {
            if (!regextmobile.test(value)) {
                this.setState({ errormobile: "mobile error" })
            }
            else {
                this.setState({ errormobile: "" })
            }
        }
        
        if (name == "comment") {
            if (value =="") {
                this.setState({ errorcomment: "comment cannot be empty" })
            }
            else {
                this.setState({ errorcomment: "" })
            }
        }
        this.setState({ [name]: value });
    }
    submit = () => {
        if (this.state.name != "" && this.state.email && this.state.mobile && this.state.password && this.state.confirm_password) {
            if (this.state.errorname == "" && this.state.erroremail && this.state.errormobile && this.state.errorpassword && this.state.errorconfirmpassword) {
                alert("submit successful");
            }
            else {
                alert("error field");
            }
        }
        else {
            alert("empty field");
        }
    }
    render() {
        
        return (
            <>
            <Navbarcomponent />
            <div className="parentchild container block-example border border-dark p-4 mb-4 mt-4 " style={{
                background: 'url("../images/contactus.jpg")',
                backgroundSize: "100% 100%", width: "400px"
            }}
            id="parentchild"
            
            >
                <h1>Contactus
                </h1>
                <Form onSubmit={this.submit} >
                    <Form.Group className="mb-3" controlId="formGroupusername">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" name="name" onChange={this.handler} autoComplete="none" />
                        {this.state.errorname != "" ? <Alert className="mt-2" variant="warning">{this.state.errorname}</Alert> : <p></p>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.handler} />
                        {this.state.erroremail != "" ? <Alert className="mt-2" variant="warning">{this.state.erroremail}</Alert> : <p></p>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupmobile">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type="text" placeholder="Enter Mobile" name="mobile" onChange={this.handler} />
                        {this.state.errormobile != "" ? <Alert className="mt-2" variant="warning">{this.state.errormobile}</Alert> : <p></p>}
                    </Form.Group>
                    
                    <Form.Label>Comment</Form.Label>
                    <FloatingLabel controlId="floatingTextarea2" label="Enter Comments">
                    <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '700px'}}
                    name="comment"
                    />
                    </FloatingLabel>
                    {this.state.errorcomment != "" ? <Alert className="mt-2" variant="warning">{this.state.errorcomment}</Alert> : <p></p>}
                    <Button variant="primary" type ="submit" className="mb-4">
                    Submit
                    </Button>
                </Form>
            </div>
            <Footer />
            </>
        )
    }
}

export default Contactus

