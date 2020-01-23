import React, {Component} from 'react'

import {
    Container,
    Form,
    Button,
    Input,
     Col
} from 'reactstrap'


class Register extends Component {
    
    render()
    {
       
        return (

            <Container>
                <Col md="6" className="register ">
                <h1 className="m-2 text-center">Register</h1>

                <Form>

                    <FormGroup>

                        <div>
                            <input
                                type="file"
                                name="avatar"/>
                                
                        </div>

                    </FormGroup>
                    <FormGroup>
                        {/*
                        <Input type="file" className="form-control" onChange={this.handleFileSelected}/> */}

                        <Input
                            type="text"
                            name="fullName"
                            className="form-control" placeholder="Full Name"/>
                          

                    </FormGroup>
                    <FormGroup>

                        <Input
                            type="text"
                            name="address1"
                            className="form-control "placeholder="Address"/> 
                           
                    </FormGroup>
                    <FormGroup>

                        <Input
                            type="text"
                            name="address2"
                            className="form-control " placeholder="Address2"/>
                    </FormGroup>

                    <FormGroup>
                        <FormGroup>

                            <Input
                                type="text"
                                name="address3"
                                className="form-control " placeholder="Address3"/> 
                        </FormGroup>

                        <FormGroup>

                            <Input
                                type="text"
                                name="phone"
                                className="form-control "placeholder="Phone Number"/> 
                        </FormGroup>
                        <Input
                            type="text"
                            name="email"
                            className="form-control" placeholder="Email"/> 
                    </FormGroup>
                    <FormGroup>

                        <Input
                            type="Password"
                            name="password"
                            className="form-control"placeholder="Password"/> 
                    </FormGroup>

                    <Button varient="primary" type="submit">Submit</Button>
                </Form>
                </Col>
            </Container>
        )
    }
}
export default Register

