const projects = [
  {
    title: "Credit Card Fraud Detection System",
    desc: "Machine Learning based Python application for detecting fraudulent transactions using data preprocessing, feature engineering, and classification models for real-time risk analysis."
  },
  {
    title: "Task Manager (MERN Stack)",
    desc: "Full-stack task management system built with MongoDB, Express, React, and Node.js featuring user authentication, CRUD operations, and role-based access control."
  },
  {
    title: "Portfolio Website (React)",
    desc: "Responsive personal portfolio developed using React and Tailwind CSS to showcase projects, skills, and experience with modern UI/UX and performance optimization."
  },
  {
    title: "Expense Tracker (React)",
    desc: "Frontend application for tracking income and expenses with state management, data visualization, and local storage integration for personal finance management."
  },
  {
    title: "Real-Time Chat Application (MERN Stack)",
    desc: "Full-stack real-time chat app using MERN stack and Socket.IO with secure authentication, private messaging, and scalable RESTful APIs."
  },
];


export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-20"
    >
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8 px-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <div
            key={i}
            className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-black via-gray-900 to-black"
          >
            <h3 className="text-xl font-semibold mb-3 text-indigo-300">
              {p.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {p.desc}
            </p>

            <div className="mt-4">
              <span className="inline-block px-3 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-400/30">
                MERN / React / Tailwind
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
