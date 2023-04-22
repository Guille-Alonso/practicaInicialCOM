import React, { useState } from 'react'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import axios from '../../config/db'
import { ToastContainer, toast } from 'react-toastify'

const Register = () => {
    const [user,setUser]= useState({
nombre:'',
email:'',
contraseña:''})

const manejadorEstado = (e) =>{
    setUser({
        ...user,
        [e.target.name]: e.target.value
    })
    console.log(user);
}

const enviarDatos = async (e)=>{
    e.preventDefault();
    try {
      const response = await axios.post('/usuarios',user)
console.log(response.data);
toast.success(response.data.message)
    } catch (error) {
        console.log(error);
    }
}

  return (
    <Container className='mt-5'>
      <Row>
        <Col xs={6}>
          <Form onSubmit={enviarDatos}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control name='nombre' value={user.nombre} onChange={manejadorEstado} type="text" placeholder="Pedro" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control name='email'  value={user.email} onChange={manejadorEstado} type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control name='contraseña'  value={user.contraseña} onChange={manejadorEstado} type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Registrar Usuario
            </Button>
          </Form>
        </Col>
      </Row>
      <ToastContainer/>
    </Container>
  );
}

export default Register