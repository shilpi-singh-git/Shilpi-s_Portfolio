import { useState } from "react";
import toast from "react-hot-toast";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

function Contact() {
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (result.success) {
        toast.success("Message Sent Successfully 🚀");
        e.target.reset();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 lg:px-20 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center">
          Contact Me
        </h2>

        <p className="text-center text-slate-400 mt-5">
          Have a project in mind? Let's connect.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-16">

          <div className="space-y-6">

            <div className="bg-slate-800 p-6 rounded-xl flex items-center gap-5">

              <FaEnvelope className="text-3xl text-violet-500" />

              <div>

                <h3 className="font-bold">
                  Email
                </h3>

                <p className="text-slate-400">
                  shilpisingh9691@gmail.com
                </p>

              </div>

            </div>

            <div className="bg-slate-800 p-6 rounded-xl flex items-center gap-5">

              <FaPhone className="text-3xl text-violet-500" />

              <div>

                <h3 className="font-bold">
                  Phone
                </h3>

                <p className="text-slate-400">
                  +91 9691509728
                </p>

              </div>

            </div>

            <div className="flex gap-8 text-3xl pt-5">

              <a
                href="https://github.com/shilpi-singh-git"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="hover:text-violet-500 duration-300" />
              </a>

              <a
                href="https://www.linkedin.com/in/shilpi-singh05/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="hover:text-violet-500 duration-300" />
              </a>

            </div>

          </div>
                    <form
            onSubmit={sendEmail}
            className="bg-slate-800 p-8 rounded-2xl space-y-6"
          >

            <input
              type="hidden"
              name="access_key"
              value="df42a943-4868-4a27-897e-c132ae84b3a7"
            />

            <input
              type="hidden"
              name="subject"
              value="New Portfolio Contact Message"
            />

            <div>

              <label className="block mb-2 font-medium">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-violet-500"
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Your Email
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-violet-500"
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Message
              </label>

              <textarea
                name="message"
                rows="6"
                required
                placeholder="Write your message..."
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-violet-500 resize-none"
              ></textarea>

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-violet-600 hover:bg-violet-700 py-3 rounded-lg font-semibold transition duration-300 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>
                  </div>

      </div>
    </section>
  );
}

export default Contact;