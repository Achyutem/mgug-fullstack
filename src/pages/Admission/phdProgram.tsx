import { useState, useRef, useEffect } from "react";
import { UseLanguage } from "@/context/languageContext";
import MainLayout from "@/layouts/homeLayout";
import { phdprogramsContent } from "@/utils/admission";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

// This component provides a smooth height transition for the collapsible content.
const AnimateHeight = ({
  isVisible,
  children,
}: {
  isVisible: boolean;
  children: React.ReactNode;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      // Set the height to the scrollHeight if visible, otherwise 0.
      // This is what creates the smooth animated effect.
      setHeight(isVisible ? contentRef.current.scrollHeight : 0);
    }
  }, [isVisible, children]); // Re-calculate height when visibility or content changes

  return (
    <div
      style={{ maxHeight: `${height}px` }}
      className="overflow-hidden transition-all duration-500 ease-in-out"
    >
      <div ref={contentRef}>{children}</div>
    </div>
  );
};

const PhDPrograms = () => {
  const { language } = UseLanguage();
  const t = phdprogramsContent;
  const [selectedFaculty, setSelectedFaculty] = useState<number | null>(null);

  const toggleFaculty = (index: number) => {
    setSelectedFaculty(selectedFaculty === index ? null : index);
  };

  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto min-h-screen">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-orange-500 text-center uppercase tracking-tight">
          {t.heading[language]}
        </h1>
        <div className="flex flex-col gap-3">
          {t.faculties.map((faculty, index) => (
            <div key={index} className="flex flex-col">
              {/* Button for each faculty that toggles the collapsible table */}
              <Button
                variant="outline"
                className="w-full h-14 bg-transparent text-orange-500 hover:bg-orange-300/40 hover:text-orange-500 transition-all duration-300 border-2 border-orange-500 rounded-lg text-lg font-semibold flex justify-between items-center px-4 shadow-sm"
                onClick={() => toggleFaculty(index)}
              >
                <span>{faculty.name[language]}</span>
                {/* Dynamically display the appropriate icon */}
                {selectedFaculty === index ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </Button>
              {/* The collapsible content with animated height */}
              <AnimateHeight isVisible={selectedFaculty === index}>
                <div className="mt-4 bg-orange-200 rounded-lg shadow-md overflow-x-auto scrollbar-none">
                  <Table>
                    {/* Table headers for desktop view */}
                    <TableHeader className="hidden md:table-header-group">
                      <TableRow className="bg-orange-200 border-b border-slate-300/50">
                        <TableHead className="text-black font-bold text-sm py-4">
                          Programme Name
                        </TableHead>
                        <TableHead className="text-black font-bold text-sm py-4">
                          Duration
                        </TableHead>
                        <TableHead className="text-black font-bold text-sm py-4">
                          Fees
                        </TableHead>
                        <TableHead className="text-black font-bold text-sm py-4">
                          Examination Fee
                        </TableHead>
                        <TableHead className="text-black font-bold text-sm py-4">
                          Seats
                        </TableHead>
                        <TableHead className="text-black font-bold text-sm py-4">
                          Qualification
                        </TableHead>
                      </TableRow>
                    </TableHeader>

                    {/* Table body with program data */}
                    <TableBody>
                      {faculty.programs.map((program, progIndex) => (
                        <TableRow
                          key={progIndex}
                          className={`block md:table-row mb-4 md:mb-0 border border-slate-300 rounded-lg md:border-none md:border-b md:border-slate-300/50 hover:bg-orange-500/10 transition-colors duration-200 ${
                            progIndex % 2 === 0
                              ? "bg-orange-200"
                              : "bg-orange-300"
                          }`}
                        >
                          {/* Table cells, with mobile labels */}
                          <TableCell className="block md:table-cell p-3 md:px-6 md:py-4 border-b border-slate-300 md:border-none">
                            <div className="flex justify-between items-start md:block">
                              <span className="font-semibold text-black md:hidden mr-2 shrink-0">
                                Programme Name
                              </span>
                              <div className="text-right md:text-left">
                                <div className="font-medium text-black text-sm py-3">
                                  {program.name[language]}
                                </div>
                                {program.note?.[language] && (
                                  <div className="text-gray-400 text-xs mt-2 italic">
                                    Note: {program.note[language]}
                                  </div>
                                )}
                              </div>
                            </div>
                          </TableCell>

                          <TableCell className="block md:table-cell p-3 md:px-6 md:py-4 border-b border-slate-300 md:border-none">
                            <div className="flex justify-between items-center md:block">
                              <span className="font-semibold text-black md:hidden mr-2">
                                Duration
                              </span>
                              <span className="text-right md:text-left text-black text-sm py-3">
                                {program.duration[language]}
                              </span>
                            </div>
                          </TableCell>

                          <TableCell className="block md:table-cell p-3 md:px-6 md:py-4 border-b border-slate-300 md:border-none">
                            <div className="flex justify-between items-center md:block">
                              <span className="font-semibold text-black md:hidden mr-2">
                                Fees
                              </span>
                              <span className="text-right md:text-left text-black text-sm py-3">
                                {program.fees[language]}
                              </span>
                            </div>
                          </TableCell>

                          <TableCell className="block md:table-cell p-3 md:px-6 md:py-4 border-b border-slate-300 md:border-none">
                            <div className="flex justify-between items-center md:block">
                              <span className="font-semibold text-black md:hidden mr-2">
                                Examination Fee
                              </span>
                              <span className="text-right md:text-left text-black text-sm py-3">
                                {program.examinationFee[language]}
                              </span>
                            </div>
                          </TableCell>

                          <TableCell className="block md:table-cell p-3 md:px-6 md:py-4 border-b border-slate-300 md:border-none">
                            <div className="flex justify-between items-center md:block">
                              <span className="font-semibold text-black md:hidden mr-2">
                                Seats
                              </span>
                              <span className="text-right md:text-left text-black text-sm py-3">
                                {program.seats[language]}
                              </span>
                            </div>
                          </TableCell>

                          <TableCell className="block md:table-cell p-3 md:px-6 md:py-4">
                            <div className="flex justify-between items-start md:block">
                              <span className="font-semibold text-black md:hidden mr-2 shrink-0">
                                Qualification
                              </span>
                              <ul className="list-disc pl-5 space-y-2 leading-6 text-right md:text-left text-black">
                                {program.qualification.map((qual, qIndex) => (
                                  <li key={qIndex} className="text-sm">
                                    {qual[language]}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </AnimateHeight>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default PhDPrograms;
