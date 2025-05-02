import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic (like sending data to an API)
    console.log(formData);
  };

  return (
    <section className="container py-4" id="contact">
      <h2 className="section-title mb-2">Contact Me</h2>
      <p className="section-subtitle mb-4">Let's connect and work together</p>

      <div className="row">
        <div className="col-lg-6 mx-auto">
          <div className="contact-form p-4">
            <h4 className="mb-2">Contact Information</h4>
            <p className="mb-1">📧 srinivasanb656@gmail.com</p>
            <p className="mb-1">📞 +91 7339552119</p>
            <p>📍 Bengaluru, Karnataka</p>

            <hr className="border-top border-secondary my-4" />

            <h3 className="mb-3">Send me a message</h3>
            <p className="text-light mb-4">Have a project in mind or want to explore opportunities? Feel free to reach out!</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
