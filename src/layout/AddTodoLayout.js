import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../action'
import { Row, Col, Form, Button} from 'react-bootstrap'

function AddTodoLayout({dispatch}){
    let inputTodo = ''

    return (
        <Row className="shadow p-3 mb-3 bg-white rounded">
            <Form className="w-100">
                <Form.Group as={Row} controlId="addTodoForm">
                    <Col sm={10}>
                        <Form.Control 
                            type="text"
                            ref={node => { inputTodo = node }}
                            placeholder="add todo item to it." />
                    </Col>
                    <Col className="p-0">
                        <Button variant="warning" onClick={(e) => {
                            e.preventDefault()
                            if(!inputTodo.value){
                                return
                            }
                            dispatch(addTodo(inputTodo.value))
                            inputTodo.value = ''
                        }}>Add Todo</Button>
                    </Col>
                </Form.Group>
            </Form>
        </Row>
    )
}

export default connect()(AddTodoLayout)