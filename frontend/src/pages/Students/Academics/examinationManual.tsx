import MainLayout from "@/layouts/homeLayout";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RuleItem = ({ label, children }: any) => (
  <li className="flex items-start">
    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-orange-500/20 text-orange-400 font-semibold flex items-center justify-center mr-4 mt-1">
      {label}
    </div>
    <div className="flex-1">{children}</div>
  </li>
);

const ExaminationManual = () => {
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl text-left">
            <h1 className="text-4xl font-bold mb-8 text-orange-400 text-center">
              Examination Manual
            </h1>
            <div className="p-6 sm:p-8 rounded-xl border border-slate-700">
              <ul className="space-y-6 text-lg text-gray-200">
                <RuleItem label="A">
                  <strong>Policy for EXAMINAR</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-2 text-base">
                    <li>
                      An examiner for a collegiate programme should be a
                      lecturer or above in a college of nursing with Master
                      Degree in concerned subject and minimum of 03 years of
                      teaching experience in collegiate programme. To be an
                      examiner for nursing foundations course faculty having
                      Master Degree with any speciality will be considered.
                    </li>
                    <li>
                      An examiner for B.Sc.(N) program shall be only M.Sc (N)
                      qualified faculty.
                    </li>
                    <li>
                      One internal and one external examiner should jointly
                      conduct practical examination for each student for UG
                      courses. For PG Course one internal from the university
                      and one external from outside the university (other
                      University).
                    </li>
                    <li>
                      Final year marks shall be withheld till the candidate
                      completes required attendance for practicals.
                    </li>
                    <li>
                      For Dissertation internal examiner should be the guide and
                      the external examiner should be nursing faculty/ nursing
                      expert in the same clinical speciality holding Ph.D./
                      M.Phil./ M.Sc (N) with a minimum 03 years experience in
                      guiding the research projects for Post Graduate students
                      of Nursing.
                    </li>
                  </ul>
                </RuleItem>
                <RuleItem label="B">
                  <strong>Policy for PAPER SETTERS</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-2 text-base">
                    <li>
                      The question paper setters need to submit the answer keys
                      along with the questions.
                    </li>
                    <li>
                      The two sets of question papers need to prepare at the
                      time.
                    </li>
                    <li>
                      The question papers need to be submitted as soon as
                      possible.
                    </li>
                    <li>Need to maintain confidentiality.</li>
                    <li>
                      The paper setters should not withheld the copy of question
                      papers.
                    </li>
                  </ul>
                </RuleItem>
                <RuleItem label="C">
                  <strong>Policy for INVIGILATORS</strong>
                  <p className="mt-2 text-base">
                    Invigilation is one of the most important tasks required to
                    be performed during the conduct of an examination. Impartial
                    invigilation helps not only to check the use of unfair means
                    but also to keep the morale of the candidates. A set of
                    guidelines for the invigilators are given below:
                  </p>
                  <ul className="list-decimal pl-6 mt-2 space-y-2 text-base">
                    <li>
                      Report to the chief superintendent one hour before the
                      commencement of the examination.
                    </li>
                    <li>
                      Permit the candidates to enter the Examination Hall one
                      hour before the commencement of the examination.
                    </li>
                    <li>
                      Collect the answer books, count and replace defective
                      ones.
                    </li>
                    <li>
                      Carry question papers in packets from confidential room to
                      exam room.
                    </li>
                    <li>Ensure no stray marks or folds on OMR sheets.</li>
                    <li>
                      Help candidates locate seats, and collect unauthorized
                      items.
                    </li>
                    <li>Check Admit card and ID, guide if not available.</li>
                    <li>Verify identity and take attendance.</li>
                    <li>Only authorized personnel allowed in exam hall.</li>
                    <li>
                      Distribute answer book 30 mins before, verify details
                      filled by students.
                    </li>
                    <li>Sign Part I and Part III of answer books.</li>
                    <li>Distribute question papers at start time.</li>
                    <li>Announce each hour completed.</li>
                    <li>Announce last 5 mins, stop writing at end bell.</li>
                    <li>Ensure candidates mark unused pages with 'X'.</li>
                    <li>
                      Collect and arrange answer books by register numbers.
                    </li>
                    <li>Admit card and ID card are mandatory for entry.</li>
                    <li>
                      Follow seating plan strictly, no late entries after 30
                      mins.
                    </li>
                    <li>
                      Chief superintendent may issue duplicate Admit cards as
                      needed.
                    </li>
                    <li>No candidate may leave before 30 mins to end.</li>
                    <li>Maintain alertness, avoid distractions.</li>
                    <li>Maintain strict silence, no borrowing allowed.</li>
                    <li>
                      No clarifications to be provided—refer to Chief
                      Superintendent.
                    </li>
                    <li>
                      Use of tools allowed only if question paper permits.
                    </li>
                    <li>No mobiles or electronic devices in hall.</li>
                    <li>
                      Prevent unfair means; report violations immediately.
                    </li>
                    <li>
                      No identification marks allowed beyond Part I of answer
                      book.
                    </li>
                    <li>Only authorized persons allowed entry.</li>
                    <li>Drinking water must be available.</li>
                    <li>Rough work only on answer booklet’s last page.</li>
                    <li>No refreshments allowed.</li>
                    <li>
                      Invigilators must not correct register numbers; ask
                      students to correct and countersign.
                    </li>
                  </ul>
                </RuleItem>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ExaminationManual;
