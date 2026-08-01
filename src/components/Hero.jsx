import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import profile from "../assets/images/profile.png";

function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center px-6 lg:px-20 pt-24 bg-gradient-to-br from-slate-950 via-slate-900 to-black"
        >
            <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Side */}
                <motion.div
                    initial={{ x: -80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-violet-400 text-xl font-semibold">
                        👋 Hello, I'm
                    </p>

                    <h1 className="text-5xl lg:text-7xl font-extrabold mt-3">
                        Shilpi Singh
                    </h1>

                    <h2 className="text-2xl lg:text-3xl text-slate-300 mt-5">
                        MERN Stack Developer
                    </h2>

                    <p className="mt-6 text-slate-400 leading-8 max-w-xl">
                        Passionate Full Stack Developer skilled in React.js, Node.js,
                        Express.js, MongoDB and Tailwind CSS. I love building modern,
                        responsive and user-friendly web applications.
                    </p>

                    <div className="flex gap-5 mt-10 flex-wrap">

                        <a
                            href="/resume.pdf"
                            className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 px-7 py-3 rounded-full font-semibold transition"
                        >
                            <FaDownload />
                            Resume
                        </a>

                        <a
                            href="#projects"
                            className="border border-violet-500 px-7 py-3 rounded-full hover:bg-violet-500 transition"
                        >
                            View Projects
                        </a>

                    </div>

                    <div className="flex gap-6 mt-10 text-3xl">

                        <a
                            href="https://github.com/shilpi-singh-git"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-violet-500 transition"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/shilpi-singh05/"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-violet-500 transition"
                        >
                            <FaLinkedin />
                        </a>

                    </div>
                </motion.div>

                {/* Right Side */}
                <motion.div
                    initial={{ x: 80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center"
                >
                    <div className="relative">

                        <div className="absolute -inset-4 rounded-full bg-violet-600 blur-3xl opacity-30"></div>

                        <img
                            src={profile}
                            alt="Shilpi"
                            className="relative w-72 h-72 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-violet-500 shadow-2xl"
                        />

                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default Hero;