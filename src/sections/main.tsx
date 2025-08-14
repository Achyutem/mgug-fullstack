import AnimatedText from "@/components/animateText";
import ImageCarousel from "@/components/imageCarousel";
import { FaRegStar, FaChevronDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import { UseLanguage } from "@/context/languageContext";
import { HomePage } from "@/utils/mainPageData";

export default function Main() {
  const { language } = UseLanguage();
  const t = HomePage.main[language];
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // The animation keyframes remain the same
  const reflectionStyle = `
    @keyframes reflection-anim {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
    .animate-reflection {
      animation: reflection-anim 3s ease-in-out infinite;
    }
  `;

  return (
    <div className="w-full">
      <style>{reflectionStyle}</style>

      <section className="relative z-20 w-full pt-8 pb-15">
        <div className="max-w-7xl mx-auto w-full px-2 sm:px-2 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-24 items-center min-h-[60vh] lg:min-h-[70vh]">
            {/* Left Content */}
            <div
              className="order-1 lg:order-1 text-center lg:text-left flex flex-col justify-center"
              style={{ transform: `translateY(${scrollY * 0.06}px)` }}
            >
              <div className="w-full flex justify-center lg:justify-start mb-6 lg:mb-8">
                <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 backdrop-blur-md rounded-full bg-white/40 border border-gray-300">
                  <FaRegStar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-orange-500" />
                  <span className="text-sm sm:text-lg text-gray-700 font-medium">
                    {t.badge}
                  </span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 lg:mb-6 leading-tight text-slate-800">
                <span className="block">
                  <span className="bg-orange-500 bg-clip-text text-transparent">
                    {t.universityName1}&nbsp;
                  </span>
                  <span className="text-slate-800">{t.universityName2}</span>
                </span>
                <span className="block">
                  <span className="text-slate-800">
                    {t.universityName3}&nbsp;
                  </span>
                  <span className="bg-orange-500 bg-clip-text text-transparent">
                    {t.universityName4}
                  </span>
                </span>
              </h1>

              <div className="mb-6 lg:mb-8 relative">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-black text-slate-900">
                    {language === "hindi" ? (
                      <span className="relative inline-block">
                        <AnimatedText
                          text={`${t.animatedText1} ${t.animatedText2}`}
                          className="bg-orange-500 bg-clip-text text-transparent"
                          language={language}
                        />
                        <span className="absolute -inset-1 bg-gradient-to-r from-orange-600/20 to-amber-600/20 blur-lg -z-10 animate-pulse rounded"></span>
                      </span>
                    ) : (
                      <>
                        <span className="relative inline-block">
                          <AnimatedText
                            text={t.animatedText1}
                            speed={50}
                            delay={0}
                            loopInterval={6000}
                            className="bg-orange-500 bg-clip-text text-transparent"
                            language={language}
                          />
                          <span className="absolute -inset-1 bg-gradient-to-r from-orange-600/20 to-amber-600/20 blur-lg -z-10 animate-pulse rounded"></span>
                        </span>
                        <br />
                        <span className="relative inline-block">
                          <AnimatedText
                            text={t.animatedText2}
                            speed={50}
                            delay={800}
                            loopInterval={6000}
                            className="bg-orange-500 bg-clip-text text-transparent"
                            language={language}
                          />
                          <span className="absolute -inset-1 bg-gradient-to-r from-amber-600/20 to-orange-600/20 blur-lg -z-10 animate-pulse rounded"></span>
                        </span>
                      </>
                    )}
                  </h2>
                  {/* --- NEON GLOW EFFECT --- */}
                  <div className="relative mt-2 lg:mt-3 h-0.5 lg:h-1 w-48 md:w-72 mx-auto lg:ml-0 bg-orange-500 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full w-full animate-reflection"
                      style={{
                        // The background is a solid bright color for the "tube"
                        background: "rgb(246, 138, 59)",
                        // The box-shadow creates the "glow" around the tube
                        boxShadow:
                          "0 0 5px rgba(246, 138, 59, 0.8), 0 0 10px rgba(246, 138, 59, 0.6)",
                      }}
                    />
                  </div>
                </div>
              </div>

              <p className="text-base sm:text-lg lg:text-lg xl:text-xl text-gray-600 mb-6 lg:mb-10 max-w-md lg:max-w-xl xl:max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {t.description}
              </p>

              <div className="flex flex-row flex-wrap sm:flex-nowrap gap-2 sm:gap-3 justify-center lg:justify-start overflow-x-auto pl-1">
                <a href="admission/list-of-program" className="shrink-0">
                  <button className="whitespace-nowrap text-sm px-5 py-3 sm:text-base rounded-lg font-semibold bg-orange-500 text-white hover:scale-105 transition-all duration-300">
                    {t.exploreButton}
                  </button>
                </a>
                <button className="whitespace-nowrap px-5 py-3 text-sm sm:text-base rounded-lg font-semibold bg-transparent text-gray-700 border-2 border-orange-500 hover:bg-orange-500/10 transition-all duration-300 shrink-0">
                  {t.virtualTourButton}
                </button>
              </div>
            </div>

            {/* Right Content - Image Carousel */}
            <div
              className="order-2 lg:order-2 flex justify-center items-center mt-8 lg:mt-0"
              style={{ transform: `translateY(${scrollY * -0.03}px)` }}
            >
              <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
                <ImageCarousel />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <FaChevronDown className="w-6 h-6 lg:w-8 lg:h-8 text-gray-600" />
        </div>
      </section>
    </div>
  );
}
