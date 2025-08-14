/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useState,
  useMemo,
  type JSXElementConstructor,
  type Key,
  type ReactElement,
  type ReactNode,
  type ReactPortal,
} from "react";
import { UseLanguage } from "@/context/languageContext";
import MainLayout from "@/layouts/homeLayout";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Clock,
  Users,
  GraduationCap,
  BookCopy,
  Landmark,
  ChevronRight,
  Palette,
  Atom,
  Briefcase,
  Microscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { listProgramsContent, listProgramsStaticText } from "@/utils/admission";
import { cn } from "@/lib/utils";

const facultyIcons = [Palette, Atom, Briefcase, Microscope];

// Main Component
const ListOfPrograms = () => {
  const { language } = UseLanguage();
  const dynamicContent = listProgramsContent;
  const staticText = listProgramsStaticText;

  const [selectedFacultyIndex, setSelectedFacultyIndex] = useState(0);

  const selectedFaculty = useMemo(
    () => dynamicContent.faculties[selectedFacultyIndex],
    [selectedFacultyIndex, dynamicContent.faculties]
  );

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto min-h-screen">
        <div className="relative max-w-8xl mx-auto z-10">
          <h1 className="text-2xl md:text-3xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-orange-500 uppercase tracking-wider">
            {dynamicContent.heading[language]}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* === Left Panel: Faculty Navigation (Desktop) === */}
            <aside className="hidden md:block md:col-span-3 lg:col-span-3">
              <h2 className="text-lg font-semibold text-black mb-4 px-3 flex items-center">
                <Landmark className="w-5 h-5 mr-2 text-orange-600" />
                {"Faculties"}
              </h2>
              <nav className="flex flex-col space-y-2">
                {dynamicContent.faculties.map((faculty, index) => {
                  const Icon = facultyIcons[index % facultyIcons.length];
                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedFacultyIndex(index)}
                      className={cn(
                        "group flex items-center w-full px-4 py-3 text-left text-sm font-medium rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500",
                        selectedFacultyIndex === index
                          ? "bg-orange-200 text-orange-600"
                          : "text-black hover:bg-orange-200 hov hover:text-black"
                      )}
                    >
                      {Icon && (
                        <Icon
                          className={cn(
                            "w-5 h-5 mr-3 transition-colors shrink-0",
                            selectedFacultyIndex === index
                              ? "text-orange-600"
                              : "text-gray-600 group-hover:text-black"
                          )}
                        />
                      )}
                      <span>{faculty.name[language]}</span>
                      <AnimatePresence>
                        {selectedFacultyIndex === index && (
                          <motion.div
                            layoutId="selected-glow"
                            className="ml-auto h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_10px_theme(colors.orange.400)]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          ></motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* === Right Panel: Program Grid === */}
            <main className="md:col-span-9 lg:col-span-9">
              {/* Mobile Faculty Selector */}
              <div className="md:hidden mb-6">
                <h2 className="text-lg font-semibold text-black mb-3 px-1 flex items-center">
                  <Landmark className="w-5 h-5 mr-2 text-orange-600" />
                  Select a Faculty
                </h2>
                <Select
                  value={String(selectedFacultyIndex)}
                  onValueChange={(value: any) =>
                    setSelectedFacultyIndex(Number(value))
                  }
                >
                  <SelectTrigger className="w-full font-bold text-orange-500 bg-orange-500/10 border-orange-500 focus:ring-orange-500">
                    <SelectValue placeholder="Select a faculty" />
                  </SelectTrigger>
                  <SelectContent className="bg-orange-100 border-gray-700">
                    {dynamicContent.faculties.map((faculty, index) => (
                      <SelectItem
                        key={index}
                        value={String(index)}
                        className="focus:bg-orange-200"
                      >
                        {faculty.name[language]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedFacultyIndex}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
                >
                  {selectedFaculty.programs.map((program, progIndex) => (
                    <motion.div variants={itemVariants} key={progIndex}>
                      <ProgramCard
                        program={program}
                        language={language}
                        staticText={staticText}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </main>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

// Sub-component for the Program Card
const ProgramCard = ({ program, language, staticText }: any) => {
  return (
    <Dialog>
      <div className="h-full flex flex-col justify-between p-6 rounded-xl bg-orange-500/10 backdrop-blur-sm border hover:border-2 border-orange-500 hover:bg-transparent shadow-lg hover:border-orange-600 transition-colors duration-300">
        <div>
          <h3 className="text-lg font-bold text-black">
            {program.name[language]}
          </h3>
          {program.note?.[language] && (
            <p className="text-red-400 text-xs font-semibold mt-2 italic">
              Note: {program.note[language]}
            </p>
          )}
          <div className="mt-4 space-y-3 text-sm text-black">
            <InfoPill
              icon={Clock}
              label={staticText.tableHeaders.duration[language]}
              value={program.duration[language]}
            />
            <InfoPill
              icon={Users}
              label={staticText.tableHeaders.seats[language]}
              value={program.seats[language]}
            />
          </div>
        </div>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="w-full mt-6 bg-transparent border-orange-500 hover:bg-orange-500/10 hover:border-orange-600 hover:text-orange-600 transition-all text-black"
          >
            {"View Details"}
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </DialogTrigger>
      </div>

      <DialogContent className="bg-orange-100 backdrop-blur-md border-gray-700 text-gray-700 max-w-2xl max-h-[85dvh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-orange-500">
            {program.name[language]}
          </DialogTitle>
          <DialogDescription className="text-black pt-2">
            Detailed information for the program.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
          <InfoItem
            icon={BookCopy}
            label={staticText.tableHeaders.fees[language]}
            value={program.fees[language]}
          />
          <InfoItem
            icon={BookCopy}
            label={staticText.tableHeaders.examFee[language]}
            value={program.examinationFee[language]}
          />
          <InfoItem
            icon={Users}
            label={staticText.tableHeaders.supernumerary[language]}
            value={program.supernumerarySeats?.[language] || "N/A"}
          />
          <div className="md:col-span-2">
            <h4 className="flex items-center text-lg font-semibold text-orange-500 mb-3">
              <GraduationCap className="w-5 h-5 mr-3 text-orange-500" />
              {staticText.tableHeaders.qualification[language]}
            </h4>
            <ul className="list-disc pl-5 space-y-2 text-black text-sm">
              {program.qualification.map(
                (
                  qual: {
                    [x: string]:
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactElement<
                          unknown,
                          string | JSXElementConstructor<any>
                        >
                      | Iterable<ReactNode>
                      | ReactPortal
                      | Promise<
                          | string
                          | number
                          | bigint
                          | boolean
                          | ReactPortal
                          | ReactElement<
                              unknown,
                              string | JSXElementConstructor<any>
                            >
                          | Iterable<ReactNode>
                          | null
                          | undefined
                        >
                      | null
                      | undefined;
                  },
                  qIndex: Key | null | undefined
                ) => (
                  <li key={qIndex}>{qual[language]}</li>
                )
              )}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Helper components for displaying info
const InfoPill = ({ icon: Icon, label, value }: any) => (
  <div className="flex items-center">
    <Icon className="w-4 h-4 mr-3 text-gray-500 shrink-0" />
    <span>
      <span className="font-semibold text-black">{label}:</span> {value}
    </span>
  </div>
);

const InfoItem = ({ icon: Icon, label, value }: any) => (
  <div className="flex flex-col p-4 bg-orange-100 rounded-lg border border-gray-700">
    <div className="flex items-center text-sm font-semibold text-black mb-1">
      <Icon className="w-4 h-4 mr-2 text-gray-700" />
      {label}
    </div>
    <p className="text-base font-medium text-gray-700">{value}</p>
  </div>
);

export default ListOfPrograms;
