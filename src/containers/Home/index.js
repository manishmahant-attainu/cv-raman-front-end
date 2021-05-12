import { Component } from 'react';
import { connect } from 'react-redux';
import { decrementAction, incrementAction } from '../../actions';

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
        return (
            <>
                <h1>Home</h1>
                
                <div>
                    <button
                        onClick={()=>this.props.dispatch({
                            type: 'data',
                            payload: {name: "CV Raman"}
                        })}
                        className="btn"
                    >
                        Data Dispatch
                    </button>
                </div>
                <br />
                <div>
                    <button onClick={()=>this.props.dispatch(decrementAction())} className="btn">-</button>
                    <label>Count: {this.props.count}</label>
                    <button onClick={()=>this.props.dispatch(incrementAction())} className="btn">+</button>
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

