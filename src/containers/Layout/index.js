import Footer from '../../components/Footer';
import AppNavBar from '../../components/AppNavBar';
import Box from '@material-ui/core/Box';

const Layout = ({children}) => {
  return (
    <Box>
      <AppNavBar />
      {children}
      <Footer />
    </Box>
  )
};

export default Layout;
