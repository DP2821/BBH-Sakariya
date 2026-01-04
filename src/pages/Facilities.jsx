import React from 'react';
import { useTranslation } from 'react-i18next';
import { Car, Utensils, Droplets, BedDouble, Info } from 'lucide-react'; // Shoe icon substitute could be generic Info

const Facilities = () => {
    const { t } = useTranslation();

    const facilities = [
        {
            icon: <Car size={40} className="text-saffron" />,
            title: "Spacious Parking",
            description: "Ample parking space available for cars, buses, and two-wheelers. Safe and guarded premises."
        },
        {
            icon: <Utensils size={40} className="text-saffron" />,
            title: "Bhojanshala",
            description: "Free and hygienic food (Prasad) served daily to thousands of devotees. Pure Sattvik meal."
        },
        {
            icon: <BedDouble size={40} className="text-saffron" />,
            title: "Dharmashala",
            description: "Clean and affordable accommodation rooms available for staying overnight. Pilgrims can book upon arrival."
        },
        {
            icon: <Droplets size={40} className="text-saffron" />,
            title: "RO Water",
            description: "Chilled and purified drinking water stations available at multiple points in the campus."
        },
        {
            icon: <div className="text-saffron font-bold text-3xl border-2 border-saffron rounded px-2">👠</div>,
            title: "Shoe Stand",
            description: "Free shoe keeping facility managed by volunteers to keep your footwear safe while you do Darshan."
        },
        {
            icon: <Info size={40} className="text-saffron" />,
            title: "Wheelchair Assistance",
            description: "Wheelchairs available for elderly and differently-abled devotees at the main gate."
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
