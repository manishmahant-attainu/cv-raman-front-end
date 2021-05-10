import { useRouteMatch, useLocation, useHistory } from 'react-router-dom';
import { PATHS } from '../../config/webPath';
const UserInfoData = ({userInfo}) => {

    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();

    const goBack = () => {
        console.log(location, match, history);
        history.push(PATHS.USERS);
    }
    return (
        <div className="user-info">
            <h2 onClick={goBack}>{'<- Back'}</h2>
            <h2>User Info</h2>
            <div className="profile-card">
                <h1>{userInfo?.name}</h1>
                <address>{userInfo?.address?.city}</address>
            </div>
        </div>
    )
}

export default UserInfoData;
