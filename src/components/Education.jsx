import { motion } from "framer-motion";

const education = [
  {
    year: "2022 - 2026",
    title: "B.Tech - Information Technology",
    institute: "Swami Vivekanand College of Engineering, Indore",
  },
  {
    year: "2021 - 2022",
    title: "Class 12th",
    institute: "Saraswati Shishu Vidya Mandir",
  },
  {
    year: "2019 - 2020",
    title: "Class 10th",
    institute: "Saraswati Shishu Vidya Mandir",
  },
];

function Education() {
  return (
    <section id="education" className="py-24 px-6 lg:px-20 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          Education
        </h2>

        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .6 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl p-8 border-l-4 border-violet-500"
            >
              <h3 className="text-2xl font-bold">{item.title}</h3>

              <p className="text-violet-400 mt-2">{item.year}</p>

              <p className="text-slate-300 mt-3">
                {item.institute}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;