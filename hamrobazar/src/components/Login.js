import React, { Component } from 'react'
import {Container,Form,Label,FormGroup,Input,Button,FormText,Col} from 'reactstrap'
import{Link}from 'react-router-dom'
export default class Login extends Component {
   
    
    render() {
        return (
            <Container >
                <Col md={6} className="login">
            <h3 className="text-center m-2">Login Form</h3>
            <Form>
                <FormGroup>
                    <Label for='Email'>Email</Label>
                    <Input name='Email' id='Email' type='text'
                        />
                </FormGroup>
                <FormGroup>
                    <Label for='password'>Password</Label>
                    <Input type='password' name='password' id='password'/>
                </FormGroup>
                <Button color='primary' onClick={this.handleClick}>Login!</Button>
                <FormText>Not yet a user? <Link to='/register'>Register here!</Link> </FormText>
            </Form>
            </Col>
        </Container>
        )
    }
}
