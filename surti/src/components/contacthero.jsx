import React, { useState } from "react";
import { motion } from "framer-motion";
import { RiMapPin2Fill, RiPhoneFill, RiMailFill } from "react-icons/ri";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: "easeOut",
    },
  },
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { user_name, user_email, message } = formData;
    const phoneNumber = "+923352629979"; // Your WhatsApp number (Pakistan format: 923XXXXXXXXX)
    
    const whatsappMessage = `Hello, I would like to contact you.\n\nName: ${user_name}\nEmail: ${user_email}\nMessage: ${message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div id="contact" className="w-full">
      <div className="lg:w-[80%] w-[90%] m-auto flex flex-col items-center">
        {/* Animated "Get In Touch" Heading */}
        <motion.div
          className="my-10 flex items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUpVariants}
        >
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-extrabold text-gray-800 uppercase">
            Get In Touch
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row w-full justify-between items-stretch gap-10">
          <div className="lg:w-1/2 w-full bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col gap-4">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h3>

            <div className="flex items-start gap-4">
              <RiMapPin2Fill className="text-blue-600 w-[4em] h-8 mt-7 md:mt-0 md:w-8 md:h-11 my-auto" />
              <div>
                <p className="font-semibold text-gray-600 text-lg">Address:</p>
                <p className="text-gray-600 text-base">
                  F-60/61, RJ Mall Karachi, Gulistan-e-Johar, Karachi,
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <RiPhoneFill className="text-blue-600 w-8 h-8 mt-3" />
              <div>
                <p className="font-semibold text-gray-700 text-lg">Phone:</p>
                <p className="text-gray-600 text-base">0335-2629979 || 0314-9523994
</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <RiMailFill className="text-blue-600 w-8 h-8 my-auto" />
              <div>
                <p className="font-semibold text-gray-700 text-lg">Email:</p>
                <p className="text-gray-600 text-base">official.surtitrips@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full bg-gray-100 p-6 rounded shadow-md flex flex-col justify-between">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Send a Message</h3>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
                value={formData.user_name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
                value={formData.user_email}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
                value={formData.message}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="p-3 rounded bg-blue-600 hover:bg-blue-700 text-white transition duration-300"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>

        {/* Animated "Our Location" Heading */}
        <motion.div
          className="my-10 flex items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUpVariants}
        >
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-extrabold text-gray-800 uppercase">
            Our Location
          </h2>
        </motion.div>

        <div className="w-full">
          <div className="relative w-full h-[400px] sm:h-[300px] md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.8623521904597!2d67.11445119999999!3d24.902676399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339402f3e57ad%3A0xdafe00ee3182a43b!2sSurti%20Tours%20And%20Travels!5e0!3m2!1sen!2s!4v1736582373455!5m2!1sen!2s"
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              allowFullScreen
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
