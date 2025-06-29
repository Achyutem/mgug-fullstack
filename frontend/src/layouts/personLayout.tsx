import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiGlobe,
  FiYoutube,
} from "react-icons/fi";
import { IoMailOpenOutline } from "react-icons/io5";
import { FiFileText } from "react-icons/fi";

type PersonCardProps = {
  image: string;
  name: string;
  designation: string;
  university: string;
  email?: string;
  website?: string;
  profilePdf?: string;
  socials?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    youtube?: string;
  };
};

const PersonCard = ({
  image,
  name,
  designation,
  university,
  email,
  website,
  profilePdf,
  socials,
}: PersonCardProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 py-10">
      {/* Profile Image */}
      <div className="flex-shrink-0 w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-lg border-4 border-orange-400">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Profile Info */}
      <div className="flex-1 text-center md:text-left text-white">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
          {name}
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-4">
          {designation}
          <br />
          {university}
        </h2>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-300 text-sm mb-4 justify-center md:justify-start">
          {email && (
            <div className="flex items-center gap-2 justify-center">
              <IoMailOpenOutline size={18} className="text-orange-400" />
              <a href={`mailto:${email}`} className="hover:underline">
                {email}
              </a>
            </div>
          )}
          {website && (
            <div className="flex items-center gap-2 justify-center">
              <FiGlobe size={18} className="text-orange-400" />
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {website.replace(/^https?:\/\//, "")}
              </a>
            </div>
          )}
        </div>

        {/* Profile PDF */}
        {profilePdf && (
          <div className="mb-4 flex justify-center md:justify-start">
            <a
              href={profilePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
            >
              <FiFileText size={18} /> View Profile
            </a>
          </div>
        )}

        {/* Socials */}
        {socials && (
          <div className="flex gap-4 justify-center md:justify-start mt-4">
            {socials.instagram && (
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition"
              >
                <FiInstagram size={22} />
              </a>
            )}
            {socials.facebook && (
              <a
                href={socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition"
              >
                <FiFacebook size={22} />
              </a>
            )}
            {socials.twitter && (
              <a
                href={socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition"
              >
                <FiTwitter size={22} />
              </a>
            )}
            {socials.youtube && (
              <a
                href={socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition"
              >
                <FiYoutube size={22} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonCard;
