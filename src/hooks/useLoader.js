import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import loaderAction from '../actions/loaderAction';

const useLoader = () => {
  const dispatch = useDispatch();
  const startLoader = useCallback(
    () => dispatch(loaderAction.start()),
    [dispatch]
  );
  const stopLoader = useCallback(
    () => dispatch(loaderAction.stop()),
    [dispatch]
  );

  return {
    startLoader,
    stopLoader
  };
};

export default useLoader;

