import { useEffect } from 'react';
import { connect } from 'react-redux';
import counterActions from '../../actions/counterActions';
import productActions from '../../actions/productActions';


// 1st we cannot pass function in dispatch
// 2nd is there any way to pass function in dispatch?
  // Yes and Use custom middleware for async actions.

// Why to pass functions in dispatch?

const Products = (props) => {
    const dispatch = props.dispatch;
    useEffect(()=>{
      const search = `?q=pen`;
      dispatch(productActions.productList(search));
    },[dispatch]);

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
