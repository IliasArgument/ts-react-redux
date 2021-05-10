import axios from "axios"
import { Dispatch } from "redux"
import { UserActionTypes, UserAction } from "../../types/user"



export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => { // типизируем dispatch, указываем как тип useraction
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setTimeout(() => {
                    dispatch({
                        type: UserActionTypes.FETCH_USERS_SUCCESS,
                         payload: response.data
                        })
                },1000)
        } catch (e) {
            dispatch({
                 type: UserActionTypes.FETCH_USERS__ERROR,
                 payload: 'Произошла ошибка при загрузке !'
                })
        }
    }
}