import React, { useEffect } from 'react';
import { useActions } from '../hooks/userAction';
import { useTypedSelector } from '../hooks/userTypedSelector';


const UserList: React.FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.user);
    // const dispatch = useDispatch();
    const {fetchUsers} = useActions()
    useEffect(() => {
        // dispatch(fetchUsers())
        fetchUsers()
    }, [])
    if (loading) {
        return <p>Идут звгрузка ...</p>
    }
    if (error) {
        return <p>{error}</p>
    }
    return (
        <div style={{borderBottom: '1px solid grey', paddingBottom: '10px'}}>
            {
                users.map(item => (
                    <p key={item.id}>{item.name}</p>
                ))
            }
        </div>
    )
}
export default UserList;
