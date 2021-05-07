import Footer from "../../components/Footer"
import Header from "../../components/Header"

const Layout = (props) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}

export default Layout;
