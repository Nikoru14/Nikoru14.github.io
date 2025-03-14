import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

const ContactSection = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            toast.error("All fields are required!");
            return;
        }

        setLoading(true);

        try {
            await emailjs.send(
                "service_5rcq449",  // Replace with EmailJS Service ID
                "template_zpj8luk", // Replace with EmailJS Template ID
                formData,
                "8MBTYDZ9hNDc-cj6q"  // Replace with your EmailJS Public Key
            );

            toast.success("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            toast.error("Failed to send message. Try again later.");
        }

        setLoading(false);
    };

    return (
        <section id="contact" className="py-16 bg-[var(--color-background)] text-[var(--color-text)]">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-[var(--color-primary)] mb-8">Get in Touch</h2>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ amount: 0.2 }}
                    className="max-w-2xl mx-auto bg-[var(--color-card)] p-6 rounded-lg shadow-lg"
                >
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input type="text" name="name" placeholder="Your Name" value={formData.name}
                            onChange={handleChange} className="w-full p-3 rounded-md border bg-[var(--color-background)] text-white" />

                        <input type="email" name="email" placeholder="Your Email" value={formData.email}
                            onChange={handleChange} className="w-full p-3 rounded-md border bg-[var(--color-background)] text-white" />

                        <textarea name="message" placeholder="Your Message" rows="5" value={formData.message}
                            onChange={handleChange} className="w-full p-3 rounded-md border bg-[var(--color-background)] text-white"></textarea>

                        <button type="submit" disabled={loading}
                            className="w-full p-3 bg-[var(--color-primary)] text-white rounded-md font-semibold 
                                           hover:brightness-125 transition-all disabled:opacity-50">
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </motion.div>

                {/* Social Media Links */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ amount: 0.2 }}
                    className="flex justify-center gap-6 mt-8"
                >
                    <a href="https://github.com/Nikoru14" target="_blank" rel="noopener noreferrer"
                        className="text-3xl text-white hover:text-[var(--color-primary)] transition-all">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/antonio-nicholo-bongat-b80920225" target="_blank" rel="noopener noreferrer"
                        className="text-3xl text-white hover:text-[var(--color-primary)] transition-all">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:nicholosantosbongat@gmail.com"
                        className="text-3xl text-white hover:text-[var(--color-primary)] transition-all">
                        <FaEnvelope />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
