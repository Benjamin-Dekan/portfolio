import { Fraunces } from "next/font/google";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const fraunces = Fraunces({
  subsets: ["latin"],
});

const ContactPage = () => {
  return (
    <div className="px-6 min-h-[calc(100vh-68px)] flex items-center justify-center py-6">
      <div className="max-w-[1600px] mx-auto ring-2 ring-blue-500 bg-white inset-shadow-sm inset-shadow-blue-400 rounded-2xl px-8 py-12 md:px-16">
        <div className={`${fraunces.className} font-semibold text-4xl mb-3`}>
          Get in touch.
        </div>
        <p className="text-neutral-500 mb-8 max-w-md">
          I am actively seeking full-time opportunities where I can contribute
          and grow my skills.
        </p>

        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <a
              href="mailto:benjamindekan360@gmail.com"
              className="flex items-center gap-3 text-neutral-600 hover:text-blue-500 transition-colors w-fit"
            >
              <Mail size={18} />
              <span className="text-base">benjamindekan360@gmail.com</span>
            </a>
          </div>
          <a
            href="https://github.com/Benjamin-Dekan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-neutral-600 hover:text-blue-500 transition-colors w-fit"
          >
            <FaGithub size={18} />
            <span className="text-base">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/benjamin-dekan-b268783a9/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-neutral-600 hover:text-blue-500 transition-colors w-fit"
          >
            <FaLinkedin size={18} />
            <span className="text-base">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
