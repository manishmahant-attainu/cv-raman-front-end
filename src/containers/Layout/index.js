import Footer from '../../components/Footer';
import AppNavBar from '../../components/AppNavBar';
import Loader from '../../components/Loader';
import ColorContext from '../../contexts/ColorContext';

const Layout = ({children}) => {

  return (
    <>
      <ColorContext.Provider value="primary">
        <Loader />
      </ColorContext.Provider>
      <ColorContext.Provider value="inherit">
        <AppNavBar />
        {children}
        <Footer />
      </ColorContext.Provider>
    </>
  );
};

export default Layout;
