import MainLayout from "@/layouts/homeLayout";

const SponsoringBodyPage = () => {
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-10">
          {/* Optional Image Section for visual consistency */}
          <div className="w-full max-w-4xl h-64 sm:h-80 md:h-96 rounded-xl shadow-lg overflow-hidden">
            <img
              src="/sponsoring-body.webp" // Replace with your actual image path
              alt="Guru Shri Gorakshnath Chikitsalaya"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="w-full max-w-4xl text-left">
            <h1 className="text-4xl font-bold mb-4 text-orange-500">
              Sponsoring Body Details
            </h1>
            <h2 className="text-2xl font-semibold mb-6 text-slate-700">
              GURU SHRI GORAKSHNATH CHIKITSALAYA
            </h2>
            <p className="text-lg leading-relaxed text-black text-justify">
              Guru Shri Gorakshnath Chikitsalaya was established in the year
              2003 A.D. with the blessings and guidance of the divine
              Gorakshpeethadhishwar, Brahmleen Mahant Avaidyanath Ji Maharaj.
              Located at the northern end of the Gorakhnath Mandir, this
              institution stands on the sacred land of Shivavatari Mahayogi Guru
              Shri Gorakshnath Ji Maharaj, which has always been devoted to the
              service of humanity.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default SponsoringBodyPage;
