import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import AddTodoLayout from './layout/AddTodoLayout'
import TodoListLayout from './layout/TodoListLayout'
import TitleLayout from './layout/TitleLayout'

class App extends Component {
  render(){
    return (
      <Container style={{ width: "40rem" }}>
        <TitleLayout />
        <AddTodoLayout />
        <TodoListLayout />
      </Container>
    );
  } 
}

export default App