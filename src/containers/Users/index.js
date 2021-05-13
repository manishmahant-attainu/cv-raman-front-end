import { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { PATHS } from '../../config/webPath';
import userActions from '../../actions/userActions';
import './Users.css';

const Users = (props) => {

  const [ time, setTime ] = useState(null);

  const { dispatch } = props;
  const fetchUser = useCallback((id) => {
    const path = 'https://jsonplaceholder.typicode.com/users';
    fetch(path)
      .then(res => res.json())
      .then(data => {
        dispatch(userActions.userList(data));
      })
  },[ dispatch ]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((new Date()).toLocaleTimeString())
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getUserInfo = (id) => {
    props.history.push(`${PATHS.USERS}/${id}`);
  }

  return (
    <>
      <h1>Users: {time}</h1>
      <div className="container">
        <div className="user-container">
          {
            props.users.map((user, index) => {
              return (
                <div
                  className="profile-card"
                  key={index}
                  onClick={() => getUserInfo(user.id)}
                >
                  <h1>{user.name}</h1>
                  <address>{user.address.city}</address>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
};

const mapStateToProps = (state) => ({users: state.users});

export default connect(mapStateToProps)(Users);
