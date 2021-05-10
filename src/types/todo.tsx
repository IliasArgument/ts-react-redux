export interface TodoState {
    todos: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum TodoActionTypes {
    FETCH_TODO = "FETCH_TODO",
    FETCH_SUCCESS_TODO = "FETCH_SUCCESS_TODO",
    FETCH_ERROR_TODO = "FETCH_ERROR_TODO",
    SET_TODO_PAGE = "SET_TODO_PAGE"
}

interface FetchTodoAction {
    type: TodoActionTypes.FETCH_TODO
}
interface FetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_SUCCESS_TODO;
    payload: any[];
}
interface FetchTodoErrorAction {
    type: TodoActionTypes.FETCH_ERROR_TODO
    payload: string;
}
interface SetTodoPage {
    type: TodoActionTypes.SET_TODO_PAGE;
    payload: number;
}
export type TodoAction = FetchTodoAction
 | FetchTodoSuccessAction 
 | FetchTodoErrorAction 
 | SetTodoPage;