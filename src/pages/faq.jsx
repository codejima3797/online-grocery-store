import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/FAQ.css";
import WhiteBrickWallpaper from "../assets/white-brick-wallpaper.jpg";
import RedBrickWallpaper from "../assets/red-brick-wallpaper.jpg";

const FAQ = () => {
  const [isFading, setIsFading] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "What areas do you deliver to?",
      answer:
        "We currently deliver to all major neighborhoods within a 10-mile radius of our store. This includes downtown areas, residential neighborhoods, and business districts. You can enter your zip code on our homepage to check if we deliver to your area.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Our standard delivery time is 30-60 minutes from the time your order is confirmed. We offer express delivery (15-30 minutes) for an additional fee. Delivery times may vary based on order volume and traffic conditions.",
    },
    {
      question: "What are your delivery hours?",
      answer:
        "We deliver weekdays from 6:00 AM to 10:00 PM, Saturdays from 8:00 AM to 8:00 PM, and Sundays from 8:00 AM to 4:00 PM. Our busiest times are typically during lunch (11:30 AM - 1:30 PM) and dinner (5:00 PM - 7:00 PM), so we recommend ordering outside these hours for faster delivery.",
    },
    {
      question: "Is there a minimum order amount?",
      answer:
        "Yes, we have a minimum order amount of $20 before tax and delivery fees. This helps us maintain efficient delivery operations and provide quality service to all our customers.",
    },
    {
      question: "What if an item is out of stock?",
      answer:
        "If an item becomes unavailable after you've placed your order, we'll notify you immediately. You can choose to substitute the item with a similar product, remove it from your order, or cancel the entire order. We'll always try to suggest the best available alternative.",
    },
    {
      question: "How do I track my delivery?",
      answer:
        "Once your order is confirmed, you'll receive a tracking link via text message and email. You can use this link to track your delivery in real-time, including the estimated arrival time and your delivery person's location.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), debit cards, and digital payment methods including Apple Pay and Google Pay. We also accept cash on delivery for orders under $100.",
    },
    {
      question: "Can I schedule a delivery for later?",
      answer:
        "Yes! You can schedule deliveries up to 7 days in advance. This is perfect for planning your weekly groceries or special occasions. Scheduled deliveries are subject to availability, so we recommend booking early for popular time slots.",
    },
    {
      question: "What is your return policy?",
      answer:
        "If you're not satisfied with any item, please contact us within 24 hours of delivery. We'll arrange for a replacement or refund. Perishable items must be reported within 2 hours of delivery if there are quality issues.",
    },
    {
      question: "Do you offer any loyalty program?",
      answer:
        "Yes! Our Trader Joe's Rewards program offers points for every dollar spent. You can earn points on all purchases and redeem them for free delivery, discounts, and special offers. Sign up is free and you'll receive 100 bonus points on your first order.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className={`outer__div fade__in ${isFading ? "fade-out" : ""}`}>
        <Navbar setIsFading={setIsFading} />
        <div className="background__images">
          <img
            src={WhiteBrickWallpaper}
            alt="white brick wallpaper"
            className="light-mode__img body__img"
          />
          <img
            src={RedBrickWallpaper}
            alt="red brick wallpaper"
            className="dark-mode__img body__img"
          />
        </div>
        <section className="faq-section">
          <div className="faq-container">
            <h1 className="faq-title">Frequently Asked Questions</h1>
            <div className="faq-list">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`faq-item ${openIndex === index ? "open" : ""}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="faq-question">
                    <h3>{item.question}</h3>
                    <span className="faq-icon">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </div>
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer setIsFading={setIsFading} />
      </div>
    </>
  );
};

export default FAQ;
