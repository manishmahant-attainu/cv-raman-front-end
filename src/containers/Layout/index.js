import { useLocation } from 'react-router-dom'
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { PATHS } from '../../config/webPath';

const Layout = (props) => {
    console.log(props)
    const location = useLocation();

    const showHeaderFooter = Object.values(PATHS).includes(location.pathname);

    return (
        <>
            {showHeaderFooter && <Header />}
            {props.children}
            {showHeaderFooter && <Footer />}
        </>
    )
}

export default Layout;
