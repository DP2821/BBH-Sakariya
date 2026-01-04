import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
    const containerRef = useRef(null);
    const flameRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                gsap.to(containerRef.current, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: onComplete
                })
            }
        });

        // Flame Animation
        tl.fromTo(flameRef.current,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, ease: "elastic.out(1, 0.3)" }
        )
            .to(flameRef.current, {
                scale: 1.1,
                duration: 0.2,
                yoyo: true,
                repeat: 3,
                ease: "power1.inOut"
            })
            .fromTo(textRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
                "-=0.5"
            )
            .to(containerRef.current, {
                delay: 0.5,
                duration: 0.5
            });

    }, [onComplete]);

    return (
        <div ref={containerRef} className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-maroon-dark text-warm-50">
            <div className="relative">
                {/* Decorative Diya Base */}
                <div className="w-16 h-8 bg-gold rounded-b-full mb-1 mx-auto relative z-10"></div>

                {/* Flame */}
                <div ref={flameRef} className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-gradient-to-t from-orange-500 via-yellow-400 to-white rounded-t-full rounded-b-lg shadow-[0_0_20px_rgba(255,165,0,0.6)] origin-bottom"></div>
            </div>

            <h1 ref={textRef} className="mt-6 text-2xl font-serif font-bold tracking-widest text-gold text-center">
                JAY SHREE RAM
            </h1>
        </div>
    );
};

export default Preloader;
