

import React, { useRef, useState } from "react";
import c from "./Port.module.css";
// import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGeeksforgeeks, SiCodechef, SiLeetcode } from "react-icons/si";
import { AiFillMail } from "react-icons/ai";
import { motion } from "framer-motion";
import { FaHackerrank } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { name, email, message } = formData;
  //   const whatsappMessage = `Hello, I'm ${name}. My email is ${email}. Message: ${message}`;
  //   const whatsappUrl = `https://wa.me/916300215594?text=${encodeURIComponent(whatsappMessage)}`;
  //   window.open(whatsappUrl, "_blank");
  // };

  const form = useRef();
  const [result, setResult] = useState("");
  
  const sendEmail = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "33fc2cec-20d9-4b07-8ede-81255dbe8feb");
    const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult(data.message);
    }
    alert(result);
  };

  return (
    <motion.div 
    id="Contact"
      className={c.page}
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100vw", opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <section className={c.contactContainer}>
        <div className={c.contactContent}>
          <h2 className={c.contactHeading}>Contact Me</h2>
          <p className={c.contactSubtitle}>I’M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK OR PARTNERSHIPS.</p>
          <div className={c.contactGrid}>
            <div className={c.contactInfo}>
              <ul>
                <li><a href="sms:+916300215594" className={c.link}><FaWhatsapp className={c.i1} /> <span>+91 6300215594</span></a></li>
                <li><a href="mailto:22P31A0444@acet.ac.in" className={c.link}><AiFillMail className={c.i1} /> <span>22P31A0444@acet.ac.in</span></a></li>
                <li><a href="https://github.com/22P31A0444" target="_blank" rel="noopener noreferrer" className={c.link}><FaGithub className={c.i1} /> <span>Github</span></a></li>
                <li><a href="https://www.linkedin.com/in/chandini-divya-219702258/" target="_blank" rel="noopener noreferrer" className={c.link}><FaLinkedin className={c.i1} /> <span>LinkedIn</span></a></li>
              </ul>
              <div className={c.socialLinks}>
                <h6 style={{
                  fontSize:"30px",
                  color:"#009BDF",
                  fontWeight:"bold"
                }}>Social Profiles</h6>
                <div className={c.icons}>
                  <a href="https://www.hackerrank.com/profile/22P31A0444" target="_blank" rel="noopener noreferrer"><FaHackerrank className={c.i1} /></a>
                  <a href="https://leetcode.com/u/Chandini207/" target="_blank" rel="noopener noreferrer"><SiLeetcode className={c.i1} /></a>
                  <a href="https://www.codechef.com/users/chandini20" target="_blank" rel="noopener noreferrer"><SiCodechef className={c.i1} /></a>
                  <a href="https://www.geeksforgeeks.org/user/chandi121g/" target="_blank" rel="noopener noreferrer"><SiGeeksforgeeks className={c.i1} /></a>
                </div>
              </div>
            </div>
            <div className={c.contactForm}>
              <p>If you have any suggestion, project or even you want to say Hello.. please fill out the form below.</p>
              <form ref={form} onSubmit={sendEmail}>
                <div className={c.inputGroup}><input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required /></div>
                <div className={c.inputGroup}><input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required /></div>
                <div className={c.inputGroup}><textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea></div>
                <button type="submit" className={c.sendBtn}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;