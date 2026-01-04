import React, { useRef, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import gsap from 'gsap';

const Layout = () => {
    const mainRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(mainRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1, ease: "power2.out" }
        );
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-warm-50 text-maroon-dark font-sans selection:bg-saffron selection:text-white">
            <Navbar />
            <main ref={mainRef} className="flex-grow pt-20">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
