import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
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
                                Sakariya Hanumanji
                            </span>
                        </div>
                        <p className="text-warm-100/80 mb-6 max-w-sm">
                            Dedicated to Lord Hanuman, a place of peace, devotion, and supreme power.
                            Join us for Darshan and seek the blessings of Anjaniputra.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-saffron transition-colors"><Facebook size={18} /></a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-saffron transition-colors"><Twitter size={18} /></a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-saffron transition-colors"><Instagram size={18} /></a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-saffron transition-colors"><Youtube size={18} /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="font-serif font-bold text-lg text-gold-light mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-warm-100/80 hover:text-gold transition-colors">Home</Link></li>
                            <li><Link to="/darshan" className="text-warm-100/80 hover:text-gold transition-colors">Darshan Timings</Link></li>
                            <li><Link to="/events" className="text-warm-100/80 hover:text-gold transition-colors">Upcoming Events</Link></li>
                            <li><Link to="/facilities" className="text-warm-100/80 hover:text-gold transition-colors">Mandir Facilities</Link></li>
                            <li><Link to="/donate" className="text-warm-100/80 hover:text-gold transition-colors">Make a Donation</Link></li>
                            <li><Link to="/contact" className="text-warm-100/80 hover:text-gold transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h3 className="font-serif font-bold text-lg text-gold-light mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-saffron flex-shrink-0 mt-1" size={18} />
                                <span className="text-warm-100/80">Sakariya, Modasa, Gujarat 383315</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-saffron flex-shrink-0" size={18} />
                                <span className="text-warm-100/80">+91 82389 37447</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-saffron flex-shrink-0" size={18} />
                                <span className="text-warm-100/80">info@sakariyahanumanji.org</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 text-center text-sm text-white/50">
                    <p>© {new Date().getFullYear()} Sakariyar Hanumanji Mandir. All rights reserved.</p>
                    <p className="mt-1">Jay Shree Ram | Jay Hanuman</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
