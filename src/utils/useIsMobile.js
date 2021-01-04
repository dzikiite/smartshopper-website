import { useState, useEffect } from 'react';

const getWindowWidth = () => {
    const { innerWidth: width } = window;
    return width;
}

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(getWindowWidth());

    useEffect(() => {
        const handleResize = () => setIsMobile(getWindowWidth());

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        };
    }, []);

    if (isMobile < 760) return true
    else return false;
}

export default useIsMobile;