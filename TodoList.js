import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todo, handleDelete, handleToggle}) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todo.map((todo,i) => (
                    <TodoListItem key={todo.id} todo={todo} index={i} handleDelete={handleDelete} handleToggle={handleToggle} />
                ))
            }
        </ul>
    )
}
