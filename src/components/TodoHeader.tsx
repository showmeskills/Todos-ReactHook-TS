import React from 'react';


import {TODOHEADER} from '../typings'
interface myTodoHeaders{
    todoHeader:TODOHEADER
}

export const TodoHeader:React.FC<myTodoHeaders> = ({
    todoHeader
})=>{
    return(
        <h1>
            {todoHeader}
        </h1>
    )
}