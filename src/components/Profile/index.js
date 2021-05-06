import { useState, useEffect } from 'react';
import './Profile.css';

const Profile = () => {

  const [state, setState] = useState({
    time: null,
    users: [], //to hold all the users
    userInfo: null, //to hold the info of single user
    selectedUser: null, //to hold id for selected user
  });

  // For reference
  // useEffect(()=>{
  //   console.log('blank dependency array then it works as a componentDidMount');
  // },[]);

  // useEffect(()=>{
  //   console.log('no dependency array then it works as a componentDidUpdate');
  // });

  // useEffect(()=>{
  //   console.log(`passed a dependency state.time: ${state.time}`);
  // },[state.time]);

  // useEffect(()=>{
  //   console.log(`passed a dependency state.selectedUser: ${state.selectedUser}`);
  // },[state.selectedUser, state.time]);


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
      console.log((new Date()).toLocaleTimeString())
      setState((s)=>({ ...s, time: (new Date()).toLocaleTimeString() }))
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if(state.selectedUser) fetchUser(state.selectedUser);
  }, [state.selectedUser]);


  const getUserInfo = (id) => {
    //This is when we have all the data
    // const userInfo = state.users.filter(user => user.id === id);
    // if(userInfo.length) {
    //     setState({userInfo: userInfo[0]})
    // }
    //OR
    //this is when we have to fetch user info from API
    // fetchUser(id);
    //OR
    setState({ ...state, selectedUser: id })
  }


  return (
    <>
      <h1>Profile: {state.time}</h1>
      <div className="container">
        <div className="user-container">
          <h2>User List</h2>
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
        <div className="user-info">
          <h2>User Info</h2>
          <div className="profile-card">
            <h1>{state.userInfo?.name}</h1>
            <address>{state.userInfo?.address?.city}</address>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile;
