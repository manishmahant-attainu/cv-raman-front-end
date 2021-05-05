import { Component } from 'react';
import Profile from '../components/Profile';

export default class App extends Component {
    state = {
        showProfile: true,
    }

    componentDidMount() {
        // console.log('componentDidMount');
    }

    componentDidUpdate() {
        // console.log('componentDidUpdate');
    }

    render() {
        console.log('Render & Re-render')
        return (
            <>
                <h1>Life Cycle Methods</h1>
                <button
                    type="button"
                    onClick={()=>this.setState({showProfile: !this.state.showProfile})}
                >
                    Toggle Profile
                </button>
                { this.state.showProfile && <Profile />} 
            </>
        )
    }
}
