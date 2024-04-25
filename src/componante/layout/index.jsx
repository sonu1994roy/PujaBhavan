
import Navbar from './navbar';
import Footer from './footer';
import LanguageSelector from '../languageSlector/langugeSelector';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <LanguageSelector />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
