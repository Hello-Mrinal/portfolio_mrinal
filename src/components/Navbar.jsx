import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo / Name */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
          Mrinal Kumar
        </h1>

        {/* Menu */}
        <div className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <a href="#home" className="hover:text-indigo-400 transition">Home</a>
          <a href="#about" className="hover:text-indigo-400 transition">About</a>
          <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
          <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 text-xl">
          <a
            href="https://github.com/Hello-Mrinal"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-white hover:scale-110 transition-transform"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/mrinal-kumar-5694151b8"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-400 hover:text-indigo-300 hover:scale-110 transition-transform"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>
    </nav>
  );
}
