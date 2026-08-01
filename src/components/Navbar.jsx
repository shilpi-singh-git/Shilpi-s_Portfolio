import { Link } from "react-scroll";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-lg border-b border-slate-800 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

                <h1 className="text-3xl font-bold text-violet-500 cursor-pointer">
                    Shilpi.
                </h1>

                <ul className="hidden md:flex gap-10 text-lg">

                    <li>
                        <Link
                            to="about"
                            smooth
                            duration={500}
                            className="cursor-pointer hover:text-violet-500 transition"
                        >
                            About
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="skills"
                            smooth
                            duration={500}
                            className="cursor-pointer hover:text-violet-500 transition"
                        >
                            Skills
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="projects"
                            smooth
                            duration={500}
                            className="cursor-pointer hover:text-violet-500 transition"
                        >
                            Projects
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="contact"
                            smooth
                            duration={500}
                            className="cursor-pointer hover:text-violet-500 transition"
                        >
                            Contact
                        </Link>
                    </li>

                </ul>

                <HiOutlineMenuAlt3 className="text-3xl md:hidden" />

            </div>
        </nav>
    );
}

export default Navbar;