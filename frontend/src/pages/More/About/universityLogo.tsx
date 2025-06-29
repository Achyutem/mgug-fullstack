import MainLayout from "@/layouts/homeLayout";

const UniversityLogo = () => {
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sticky Image on Large Screens */}
          <div className="w-full lg:w-1/3 max-w-sm mx-auto lg:mx-0">
            <div className="rounded-xl shadow-lg overflow-hidden bg-white p-4 lg:sticky lg:top-28">
              <img
                src="/largelogo.jpg"
                alt="University Logo - Mahayogi Guru Gorakhnath"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Scrollable Text Content */}
          <div className="w-full lg:w-2/3 text-left text-lg leading-relaxed text-gray-100">
            <h1 className="text-4xl font-bold mb-6 text-orange-400">
              University Logo
            </h1>

            <p className="mb-4">
              Image of Mahayogi Guru Shri Gorakhnath ji is placed at the centre
              of the logo of Mahayogi Gorakhnath University, Gorakhpur. Mahayogi
              Gorakhnath ji Maharaj is one of the pioneers of social reform in
              India. By his visionary, untiring work and effort, he enlightened,
              educated, and awakened the masses against customs like
              untouchability and other demeaning, divisive practices in our
              Sanatan society.
            </p>

            <p className="mb-4">
              Instead, he emphasized moral and ethical action, honesty,
              integrity, character, and good conduct. Mahayogi Gorakhnath, who
              devoted his entire life to asceticism, is a symbol of Indian
              culture’s glorious legacy of renunciation and social reform.
            </p>

            <p className="mb-4">
              Mahayogi Gorakhnath embodies the timeless spiritual wisdom and
              yoga tradition of India. Guru Shri Gorakhnath is also a luminous
              link in one of the longest continuous Guru-Disciple lineages in
              the world’s spiritual history.
            </p>

            <p className="mb-4">
              His image radiates the light of knowledge and cosmic energy,
              representing the eternal wisdom of the Bharatiya Gyan Parampara.
              The logo includes the sacred verse "स्वस्ति पन्थामनुचरेम्",
              expressing the vision, mission, and path of Mahayogi Gorakhnath
              University.
            </p>

            <p className="mb-4">
              This verse is from the fifth Mandala of the Rigveda:
              <br />
              <span className="block mt-2 italic text-orange-300">
                “स्वस्ति पन्थामनुचरेम् सूर्याचन्द्रमसाविव।
                <br />
                पुनर्ददताघ्नता जानता संगमे यजि॥”
              </span>
            </p>

            <p className="mb-4">
              Translation: Just as the sun and moon follow the unwavering right
              path, we too should walk the righteous path and seek the company
              of virtuous, wise, peaceful, and beneficent individuals.
            </p>

            <p className="mb-4">
              The approved logo of Mahayogi Gorakhnath University reflects the
              institution’s spiritual roots, educational philosophy, and its
              vision for expansion, evolution, and upliftment.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default UniversityLogo;
