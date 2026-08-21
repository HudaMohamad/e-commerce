import { useState } from "react";
import toast from "react-hot-toast";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa6";
import PageTransition from "../../components/PageTransition";
import "./Contact.css";

const contactInfo = [
  {
    icon: <FaLocationDot />,
    title: "Our Address",
    lines: ["Al-Mazzeh Street", "Damascus, Syria"],
  },
  {
    icon: <FaPhone />,
    title: "Call Us",
    lines: ["+963 11 123 4567", "+963 944 123 456"],
  },
  {
    icon: <FaEnvelope />,
    title: "Email Us",
    lines: ["support@ourstore.com", "sales@ourstore.com"],
  },
  {
    icon: <FaClock />,
    title: "Working Hours",
    lines: ["Sat - Thu: 9am - 8pm", "Friday: Closed"],
  },
];

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success("Your message has been sent! We'll get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <PageTransition>
      <div className="contact_page">
        <div className="contact_hero">
          <div className="container">
            <h4>We'd love to hear from you</h4>
            <h1>Contact Us</h1>
            <p>
              Have a question about an order, a product, or just want to say
              hi? Send us a message and our team will get back to you.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="contact_info_grid">
            {contactInfo.map((item) => (
              <div className="contact_info_card" key={item.title}>
                <span className="contact_info_icon">{item.icon}</span>
                <h3>{item.title}</h3>
                {item.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="contact_form_wrap">
            <div className="top_slide">
              <h2>Send A Message</h2>
              <p>Fill in the form below and we'll respond as soon as we can.</p>
            </div>

            <form className="contact_form" onSubmit={handleSubmit}>
              <div className="form_row">
                <div className="form_group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form_group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form_group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="How can we help?"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form_group">
                <label>Message *</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Contact;