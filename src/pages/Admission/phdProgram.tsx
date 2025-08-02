import { useState } from "react";
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
              <Button
                variant="outline"
                className="w-full h-14 bg-transparent text-orange-500 hover:bg-gray-700/30 hover:text-orange-500 transition-all duration-300 border-2 border-orange-500 rounded-lg text-lg font-semibold flex justify-between items-center px-4 shadow-sm"
                onClick={() => toggleFaculty(index)}
              >
                <span>{faculty.name[language]}</span>
                <span
                  className={`transition-transform duration-300 ${
                    selectedFaculty === index ? "rotate-180" : ""
                  }`}
                >
                  {selectedFaculty === index ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </span>
              </Button>
              {selectedFaculty === index && (
                <div className="mt-4 bg-gray-800 rounded-lg shadow-md overflow-x-auto scrollbar-none">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gradient-to-r from-orange-500 to-orange-600 border-b border-gray-700/50">
                        <TableHead className="text-white font-bold text-sm py-4">
                          Programme Name
                        </TableHead>
                        <TableHead className="text-white font-bold text-sm py-4">
                          Duration
                        </TableHead>
                        <TableHead className="text-white font-bold text-sm py-4">
                          Fees
                        </TableHead>
                        <TableHead className="text-white font-bold text-sm py-4">
                          Examination Fee
                        </TableHead>
                        <TableHead className="text-white font-bold text-sm py-4">
                          Seats
                        </TableHead>
                        <TableHead className="text-white font-bold text-sm py-4">
                          Qualification
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {faculty.programs.map((program, progIndex) => (
                        <TableRow
                          key={progIndex}
                          className={`border-b border-gray-700/50 hover:bg-orange-500/10 transition-colors duration-200 ${
                            progIndex % 2 === 0 ? "bg-gray-800" : "bg-gray-850"
                          }`}
                        >
                          <TableCell className="font-medium text-black text-sm py-3">
                            <div>
                              <div>{program.name[language]}</div>
                              {program.note?.[language] && (
                                <div className="text-gray-400 text-xs mt-2 italic">
                                  Note: {program.note[language]}
                                </div>
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="text-black text-sm py-3">
                            {program.duration[language]}
                          </TableCell>
                          <TableCell className="text-black text-sm py-3">
                            {program.fees[language]}
                          </TableCell>
                          <TableCell className="text-black text-sm py-3">
                            {program.examinationFee[language]}
                          </TableCell>
                          <TableCell className="text-black text-sm py-3">
                            {program.seats[language]}
                          </TableCell>
                          <TableCell className="text-black text-sm py-3">
                            <ul className="list-disc pl-5 space-y-2 leading-6">
                              {program.qualification.map((qual, qIndex) => (
                                <li key={qIndex} className="text-sm">
                                  {qual[language]}
                                </li>
                              ))}
                            </ul>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default PhDPrograms;
