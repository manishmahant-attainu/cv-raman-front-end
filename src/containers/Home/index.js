import { Component } from 'react';
import { connect } from 'react-redux';
import counterActions from '../../actions/counterActions';

// function authHoc() {
//     const isAuth = true;
//     return (WrappedComponent) => {
//         //doing redux thing here and then 
//         class AuthHoc extends Component {
//             render() {
//                 return <WrappedComponent  isAuth={isAuth} />
//             }
//         }
        
//     }
// }

class Home extends Component {

    render() { 
        console.log(this.props);
        const { decrement, increment } = counterActions;
        return (
            <>
                <h1>Home</h1>
                <div>
                    <button onClick={()=>this.props.dispatch(decrement())} className="btn">-</button>
                    <label>Count: {this.props.count}</label>
                    <button onClick={()=>this.props.dispatch(increment())} className="btn">+</button>
                </div>
            </>
        )
    }
}


//connect is your Higher Order Component(HOC)

// const connection = connect();
// export default connection(Home);
// OR
// connect()(Home)

const mapStateToProps = (storeData) => ({count: storeData.counter,})

export default connect(mapStateToProps)(Home);

