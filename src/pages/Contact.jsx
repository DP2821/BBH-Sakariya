import React from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-warm-50 min-h-screen py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-serif font-bold text-maroon-dark text-center mb-12">
                    {t('contact_title')}
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="bg-maroon-dark text-warm-50 rounded-2xl p-8 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-saffron opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

                        <h2 className="text-2xl font-bold text-gold mb-8">Get in Touch</h2>

                        <div className="space-y-8 relative z-10">
                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-lg">
                                    <MapPin size={24} className="text-saffron" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gold-light mb-1">{t('address')}</h3>
                                    <p className="text-warm-100/80 leading-relaxed">
                                        Bheed Bhanjan Hanuman Temple,
                                        Sakariya, Modasa,
                                        Dist. Aravalli, Gujarat - 383315
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-lg">
                                    <Phone size={24} className="text-saffron" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gold-light mb-1">{t('phone')}</h3>
                                    <p className="text-warm-100/80">+91 99999 99999</p>
                                    <p className="text-warm-100/80">+91 88888 88888</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-lg">
                                    <Mail size={24} className="text-saffron" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gold-light mb-1">{t('email')}</h3>
                                    <p className="text-warm-100/80">info@sakariyahanumanji.org</p>
                                    <p className="text-warm-100/80">donations@sakariyahanumanji.org</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.6994071066133!2d73.35072397510497!3d23.43522327888675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395df0a481f5bea7%3A0xd6857da7f9e566a2!2sSakariya%20Hanuman%20(Bhid%20Bhanjan%20Hanuman)%20Temple!5e0!3m2!1sen!2sin!4v1767514315964!5m2!1sen!2sin"
                                width="100%"
                                height="250"
                                style={{ border: 0, borderRadius: '0.5rem' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-maroon/10">
                        <h2 className="text-2xl font-bold text-maroon-dark mb-6">Send us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all" placeholder="Ram" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all" placeholder="Sharma" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all" placeholder="ram@example.com" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all" placeholder="Jai Bajrangbali..."></textarea>
                            </div>

                            <button type="button" className="w-full bg-saffron hover:bg-saffron-dark text-white font-bold py-4 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                                <Send size={20} />
                                {t('send_message')}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
