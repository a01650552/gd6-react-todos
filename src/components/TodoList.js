import React, { Component } from 'react';
import {Button, Table} from 'react-bootstrap';
import Todo from './Todo';
import axios from 'axios'
import Create from './Create'


class TodoList extends Component {
    constructor() {
        super()
        this.state = {
            todos: null,
            description: ''
        }

        this.displayTodos = this.displayTodos.bind(this)
        this.getTodos = this.getTodos.bind(this)
        this.submitTodo = this.submitTodo.bind(this)
        this.deleteTodos = this.deleteTodos.bind(this)
        this.markAsDone = this.markAsDone.bind(this)
    }

    componentDidMount(){
        this.getTodos()
    }

    submitTodo(description) {
        
        this.setState({
            description: description
        })

        axios.post('http://localhost:4000/tasks', {
            description: description
        }).then(res => {
            console.log(res)
            this.getTodos()
        }).catch(error => {
            console.log(error)
        })

    }

    getTodos(){
        axios.get('http://localhost:4000/tasks').then(response =>{
            this.setState({
                todos: response.data
            }, () =>{
                this.displayTodos()
            })
        }).catch(error =>{
            console.log(error);
        })
    }

    displayTodos() {
    
        if(this.state.todos){
            return this.state.todos.map((todo, index) => (
                <Todo id={todo.id} description={todo.description} status={todo.status} key={index} deleteTodos={this.deleteTodos} markAsDone={this.markAsDone} />
            ));
        }

    }

    markAsDone(id) {
        axios.post(`http://localhost:4000/tasks/${id}/done`, {
            id: id
        }).then(res => {
            console.log(res)
            this.getTodos()
        }).catch(error => {
            console.log(error)
        })
    }

    deleteTodos(id) {
        axios.post(`http://localhost:4000/tasks/${id}/delete`, {
            id: id
        }).then(res => {
            console.log(res)
            this.getTodos()
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
            <div>
                <Create submitTodo={this.submitTodo}/>

                <Table bordered className="tableWidth mx-auto">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Descripción</th>
                            <th>Status</th>
                            <th>Terminar</th>
                            <th>Borrar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.displayTodos()}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default TodoList;