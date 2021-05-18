import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import counterActions from '../../actions/counterActions';
import productActions from '../../actions/productActions';
import ProductItem from '../../components/ProductItem';

import './Products.scss';

// 1st we cannot pass function in dispatch
// 2nd is there any way to pass function in dispatch?
  // Yes and Use custom middleware for async actions.

// Why to pass functions in dispatch?

const Products = (props) => {
    const dispatch = useDispatch();
    
    const count = useSelector(storeData => storeData.counter);
    const products = useSelector(storeData => storeData.products);

    useEffect(()=>{
      const search = `?q=pen`;
      dispatch(productActions.productList(search));
    },[dispatch]);

    const buyItem = useCallback(() => dispatch(counterActions.decrement()),[dispatch]);

    return (
        <>
            <h1>Products: {count}</h1>
            <section className="product-container">
            {
                products.map(product=>{
                    return (
                        <ProductItem key={product.id} product={product} buyItem={buyItem}/>
                    );
                })
            }
            </section>
        </>
    )
};

// const mapStateToProps = (storeData) => ({count: storeData.counter, products: storeData.products})
// connect()(Component)
// export default connect(mapStateToProps)(Products);
export default Products;
