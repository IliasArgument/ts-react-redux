import React, { useEffect } from 'react';
import { useActions } from '../hooks/userAction';
import { useTypedSelector } from '../hooks/userTypedSelector';


const TodoList: React.FC = () => {
    const {todos, error, loading, page, limit} = useTypedSelector(state => state.todo);

    const {fetchTodo, setTodoPage} = useActions()
    useEffect(() => {
        // dispatch(fetchUsers())
        fetchTodo(page, limit)
    }, [page])
    const pages = [1, 2, 3, 4, 5];
    if (loading) {
        return <p>Идут звгрузка ...</p>
    }
    if (error) {
        return <p>{error}</p>
    }
    return (
        <div>
            {
                todos.map(item => (
                    <p key={item.id}>{item.id} - {item.title}</p>
                ))
            }
            <div style={{display: 'flex', borderTop: '1px solid blue', paddingTop: '20px'}}>
                {
                    pages.map(p => (
                        <div key={p} 
                        onClick={() => setTodoPage(p)}
                        style={{border: p === page ? '2px solid green' : '1px solid grey', padding: '10px', cursor: 'pointer'}}>
                            {p}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default TodoList