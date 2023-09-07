import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const PageLayout = () => {
    return (
        <>
            <Header />
            <ScrollToTop />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
 
export default PageLayout;