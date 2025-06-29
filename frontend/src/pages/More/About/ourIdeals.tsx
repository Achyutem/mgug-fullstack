import MainLayout from "@/layouts/homeLayout";

const OurIdeals = () => {
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto text-gray-100">
        {/* Page Title */}
        <h1 className="text-5xl font-bold text-center text-orange-400 mb-16">
          Our Ideals
        </h1>

        {/* Section 1 – Lord Sri Ram */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
          {/* Image on Left */}
          <div className="w-full lg:w-1/2">
            <img
              src="/maryadaPurushottam.jpg"
              alt="Maryada Purushottam Lord Sri Ram"
              className="rounded-xl w-full h-auto object-cover shadow-lg"
            />
          </div>

          {/* Text on Right */}
          <div className="w-full lg:w-1/2 text-lg leading-relaxed">
            <h2 className="text-3xl font-bold mb-4 text-orange-400">
              Maryada Purushottam Lord Sri Ram
            </h2>

            <p className="mb-4">
              Our ideal, Rastranayak Maryada Purushottam Lord Sri Ram, is an
              epitome of Indian culture and values, an embodiment of courage,
              compassion, and unwavering righteousness. As the torchbearer of{" "}
              <span className="font-semibold">Dharma</span>, he stood as the
              ultimate symbol of self-discipline, justice, and duty-bound
              leadership. His life is a guiding light for all who aspire to walk
              the path of truth and virtue.
            </p>

            <p className="mb-4 italic text-orange-400 text-xl">
              ‘जननी जन्म भूमिश्च स्वर्गादपि गरीयसी’
            </p>

            <p className="mb-4">
              This ever-inspiring exclamation by Lord Sri Ram reflects his
              supreme devotion to his motherland and righteousness. He chose
              exile over throne, duty over comfort, and honor over convenience,
              setting an eternal example of what it means to lead with{" "}
              <span className="font-semibold">moral clarity and sacrifice</span>
              .
            </p>

            <p className="mb-4">
              Lord Ram's reign —{" "}
              <span className="font-semibold">Ram Rajya</span> — has become a
              benchmark for just governance, where truth, fairness, and
              compassion prevailed. He taught the world that power must always
              be guided by <span className="font-semibold">responsibility</span>
              , and decisions must always align with{" "}
              <span className="font-semibold">Dharma</span>. His life reminds us
              that strength is not in wealth or weapons, but in{" "}
              <span className="font-semibold">
                character, courage, and conviction
              </span>
              .
            </p>

            <p className="mb-4">
              In a world where temptations often cloud judgment, Lord Ram's life
              urges us to rise above self-interest, uphold truth, and live with{" "}
              <span className="font-semibold">
                dignity, compassion, and responsibility
              </span>
              . He is not just a historical figure; he is a{" "}
              <span className="font-semibold">timeless ideal</span> — a living
              conscience for a society striving toward spiritual strength,
              unity, and ethical prosperity.
            </p>
          </div>
        </div>

        {/* Section 2 – Maharana Pratap */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          {/* Image on Right */}
          <div className="w-full lg:w-1/2">
            <img
              src="/maharanaPratap.jpg"
              alt="Maharana Pratap"
              className="rounded-xl w-full h-auto object-cover shadow-lg"
            />
          </div>

          {/* Text on Left */}
          <div className="w-full lg:w-1/2 text-lg leading-relaxed">
            <h2 className="text-3xl font-bold mb-4 text-orange-400">
              Maharana Pratap Ji
            </h2>

            <p className="mb-4">
              Maharana Pratap Ji was one of the unparalleled warriors of
              medieval Bharat.{" "}
              <span className="font-semibold">
                Veer Shiromani Maharana Pratap
              </span>{" "}
              sacrificed everything for sovereignty, self-pride, religion, and
              motherland.
            </p>

            <p className="mb-4 italic text-orange-400 text-xl">
              'जो हठि राखे धर्म को तिहि राखै करतार'
            </p>

            <p className="mb-4">
              His ever-reverberating exclamation of valour inspires countless
              generations and guides the educational spirit of{" "}
              <span className="font-semibold">
                Maharana Pratap Shiksha Parishad
              </span>
              .
            </p>

            <p className="mb-4">
              The Parishad ensures that youngsters studying in our institutions
              obtain{" "}
              <span className="font-semibold">
                up-to-date, systematic, and employment-oriented knowledge
              </span>{" "}
              in their chosen disciplines — science, arts, and beyond.
            </p>

            <p className="mb-4">
              We use modern teaching aids and methods to make students{" "}
              <span className="font-semibold">
                self-reliant, employable, and confident
              </span>{" "}
              individuals.
            </p>

            <p className="mb-4">
              At the same time, it is our mission to instill in them{" "}
              <span className="font-semibold">
                high moral and ethical values
              </span>{" "}
              so they can serve society with{" "}
              <span className="font-semibold">
                integrity, dedication, and devotion
              </span>
              .
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default OurIdeals;
