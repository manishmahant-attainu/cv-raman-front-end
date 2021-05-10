import { Link } from 'react-router-dom';
import { PATHS } from '../../config/webPath';

import './Header.scss';

const Header = (props) => {
    console.log(props);
    return (
        <header>
            <nav className="main-nav">
                <ul className="main-nav__list">
                    <li className="main-nav__list--item">
                        <Link className="main-nav__list--item-link" to={PATHS.HOME}>Home</Link>
                    </li>
                    <li className="main-nav__list--item">
                        <Link className="main-nav__list--item-link" to={PATHS.USERS}>Users</Link>
                    </li>
                    <li className="main-nav__list--item">
                        <Link className="main-nav__list--item-link" to={PATHS.PRODUCTS}>Products</Link>
                    </li>
                    <li className="main-nav__list--item">
                        <Link className="main-nav__list--item-link" to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
