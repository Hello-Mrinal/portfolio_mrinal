import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-[#161b22] shadow-lg fixed top-0 w-full z-50">
      <h1 className="text-2xl font-bold text-white">Mrinal Kumar</h1>
      <div className="space-x-6">
        <a href="#home" className="hover:text-blue-400">Home</a>
        <a href="#about" className="hover:text-blue-400">About</a>
        <a href="#projects" className="hover:text-blue-400">Projects</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
      </div>
      <div className="space-x-4 text-xl flex">
        <a href="https://github.com/" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      </div>
    </nav>
  );
}
