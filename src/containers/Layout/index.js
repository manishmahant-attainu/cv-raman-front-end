import { useRouteMatch } from 'react-router-dom';
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { PATHS } from '../../config/webPath';

const Layout = (props) => {
    
    const match = useRouteMatch();
    console.log(match);

    const showHeaderFooter = Object.values(PATHS).includes(match.path);

    return (
        <>
            {showHeaderFooter && <Header />}
            {props.children}
            {showHeaderFooter && <Footer />}
        </>
    )
}

export default Layout;
