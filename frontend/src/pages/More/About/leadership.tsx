import MainLayout from "@/layouts/homeLayout";

const Leadership = () => {
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto text-gray-100">
        {/* Page Title */}
        <h1 className="text-5xl font-bold text-center text-orange-400 mb-16">
          An Inspirational Leadership
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-10 mb-10">
          {/* Image - Add actual path */}
          <div className="w-full lg:w-1/2">
            <img
              src="/yogiJi.webp"
              alt="Poojya Mahant Yogi Adityanath Ji Maharaj"
              className="rounded-xl w-full h-auto object-cover shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-lg leading-relaxed">
            <h2 className="text-3xl font-bold mb-4 text-orange-400">
              Poojya Mahant Yogi Adityanath Ji Maharaj
            </h2>

            <p className="mb-4">
              A spiritual luminary, visionary statesman, and transformative
              leader, Poojya
              <span className="font-semibold">
                {" "}
                Mahant Yogi Adityanath Ji Maharaj{" "}
              </span>
              is the{" "}
              <span className="font-semibold">
                Founder Chancellor of Mahayogi Gorakhnath University
              </span>
              , Gorakhpur. His leadership is a confluence of religious
              dedication, political excellence, and humanitarian service.
            </p>

            <p className="mb-4">
              As the{" "}
              <span className="font-semibold">
                Peethadheeswar of Gorakshpeeth
              </span>{" "}
              and the{" "}
              <span className="font-semibold">
                Hon’ble Chief Minister of Uttar Pradesh
              </span>
              , Poojya Maharaj Ji has elevated the scope and stature of{" "}
              <span className="font-semibold">
                Maharana Pratap Shiksha Parishad
              </span>
              , propelling it into new dimensions across education, healthcare,
              and public welfare driven by an ethos of excellence, ethics, and
              innovation.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="text-lg leading-relaxed mb-10">
          <p className="mb-4">
            A{" "}
            <span className="font-semibold">
              thinker with a scientific temperament
            </span>{" "}
            and a<span className="font-semibold"> deep lover of nature</span>,
            Yogi Adityanath Ji Maharaj is known for his original ideas and
            visionary reforms. His emphasis on institutional discipline,
            purposeful service, and nation-building has made the institutions
            under Maharana Pratap Shiksha Parishad role models in their
            respective fields.
          </p>

          <p className="mb-4">
            The very conception, vision, and realization of
            <span className="font-semibold">
              {" "}
              Mahayogi Gorakhnath University, Gorakhpur
            </span>
            are a testament to the unwavering commitment and long-term planning
            of Poojya Maharaj Ji. It is not just a university, but his{" "}
            <span className="font-semibold">dream project</span> born from a
            noble intention to build a globally benchmarked institution rooted
            in Bharatiya values.
          </p>
        </div>

        {/* Section 3 */}
        <div className="text-lg leading-relaxed">
          <p className="mb-4">
            From the early efforts in{" "}
            <span className="font-semibold">2005</span> to ground-level
            transformation visible by{" "}
            <span className="font-semibold">2013</span>, every step from
            acquiring land, planning infrastructure, to engaging top-tier
            construction and technology partners was driven by his clarity of
            purpose and iron will.
          </p>

          <p className="mb-4">
            Today,{" "}
            <span className="font-semibold">
              Mahayogi Gorakhnath University
            </span>{" "}
            stands as an
            <span className="font-semibold">
              {" "}
              ultra-modern, multidisciplinary hub
            </span>
            , envisioned to become a backbone of Gorakhpur's rise as a
            <span className="font-semibold"> "Knowledge City"</span>. With
            state-of-the-art educational and medical facilities, it is designed
            not only to educate but to inspire.
          </p>

          <p className="mb-4">
            It reflects the aspiration of a leader who merges tradition with
            technology, spirituality with science, and service with scholarship.
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default Leadership;
