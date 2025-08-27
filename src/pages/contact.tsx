import {
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi";
import { IoMailOpenOutline } from "react-icons/io5";
import AnimatedCard from "@/components/animatedCard";
import ModernCard from "@/components/modernCards";
import MainLayout from "@/layouts/homeLayout";

const whatsAppMessage =
  "Hello! I'm interested in learning more about Mahayogi Gorakhnath University.";
const encodedWhatsAppMessage = encodeURIComponent(whatsAppMessage);

const cards = [
  {
    href: "https://www.google.com/maps?q=Mahayogi+Gorakhnath+University",
    icon: FaMapMarkerAlt,
    title: "Address",
    description: `Mahayogi Gorakhnath University\nGorakhpur, Uttar Pradesh\nIndia - 273009`,
  },
  {
    href: "tel:+919415266014",
    icon: FaPhoneAlt,
    title: "Phone",
    description: `+91-9415266014\n+91-9935904499\n(Admissions Helpline)`,
  },
  {
    href: "mailto:mguniversitygkp@mgug.ac.in",
    icon: IoMailOpenOutline,
    title: "Email",
    description: `mguniversitygkp@mgug.ac.in\ninfo@mgug.ac.in\nsupport@mgug.ac.in`,
  },
  {
    href: "https://www.facebook.com/mgugfacebookpage/",
    icon: FiFacebook,
    title: "Facebook",
    description: `@mgugfacebookpage`,
  },
  {
    href: "https://x.com/MGUGOfficial",
    icon: FiTwitter,
    title: "Twitter (X)",
    description: `@MGUGOfficial`,
  },
  {
    href: "https://www.instagram.com/mgugofficial/",
    icon: FiInstagram,
    title: "Instagram",
    description: `@mgugofficial`,
  },
  {
    href: "https://www.youtube.com/channel/UC_RiXHng3aH9Qr20ob-lkDQ",
    icon: FiYoutube,
    title: "YouTube",
    description: `MGUG Official Channel`,
  },
  {
    href: `https://wa.me/+919415266014?text=${encodedWhatsAppMessage}`,
    icon: FaWhatsapp,
    title: "WhatsApp",
    description: `+91-9415266014`,
  },
  {
    href: "https://in.linkedin.com/in/mahayogi-gorakhnath-university-gorakhpur-511875358",
    icon: FaLinkedin,
    title: "Linkedin",
    description: "Linkdedin for MGUG",
  },
];

export default function Contact() {
  return (
    <MainLayout>
      <section id="contact" className="relative z-20 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <AnimatedCard className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="bg-orange-500 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h2>
            <p className="text-xl text-gray-700">
              We're here to help you take the next step in your educational
              journey.
            </p>
          </AnimatedCard>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {cards.map(({ href, icon: Icon, title, description }, i) => (
              <AnimatedCard delay={i * 100} key={title}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer hover:scale-105 transition-transform duration-200 h-full"
                >
                  {/* The generic div is now replaced with ModernCard */}
                  <ModernCard className="text-center p-6 rounded-lg bg-white/5 h-full">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-full bg-orange-600/20 text-orange-500">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-black mb-2">
                      {title}
                    </h3>
                    {description && (
                      <p className="text-gray-700 text-sm whitespace-pre-line leading-relaxed">
                        {description}
                      </p>
                    )}
                  </ModernCard>
                </a>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
