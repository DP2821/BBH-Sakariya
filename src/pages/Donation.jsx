import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, CreditCard, Building, QrCode, Phone, Calendar } from 'lucide-react';
import paymentQr from '../assets/Img/Payment QR.jpeg';
import bhandaraPoster from '../assets/Img/Bhandara-2026.jpeg';

const Donation = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-warm-50 min-h-screen py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-serif font-bold text-maroon-dark text-center mb-6">
                    {t('donate')}
                </h1>
                <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                    {t('donation_desc')}
                </p>

                {/* Bhandara 2026 Appeal Section */}
                <div className="bg-white rounded-2xl shadow-xl border border-saffron/30 overflow-hidden mb-16 flex flex-col md:flex-row">
                    {/* Left Side: Poster Image */}
                    <div className="md:w-1/2 bg-[#ffeed9] flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-saffron/20 relative">
                        <div className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fca5a5 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                        <img
                            src={bhandaraPoster}
                            alt={t('bhandara_poster_alt')}
                            className="max-h-[600px] w-auto h-auto object-contain rounded-xl shadow-lg border border-saffron/40 relative z-10"
                        />
                    </div>

                    {/* Right Side: Content & Action */}
                    <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-orange-50/30">
                        <div className="inline-block bg-orange-100 text-saffron-dark text-sm font-bold px-4 py-1.5 rounded-full mb-6 self-start border border-orange-200">
                            {t('special_appeal')}
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-maroon mb-4 leading-tight">
                            {t('bhandara_title')}
                        </h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            {t('bhandara_desc')}
                        </p>

                        <div className="space-y-5 mb-8 bg-white p-6 rounded-xl border border-saffron/20 shadow-sm">
                            <div className="flex items-start">
                                <div className="bg-orange-50 p-2.5 rounded-full mr-4 text-saffron">
                                    <Calendar size={22} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-maroon text-lg">{t('event_dates')}</h4>
                                    <p className="text-gray-600 mt-0.5">{t('bhandara_dates_value')}</p>
                                </div>
                            </div>
                            <hr className="border-gray-100" />
                            <div className="flex items-start">
                                <div className="bg-orange-50 p-2.5 rounded-full mr-4 text-saffron">
                                    <Phone size={22} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-maroon text-lg">{t('contact_mandir_counter')}</h4>
                                    <p className="text-gray-600 mt-2 flex flex-wrap gap-2">
                                        <a href="tel:9428965719" className="bg-gray-50 px-3 py-1.5 rounded-md border border-gray-200 hover:border-saffron hover:text-saffron transition-all font-medium">79840 95771</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                            <a href="#payment-options" onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('payment-options')?.scrollIntoView({ behavior: 'smooth' });
                            }} className="flex-1 text-center py-3.5 px-6 rounded-lg bg-saffron hover:bg-saffron-dark text-white font-bold shadow-md transition-all hover:shadow-lg transform active:scale-95 text-lg">
                                {t('donate_online_now')}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Regular Donation Options */}
                <div id="payment-options" className="flex items-center gap-4 mb-8">
                    <div className="h-px bg-gray-300 flex-1"></div>
                    <h3 className="text-2xl font-serif font-bold text-maroon px-4">{t('other_donation_options')}</h3>
                    <div className="h-px bg-gray-300 flex-1"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
                    {/* Online Donation */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-saffron/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-saffron text-white text-xs font-bold px-3 py-1 rounded-bl-lg">{t('recommended')}</div>
                        <div className="flex justify-center mb-6">
                            <div className="bg-orange-100 p-4 rounded-full text-saffron-dark">
                                <CreditCard size={40} />
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-center text-maroon mb-4">{t('online_donation')}</h2>
                        <p className="text-center text-gray-500 mb-8 text-sm">{t('online_donation_desc')}</p>

                        <div className="space-y-4">
                            <button className="w-full py-3 rounded-lg border-2 border-gray-200 font-medium hover:border-saffron hover:bg-orange-50 transition-colors">{t('shagun')}</button>
                            <button className="w-full py-3 rounded-lg border-2 border-gray-200 font-medium hover:border-saffron hover:bg-orange-50 transition-colors">{t('tea_seva')}</button>
                            <button className="w-full py-3 rounded-lg border-2 border-gray-200 font-medium hover:border-saffron hover:bg-orange-50 transition-colors">{t('prasadi_seva')}</button>
                            <button className="w-full py-3 rounded-lg bg-saffron hover:bg-saffron-dark text-white font-bold shadow-md transition-transform transform active:scale-95">{t('donate')}</button>
                        </div>
                    </div>

                    {/* Bank Transfer */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-maroon/20">
                        <div className="flex justify-center mb-6">
                            <div className="bg-red-100 p-4 rounded-full text-maroon">
                                <Building size={40} />
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-center text-maroon mb-4">{t('bank_transfer')}</h2>
                        <p className="text-center text-gray-500 mb-8 text-sm">{t('bank_transfer_desc')}</p>

                        <div className="bg-gray-50 p-6 rounded-xl space-y-3 text-sm border border-gray-200">
                            <div className="flex justify-between">
                                <span className="text-gray-500">{t('acc_name')}:</span>
                                <span className="font-bold text-gray-800">{t('trust_name')}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">{t('bank_name')}:</span>
                                <span className="font-bold text-gray-800">{t('bank_name_value')}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">{t('acc_no')}:</span>
                                <span className="font-bold text-gray-800">552002010018081</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">{t('ifsc_code')}:</span>
                                <span className="font-bold text-gray-800">UBIN0555207</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">{t('branch')}:</span>
                                <span className="font-bold text-gray-800">{t('branch_value')}</span>
                            </div>
                        </div>
                    </div>

                    {/* QR Code Donation */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-saffron/20 h-full flex flex-col">
                        <div className="flex justify-center mb-6">
                            <div className="bg-orange-100 p-4 rounded-full text-saffron-dark">
                                <QrCode size={40} />
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-center text-maroon mb-4">{t('scan_donate')}</h2>
                        <p className="text-center text-gray-500 mb-8 text-sm">{t('scan_donate_desc')}</p>

                        <div className="flex-grow flex items-center justify-center bg-gray-50 p-4 rounded-xl border border-gray-200">
                            <img src={paymentQr} alt="Payment QR Code" className="max-w-full max-h-48 object-contain rounded-lg shadow-sm" />
                        </div>
                    </div>
                </div>

                <div className="bg-saffron/10 border border-saffron rounded-lg p-6 text-center text-saffron-dark font-medium">
                    <Heart size={20} className="inline-block mr-2 mb-1" />
                    {t('tax_exemption_note')}
                </div>
            </div>
        </div>
    );
};

export default Donation;
