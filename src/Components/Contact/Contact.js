import React, { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [success, setSuccess] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // handle data
  const handleData = (e) => {
    if (e.target.name == "name") {
      const newName = { ...data };
      newName.name = e.target.value;
      setData(newName);
    }
    if (e.target.name == "email") {
      const newEmail = { ...data };
      newEmail.email = e.target.value;
      setData(newEmail);
    }
    if (e.target.name == "subject") {
      const newSubject = { ...data };
      newSubject.subject = e.target.value;
      setData(newSubject);
    }
    if (e.target.name == "message") {
      const newMessage = { ...data };
      newMessage.message = e.target.value;
      setData(newMessage);
    }
  };

  // submit form
  const handleSubmit = (e) => {
    const newData = { ...data };
    fetch("https://portfolio-server01.herokuapp.com/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Message send successfully.!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="contact">
      <div className="container">
        <div id="contact-me">
          <div className="row">
            <div className="col-md-6">
              {success && <p style={{ color: "red" }}>{success}</p>}
              <h2>Get In Touch</h2>
              <form onSubmit={handleSubmit}>
                <input
                  onBlur={handleData}
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="form-control"
                  required
                />
                <br />
                <input
                  onBlur={handleData}
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  className="form-control"
                  required
                />
                <br />
                <input
                  onBlur={handleData}
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  className="form-control"
                  required
                />
                <br />
                <textarea
                  onBlur={handleData}
                  name="message"
                  className="form-control"
                  rows="5"
                  style={{ resize: "none" }}
                  placeholder="Message"
                  required
                ></textarea>
                <br />
                <br />
                <div className="text-center">
                  <input type="submit" value="Send" id="form-btn" />
                </div>
              </form>
            </div>
            <div className="col-md-6 my-4">
              <h2>Contact me</h2>
              <div className="text-light">
                <i
                  className="fas fa-envelope-square"
                  style={{ marginRight: "8px" }}
                ></i>
                muhammad.alamindev01@gmail.com
              </div>
              <div className="text-light">
                <i
                  className="fas fa-phone-square"
                  style={{ marginRight: "8px" }}
                ></i>
                (+88) 01315792303
              </div>
              <div className="text-light">
                <i
                  className="fas fa-map-marker-alt"
                  style={{ marginRight: "8px" }}
                ></i>
                Barisal, Bangladesh
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
