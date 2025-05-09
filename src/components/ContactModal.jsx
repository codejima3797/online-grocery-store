import React from 'react';
import '../styles/ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>
                <h2>Contact Us</h2>
                <div className="contact-info">
                    <div className="contact-item">
                        <h3>Phone</h3>
                        <p>(214) 555-3525</p>
                    </div>
                    <div className="contact-item">
                        <h3>Email</h3>
                        <p>jgray3797@gmail.com</p>
                    </div>
                    <div className="contact-item">
                        <h3>Hours</h3>
                        <p>Monday - Friday: 6am - 10pm</p>
                        <p>Saturday: 8am - 8pm</p>
                        <p>Sunday: 8am - 4pm</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
