import aboutPic from "../assets/profile.png";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-8">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 leading-relaxed">
            I'm a passionate developer who loves building modern web applications
            with React, Node.js, and MongoDB. I enjoy learning new technologies
            and solving real-world problems through code.
          </p>

          <h3 className="text-2xl mt-6 font-semibold">Skills</h3>
          <ul className="grid grid-cols-2 gap-2 mt-3 text-gray-300">
            <li>React.js</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Tailwind CSS</li>
            <li>Express.js</li>
          </ul>
        </div>
        <img src={aboutPic} alt="About" className="w-64 h-64 rounded-2xl object-cover border-4 border-gray-700" />
      </div>
    </section>
  );
}
