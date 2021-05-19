import { useHistory } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PATHS from '../../config/webPath';
const NavMenu = (props) => {
  const {
    anchorEl,
    menuId,
    isMenuOpen,
    handleMenuClose
  } = props

  const history = useHistory();

  const onProfileClick = (e) => {
    handleMenuClose(e);
    history.push(PATHS.PROFILE);
  }

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={onProfileClick}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  )
};

export default NavMenu;
