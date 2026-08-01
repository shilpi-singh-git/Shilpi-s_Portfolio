import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import sia from "../assets/images/SIA.png";
import netflix from "../assets/images/Netflix.png";
import cloudnotes from "../assets/images/Cloudnotes.png";

const projects = [
  {
    title: "SIA - Women Safety",
    image: sia,
    description:
      "A MERN Stack based Women Safety application with One-Tap SOS, Google Maps integration, Live Location Tracking, Emergency Contacts and JWT Authentication.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Google Maps API",
    ],
    github: "https://github.com/shilpi-singh-git/SIA-Women-Safety",
  },

  {
    title: "Netflix Clone",
    image: netflix,
    description:
      "Netflix-inspired movie streaming application with authentication, responsive UI and modern React architecture.",
    tech: [
      "React",
      "Firebase",
      "TMDB API",
      "Tailwind CSS",
    ],
    github: "https://github.com/shilpi-singh-git/Netflix-Clone",
  },

  {
    title: "Cloud Notes",
    image: cloudnotes,
    description:
      "Cloud Notes application with secure authentication, CRUD operations, responsive dashboard and MongoDB backend.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    github: "https://github.com/shilpi-singh-git/Cloud-Notes-Application",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 lg:px-20 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-bold mb-16"
        >
          My <span className="text-violet-500">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:-translate-y-3 hover:shadow-violet-500/30 transition-all duration-300"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-slate-400 mt-4 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-violet-600 text-white text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-full transition duration-300"
                  >
                    <FaGithub />
                    View Source Code
                  </a>
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;