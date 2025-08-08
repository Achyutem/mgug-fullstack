import MainLayout from "@/layouts/homeLayout";
import { UseLanguage } from "@/context/languageContext";
import { laboratoryData } from "@/utils/student";
import RuleItem from "@/components/ruleItem";

const LaboratoriesPage = () => {
  const { language } = UseLanguage();
  const content = laboratoryData;

  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-4xl font-bold text-orange-500 text-center">
            {content.pageTitle[language]}
          </h1>

          {/* Image Section */}
          <div className="w-full max-w-4xl h-64 sm:h-80 md:h-96 rounded-xl shadow-lg overflow-hidden">
            <img
              src="/studentsInALab.webp"
              alt={content.pageTitle[language]}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="w-full max-w-4xl text-left">
            <div className="p-6 sm:p-8 rounded-xl border border-orange-500">
              <ul className="space-y-6 text-lg text-black">
                {content.labs.map((lab, index) => (
                  <RuleItem key={index} label={(index + 1).toString()}>
                    <span>{lab[language]}</span>
                  </RuleItem>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default LaboratoriesPage;

// import { UseLanguage } from "@/context/languageContext";
// import MainLayout from "@/layouts/homeLayout";
// import { laboratoryData } from "@/utils/student";
// import RuleItem from "@/components/ruleItem";

// const LaboratoriesPage = () => {
//   const { language } = UseLanguage();
//   const content = laboratoryData;

//   return (
//     <MainLayout>
//       <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
//         <div className="flex flex-col items-center">
//           <div className="w-full max-w-4xl text-left">
//             <h1 className="text-4xl font-bold mb-8 text-orange-500 text-center">
//               {content.pageTitle[language]}
//             </h1>
//             <div className="p-6 sm:p-8 rounded-xl border border-slate-300">
//               <ul className="space-y-6 text-lg text-black">
//                 {content.labs.map((lab, index) => (
//                   <RuleItem key={index} label={(index + 1).toString()}>
//                     <span>{lab[language]}</span>
//                   </RuleItem>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//     </MainLayout>
//   );
// };

// export default LaboratoriesPage;
