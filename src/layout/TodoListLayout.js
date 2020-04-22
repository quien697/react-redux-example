import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../action'
import { setFilter } from '../action'
import { Row, ButtonGroup, Button, ListGroup } from 'react-bootstrap'

function TodoListLayout({todos, handleToggleTodo, handleSetFilter}){
    return (
        <Row className="border justify-content-center shadow p-3 mb-5 bg-white rounded">
          <ButtonGroup aria-label="filterButtonGroup" onClick={(e)=> handleSetFilter(e.target.name)}>
            <Button name="ALL" variant="warning">All</Button>
            <Button name="ACTIVE" variant="warning">Active</Button>
            <Button name="COMPLETE" variant="warning">Complete</Button>
          </ButtonGroup>
          <ListGroup className="w-100 mt-3 ">
              {todos.map(todo => 
                <ListGroup.Item
                  variant={todo.complete?"warning":"light"}
                  key={todo.id}
                  onClick={() => handleToggleTodo(todo.id)}
                >{todo.text}</ListGroup.Item>)}
          </ListGroup>
        </Row>
    )
}

const getTodos = (todos, filter) => {
  switch(filter){
    case 'ALL':
      return todos
    case 'ACTIVE':
      return todos.filter((t) => !t.complete)
    case 'COMPLETE':
      return todos.filter((t) => t.complete)
  }
}

const mapStateToProps = (state) => {
  console.log(state.todos)
  return {
    todos: getTodos(state.todos,state.filter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleTodo: (id) => {
      dispatch(toggleTodo(id))
    },
    handleSetFilter: (filter) => {
      dispatch(setFilter(filter))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoListLayout)