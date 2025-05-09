import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const handleBeforePopState = () => {
            window.scrollTo(0, 0);
            return true;
        };

        window.addEventListener('popstate', () => {
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 0);
        });

        return () => {
            window.removeEventListener('popstate', handleBeforePopState);
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop; 