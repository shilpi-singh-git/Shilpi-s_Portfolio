import { motion } from "framer-motion";
import {
FaReact,
FaNodeJs,
FaGitAlt,
FaGithub,
FaHtml5,
FaCss3Alt
} from "react-icons/fa";

import {
SiJavascript,
SiTypescript,
SiTailwindcss,
SiExpress,
SiMongodb,
SiPostman
} from "react-icons/si";

const skills = [
{ name:"HTML", icon:<FaHtml5 size={45}/> },
{ name:"CSS", icon:<FaCss3Alt size={45}/> },
{ name:"JavaScript", icon:<SiJavascript size={45}/> },
{ name:"TypeScript", icon:<SiTypescript size={45}/> },
{ name:"React", icon:<FaReact size={45}/> },
{ name:"Tailwind", icon:<SiTailwindcss size={45}/> },
{ name:"Node", icon:<FaNodeJs size={45}/> },
{ name:"Express", icon:<SiExpress size={45}/> },
{ name:"MongoDB", icon:<SiMongodb size={45}/> },
{ name:"Git", icon:<FaGitAlt size={45}/> },
{ name:"GitHub", icon:<FaGithub size={45}/> },
{ name:"Postman", icon:<SiPostman size={45}/> },
];

function Skills(){

return(

<section
id="skills"
className="py-24 px-6 lg:px-20 bg-slate-950"
>

<div className="max-w-7xl mx-auto">

<h2 className="text-center text-5xl font-bold mb-20">
My <span className="text-violet-500">Skills</span>
</h2>

<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

{

skills.map((skill,index)=>(

<motion.div

key={index}

initial={{opacity:0,y:50}}

whileInView={{opacity:1,y:0}}

transition={{duration:.5,delay:index*.05}}

viewport={{once:true}}

className="bg-slate-800 rounded-2xl p-8 text-center hover:bg-violet-600 transition duration-300"

>

<div className="flex justify-center">

{skill.icon}

</div>

<h3 className="mt-5 text-xl font-semibold">

{skill.name}

</h3>

</motion.div>

))

}

</div>

</div>

</section>

)

}

export default Skills;