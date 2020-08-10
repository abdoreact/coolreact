import React from 'react'
import {TodoContext} from '../context/TodoContextProvider'
export default class extends React.Component{
    render(){
        return(
            <TodoContext.Consumer>{context => {
                return(
                    <ul>
                        {context.todos.map(todo => (<li key={todo.id}>{todo.todo}</li>))}
                    </ul>
                )
            }}
            </TodoContext.Consumer>
        )
    }
}