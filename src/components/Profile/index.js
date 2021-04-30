const Profile = (props) => {

    // const renderName = () => {
    //     if(props.name) {
    //         return props.name;
    //     }
    //     return '______';
    // }

    return (
        // <h1>Hello my name is {renderName()}</h1>
        // <h1>Hello my name is {props.name ? props.name : '______'}</h1>
        <h1>Hello my name is {(props.firstName || props.lastName) ? `${props.firstName} ${props.lastName}`  : '______'}</h1>
    )
}

export default Profile;
