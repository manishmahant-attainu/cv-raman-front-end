import { Component } from 'react';

import './Profile.css';
// When this component is rendered display user info with the help of an API
// Min Req: 1. API  2. A method to call that API

//https://jsonplaceholder.typicode.com/users

export default class Profile extends Component {
    state = {
        time: null,
        users: [], //to hold all the users
        userInfo: null, //to hold the info of single user
        selectedUser: null, //to hold id for selected user
    }

    fetchUser = (id) => {
        const path = id ?
            `https://jsonplaceholder.typicode.com/users/${id}` :
            'https://jsonplaceholder.typicode.com/users';
        
        fetch(path)
            .then(res=>res.json())
            .then(data=>{
                if(id) {
                    this.setState({userInfo: data})
                } else {
                    this.setState({users: data})
                }
            })
    }

    componentDidMount() {
        // console.log('Profile componentDidMount');
        this.fetchUser();
        this.timer = setInterval(() => {
            this.setState({time: (new Date()).toLocaleTimeString()})
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.selectedUser !== this.state.selectedUser) {
            this.fetchUser(this.state.selectedUser);
        }
    }

    componentWillUnmount() {
        console.log('Profile componentWillUnmount');
        clearInterval(this.timer);
    }

    getUserInfo = (id) => {
        //This is when we have all the data
        // const userInfo = this.state.users.filter(user => user.id === id);
        // if(userInfo.length) {
        //     this.setState({userInfo: userInfo[0]})
        // }
        //OR
        //this is when we have to fetch user info from API
        // this.fetchUser(id);
        //OR
        this.setState({selectedUser:id})
    }

    render() {
        
        return (
            <>
                <h1>Profile: {this.state.time}</h1>
                <div className="container">
                <div className="user-container">
                    <h2>User List</h2>
                    {
                        this.state.users.map((user,index) => {
                            return (
                                <div
                                    className="profile-card"
                                    key={index}
                                    onClick={() => this.getUserInfo(user.id)}
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
                        <h1>{this.state.userInfo?.name}</h1>
                        <address>{this.state.userInfo?.address?.city}</address>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
