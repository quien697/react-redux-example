let nextTodoId = 0

export function addTodo(text){
    return{
        type: "ADD_TODO",
        id: nextTodoId++,
        text: text
    }
}

export function toggleTodo(id){
    return{
        type: 'TOGGLE_TODO',
        id
    }
}

export function setFilter(filter){
    return{
        type: 'SET_FILTER',
        filter
    }
}