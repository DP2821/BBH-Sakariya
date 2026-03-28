import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, Users } from 'lucide-react';

const Footer = () => {
    const { t } = useTranslation();
    const [visitorCount, setVisitorCount] = useState(null);

    useEffect(() => {
        const fetchVisitorCount = async () => {
            try {
                // Using a unique namespace and key for Sakariya Hanumanji Mandir
                const response = await fetch('https://api.counterapi.dev/v2/sakariya-hanumanji/Visits/up');
                const data = await response.json();
                if (data && data.data.up_count) {
                    setVisitorCount(data.data.up_count);
                }
            } catch (error) {
                // Silently fails as per user preference, no extra logging
            }
        };

        fetchVisitorCount();
    }, []);

    return (
        <footer className="bg-maroon-dark text-warm-50 pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Column 1: About */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-maroon-dark font-serif font-bold text-xl">
                                H
                            </div>
                            <span className="font-serif font-bold text-xl tracking-wide text-gold-light">
                                {t('brand_name')}
                            </span>
                        </div>
                        <p className="text-warm-100/80 mb-6 max-w-sm">
                            {t('footer_about_text')}
                        </p>
                        <div className="flex space-x-4">
                            <a target='_' href="https://www.facebook.com/sakariyahanuman" className="bg-white/10 p-2 rounded-full hover:bg-saffron transition-colors"><Facebook size={18} /></a>
                            {/* <a target='_' href="#" className="bg-white/10 p-2 rounded-full hover:bg-saffron transition-colors"><Twitter size={18} /></a> */}
                            <a target='_' href="https://www.instagram.com/sakariya_hanuman" className="bg-white/10 p-2 rounded-full hover:bg-saffron transition-colors"><Instagram size={18} /></a>
                            <a target='_' href="https://www.youtube.com/c/SakariyaHanuman" className="bg-white/10 p-2 rounded-full hover:bg-saffron transition-colors"><Youtube size={18} /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="font-serif font-bold text-lg text-gold-light mb-4">{t('quick_links')}</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-warm-100/80 hover:text-gold transition-colors">{t('home')}</Link></li>
                            <li><Link to="/darshan" className="text-warm-100/80 hover:text-gold transition-colors">{t('darshan')}</Link></li>
                            <li><Link to="/events" className="text-warm-100/80 hover:text-gold transition-colors">{t('events_title')}</Link></li>
                            <li><Link to="/facilities" className="text-warm-100/80 hover:text-gold transition-colors">{t('mandir_facilities')}</Link></li>
                            <li><Link to="/donate" className="text-warm-100/80 hover:text-gold transition-colors">{t('make_donation')}</Link></li>
                            <li><Link to="/contact" className="text-warm-100/80 hover:text-gold transition-colors">{t('contact_title')}</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h3 className="font-serif font-bold text-lg text-gold-light mb-4">{t('contact_title')}</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-saffron flex-shrink-0 mt-1" size={18} />
                                <span className="text-warm-100/80">Sakariya, Modasa, Gujarat 383315</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-saffron flex-shrink-0" size={18} />
                                <span className="text-warm-100/80">+91 79840 95771</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-saffron flex-shrink-0" size={18} />
                                <span className="text-warm-100/80">sakariyahanumanji@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
                    <div className="text-center md:text-left">
                        <p>© {new Date().getFullYear()} {t('brand_name')} {t('copyright')}</p>
                        <p className="mt-1">{t('slogan')}</p>
                    </div>

                    {visitorCount !== null && (
                        <div className="bg-white/5 px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 text-gold-light hover:bg-white/10 transition-colors cursor-default group">
                            <Users size={16} className="text-saffron group-hover:scale-110 transition-transform" />
                            <span className="font-medium">{t('visitors')}:</span>
                            <span className="text-white font-mono tracking-wider">{visitorCount.toLocaleString()}</span>
                        </div>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
