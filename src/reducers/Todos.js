function Todo(state = {}, action){
    switch(action.type){
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                complete: false
            }
        case 'TOGGLE_TODO':
            if(state.id !== action.id){
                return state
            }
            return Object.assign({},state,{complete: !state.complete})
        default:
            return state
    }
}

function Todos(state = [], action){
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                Todo(undefined,action)
            ]
        case 'TOGGLE_TODO':
            return state.map((t) => Todo(t,action))
        default:
            return state
    }
}

export default Todos