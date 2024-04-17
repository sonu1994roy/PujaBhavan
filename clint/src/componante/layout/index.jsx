
import Navbar from './navbar';
import Footer from './footer';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
