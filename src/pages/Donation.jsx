import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, CreditCard, Building } from 'lucide-react';

const Donation = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-warm-50 min-h-screen py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-serif font-bold text-maroon-dark text-center mb-6">
                    {t('donate')}
                </h1>
                <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                    Your contribution helps us maintain the temple, serve free prasad to thousands of devotees, and conduct social welfare activities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Online Donation */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-saffron/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-saffron text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Recommended</div>
                        <div className="flex justify-center mb-6">
                            <div className="bg-orange-100 p-4 rounded-full text-saffron-dark">
                                <CreditCard size={40} />
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-center text-maroon mb-4">Online Donation</h2>
                        <p className="text-center text-gray-500 mb-8 text-sm">Create a positive impact from anywhere in the world.</p>

                        <div className="space-y-4">
                            <button className="w-full py-3 rounded-lg border-2 border-gray-200 font-medium hover:border-saffron hover:bg-orange-50 transition-colors">₹ 101 - Shagun</button>
                            <button className="w-full py-3 rounded-lg border-2 border-gray-200 font-medium hover:border-saffron hover:bg-orange-50 transition-colors">₹ 501 - Annadan</button>
                            <button className="w-full py-3 rounded-lg border-2 border-gray-200 font-medium hover:border-saffron hover:bg-orange-50 transition-colors">₹ 1100 - Gau Seva</button>
                            <button className="w-full py-3 rounded-lg bg-saffron hover:bg-saffron-dark text-white font-bold shadow-md transition-transform transform active:scale-95">Donate Now</button>
                        </div>
                    </div>

                    {/* Bank Transfer */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-maroon/20">
                        <div className="flex justify-center mb-6">
                            <div className="bg-red-100 p-4 rounded-full text-maroon">
                                <Building size={40} />
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-center text-maroon mb-4">Bank Transfer</h2>
                        <p className="text-center text-gray-500 mb-8 text-sm">Directly transfer to the Temple Trust account.</p>

                        <div className="bg-gray-50 p-6 rounded-xl space-y-3 text-sm border border-gray-200">
                            <div className="flex justify-between">
                                <span className="text-gray-500">Account Name:</span>
                                <span className="font-bold text-gray-800">Shree Hanumanji Mandir Trust</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Bank Name:</span>
                                <span className="font-bold text-gray-800">State Bank of India</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Account No:</span>
                                <span className="font-bold text-gray-800">1234567890</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">IFSC Code:</span>
                                <span className="font-bold text-gray-800">SBIN0001234</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Branch:</span>
                                <span className="font-bold text-gray-800">Sakariya</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-saffron/10 border border-saffron rounded-lg p-6 text-center text-saffron-dark font-medium">
                    <Heart size={20} className="inline-block mr-2 mb-1" />
                    Donations are exempt from Income Tax under section 80G.
                </div>
            </div>
        </div>
    );
};

export default Donation;
