import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import useStyles from './SearchStyle';
import videoAction from '../../actions/videoAction';

const Search = () => {
  const dispatch = useDispatch();
  const [ search, setSearch ] = useState('');
  const classes = useStyles();

  const timer = useRef(null);
  //which gives immutable object, whoes value is persisted throughout the
  //lifecyce of the component

  const onSearchText = (e) => {
    clearTimeout(timer.current);
    setSearch(e.target.value);
    timer.current = setTimeout(() => {
      dispatch(videoAction.list(e.target.value));
    }, 600);
  }

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        value={search}
        onChange={onSearchText}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  )
};

export default Search;