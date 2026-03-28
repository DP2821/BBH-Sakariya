import React from 'react';
import { useTranslation } from 'react-i18next';
import { Car, Droplets, Info, Trees, ShoppingBag, Building2 } from 'lucide-react';

const Facilities = () => {
    const { t } = useTranslation();

    const facilities = [
        {
            icon: <Car size={40} className="text-saffron" />,
            title: t('parking_title'),
            description: t('parking_desc')
        },
        {
            icon: <Trees size={40} className="text-saffron" />,
            title: t('garden_title'),
            description: t('garden_desc')
        },
        {
            icon: <ShoppingBag size={40} className="text-saffron" />,
            title: t('gift_shop_title'),
            description: t('gift_shop_desc')
        },
        {
            icon: <Building2 size={40} className="text-saffron" />,
            title: t('event_facilities_title'),
            description: t('event_facilities_desc')
        },
        {
            icon: <Droplets size={40} className="text-saffron" />,
            title: t('ro_water_title'),
            description: t('ro_water_desc')
        },
        {
            icon: <div className="text-saffron font-bold text-3xl border-2 border-saffron rounded px-2">👠</div>,
            title: t('shoe_stand_title'),
            description: t('shoe_stand_desc')
        },
        {
            icon: <Info size={40} className="text-saffron" />,
            title: t('wheelchair_title'),
            description: t('wheelchair_desc')
        }
    ];

    return (
        <div className="bg-warm-50 min-h-screen py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-serif font-bold text-maroon-dark text-center mb-12">
                    {t('mandir_facilities')}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facilities.map((item, index) => (
                        <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center border-t-4 border-saffron group">
                            <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                                <div className="bg-orange-50 p-4 rounded-full">
                                    {item.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-maroon mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Facilities;
