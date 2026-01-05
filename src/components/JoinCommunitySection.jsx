import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, Smartphone } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import wpQrImage from '../assets/Img/WP_QR.png';

gsap.registerPlugin(ScrollTrigger);

const JoinCommunitySection = () => {
    const { t } = useTranslation();
    const sectionRef = useRef(null);

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

    return (
        <section className="py-20 bg-white" ref={sectionRef}>
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-warm-50 rounded-3xl p-8 md:p-12 shadow-xl border border-maroon/10">

                    {/* Text Content */}
                    <div className="md:w-1/2 space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold animate-pulse">
                            <MessageCircle size={18} />
                            <span>Join Our Community</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-maroon-dark leading-tight">
                            Stay Connected with <br />
                            <span className="text-saffron">Shree Bheed Bhanjan Hanuman Sakariya</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Join our official WhatsApp group to receive daily Darshan, event updates, and news directly on your phone. Be a part of our growing spiritual family.
                        </p>

                        <div className="flex items-center gap-4 text-maroon font-medium">
                            <div className="w-12 h-12 rounded-full bg-saffron/20 flex items-center justify-center text-saffron">
                                <Smartphone size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Scan the QR code</p>
                                <p>or click the link to join</p>
                            </div>
                        </div>
                    </div>

                    {/* QR Code Image */}
                    <div className="md:w-1/2 flex justify-center md:justify-end">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-saffron to-maroon rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                                <img
                                    src={wpQrImage}
                                    alt="WhatsApp Group QR Code"
                                    className="w-64 h-64 md:w-80 md:h-80 object-contain rounded-lg"
                                />
                                <div className="mt-4 text-center">
                                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Scan to Join</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default JoinCommunitySection;
