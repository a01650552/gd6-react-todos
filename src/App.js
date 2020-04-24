import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import TodoList from './components/TodoList';
import Create from './components/Create';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>

            <TodoList />

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
