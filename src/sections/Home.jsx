import profilePic from "../assets/profile.png";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="flex flex-col md:flex-row items-center md:space-x-12">
        <img src={profilePic} alt="Profile" className="w-48 h-48 rounded-full border-4 border-gray-600" />
        <div className="text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-4xl font-bold">Hi, I’m <span className="text-blue-400">Mrinal</span></h1>
          <h2 className="text-xl mt-2 text-gray-400">Full Stack Web Developer</h2>
          <div className="mt-4 space-x-4">
            <a href="/cv.pdf" download className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Download CV</a>
            <a href="mailto:yourmail@gmail.com" className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 flex items-center inline-flex"><FaEnvelope className="mr-2" />Email</a>
            <a href="https://linkedin.com" target="_blank" className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-600 flex items-center inline-flex"><FaLinkedin className="mr-2" />LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
