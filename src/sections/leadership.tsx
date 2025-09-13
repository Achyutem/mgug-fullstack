"use client";

import { useState, useEffect, useRef } from "react";
import AnimatedCard from "@/components/animatedCard";
import InspirationCard from "@/components/leaderInspiration";
import { UseLanguage } from "@/context/languageContext";
import { inspirationData } from "@/utils/mainPageData";

export default function InspirationSection() {
    const { language } = UseLanguage();
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);
    const resumeTimeout = useRef<NodeJS.Timeout | null>(null);

    // Effect to handle the autoscroll logic
    useEffect(() => {
        // CRITICAL FIX: Don't initialize autoscroll if there aren't enough items.
        if (inspirationData.leader.length <= 1) {
            return; // Exit the effect completely.
        }

        const stopAutoScroll = () => {
            if (autoScrollInterval.current) {
                clearInterval(autoScrollInterval.current);
                autoScrollInterval.current = null;
            }
            if (resumeTimeout.current) {
                clearTimeout(resumeTimeout.current);
                resumeTimeout.current = null;
            }
        };

        const startAutoScroll = () => {
            stopAutoScroll();
            autoScrollInterval.current = setInterval(() => {
                setActiveIndex(prevIndex => (prevIndex + 1) % inspirationData.leader.length);
            }, 4000);
        };

        const handleUserInteraction = () => {
            stopAutoScroll();
            resumeTimeout.current = setTimeout(startAutoScroll, 5000);
        };

        const mediaQuery = window.matchMedia("(max-width: 768px)");
        const container = containerRef.current;

        const handleResize = () => {
            if (mediaQuery.matches) {
                startAutoScroll();
            } else {
                stopAutoScroll();
            }
        };

        handleResize(); // Initial check

        window.addEventListener('resize', handleResize);
        if (container) {
            container.addEventListener('touchstart', handleUserInteraction, { passive: true });
            container.addEventListener('mousedown', handleUserInteraction);
        }

        // Cleanup function
        return () => {
            stopAutoScroll();
            window.removeEventListener('resize', handleResize);
            if (container) {
                container.removeEventListener('touchstart', handleUserInteraction);
                container.removeEventListener('mousedown', handleUserInteraction);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inspirationData.leader.length]);
    // Effect to perform the actual scroll when activeIndex changes
    useEffect(() => {
        const container = containerRef.current;
        if (container && inspirationData.leader.length > 1) { // Also check here for safety
            const cardElement = container.children[activeIndex] as HTMLElement;
            if (cardElement) {
                const scrollLeft = cardElement.offsetLeft + cardElement.offsetWidth / 2 - container.offsetWidth / 2;

                container.scrollTo({
                    left: scrollLeft,
                    behavior: 'smooth'
                });
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeIndex, inspirationData.leader.length]);

    return (
        <section id="leaders" className="relative z-20 py-16 px-0 sm:px-4 bg-transparent">
            <div className="max-w-7xl mx-auto">
                <AnimatedCard className="text-center mb-16 px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="bg-orange-500 bg-clip-text text-transparent">
                            {inspirationData.heading[language]}
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {inspirationData.description[language]}
                    </p>
                </AnimatedCard>
                <div
                    ref={containerRef}
                    className="flex overflow-x-auto gap-8 pb-4 snap-x snap-mandatory scroll-smooth px-4 sm:px-0 scrollbar-none"
                >
                    {inspirationData.leader.map((item, index) => (
                        <InspirationCard key={index} inspiration={item} language={language} />
                    ))}
                </div>
            </div>
        </section>
    );
}