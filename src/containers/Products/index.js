import { connect } from 'react-redux';
import { decrementAction } from '../../actions';
const Products = (props) => {
    console.log(props);
    return (
        <>
            <h1>Products: {props.count}</h1>
            <button
                onClick={()=>props.dispatch(decrementAction())}
            >
                Buy
            </button>
        </>
    )
};

const mapStateToProps = (storeData) => ({count: storeData.counter})

export default connect(mapStateToProps)(Products);
