import MainLayout from "@/layouts/homeLayout";

const AboutUs = () => {
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-10">
          {/* Image Section */}
          <div className="w-full max-w-4xl h-64 sm:h-80 md:h-96 rounded-xl shadow-lg overflow-hidden">
            <img
              src="/university.webp"
              alt="Mahaguru Gorakhnath"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="w-full max-w-4xl text-left">
            <h1 className="text-4xl font-bold mb-6 text-orange-400">
              About Us
            </h1>
            <div className="text-lg leading-relaxed text-gray-100">
              <p className="mb-4">
                Mahayogi Gorakhnath, the Pravartak of the Nathpanth, holds a
                revered place in the saint tradition of India. In the spiritual
                tradition of India, the credit for spreading the knowledge of
                Kriya Yoga to the people goes to Mahayogi Guru Gorakhnath and
                the Nath Yogis. Considered a Yug-Pravartak saint, Mahayogi
                Gorakhnath was the forerunner of social change in India,
                offering a unique formula of health and worship alongside
                purification of the human body, mind, brain, and soul. The
                Nathpanth, promoted by Guru Shri Gorakhnath, guides Nishkam
                Karmayoga, viewing service dedicated to people’s welfare as a
                spiritual practice.
              </p>

              <p className="mb-4">
                Shri Gorakhnath Temple is the place of penance of Mahayogi Shri
                Gorakhnath Ji. It is widely believed that the Mahant of Shri
                Gorakhnath Temple and Shri Gorakshapeeth is the representative
                of Guru Shri Gorakhnath Ji. Since the time of this Yug-Pravartak
                Mahayogi, the temple’s philanthropic role has been expanding. In
                the modern era, Brahmaleen Mahant Digvijainath Ji Maharaj
                integrated education and medicine into this service. The
                establishment of Maharana Pratap Shiksha Parishad in 1932 marked
                the beginning of this ideological movement. Brahmaleen Mahant
                Digvijainath Ji Maharaj founded educational institutions from
                primary to higher education and paved the way for the
                establishment of Gorakhpur University.
              </p>

              <p className="mb-4">
                Continuing this legacy, Brahmaleen Mahant Avedyanath Ji Maharaj
                laid the foundation for significant contributions to allopathic
                medicine through the establishment of the Guru Shri Gorakshnath
                Chikitsalaya Samiti. The founding of Guru Shri Gorakshnath
                Chikitsalaya, following the Digvijainath Ayurvedic College and
                Digvijainath Ayurvedic Chikitsalaya, was a key milestone in
                healthcare service in Eastern Uttar Pradesh.
              </p>

              <p className="mb-4">
                Mahayogi Shri Gorakhnath’s legacy of social service and
                upliftment of the downtrodden continues to grow through the
                establishment of Mahayogi Gorakhnath University, Gorakhpur. This
                revolutionary academic endeavor merges yoga, Ayurveda, medical
                education, humanities, physical sciences, technical education,
                skill development, and vocational courses, aiming to
                revolutionize education and healthcare infrastructure in this
                historically underserved region.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8 text-orange-400">
                Vision and Aim of Mahayogi Gorakhnath University
              </h2>

              <ul className="list-disc list-inside space-y-3 text-gray-100">
                <li>
                  Develop a world-class modern institution with state-of-the-art
                  technology, facilities, and infrastructure, maintaining the
                  highest standards in education across humanities, physical
                  sciences, technology, medical fields, healthcare, agriculture,
                  and skill development.
                </li>
                <li>
                  Establish institutions spanning all genres of medicine — from
                  conventional to modern — engaged in research, development,
                  technical education, and vocational skills, focused on local
                  resources and needs.
                </li>
                <li>
                  Encourage study and research in both ancient and modern
                  streams of theoretical and practical knowledge related to
                  education and health.
                </li>
                <li>
                  Build healthcare institutions and hospitals for allopathy,
                  yoga, Ayurveda, etc., within a single campus, combining
                  teaching, research, and affordable advanced healthcare
                  services for the local community.
                </li>
                <li>
                  Promote research, training, and propagation of modern medicine
                  such as allopathy and its related streams.
                </li>
                <li>
                  Develop teaching, training, and research programs in nursing,
                  pharmacy, paramedical, and other healthcare-related fields.
                </li>
                <li>
                  Implement specialized curricula aimed at improving health
                  services and employment opportunities for the local
                  population.
                </li>
                <li>
                  Prepare curricula related to highly specialized branches of
                  medical studies and encourage further research and development
                  in these areas.
                </li>
                <li>
                  Establish institutions connected to social welfare and health
                  programs in remote rural areas of the region.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutUs;
