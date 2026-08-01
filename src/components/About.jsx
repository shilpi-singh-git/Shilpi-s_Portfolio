import { motion } from "framer-motion";
import profile from "../assets/images/profile.png";

function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 lg:px-20 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="profile"
            className="w-80 rounded-3xl border-2 border-violet-500 shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <h2 className="text-5xl font-bold mb-8">
            About <span className="text-violet-500">Me</span>
          </h2>

          <p className="text-slate-300 leading-8 text-lg">
            I am a passionate MERN Stack Developer who enjoys creating
            modern, responsive and scalable web applications.
            I have experience with React.js, Node.js, Express.js,
            MongoDB, Tailwind CSS and REST APIs.
          </p>

          <div className="grid grid-cols-2 gap-5 mt-10">

            <div className="bg-slate-800 rounded-xl p-5">
              <h3 className="text-violet-400 text-xl font-bold">
                Experience
              </h3>

              <p className="mt-2 text-slate-400">
                Fresher
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-5">
              <h3 className="text-violet-400 text-xl font-bold">
                Projects
              </h3>

              <p className="mt-2 text-slate-400">
                3+ Major Projects
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-5">
              <h3 className="text-violet-400 text-xl font-bold">
                Education
              </h3>

              <p className="mt-2 text-slate-400">
                B.Tech IT
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-5">
              <h3 className="text-violet-400 text-xl font-bold">
                Location
              </h3>

              <p className="mt-2 text-slate-400">
                Indore, MP
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;