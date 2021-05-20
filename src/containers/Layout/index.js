import Footer from '../../components/Footer';
import AppNavBar from '../../components/AppNavBar';
import Loader from '../../components/Loader';

const Layout = ({children}) => {

  return (
    <>
      <Loader />
      <AppNavBar />
      {children}
      <Footer />
    </>
  )
};

export default Layout;
