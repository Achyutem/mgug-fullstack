"use client"; // This component now uses hooks

import { useState, useEffect, useRef } from "react";
import AnimatedCard from "@/components/animatedCard";
import InspirationCard from "@/components/leaderInspiration";
import { UseLanguage } from "@/context/languageContext";
import { inspirationData } from "@/utils/mainPageData";

export default function InspirationSection() {
    const { language } = UseLanguage();
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const autoScrollInterval = useRef<NodeJS.Timeout>(null);

    // Autoplay logic using an interval
    useEffect(() => {
        const startAutoScroll = () => {
            autoScrollInterval.current = setInterval(() => {
                setActiveIndex(prevIndex => {
                    const isLastCard = prevIndex === inspirationData.leader.length - 1;
                    return isLastCard ? 0 : prevIndex + 1;
                });
            }, 4000);
        };

        const stopAutoScroll = () => {
            if (autoScrollInterval.current) {
                clearInterval(autoScrollInterval.current);
            }
        };

        const mediaQuery = window.matchMedia("(max-width: 768px)");

        if (mediaQuery.matches) {
            startAutoScroll();
        }

        const handleResize = () => {
            if (mediaQuery.matches) {
                startAutoScroll();
            } else {
                stopAutoScroll();
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            stopAutoScroll();
            window.removeEventListener('resize', handleResize);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inspirationData.leader.length]);

    // Effect to perform the actual scroll
    useEffect(() => {
        if (containerRef.current) {
            const cardElement = containerRef.current.children[activeIndex] as HTMLElement;
            if (cardElement) {
                const scrollLeft = cardElement.offsetLeft - containerRef.current.offsetLeft;
                containerRef.current.scrollTo({
                    left: scrollLeft,
                    behavior: 'smooth'
                });
            }
        }
    }, [activeIndex]);

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

                {/* Horizontally Scrolling Container */}
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