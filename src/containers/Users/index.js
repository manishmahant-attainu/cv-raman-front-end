import { useState, useEffect } from 'react';
import { PATHS } from '../../config/webPath';
import './Users.css';

const Users = (props) => {

  const [state, setState] = useState({
    time: null,
    users: [], //to hold all the users
    userInfo: null, //to hold the info of single user
  });
  const fetchUser = (id) => {
    const path = id ?
      `https://jsonplaceholder.typicode.com/users/${id}` :
      'https://jsonplaceholder.typicode.com/users';

    fetch(path)
      .then(res => res.json())
      .then(data => {
        if (id) {
          setState((s)=>{
            return { ...s, userInfo: data }
          })
        } else {
          setState((s)=>({ ...s, users: data }))
        }
      })
  }

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setState((s)=>({ ...s, time: (new Date()).toLocaleTimeString() }))
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getUserInfo = (id) => {
    props.history.push(`${PATHS.USERS}/${id}`);
  }


  return (
    <>
      <h1>Users: {state.time}</h1>
      <div className="container">
        <div className="user-container">
          {
            state.users.map((user, index) => {
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
}

export default Users;
