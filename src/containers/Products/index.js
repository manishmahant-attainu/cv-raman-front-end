import { connect } from 'react-redux';
import counterActions from '../../actions/counterActions';
const Products = (props) => {
    console.log(props);
    return (
        <>
            <h1>Products: {props.count}</h1>
            {
                props.count > 0 &&
                <button
                    onClick={()=>props.dispatch(counterActions.decrement())}
                >
                    Buy
                </button>
            }
        </>
    )
};

const mapStateToProps = (storeData) => ({count: storeData.counter})

export default connect(mapStateToProps)(Products);
