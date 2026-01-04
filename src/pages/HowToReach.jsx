import React from 'react';
import { useTranslation } from 'react-i18next';
import { Train, Bus, Plane, Car } from 'lucide-react';

const HowToReach = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-warm-50 min-h-screen py-10 px-4">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-serif font-bold text-maroon-dark text-center mb-12">
                    {t('how_to_reach')}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-maroon mb-6 flex items-center gap-2">
                            <Train className="text-saffron" /> By Railway
                        </h2>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-saffron rounded-full mt-2 flex-shrink-0"></span>
                                <span><strong>Botad Junction:</strong> The nearest major railway station, approximately 12 km away.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-saffron rounded-full mt-2 flex-shrink-0"></span>
                                <span><strong>Ahmedabad Junction:</strong> About 150 km away. Connected to all major cities.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-maroon mb-6 flex items-center gap-2">
                            <Bus className="text-saffron" /> By Bus / Road
                        </h2>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-saffron rounded-full mt-2 flex-shrink-0"></span>
                                <span>Direct GSRTC buses are available from Ahmedabad, Rajkot, Bhavnagar, and Botad.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-saffron rounded-full mt-2 flex-shrink-0"></span>
                                <span>Private luxury buses and taxis are also frequently available.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-maroon mb-6 flex items-center gap-2">
                            <Plane className="text-saffron" /> By Air
                        </h2>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-saffron rounded-full mt-2 flex-shrink-0"></span>
                                <span><strong>Sardar Vallabhbhai Patel International Airport (Ahmedabad):</strong> The nearest international airport (approx 160 km).</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-saffron rounded-full mt-2 flex-shrink-0"></span>
                                <span><strong>Bhavnagar Airport:</strong> Domestic airport (approx 75 km).</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Map Section */}
                <div className="rounded-xl overflow-hidden shadow-xl border-4 border-white">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.6994071066133!2d73.35072397510497!3d23.43522327888675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395df0a481f5bea7%3A0xd6857da7f9e566a2!2sSakariya%20Hanuman%20(Bhid%20Bhanjan%20Hanuman)%20Temple!5e0!3m2!1sen!2sin!4v1767514315964!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default HowToReach;
