import React,{Fragment,useState} from 'react';

import {TodoHeader,TodoInput,TodoList} from './components'


import {TODOHEADER,TODOS,TOGGLETODOS,ADDTODO,ID} from './typings'

const todoHeader:TODOHEADER = 'Welcome React tsx'

const initialTodos:Array<TODOS> = [
    {id:0,content:'eating',complete:false},
    {id:1,content:'working',complete:true}
]
let number:number = 2
let id:ID = number;

 

const App:React.FC=()=>{

    const [todos,setTodos] = useState(initialTodos)


    const toggleTodos:TOGGLETODOS= selectedTodo=>{
        const newTodos = todos.map(todo => {
            if(todo===selectedTodo){
                return{
                    ...todo,
                    complete:!todo.complete
                }
            }
            return todo;
        })
        setTodos(newTodos)
    }
    const addTodo:ADDTODO = newTodo=>{
        newTodo.trim() !== '' &&
    
        setTodos([...todos,{
            id:id++,
            content:newTodo,
            complete:false
        }])
    }


    return(
        <Fragment>
            <TodoHeader todoHeader={todoHeader}/>
            <TodoInput addTodo={addTodo}/>
            <TodoList todos={todos} toggleTodos={toggleTodos}/>
        </Fragment>
    )
}

export default App;