import React from 'react';
import { useTranslation } from 'react-i18next';
import { Clock, Sun, Moon } from 'lucide-react';

const Darshan = () => {
    const { t } = useTranslation();

    const timings = [
        { title: t('mangla_aarti'), time: '06:00 AM', type: 'morning' },
        // { title: t('shringar_aarti'), time: '07:00 AM', type: 'morning' },
        // { title: t('rajbhog_aarti'), time: '11:15 AM', type: 'morning' },
        { title: t('darshan'), time: '06:00 AM - 10:30 PM', type: 'morning' },
        { title: t('sandhya_aarti'), time: '06:15 PM', type: 'evening' },
    ];

    return (
        <div className="bg-warm-50 min-h-screen py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-serif font-bold text-maroon-dark text-center mb-12 relative inline-block left-1/2 transform -translate-x-1/2">
                    {t('darshan_title')}
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-saffron rounded-full"></span>
                </h1>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-maroon/10">
                    <div className="bg-saffron text-white p-6 text-center">
                        <h2 className="text-2xl font-bold">Daily Schedule</h2>
                        <p className="opacity-90">Open Everyday</p>
                    </div>

                    <div className="p-6 md:p-10 divide-y divide-gray-100">
                        {timings.map((item, index) => (
                            <div key={index} className="flex items-center justify-between py-6 hover:bg-warm-50 transition-colors rounded-lg px-4">
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-full ${item.type === 'morning' ? 'bg-orange-100 text-orange-600' : 'bg-indigo-100 text-indigo-600'}`}>
                                        {item.type === 'morning' ? <Sun size={24} /> : <Moon size={24} />}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-maroon-dark">{item.title}</h3>
                                        <p className="text-sm text-gray-500 capitalize">{item.type}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-xl font-medium text-gray-700 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
                                    <Clock size={20} className="text-saffron" />
                                    {item.time}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* <div className="bg-maroon-dark p-6 text-center text-white">
                        <h3 className="font-bold text-xl mb-2">{t('prasad_timings')}</h3>
                        <p className="text-warm-100">11:00 AM - 02:00 PM & 06:00 PM - 08:30 PM (Bhojanshala)</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Darshan;
