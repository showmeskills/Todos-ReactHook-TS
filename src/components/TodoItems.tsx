import React from 'react';
import {TODOS,TOGGLETODOS} from '../typings'

import '../assets/index.css'

interface Iprops{
    todos:TODOS
    toggleTodos:TOGGLETODOS
}

export const TodoItems:React.FC<Iprops>=({todos,toggleTodos})=>{

    return(
        <li>
            <label className={todos.complete? 'completed' : ''}>
                <input type="checkbox" checked={todos.complete}
                    onChange={()=>toggleTodos(todos)}
                />
                    {todos.id}{todos.content}
            </label>
        </li>
    )
}
