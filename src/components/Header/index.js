import { Link } from 'react-router-dom';
import { PATHS } from '../../config/webPath';
const Header = (props) => {
    console.log(props);
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to={PATHS.HOME}>Home</Link></li>
                    <li><Link to={PATHS.PRODUCTS}>Products</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
