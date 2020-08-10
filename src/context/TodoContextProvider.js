import React, {createContext} from 'react';
export const TodoContext=createContext()
export default class extends React.Component{
    state = {
        todos:[]
    }
    addTodo = todo => {
        this.setState({
            todos:[...this.state.todos, {todo, id:Math.random()*Math.random()*Math.random().toString()}]
        })
    }
    removeTodo = id => {
        this.setState({
            todos:this.state.todos.filter(todo => todo.id === id)
        })
    }
    render(){
        return(
            <TodoContext.Provider value={{todos:this.state.todos, addTodo:this.addTodo, removeTodo:this.removeTodo}}> 
                {this.props.children}
            </TodoContext.Provider>
        )
    }
}