import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Sun, Music, Calendar } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import mainTemple from '../assets/16-9 Images/MainTemple.jpg';
import historyImage from '../assets/16-9 Images/History_Image.jpg';
import historyImage2 from '../assets/16-9 Images/History.jpg';
import hanumanDada from '../assets/16-9 Images/HANUMAN DADA.jpg';
import LiveDarshanSection from '../components/LiveDarshanSection';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const { t } = useTranslation();
    const heroRef = useRef(null);
    const mantraRef = useRef(null);
    const aboutRef = useRef(null);

    const historyImages = [historyImage, historyImage2, hanumanDada];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % historyImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Hero Animation
        gsap.fromTo(heroRef.current.children,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
        );

        // Mantra Section Animation
        gsap.fromTo(mantraRef.current,
            { opacity: 0, scale: 0.9 },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: mantraRef.current,
                    start: "top 80%",
                }
            }
        );

        // About Section Animation (Slide Up)
        gsap.fromTo(aboutRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: "top 75%",
                }
            }
        );
    }, []);

    return (
        <div className="overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img src={mainTemple} alt="Sakriya Hanuman Temple" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-maroon-dark/60 via-maroon/40 to-saffron/30"></div>
                </div>

                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-10">
                    {/* Abstract Mandala or Pattern could go here */}
                    <div className="absolute top-20 left-20 w-64 h-64 bg-saffron rounded-full blur-3xl mix-blend-multiply filter animate-float"></div>
                    <div className="absolute bottom-20 right-20 w-80 h-80 bg-gold rounded-full blur-3xl mix-blend-multiply filter animate-float" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="container mx-auto px-6 relative z-20 text-center" ref={heroRef}>
                    <div className="inline-block mb-4 p-2 bg-saffron/10 rounded-full border border-saffron/20 backdrop-blur-sm">
                        <span className="text-gold font-medium px-4 py-1">Jai Bajrangbali</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                        {t('welcome')}
                    </h1>
                    <p className="text-xl md:text-2xl text-warm-50 font-medium max-w-2xl mx-auto mb-10">
                        {t('hero_subtitle')}
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link to="/darshan">
                            <button className="bg-saffron hover:bg-saffron-dark text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                                <Sun size={20} />
                                {t('darshan')}
                            </button>
                        </Link>
                        <Link to="/events">
                            <button className="bg-white hover:bg-warm-100 text-maroon border-2 border-maroon/10 px-8 py-4 rounded-full font-bold text-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                                <Calendar size={20} />
                                Upcoming Events
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-maroon/50">
                    <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
                        <div className="w-1 h-2 bg-current rounded-full"></div>
                    </div>
                </div>
            </section>

            <LiveDarshanSection />

            {/* Daily Mantra Section */}
            <section className="py-20 bg-maroon-dark text-warm-50 relative overflow-hidden" ref={mantraRef}>
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <div className="mb-6 flex justify-center">
                        <Music size={40} className="text-gold" />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-gold mb-6">{t('daily_mantra')}</h2>
                    <p className="text-2xl md:text-4xl font-serif leading-relaxed italic opacity-90 mb-8 max-w-4xl mx-auto">
                        "{t('mantra_text')}"
                    </p>
                    <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
                </div>
            </section>

            {/* About / Introduction */}
            <section className="py-24 bg-warm-50" ref={aboutRef}>
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2 relative">
                            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-saffron rounded-2xl"></div>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group bg-black">
                                {historyImages.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`Temple History ${index + 1}`}
                                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                                    />
                                ))}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-10">
                                    <span className="text-white font-medium">Ancient Sleeping Idol</span>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h3 className="text-saffron-dark font-bold uppercase tracking-wider mb-2">Heritage</h3>
                            <h2 className="text-4xl font-serif font-bold text-maroon-dark mb-6">{t('about_title')}</h2>
                            <p className="text-lg text-maroon/80 leading-relaxed mb-8">
                                {t('about_text')}
                                <br /><br />
                                Experience the divine atmosphere and find inner peace. The temple architecture is a marvel of ancient Indian craftsmanship.
                            </p>
                            <button className="group text-saffron-dark font-bold text-lg flex items-center gap-2 hover:gap-4 transition-all">
                                {t('explore_more')} <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Decorative Divider */}
            <div className="h-4 bg-gradient-to-r from-maroon via-saffron to-maroon"></div>
        </div>
    );
};

export default Home;
