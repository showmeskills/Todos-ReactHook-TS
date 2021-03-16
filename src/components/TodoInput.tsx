import React,{useState,ChangeEvent,MouseEvent} from 'react';

import {ADDTODO} from '../typings/'

interface IProps{
    addTodo:ADDTODO
}

export const TodoInput:React.FC<IProps>=(
    {addTodo}
)=>{
    const [newTodo,setNewTodo] = useState('')

    const handleInput = (e:ChangeEvent<HTMLInputElement>)=>{
        setNewTodo(e.target.value)
    }

    const hanldeClick = (e:MouseEvent<HTMLButtonElement>)=>{
        addTodo(newTodo)
        setNewTodo('')
        e.preventDefault()
    }
    return(
        <div>
            <input type='text' value={newTodo} onChange={handleInput}/>
            <button onClick={hanldeClick}>add todos</button>
        </div>
    )
}