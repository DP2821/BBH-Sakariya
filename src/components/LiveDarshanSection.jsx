import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Play, Calendar, Video } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import todaysDarshanImage from '../assets/Img/DSC_0020.JPG';

gsap.registerPlugin(ScrollTrigger);

const LiveDarshanSection = () => {
    const { t, i18n } = useTranslation();
    const sectionRef = useRef(null);

    // Dynamic locale for date
    const dateLocale = i18n.language === 'gu' ? 'gu-IN' : i18n.language === 'hi' ? 'hi-IN' : 'en-IN';

    useEffect(() => {
        gsap.fromTo(sectionRef.current.children,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            }
        );
    }, []);

    // Placeholder image for Today's Darshan (using one of the existing assets for now if available, or a generic placeholder)
    // You might want to replace this with a dynamic URL or a specific asset later.

    // Placeholder video URL (using a static YouTube video or live stream placeholder)
    const liveVideoUrl = "https://www.youtube.com/embed/ywrmk_p3YJc?si=YJrNOMpiaNaM3fhZ?autoplay=0"; // Replace with actual live stream ID

    return (
        <section className="py-20 bg-warm-50" ref={sectionRef}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-saffron font-bold tracking-wider uppercase mb-2 block">{t('connect_divinely')}</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-maroon-dark">{t('live_darshan_aarti')}</h2>
                    <div className="w-24 h-1 bg-saffron mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Live Video Section */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-maroon/10">
                        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                            <h3 className="text-2xl font-serif font-bold text-maroon flex items-center gap-3">
                                <Video className="text-saffron" />
                                {t('documentary')}
                            </h3>
                            <span className="flex items-center gap-2 px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-bold animate-pulse">
                                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                                {t('live')}
                            </span>
                        </div>
                        <div className="aspect-video bg-black relative group">
                            <iframe
                                className="w-full h-full"
                                src={liveVideoUrl}
                                title={t('live_darshan')}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                            {/* Overlay for aesthetic (optional, disappears on play interaction usually handled by iframe) */}
                        </div>
                        <div className="p-6 bg-warm-50/50">
                            <p className="text-gray-600 text-sm">
                                {t('live_desc')}
                            </p>
                        </div>
                    </div>

                    {/* Today's Darshan Image Section */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-maroon/10">
                        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                            <h3 className="text-2xl font-serif font-bold text-maroon flex items-center gap-3">
                                <Calendar className="text-saffron" />
                                {t('gallery')}
                            </h3>
                            <span className="text-gray-500 font-medium font-serif">
                                {new Date().toLocaleDateString(dateLocale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                            </span>
                        </div>
                        <div className="aspect-[4/5] md:aspect-video lg:aspect-[4/3] bg-gray-100 relative overflow-hidden group">
                            <img
                                src={todaysDarshanImage}
                                alt={t('todays_darshan_alt')}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white font-medium">{t('slogan')}</p>
                            </div>
                        </div>
                        <div className="p-6 bg-warm-50/50 flex justify-between items-center">
                            <p className="text-gray-600 text-sm">
                                {t('daily_image_update')}
                            </p>
                            <button className="text-saffron hover:text-saffron-dark font-bold text-sm uppercase tracking-wide transition-colors">
                                {t('view_gallery')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LiveDarshanSection;
