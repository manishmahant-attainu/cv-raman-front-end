import { useEffect, useState } from "react";

import UserInfoData from './UserInfoData';
const UserInfo = ({match, history}) => {

  const [ userInfo, setUserInfo ] = useState({});

  const fetchUser = (id) => {
    const path = `https://jsonplaceholder.typicode.com/users/${id}`
    fetch(path)
      .then(res => res.json())
      .then(data => {
        setUserInfo(data)
      })
  }

  useEffect(() => {
    fetchUser(match.params.id);
  }, [match.params.id])

  return (
    <UserInfoData userInfo={userInfo} />
  )
}

export default UserInfo;
