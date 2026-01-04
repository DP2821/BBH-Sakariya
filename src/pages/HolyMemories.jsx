import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, MapPin, Image as ImageIcon } from 'lucide-react';

// Import images from assets/Memories
import deepmala from '../assets/Memories/DSC_0015.JPG';
import annakut from '../assets/Memories/DSC_0020.JPG';
import garba from '../assets/Memories/DSC_0061.JPG';
import rangoli from '../assets/Memories/DSC_0158.JPG';
import decoration from '../assets/Memories/DSC_0926.JPG';
import aarti from '../assets/Memories/DSC_3877.JPG';
import crowd from '../assets/Memories/DSC_4106.jpg';
import puja from '../assets/Memories/DSC_6994.JPG';
import havan from '../assets/Memories/DSC_6999_1.JPG';
import abhishek from '../assets/Memories/DSC_7008_2.JPG';
import shringar from '../assets/Memories/DSC_7014.JPG';
import murti from '../assets/Memories/DSC_7017.JPG';
import nightView from '../assets/Memories/DSC_7019.JPG';
import templeView from '../assets/Memories/02.jpg';
import hanumanji from '../assets/Memories/SakariyaHanuman.jpg';
import hanumanji2 from '../assets/Memories/SakariyaHanuman2.jfif';


const HolyMemories = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('all');

    // Mock data for events - In proper app this would come from API/CMS
    const events = [
        {
            id: 1,
            title: 'Diwali Celebrations',
            date: 'November 4, 2024',
            category: 'festivals',
            description: 'Grand celebration of the festival of lights with special rituals, lamps, and cultural performances.',
            coverImage: deepmala,
            gallery: [
                rangoli,
                decoration,
                nightView,
                crowd
            ]
        },
        {
            id: 2,
            title: 'Satyanarayana Puja',
            date: 'Monthly - Last Friday',
            category: 'poojas',
            description: 'Monthly community Satyanarayana puja performed for the well-being of devotees.',
            coverImage: puja,
            gallery: [
                havan,
                abhishek,
                aarti
            ]
        },
        {
            id: 3,
            title: 'Janmashtami',
            date: 'August 26, 2024',
            category: 'festivals',
            description: 'celebrating the birth of Lord Krishna with fervor and joy.',
            coverImage: murti,
            gallery: [
                shringar,
                templeView,
                garba
            ]
        },
        {
            id: 4,
            title: 'Rudrabhishekam',
            date: 'Mondays',
            category: 'poojas',
            description: 'Special Rudrabhishekam performed every Monday.',
            coverImage: hanumanji,
            gallery: [
                hanumanji2,
                abhishek
            ]
        }

    ];

    const tabs = [
        { id: 'all', label: 'All' }, // You might want to translate 'All' too if needed, or just default show all
        { id: 'festivals', label: t('festivals') },
        { id: 'poojas', label: t('poojas') },
        { id: 'yatras', label: t('yatras') },
        { id: 'cultural_events', label: t('cultural_events') },
    ];

    const filteredEvents = activeTab === 'all'
        ? events
        : events.filter(event => event.category === activeTab);

    return (
        <div className="min-h-screen bg-warm-50 pt-20 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-maroon mb-4">
                        {t('holy_memories')}
                    </h1>
                    <p className="text-xl text-stone-600 max-w-3xl">
                        {t('holy_memories_subtitle')}
                    </p>
                </div>

                {/* Tabs */}
                <div className="mb-12 overflow-x-auto">
                    <div className="flex space-x-2 md:space-x-4 min-w-max bg-white p-2 rounded-xl shadow-sm border border-stone-100">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === tab.id
                                    ? 'bg-maroon text-white shadow-md transform scale-105'
                                    : 'text-stone-600 hover:bg-stone-100 hover:text-maroon'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Events Grid */}
                <div className="space-y-12">
                    {filteredEvents.map((event) => (
                        <div
                            key={event.id}
                            className="bg-white rounded-2xl shadow-lg border border-stone-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex flex-col md:flex-row">
                                {/* Main Cover Image */}
                                <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-stone-200 animate-pulse" /> {/* Placeholder while loading */}
                                    <img
                                        src={event.coverImage}
                                        alt={event.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Content */}
                                <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                                    <div>
                                        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm font-medium">
                                            <span className="flex items-center text-saffron">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {event.date}
                                            </span>
                                            {/* You could add location if generic often */}
                                            {/* <span className="flex items-center text-stone-500">
                        <MapPin className="w-4 h-4 mr-1" />
                        Temple Premises
                      </span> */}
                                        </div>

                                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-maroon mb-3">
                                            {event.title}
                                        </h2>

                                        <p className="text-stone-600 leading-relaxed mb-6">
                                            {event.description}
                                        </p>
                                    </div>

                                    {/* Micro-Gallery */}
                                    {event.gallery && event.gallery.length > 0 && (
                                        <div className="mt-4">
                                            <h3 className="text-maroon font-medium mb-3 flex items-center">
                                                <ImageIcon className="w-4 h-4 mr-2" />
                                                {t('explore_more') || 'Photo Gallery'}
                                            </h3>
                                            <div className="flex gap-3 overflow-x-auto pb-2">
                                                {event.gallery.map((img, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border border-stone-100 cursor-pointer hover:opacity-90 transition-opacity"
                                                    >
                                                        <img
                                                            src={img}
                                                            alt={`${event.title} gallery ${idx + 1}`}
                                                            className="w-full h-full object-cover"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                ))}
                                                {/* Placeholder for 'See more' if needed later */}
                                                {/* <div className="flex-shrink-0 w-24 h-24 rounded-lg bg-stone-100 flex items-center justify-center text-stone-400 text-xs font-medium border border-stone-200">
                          +More
                        </div> */}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}

                    {filteredEvents.length === 0 && (
                        <div className="text-center py-20 text-stone-500">
                            <p className="text-xl">No events found in this category.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HolyMemories;
