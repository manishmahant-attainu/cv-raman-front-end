import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import userActions from "../../actions/userActions";
import UserInfoData from './UserInfoData';
const UserInfo = ({match, history}) => {

  const id = parseInt(match.params.id);
  const userInfo = useSelector(state => state.users.filter(user => user.id === id)[0]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.listing(id));
  }, [dispatch, id]);

  return (
    <UserInfoData userInfo={userInfo} />
  )
}

export default UserInfo;
