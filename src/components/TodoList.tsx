import React from 'react';

import {TodoItems} from './TodoItems'
import {TODOS,TOGGLETODOS} from '../typings'

interface ToDoList{
    todos:Array<TODOS>
    toggleTodos:TOGGLETODOS
}

export const TodoList:React.FC<ToDoList>=({todos,toggleTodos})=>{

    return(
        <ul>
            {
                todos.map((todos)=><TodoItems key={todos.id} todos={todos} toggleTodos={toggleTodos}/>)
            }
        </ul>
    )
}

