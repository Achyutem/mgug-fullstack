import MainLayout from "@/layouts/homeLayout";

const Inspiration = () => {
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto text-gray-100">
        {/* Page Title */}
        <h1 className="text-5xl font-bold text-center text-orange-400 mb-16">
          Our Source of Inspiration
        </h1>

        {/* Section 1 – Mahant Digvijainath Ji */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
          {/* Image Left */}
          <div className="w-full lg:w-1/2">
            <img
              src="/mahantDigvijainath.jpg" // Replace with actual image path
              alt="Mahant Digvijainath Ji"
              className="rounded-xl w-full h-auto object-cover shadow-lg"
            />
          </div>

          {/* Text Right */}
          <div className="w-full lg:w-1/2 text-lg leading-relaxed">
            <h2 className="text-3xl font-bold mb-4 text-orange-400">
              Mahant Digvijainath Ji Maharaj
            </h2>

            <p className="mb-4">
              The founding father of Maharana Pratap Shiksha Parishad, Yugpurush
              Gorakshpeethadheeswar Brahmleen Mahant Digvijainath Ji Maharaj,
              laid the foundation stone of this visionary organization in 1932.
              A towering figure in India’s independence movement and a beacon of
              spiritual and educational leadership, he believed deeply in the
              power of youth to shape the future of the nation.
            </p>

            <p className="mb-4">
              To realize this vision, Poojya Maharaj Ji championed a{" "}
              <span className="font-semibold">
                Bharat-centric education system
              </span>
              , one that was rooted in Indian values, heritage, and
              self-reliance. He established prototype institutions ranging from
              primary schools to higher education that served as models for what
              Indian education could truly become.
            </p>

            <p className="mb-4">
              Mahant Digvijainath Ji also played a pivotal role in the
              establishment of one of independent India’s earliest universities
              – <span className="font-semibold">Gorakhpur University</span> (now
              Deen Dayal Upadhyaya Gorakhpur University).
            </p>

            <p className="mb-4">
              Under his leadership, Maharana Pratap Shiksha Parishad grew into a{" "}
              <span className="font-semibold">Triveni</span> – a confluence of{" "}
              <span className="font-semibold">
                Education, Health, and Technology
              </span>
              , serving society in a holistic, purpose-driven manner.
            </p>
          </div>
        </div>

        {/* Section 2 – Mahant Avedyanath Ji */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          {/* Image Right */}
          <div className="w-full lg:w-1/2">
            <img
              src="/mahantAvedyanath.jpg" // Replace with actual image path
              alt="Mahant Avedyanath Ji"
              className="rounded-xl w-full h-auto object-cover shadow-lg"
            />
          </div>

          {/* Text Left */}
          <div className="w-full lg:w-1/2 text-lg leading-relaxed">
            <h2 className="text-3xl font-bold mb-4 text-orange-400">
              Rashtra Sant Mahant Avedyanath Ji Maharaj
            </h2>

            <p className="mb-4">
              The dynamic helmsman of Maharana Pratap Shiksha Parishad, Rashtra
              Sant Gorakshpeethadheeswar Brahmleen Mahant Avedyanath Ji Maharaj,
              expanded and institutionalized the dream initiated by his Gurudev.
              With unmatched devotion, he carried the torch of service and
              transformed it into a blazing{" "}
              <span className="font-semibold">
                Mahayajna of welfare, knowledge, and public good
              </span>
              .
            </p>

            <p className="mb-4">
              Param Poojya Maharaj Ji established a wide network of institutions
              across{" "}
              <span className="font-semibold">
                Education, Training, Medicine, and Technology
              </span>
              , reaching both rural and urban populations, especially in Eastern
              Uttar Pradesh.
            </p>

            <p className="mb-4">
              His philosophy of{" "}
              <span className="italic text-orange-400">
                “सेवा से साधना” (Sadhna through Service)
              </span>{" "}
              inspired the creation of schools, colleges, polytechnics, teacher
              training institutes, and nursing colleges. These institutions
              weren't merely centers of learning but{" "}
              <span className="font-semibold">temples of transformation</span>,
              where minds were awakened and lives uplifted.
            </p>

            <p className="mb-4">
              His efforts also led to the establishment of{" "}
              <span className="font-semibold">
                Ayurvedic and Allopathic hospitals
              </span>
              , catering to the health and wellness of the common people –
              further extending the vision of holistic national service.
            </p>

            <p className="mb-4">
              All these endeavors were deeply rooted in the noble vision of{" "}
              <span className="font-semibold">
                serving the nation through education, health, and cultural
                revival
              </span>
              , reflecting the eternal values of{" "}
              <span className="font-semibold">
                selfless service and spiritual discipline
              </span>
              .
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Inspiration;
