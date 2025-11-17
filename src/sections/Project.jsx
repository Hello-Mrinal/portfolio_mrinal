const projects = [
  { title: "CMIS - College Management System", desc: "Full MERN stack web app with authentication, fees & marks management." },
  { title: "Gym Management App", desc: "Dashboard-based system for member and trainer management." },
  { title: "Portfolio Website", desc: "Personal portfolio made with React and Tailwind CSS." },
  { title: "Portfolio Website", desc: "Personal portfolio made with React and Tailwind CSS." },
  { title: "Portfolio Website", desc: "Personal portfolio made with React and Tailwind CSS." }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-16 text-center">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="flex overflow-x-auto space-x-6 px-6 pb-4">
        {projects.map((p, i) => (
          <div key={i} className="min-w-[300px] bg-[#161b22] p-6 rounded-2xl shadow-md hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-400">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
