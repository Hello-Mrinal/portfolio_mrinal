import aboutPic from "../assets/profilepic.jpeg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-6xl w-full backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl  bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg">
              I am a passionate Frontend Developer with a strong foundation in building responsive,
              user-friendly web applications using modern technologies. With a background in engineering
              and hands-on experience in React, JavaScript, HTML, CSS, and UI frameworks, I focus on creating
              clean, scalable, and performance-optimized interfaces. Alongside development, I bring experience
              in digital marketing, product growth, and operations, having worked with high-profile clients
              such as Disney, Hulu, and AdRoll. This experience helps me build user-centric products with a
              strong understanding of business goals, conversion, and user behavior. I thrive in fast-paced
              environments, enjoy solving real-world problems, and continuously upskill to deliver high-quality
              digital experiences.
            </p>

            {/* Skills Section */}
            <h3 className="text-2xl font-semibold text-indigo-400 mt-8">Skills</h3>

            {/* Frontend */}
            <div>
              <h4 className="text-xl font-semibold mb-2">Frontend Development</h4>
              <ul className="grid grid-cols-2 gap-2 text-gray-300">
                <li>HTML5, CSS3, JavaScript</li>
                <li>React.js, Vite</li>
                <li>Tailwind CSS, Bootstrap</li>
                <li>REST API Integration</li>
                <li>WordPress</li>
                <li>Git & GitHub</li>
              </ul>
            </div>

            {/* Tools */}
            <div>
              <h4 className="text-xl font-semibold mb-2">Tools & Platforms</h4>
              <ul className="grid grid-cols-2 gap-2 text-gray-300">
                <li>VS Code</li>
                <li>Figma (UI to Code)</li>
                <li>Chrome DevTools</li>
                <li>Postman</li>
              </ul>
            </div>

            {/* Other Skills */}
            <div>
              <h4 className="text-xl font-semibold mb-2">Other Professional Skills</h4>
              <ul className="grid grid-cols-2 gap-2 text-gray-300">
                <li>Digital Marketing & SEO</li>
                <li>Performance Marketing</li>
                <li>Lead Generation</li>
                <li>Project Coordination</li>
                <li>Stakeholder Management</li>
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <ul className="flex flex-wrap gap-3 mt-4">
              {["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Express.js"].map((skill) => (
                <li
                  key={skill}
                  className="px-4 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-400/30 hover:scale-105 transition-transform"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-2xl blur opacity-30"></div>
            <img
              src={aboutPic}
              alt="About"
              className="relative w-72 h-72 object-cover rounded-2xl border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
