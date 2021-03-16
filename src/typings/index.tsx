export type TODOHEADER = string;

export type TODOS = {
    id: number;
    content: string;
    complete: boolean;
}

export type TOGGLETODOS = (selectedTodo: TODOS) => void

export type ADDTODO = (newTodo:string) =>void

export type ID = number;