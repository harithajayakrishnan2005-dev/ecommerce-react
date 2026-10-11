
import { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      message.trim() === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    alert("Message Sent Successfully!");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container mt-5">
      <div className="contact-box">
        <h1>Contact Velora</h1>

        <p>We'd love to hear from you!</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <textarea
            className="form-control mb-3"
            rows="5"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
