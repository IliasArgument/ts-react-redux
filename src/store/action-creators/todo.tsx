import axios from "axios"
import { Dispatch } from "redux"
import { TodoActionTypes, TodoAction } from "../../types/todo";

export const fetchTodo = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => { // типизируем dispatch, указываем как тип useraction
        try {
            dispatch({type: TodoActionTypes.FETCH_TODO})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: { _page: page, _limit: limit }
            });
                setTimeout(() => {
                    dispatch({
                        type: TodoActionTypes.FETCH_SUCCESS_TODO,
                         payload: response.data
                        })
                },1000)
        } catch (e) {
            dispatch({
                 type: TodoActionTypes.FETCH_ERROR_TODO,
                 payload: 'Произошла ошибка при загрузке !'
                })
        }
    }
}
export const setTodoPage = (page: number): TodoAction => {
    return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
}