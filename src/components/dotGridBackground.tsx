// export default function DiagonalStripesBackgroundLight() {
//   return (
//     <div className="fixed inset-0 z-0 overflow-hidden">
//       {/* Light mode gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-amber-50 to-orange-100" />

//       {/* The animated diagonal stripes */}
//       <div className="absolute inset-0 h-full w-[200%] animate-stripesFlow">
//         <svg
//           className="h-full w-full opacity-20"
//           viewBox="0 0 100 100"
//           preserveAspectRatio="xMidYMid slice"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <defs>
//             <pattern
//               id="stripesLight"
//               patternUnits="userSpaceOnUse"
//               width="100"
//               height="10"
//             >
//               <line
//                 x1="0"
//                 y1="5"
//                 x2="100"
//                 y2="5"
//                 stroke="rgb(251 146 60)"
//                 strokeWidth="1"
//               />
//             </pattern>
//           </defs>
//           <rect
//             x="0"
//             y="0"
//             width="100%"
//             height="100%"
//             fill="url(#stripesLight)"
//             transform="rotate(-45 50 50)"
//           />
//         </svg>
//       </div>

//       <style>{`
//         @keyframes stripesFlow {
//           from { transform: translateX(0); }
//           to { transform: translateX(-50%); }
//         }
//         .animate-stripesFlow {
//           animation: stripesFlow 75s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

export default function WaveBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-amber-50 to-orange-100" />
      <div className="absolute inset-0 h-full animate-waveScroll2">
        <svg
          className="w-[200%] h-full"
          viewBox="0 0 2880 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="rgb(251 146 60 / 0.25)"
            d="M0,192L48,192C96,192,192,192,288,202.7C384,213,480,235,576,224C672,213,768,171,864,165.3C960,160,1056,192,1152,186.7C1248,181,1344,149,1440,133.3L1488,117.3C1536,101.3,1632,90.7,1728,101.3C1824,112,1920,149,2016,154.7C2112,160,2208,139,2304,138.7C2400,139,2496,160,2592,165.3C2688,171,2784,160,2832,154.7L2880,149.3L2880,320L2832,320C2784,320,2688,320,2592,320C2496,320,2400,320,2304,320C2208,320,2112,320,2016,320C1920,320,1824,320,1728,320C1632,320,1536,320,1440,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="absolute inset-0 h-full animate-waveScroll1">
        <svg
          className="w-[200%] h-full"
          viewBox="0 0 2880 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            fillOpacity="0.3"
            d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,128,576,128C672,128,768,181,864,192C960,203,1056,192,1152,165.3C1248,139,1344,96,1440,74.7L1488,53.3C1536,32,1632,10.7,1728,21.3C1824,32,1920,64,2016,80C2112,96,2208,96,2304,90.7C2400,85,2496,75,2592,74.7C2688,75,2784,85,2832,90.7L2880,96L2880,320L2832,320C2784,320,2688,320,2592,320C2496,320,2400,320,2304,320C2208,320,2112,320,2016,320C1920,320,1824,320,1728,320C1632,320,1536,320,1440,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <style>{`
        @keyframes waveScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .animate-waveScroll1 {
          animation: waveScroll 30s linear infinite;
        }

        .animate-waveScroll2 {
          animation: waveScroll 45s linear infinite;
        }
      `}</style>
    </div>
  );
}
