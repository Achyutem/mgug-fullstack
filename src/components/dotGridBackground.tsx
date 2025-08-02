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
// export default function WaveBackground() {
//   return (
//     <div className="fixed inset-0 z-0 overflow-hidden">
//       {/* Gradient base */}
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-950 to-black" />

//       {/* Scrolling waves */}
//       <div className="absolute inset-0 flex w-[200%] h-full animate-waveScroll">
//         <svg
//           className="w-1/2 h-full"
//           viewBox="0 0 1440 320"
//           preserveAspectRatio="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fill="white"
//             fillOpacity="0.05"
//             d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,165.3C1200,160,1320,128,1380,112L1440,96V320H0Z"
//           />
//         </svg>
//         <svg
//           className="w-1/2 h-full"
//           viewBox="0 0 1440 320"
//           preserveAspectRatio="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fill="white"
//             fillOpacity="0.05"
//             d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,165.3C1200,160,1320,128,1380,112L1440,96V320H0Z"
//           />
//         </svg>
//       </div>

//       <style>{`
//         @keyframes waveScroll {
//           from { transform: translateX(0); }
//           to { transform: translateX(-50%); }
//         }
//         .animate-waveScroll {
//           animation: waveScroll 30s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

//! WaveBackground.js

export default function WaveBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-amber-50 to-orange-100" />

      {/* NEW: Orange wave layer (slower, behind) */}
      <div className="absolute inset-0 flex w-[200%] h-full animate-waveScroll2">
        <svg
          className="w-1/2 h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            // Using RGB for direct color/opacity control. This is orange-500 at 25% opacity.
            fill="rgb(251 146 60 / 0.25)"
            // Slightly different wave path for variety
            d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,208C672,203,768,149,864,144C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
        <svg
          className="w-1/2 h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="rgb(251 146 60 / 0.25)"
            d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,208C672,203,768,149,864,144C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Existing white wave layer (faster, in front) */}
      <div className="absolute inset-0 flex w-[200%] h-full animate-waveScroll1">
        <svg
          className="w-1/2 h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            // Reduced opacity slightly to let the orange show through
            fillOpacity="0.3"
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
            fillOpacity="0.3"
            d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,165.3C1200,160,1320,128,1380,112L1440,96V320H0Z"
          />
        </svg>
      </div>

      <style>{`
        @keyframes waveScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        /* Renamed for clarity */
        .animate-waveScroll1 {
          animation: waveScroll 45s linear infinite;
        }

        /* NEW animation for the second layer */
        .animate-waveScroll2 {
          animation: waveScroll 65s linear infinite;
        }
      `}</style>
    </div>
  );
}
