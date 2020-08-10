import React from 'react'
import {TodoContext} from '../context/TodoContextProvider'
export default class extends React.Component{
    render(){
        return(
            <TodoContext.Consumer>{context => {
                return(
                    <div>
                        {context.todos.length ? context.todos.length > 1 ? <h1>You have {context.todos.length} todos.</h1> : <h1>You have {context.todos.length} todo.</h1> : <h1>You have no todos! Woohoo!</h1>}
                    </div>
                )
            }}
            </TodoContext.Consumer>
        )
    }
}