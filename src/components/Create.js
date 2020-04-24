import React, { Component } from 'react';
import {Button, Form, Row, Col} from 'react-bootstrap';
import '../App.css';
import axios from 'axios';


class Create extends Component {
    constructor() {
        super()

        this.state = {
            description: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.sendTodo = this.sendTodo.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    sendTodo(e) {
        e.preventDefault();
        e.persist();
        this.props.submitTodo(this.state.description)
        this.setState({
            description: ''
        })
    }

    render() {
        return (
            <div className="create">
                <Form>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">Descripción</Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" name="description" placeholder="Descripción" onChange={this.handleChange} />
                        </Col>
                        <Col sm="2">
                            <Button variant="info" onClick={this.sendTodo}>Crear</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default Create;