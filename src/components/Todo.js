import React, { Component } from 'react';
import {Button, Table} from 'react-bootstrap';
import axios from 'axios';


class Todo extends Component {
    constructor() {
        super()

        this.deleteTodo = this.deleteTodo.bind(this)
        this.markAsDone = this.markAsDone.bind(this)
    }

    deleteTodo(){
        this.props.deleteTodos(this.props.id);
    }

    markAsDone(){
        this.props.markAsDone(this.props.id)
    }

    render() {
        return (
            <tr style={{backgroundColor: this.props.status == 'pending' ? 'white' : 'grey'}}>
                <td>{this.props.id}</td>
                <td>{this.props.description}</td>
                <td>{this.props.status}</td>
                <td>
                    {this.props.status == 'pending' ? (
                        <Button variant="info" onClick={this.markAsDone}>Terminar</Button>
                    ) : (
                        <Button variant="info" onClick={this.markAsDone} disabled>Terminar</Button>
                    )}
                    
                </td>
                <td><Button variant="info" onClick={this.deleteTodo}>Borrar</Button></td>
            </tr>
        )
    }
}

export default Todo;