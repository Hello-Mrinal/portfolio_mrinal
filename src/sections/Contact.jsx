export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[70vh] flex items-center justify-center "
    >
      <div className="max-w-3xl w-full text-center backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl bg-gradient-to-br from-black via-gray-900 to-black px-6">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
          Let’s Connect
        </h2>

        <p className="text-gray-300 mb-8 text-lg">
          Interested in collaborating or hiring for a Full Stack / MERN Developer role?
          Let’s build something impactful together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:mrinalkumar913@gmail.com"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            mrinalkumar913@gmail.com
          </a>

          <a
            href="https://linkedin.com/in/mrinal-kumar-5694151b8"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-indigo-400/40 text-indigo-300 hover:bg-indigo-500/10 hover:scale-105 transition-transform duration-300"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
}
