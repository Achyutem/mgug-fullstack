//! table background
// export default function PulseGridBackground() {
//   return (
//     <div className="fixed inset-0 z-0 overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-950 to-black" />
//       <div className="absolute inset-0 grid grid-cols-20 grid-rows-20">
//         {Array.from({ length: 400 }).map((_, i) => (
//           <div
//             key={i}
//             className="border border-white/5 hover:border-white/10 transition duration-500"
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

//! moving waves
export default function WaveBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-950 to-black" />

      {/* Scrolling waves */}
      <div className="absolute inset-0 flex w-[200%] h-full animate-waveScroll">
        <svg
          className="w-1/2 h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            fillOpacity="0.05"
            d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,165.3C1200,160,1320,128,1380,112L1440,96V320H0Z"
          />
        </svg>
        <svg
          className="w-1/2 h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            fillOpacity="0.05"
            d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,165.3C1200,160,1320,128,1380,112L1440,96V320H0Z"
          />
        </svg>
      </div>

      <style>{`
        @keyframes waveScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-waveScroll {
          animation: waveScroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
