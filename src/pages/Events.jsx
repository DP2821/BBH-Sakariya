import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, MapPin } from 'lucide-react';
import hanumanDada from '../assets/16-9 Images/HANUMAN DADA.jpg';
import mainTemple from '../assets/16-9 Images/MainTemple.jpg';
import utarayanEffect from '../assets/16-9 Images/Theme-Utarayan.JPG';

const Events = () => {
    const { t } = useTranslation();

    const events = [
        {
            id: 1,
            title: "Hanuman Jayanti Mahotsav",
            date: "April 23, 2026",
            time: "05:00 AM Onwards",
            description: "Grand celebration of Hanuman Jayanti with special pious rituals, Maha Aarti, and Santvani.",
            image: hanumanDada
        },
        {
            id: 2,
            title: "Annual Patotsav",
            date: "August 15, 2026",
            time: "08:00 AM - 01:00 PM",
            description: "Celebrating the installation day of the deities with Vedic Chanting and Abhishek.",
            image: mainTemple
        },
        {
            id: 3,
            title: "Diwali Deepotsav",
            date: "November 10, 2026",
            time: "06:00 PM",
            description: "Lighting of 11,000 diyas in the temple premises. A spectacular divine visual.",
            image: utarayanEffect
        }
    ];

    return (
        <div className="bg-warm-50 min-h-screen py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-serif font-bold text-maroon-dark text-center mb-12">
                    {t('events_title')}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event) => (
                        <div key={event.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-maroon/10">
                            <div className="h-48 relative overflow-hidden">
                                <img src={event.image} alt={event.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-0 right-0 bg-saffron text-white px-3 py-1 m-2 rounded text-sm font-bold shadow-md">
                                    Upcoming
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-saffron-dark font-medium text-sm mb-3">
                                    <Calendar size={16} />
                                    {event.date} • {event.time}
                                </div>
                                <h3 className="text-xl font-bold text-maroon-dark mb-3 group-hover:text-saffron transition-colors">
                                    {event.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {event.description}
                                </p>
                                <div className="flex items-center gap-2 text-gray-400 text-xs">
                                    <MapPin size={14} />
                                    Sakariya Temple Grounds
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Events;
