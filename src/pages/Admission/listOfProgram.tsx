/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef, useEffect } from "react";
import { UseLanguage } from "@/context/languageContext";
import MainLayout from "@/layouts/homeLayout";
import { listProgramsContent } from "@/utils/admission";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

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
      setHeight(isVisible ? contentRef.current.scrollHeight : 0);
    }
  }, [isVisible, children]);

  return (
    <div
      style={{ maxHeight: `${height}px` }}
      className="overflow-hidden transition-all duration-500 ease-in-out"
    >
      <div ref={contentRef}>{children}</div>
    </div>
  );
};

const ListOfPrograms = () => {
  const { language } = UseLanguage();
  const t = listProgramsContent;
  const [selectedFaculty, setSelectedFaculty] = useState<number | null>(0);

  const toggleFaculty = (index: number) => {
    setSelectedFaculty(selectedFaculty === index ? null : index);
  };

  return (
    <MainLayout>
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-500">
            {t.heading[language]}
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Explore our diverse range of academic offerings across all
            faculties.
          </p>
          <div className="mt-6 h-1 max-w-xs mx-auto bg-gradient-to-r from-orange-400 to-orange-500 rounded-full" />
        </div>

        <div className="flex flex-col gap-4">
          {t.faculties.map(({ faculty, index }: any) => (
            <div
              key={index}
              className="flex flex-col bg-gray-800/50 rounded-lg shadow-lg border border-gray-700/50"
            >
              <Button
                variant="ghost"
                className="w-full h-auto py-4 px-6 text-left text-orange-400 hover:text-orange-500 transition-all duration-300 rounded-t-lg rounded-b-none data-[state=open]:rounded-b-none text-lg md:text-xl font-semibold flex justify-between items-center"
                onClick={() => toggleFaculty(index)}
                data-state={selectedFaculty === index ? "open" : "closed"}
              >
                <span>{faculty.name[language]}</span>
                <ChevronDown
                  className={`h-6 w-6 transition-transform duration-500 ease-in-out ${
                    selectedFaculty === index ? "rotate-180" : ""
                  }`}
                />
              </Button>

              <AnimateHeight isVisible={selectedFaculty === index}>
                <div className="p-2 sm:p-4 bg-gray-800 rounded-b-lg">
                  <Table>
                    <TableHeader className="hidden md:table-header-group">
                      <TableRow className="border-b-2 border-orange-400/30">
                        <TableHead className="px-6 py-3 text-left text-xs font-bold text-orange-400 uppercase tracking-wider">
                          Programme
                        </TableHead>
                        <TableHead className="px-6 py-3 text-left text-xs font-bold text-orange-400 uppercase tracking-wider">
                          Duration
                        </TableHead>
                        <TableHead className="px-6 py-3 text-left text-xs font-bold text-orange-400 uppercase tracking-wider">
                          Fees
                        </TableHead>
                        <TableHead className="px-6 py-3 text-left text-xs font-bold text-orange-400 uppercase tracking-wider">
                          Exam Fee
                        </TableHead>
                        <TableHead className="px-6 py-3 text-left text-xs font-bold text-orange-400 uppercase tracking-wider">
                          Seats
                        </TableHead>
                        <TableHead className="px-6 py-3 text-left text-xs font-bold text-orange-400 uppercase tracking-wider">
                          Supernumerary
                        </TableHead>
                        <TableHead className="px-6 py-3 text-left text-xs font-bold text-orange-400 uppercase tracking-wider">
                          Qualification
                        </TableHead>
                        {/* Note column removed from header */}
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {faculty.programs.map(({ program, progIndex }: any) => (
                        <TableRow
                          key={progIndex}
                          className="block md:table-row mb-4 md:mb-0 border border-gray-700 rounded-lg md:border-none md:border-b md:border-gray-700/50"
                        >
                          {/* Programme Cell - MODIFIED */}
                          <TableCell className="block md:table-cell p-3 md:px-6 md:py-4 border-b border-gray-700 md:border-none">
                            <div className="flex justify-between items-start md:block">
                              <span className="font-semibold text-orange-400 md:hidden mr-2 shrink-0">
                                Programme:
                              </span>
                              <div className="text-right md:text-left">
                                <span className="font-semibold text-white">
                                  {program.name[language]}
                                </span>
                                {/* Note is now here, conditionally rendered */}
                                {program.note?.[language] && (
                                  <p className="mt-2 text-xs italic text-red-400">
                                    {program.note[language]}
                                  </p>
                                )}
                              </div>
                            </div>
                          </TableCell>

                          {/* Duration Cell */}
                          <TableCell className="block md:table-cell p-3 md:px-6 md:py-4 border-b border-gray-700 md:border-none">
                            <div className="flex justify-between items-center md:block">
                              <span className="font-semibold text-orange-400 md:hidden mr-2">
                                Duration:
                              </span>
                              <span className="text-right md:text-left text-gray-300">
                                {program.duration[language]}
                              </span>
                            </div>
                          </TableCell>

                          {/* Fees Cell */}
                          <TableCell className="block md:table-cell p-3 md:px-6 md:py-4 border-b border-gray-700 md:border-none">
                            <div className="flex justify-between items-center md:block">
                              <span className="font-semibold text-orange-400 md:hidden mr-2">
                                Fees:
                              </span>
                              <span className="text-right md:text-left text-gray-300">
                                {program.fees[language]}
                              </span>
                            </div>
                          </TableCell>

                          {/* Exam Fee Cell */}
                          <TableCell className="block md:table-cell p-3 md:px-6 md:py-4 border-b border-gray-700 md:border-none">
                            <div className="flex justify-between items-center md:block">
                              <span className="font-semibold text-orange-400 md:hidden mr-2">
                                Exam Fee:
                              </span>
                              <span className="text-right md:text-left text-gray-300">
                                {program.examinationFee[language]}
                              </span>
                            </div>
                          </TableCell>

                          {/* Seats Cell */}
                          <TableCell className="block md:table-cell p-3 md:px-6 md:py-4 border-b border-gray-700 md:border-none">
                            <div className="flex justify-between items-center md:block">
                              <span className="font-semibold text-orange-400 md:hidden mr-2">
                                Seats:
                              </span>
                              <span className="text-right md:text-left text-gray-300">
                                {program.seats[language]}
                              </span>
                            </div>
                          </TableCell>

                          {/* Supernumerary Cell */}
                          <TableCell className="block md:table-cell p-3 md:px-6 md:py-4 border-b border-gray-700 md:border-none">
                            <div className="flex justify-between items-center md:block">
                              <span className="font-semibold text-orange-400 md:hidden mr-2">
                                Supernumerary:
                              </span>
                              <span className="text-right md:text-left text-gray-300">
                                {program.supernumerarySeats?.[language] ||
                                  "N/A"}
                              </span>
                            </div>
                          </TableCell>

                          {/* Qualification Cell */}
                          <TableCell className="block md:table-cell p-3 md:px-6 md:py-4">
                            <div className="flex justify-between items-start md:block">
                              <span className="font-semibold text-orange-400 md:hidden mr-2 shrink-0">
                                Qualification:
                              </span>
                              <ul className="list-none md:list-disc pl-0 md:pl-5 space-y-1 text-right md:text-left text-gray-300">
                                {program.qualification.map(
                                  ({ qual, qIndex }: any) => (
                                    <li key={qIndex} className="text-sm">
                                      {qual[language]}
                                    </li>
                                  )
                                )}
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

export default ListOfPrograms;
