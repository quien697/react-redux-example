// const initState = {
//     todos: [],
//     filter: "All"
// }

// function createGetId(){
//     let id=0
//     return function(){ return id++ }
// }

// const getId = createGetId()

// const todoList = (state = initState, action) => {
//     switch(action.type){
//         case 'ADD_TODO':
//             {
//                 const todos = [
//                     ...state.todos,
//                     {
//                         id: getId(),
//                         title: action.title,
//                         complete: false
//                     }
//                 ]
//                 const newState = Object.assign({},state,{ todos: todos })
//                 return newState
//             }
//         case 'update':
//             let newTodos = []
//             let newTodo = action.todo
//             for(let i=0; i<state.todos.length; i++){
//                 let curTodo = state.todos[i]
//                 if(curTodo.id === newTodo.id){
//                     newTodos.push(newTodo)
//                 }else{
//                     newTodos.push(curTodo)
//                 }
//             }

//             const newState = Object.assign({},state,{ todos: newTodos })
//             return newState
//         case 'filter':
//             return Object.assign({},state,{ filter: action.filter })
//         default:
//             return state
//     }
// }

// export default todoList

import { combineReducers } from 'redux'
import todos from './Todos'
import filter from './Filter'

const TodoApp = combineReducers({
    todos,
    filter
})

export default TodoApp