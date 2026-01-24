import profilePic from "../assets/profilepic.jpeg";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import cv from "../assets/cv.pdf";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl  bg-gradient-to-br from-black via-gray-900 to-black px-6">

        {/* Profile Image */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full blur opacity-30"></div>
          <img
            src={profilePic}
            alt="Profile"
            className="relative w-48 h-48 rounded-full object-cover border-4 border-white/20 shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Hi, I’m <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">Mrinal</span>
          </h1>
          <h2 className="text-xl mt-3 text-gray-300">
            Full Stack Web Developer | MERN Stack Specialist
          </h2>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">

            <a
              href={cv}
              download
              className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Download CV
            </a>

            <a
              href="mailto:mrinalkumar913@gmail.com"
              className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 flex items-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              <FaEnvelope /> Email
            </a>

            <a
              href="https://linkedin.com/in/mrinal-kumar-5694151b8"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-indigo-400/40 text-indigo-300 hover:bg-indigo-500/10 flex items-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              <FaLinkedin /> LinkedIn
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
