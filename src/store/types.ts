
export interface IReduxState {
    todos: ITodos;
}

export interface ITodos {
    todos: ITodo[];
}

export interface ITodo {
    title: string;
    completed: boolean;
}