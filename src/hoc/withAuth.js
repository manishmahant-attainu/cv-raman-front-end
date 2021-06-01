import React from 'react';
import { useSelector } from 'react-redux';

// function authHoc() {
//   const isAuth = true;
//   return (WrappedComponent) => {
//     return () => {
//       return <WrappedComponent isAuth={isAuth} />
//     }
//   }
// }

const withAuth = (PassedComponent) => {
  // return class WithAuthHOC extends React.Component {
  //   render() {
  //     return (
  //       <PassedComponent {...this.props} auth={true} isAdmin={false} />
  //     );
  //   }
  // };
  return function UpdatedCoponent(props) {
    console.log('witAuth HOC ==>',props);
    const auth = useSelector(state => state.auth);
    return (
      <PassedComponent {...props} auth={auth} isAdmin={false} />
    );
  };
};

export default withAuth;
