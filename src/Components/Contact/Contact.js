import './contact.css';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Contact() {
    const [data, setData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const handleData = (e) => {
        // console.log(e.target.name, e.target.value)
        if (e.target.name == 'name') {
            const newName = { ...data }
            newName.name = e.target.value;
            setData(newName);
        }
        if (e.target.name == 'email') {
            const newEmail = { ...data }
            newEmail.email = e.target.value;
            setData(newEmail);
        }
        if (e.target.name == 'subject') {
            const newSubject = { ...data };
            newSubject.subject = e.target.value;
            setData(newSubject);
        }
        if (e.target.name == 'message') {
            const newMessage = { ...data };
            newMessage.message = e.target.value;
            setData(newMessage);
        }
        // console.log(data)

    }

    const handleSubmit = e => {
        e.preventDefault();
        const newData = {...data};
        fetch('http://localhost:8080/sendMessage', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })

    }

    return (
        <div id="contact">
            <div className="container">
                <div id="contact-me">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Get In Touch</h2>
                            <form onSubmit={handleSubmit}>
                                <input onBlur={handleData} name="name" type="text" placeholder="Name" className="form-control" required /><br />
                                <input onBlur={handleData} name="email" type="email" placeholder="E-mail" className="form-control" required /><br />
                                <input onBlur={handleData} name="subject" type="text" placeholder="Subject" className="form-control" required /><br />
                                <textarea onBlur={handleData} name="message" className="form-control" rows='5' style={{ resize: 'none' }} placeholder="Message" required></textarea><br /><br />
                                <div className="text-center"><input type="submit" value="Send" id="form-btn" /></div>
                            </form>
                        </div>
                        <div className="col-md-6 my-4">
                            <h2>Contact me</h2>
                            <p>A contact page is a common web page on a website for visitors to contact the organization or individual providing the website. The page contains one or more of the following items: an e-mail address. a telephone number. ... a contact form for a text message or inquiry.</p>
                            <div className="text-light"><Link to="#"><i className="fas fa-envelope-square"></i></Link> muhammad.alamindev01@gmail.com</div>
                            <div className="text-light"><Link to="#"><i className="fas fa-map-marker-alt"></i></Link> Barisal, Bangladesh</div>
                            <div id="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117791.81286092235!2d90.2882288929238!3d22.691261623380054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37553407fbece487%3A0x5d069b9599d4414a!2sBarishal!5e0!3m2!1sen!2sbd!4v1632233120021!5m2!1sen!2sbd"  loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
