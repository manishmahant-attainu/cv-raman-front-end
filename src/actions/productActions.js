import { productsType } from '../actionTypes';

const productActions = {
  productList: search => (dispatch, getState) => {
    console.log(search);
    console.log(getState());
    const path = 'https://fakestoreapi.com/products';
    return fetch(path)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: productsType.list,
          payload: data
        });
      });
  },
};

export default productActions;
