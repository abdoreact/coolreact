import React from 'react';
import {TodoContext} from '../context/TodoContextProvider'
export default class extends React.Component{

    state={
        todo:""
    }
    handleChange = e => {
        this.setState({
            todo:e.target.value
        })
    }
    render(){
        return(
            <TodoContext.Consumer>{todoContext => {
                return(
                    <form id='form' onSubmit={e => {
                        e.preventDefault()
                        todoContext.addTodo(this.state.todo)
                        this.setState({
                            todo:""
                        })
                    }}>
                        <input type='text' value={this.state.todo}onChange={this.handleChange} required/>
                        <button>Submit</button>
                    </form>
                )
            }}
            </TodoContext.Consumer>
        )
    }
}