import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import logo from '../assets/Img/BHMS Logo.jpeg';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'hi' : (i18n.language === 'hi' ? 'gu' : 'en');
        i18n.changeLanguage(newLang);
    };

    const getLangLabel = () => {
        if (i18n.language === 'en') return 'English';
        if (i18n.language === 'hi') return 'हिंदी';
        return 'ગુજરાતી';
    };

    const navLinks = [
        // { name: t('home'), path: '/' },
        { name: t('holy_memories'), path: '/holy-memories' },
        { name: t('darshan'), path: '/darshan' },
        { name: t('events_title'), path: '/events' },
        { name: t('mandir_facilities'), path: '/facilities' },
        { name: t('contact_title'), path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                        <div className="w-10 h-10 bg-saffron rounded-full flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg border-2 border-gold">
                            <img src={logo} alt="Logo" className="w-full h-full object-cover" />
                        </div>
                        <span className={`font-serif font-bold text-xl tracking-wide ${scrolled ? 'text-maroon-dark' : 'text-maroon-dark'}`}>
                            Sakariya Hanumanji
                        </span>
                    </Link>

                    <div className="hidden xl:flex items-center space-x-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="text-maroon hover:text-saffron font-medium transition-colors duration-200 relative group text-sm uppercase tracking-wide"
                            >
                                {link.name}
                                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-saffron transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}

                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-1 px-3 py-1 rounded-full border border-maroon/20 text-maroon hover:bg-saffron/10 transition-colors text-sm font-medium"
                        >
                            <Globe size={16} />
                            <span>{getLangLabel()}</span>
                        </button>

                        <Link to="/donate" className="bg-saffron hover:bg-saffron-dark text-white px-5 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 text-sm uppercase tracking-wide">
                            {t('donate')}
                        </Link>
                    </div>

                    <div className="xl:hidden flex items-center gap-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-1 px-2 py-1 rounded-full border border-maroon/20 text-maroon text-xs font-medium"
                        >
                            {getLangLabel()}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-maroon hover:text-saffron transition-colors focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`xl:hidden absolute w-full bg-white shadow-xl transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100 ease-in' : 'max-h-0 opacity-0 overflow-hidden ease-out'}`}>
                <div className="px-4 pt-2 pb-6 space-y-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="block px-3 py-3 rounded-md text-base font-medium text-maroon hover:bg-warm-100 hover:text-saffron transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-4">
                        <Link to="/donate" className="block w-full bg-saffron hover:bg-saffron-dark text-white px-5 py-3 rounded-md font-medium shadow-md text-center">
                            {t('donate')}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
