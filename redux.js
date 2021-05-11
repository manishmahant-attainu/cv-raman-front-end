// Redux

// It is a predictable state container

// It has a store, a reducer and actions

// Actions are performed which triggers reducer and reducer
// updates the store


// These Statements follow when we use React with Redux
// React Compponent State !== Redux Store State

// React Component State is lost when component is unmounted
// BUT
// Redux Store State is lost when page is reloaded


const redux = require('redux');

const createStore = redux.createStore;

const initialState = {
    counter: 0,
    data: {}
};

// can't we write state = initialState ?
const reducer = (state,action) => {
    console.log('reducer state ==>', state);
    console.log('reducer action ==>', action);
    state = state || initialState;
    if(action.type === 'INCREMENT') {
        return {
            counter: state.counter + 1,
            data: action.payload || state.data
        }
    }
    if(action.type === 'DECREMENT') {
        return {
            counter: state.counter - 1,
            data: action.payload || state.data
        }
    }
    console.log('initial state ==>',state);
    return state;
}

const incrementAction = payload => ({
    type: 'INCREMENT',
    payload
});

const decrementAction = payload => ({
    type: 'DECREMENT',
    payload
});

const store = createStore(reducer);

console.dir(store);

store.subscribe(()=>{
    console.log('LISTENING TO THE CHANGES ==> ',store.getState());
});

// Action must be a plain object
store.dispatch(incrementAction({name: "Manish"}));

store.dispatch(incrementAction());

store.dispatch(incrementAction());

store.dispatch(decrementAction());

store.dispatch({
    type: 'NON_EXISTING'
});

