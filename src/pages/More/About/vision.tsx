import MainLayout from "@/layouts/homeLayout";

export default function Vision() {
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Logo Image (Sticky on large screens) */}
          <div className="w-full lg:w-1/3 max-w-sm mx-auto lg:mx-0">
            <div className="rounded-xl shadow-lg overflow-hidden bg-white p-4 lg:sticky lg:top-28">
              <img
                src="/largelogo.jpg"
                alt="University Logo - Mahayogi Guru Gorakhnath"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-2/3 text-left text-lg leading-relaxed text-gray-100">
            <h1 className="text-4xl font-bold mb-6 text-orange-400">
              Vision & Mission
            </h1>

            <h2 className="text-2xl font-semibold text-white mb-3">
              The Purpose
            </h2>
            <p className="mb-6 text-gray-300">
              Reviving and re-establishing the Indian knowledge traditions in
              modern format and to develop a multi-disciplinary centre of
              excellence equipped with ultra-modern state of the art facilities,
              where our youth can have access to a balanced comprehensive
              holistic knowledge of various streams of Medical & Physical
              Sciences, Technology and Humanities.
            </p>
            <p className="mb-6 text-gray-300">
              Here within one campus, a unique one of its kind, holistic
              standard approach to the human health care is being established
              and developed — i.e., making available an advanced medical centre
              equipped with cutting-edge medical technologies, facilities and
              services (diagnosis, treatment & wellness) of almost all the
              pathies and disciplines of the health care viz. Yoga, Ayurveda,
              Allopathy, Naturopathy, Homeopathy, and Unani etc.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-10 mb-3">
              The Vision
            </h2>
            <p className="mb-6 text-gray-300">
              To train, educate and groom future generation of Indianised
              citizens fully imbued in the ethos and values of Indian culture
              who are patriotic, devoted and dedicated to the cause of nation,
              with the motto{" "}
              <span className="italic text-orange-300">‘Nation First’</span>.
            </p>
            <p className="mb-6 text-gray-300">
              Keeping this motto in perspective, introducing them to the Indian
              culture-centric philosophy of life and making them aware of
              eternal Indian knowledge tradition with a mindset of dedication
              and devotion to serve the people. They are educated and trained in
              a work culture which leads them to public service in various
              fields of social and national life.
            </p>
            <p className="mb-6 text-gray-300">
              Our aim through health and other public service-oriented projects
              is to ascertain our contribution in the field of public welfare,
              serving the people and humanity by nursing, nurturing, and
              conserving nature and our natural resources. We inspire and
              motivate others — especially those associated and active in the
              education and health sectors — to participate and contribute in
              the <span className="italic">Yajna</span> of social and national
              service.
            </p>
            <p className="mb-6 text-gray-300">
              Furthermore, for us, the modern education system is a useful and
              helpful tool to accomplish our goal of imparting Bharat-centric
              education to future generations. All our institutions, including
              medical institutions, are in fact vehicles to achieve our
              well-enshrined mission of serving the people in myriad ways.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-10 mb-3">
              The Aim
            </h2>
            <p className="mb-6 text-gray-300">
              Our aim is to help develop competent, responsible, and efficient
              citizens of tomorrow imbued in Indian value systems — which
              inculcate in them character, morality, courage of conviction, and
              the highest order of integrity — ever ready to serve the nation in
              any role they choose or are assigned.
            </p>
            <p className="mb-6 text-gray-300">
              Moreover, to prepare skilled, forceful, and capable citizens with
              a syncretic view of material and spiritual life, who use acquired
              knowledge to empower and evolve themselves and serve the people.
            </p>
            <p className="mb-6 text-gray-300">
              Preparing such citizens whose life mantra is:
              <br />
              <span className="block mt-4 italic text-orange-300 text-lg">
                न त्वहम् कामये राज्यम् न स्वर्गम् न पुनर्भवम्। <br />
                कामये दुःखतप्तानाम् प्राणिनामार्तिनाशनम्।।
              </span>
            </p>
            <p className="text-gray-300">
              <strong>Translation:</strong> I do not wish for a kingdom, I do
              not want heaven or salvation. It is my wish to help in alleviating
              the suffering of people.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
