import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getUsersAsync} from '../utils/ReduxUtils';

function UsersDisplay() {
  const users = useSelector((s) => s.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersAsync())
  }, [dispatch]);

  return (
    <div className="all-user-container">
      {
        users.map(user => <User key={user.id} user={user}/>)
      }
    </div>
  );
}

function User(props) {
  return (
    <div className="user-container">
      {
        props.user.name
      }
    </div>
  )
}

export default UsersDisplay;
