import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from "../assets/image.png";
import '../MainPage.css';


const MainPage = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const mockBuses = [
      { id: 1, name: 'Bus A', route: `From ${from} to ${to}`, availableSeats: 25 },
      { id: 2, name: 'Bus B', route: `From ${from} to ${to}`, availableSeats: 10 },
    ];
    navigate('/getticket', { state: { buses: mockBuses, from, to, date } });
  };

  return (
    <div>
      <HeroSection
        from={from}
        to={to}
        date={date}
        setFrom={setFrom}
        setTo={setTo}
        setDate={setDate}
        handleSearch={handleSearch}
      />
     <QuickBusSection />
     <FAQ/>
     <Footer />
    </div>
  );
};



const HeroSection = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate(); // Correctly use the useNavigate hook

  const handleSearch = (e) => {
    e.preventDefault();

    // Create a mock bus result - Replace this with your API call logic if necessary
    const mockBuses = [
      { id: 1, name: "Bus A", route: `From ${from} to ${to}` },
      { id: 2, name: "Bus B", route: `From ${from} to ${to}` },
    ];

    // Use navigate to go to the search results page and pass the buses data and search params
    navigate("/book", { state: { buses: mockBuses, from, to, date } });
  };

  return (
    <div id='home'>
      {/* Hero Section with Image */}
      <div
        className="hero-section" 
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="overlay">
          <h1>India's No.1 Ticket Booking Platform</h1>
          <form className="search-form" onSubmit={handleSearch}>
            <div className="form-group">
              <label>
                <span role="img" aria-label="From">📍</span> From:
                <input
                  type="text"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="Enter source"
                  required
                  className="input-field"
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                <span role="img" aria-label="To">📍</span> To:
                <input
                  type="text"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  placeholder="Enter destination"
                  required
                  className="input-field"
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                <span role="img" aria-label="Date">📅</span> Date:
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="input-field"
                />
              </label>
            </div>
            <button type="submit" className="search-button">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};


const QuickBusSection = () => {
  return (
    <section className="quickbus-section" id='about'>
      <h2>Why Choose QuickBus for Your Travel Needs?</h2>
      <div className="quickbus-container">
        <p>
          QuickBus simplifies your travel experience by offering seamless online bus ticket booking across hundreds of routes. With a user-friendly platform, secure payment options, and trusted operators, planning your journey has never been easier.
        </p>
        <h3>What Makes QuickBus Unique?</h3>
        <ul>
          <li><strong>Wide Network:</strong> Connects you to top-rated private and government bus operators.</li>
          <li><strong>Convenience at Your Fingertips:</strong> Book your tickets anytime, anywhere.</li>
          <li><strong>Flexible Options:</strong> Choose from AC, Non-AC, Sleeper, Seater, and more.</li>
          <li><strong>Exclusive Offers:</strong> Enjoy discounts and deals on your bookings.</li>
          <li><strong>Live Tracking:</strong> Stay updated on your bus location for a hassle-free experience.</li>
        </ul>
        <p>Travel smart, safe, and affordable with QuickBus. Start your journey today!</p>
      </div>
    </section>
  );
};

const FAQ = () => {
  
  const faqData = {
    "General": [
      { question: "Can I track the location of my booked bus online?", answer: "Yes, you can track the location of your booked bus online through the redBus app or website using the tracking feature." },
      { question: "What are the advantages of purchasing a bus ticket with QuickBus?", answer: "The advantages include easy booking, secure payment options, access to various operators, and great deals on tickets." },
      { question: "Why book bus tickets online on QuickBus?", answer: "Booking online on redBus is convenient, time-saving, and offers various options to choose from." },
      { question: "Do I need to create an account on the QuickBus site to book my bus ticket?", answer: "No, you can book tickets as a guest, but creating an account lets you track your bookings and enjoy personalized deals." },
    ],
    "Ticket-related": [
      { question: "How can I book bus tickets on QuickBus?", answer: "You can book tickets by visiting the QuickBus website or app, searching for your route, and selecting your preferred bus." },
      { question: "Can I change the date of my journey after I have booked my bus ticket?", answer: "Yes, you can modify the date, but it depends on the operator's policy. Charges may apply." },
      { question: "Is it mandatory to take a printout of the ticket?", answer: "No, an mTicket or eTicket is sufficient, but carrying an ID proof is necessary." },
      { question: "I've lost my ticket. What should I do now?", answer: "You can retrieve your ticket through the 'My Bookings' section on the redBus app or website or contact customer support." },
    ],
    "Payment": [
      { question: "Is it safe to use my credit or debit card to buy bus tickets on QuickBus?", answer: "Yes, QuickBus uses secure payment gateways and encrypts all transactions to ensure the safety of your card information." },
      { question: "Does the owner of the credit card/debit card with which the bus ticket is purchased need to be one of the passengers?", answer: "No, the owner of the card does not need to be one of the passengers. However, the passengers should carry a valid ID proof." },
      { question: "What are the different payment options available on Bus Ticket booking?", answer: "redBus supports multiple payment options, including credit/debit cards, net banking, UPI, and mobile wallets." },
      { question: "How does the transaction appear on my card / account statement?", answer: "The transaction will appear as 'redBus' or similar, depending on your bank's statement format." },
    ],
    "Cancellation & Refund": [
      { question: "Can I cancel my bus ticket online?", answer: "Yes, you can cancel your bus ticket online through the QuickBus app or website under the 'My Bookings' section." },
      { question: "How can I cancel my bus ticket online?", answer: "To cancel your ticket, log in to redBus, go to 'My Bookings', select your ticket, and click on 'Cancel Ticket'." },
      { question: "I missed the bus. Do I get a refund?", answer: "Unfortunately, no refund is provided for a missed bus unless the operator is at fault." },
      { question: "How can I get a refund in case I cancel my ticket?", answer: "Refunds are processed automatically after cancellation. The amount will be credited to your original payment method within 5-7 working days." },
      { question: "What happens if the bus does not leave on time or is canceled?", answer: "If the bus is canceled or delayed significantly, redBus will help you get a refund or arrange an alternative travel option." },
    ],
  };

  const [activeCategory, setActiveCategory] = useState("General");
  const [activeIndex, setActiveIndex] = useState({});

  const toggleFAQ = (category, index) => {
    setActiveIndex((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  };

  return (
    <div className="faq-container">
      <h2>FAQs related to Bus Tickets Booking</h2>
      <div className="faq-category-buttons">
        {Object.keys(faqData).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category === activeCategory ? null : category)}
            className={category === activeCategory ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </div>

      {activeCategory && (
        <div className="faq-category">
          <h2>{activeCategory}</h2>
          {faqData[activeCategory].map((item, index) => (
            <div className="faq-item" key={index}>
              <div
                className="faq-question"
                onClick={() => toggleFAQ(activeCategory, index)}
              >
                <span>{item.question}</span>
                <span>{activeIndex[activeCategory] === index ? "-" : "+"}</span>
              </div>
              {activeIndex[activeCategory] === index && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


const Footer = () => {
  return (
    <footer className="quickbus-footer" id='contact'>
      <div className="footer-content">
        <div className="footer-section">
          <h3>About QuickBus</h3>
          <ul>
            <li><a href="/about">About us</a></li>
            <li><a href="/investor-relations">Investor Relations</a></li>
            <li><a href="/contact">Contact us</a></li>
            <li><a href="/mobile-version">Mobile version</a></li>
            <li><a href="/sitemap">Sitemap</a></li>
            <li><a href="/offers">Offers</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/values">Values</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Info</h3>
          <ul>
            <li><a href="/terms">T&C</a></li>
            <li><a href="/privacy-policy">Privacy policy</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/bus-operator-registration">Bus operator registration</a></li>
            <li><a href="/agent-registration">Agent registration</a></li>
            <li><a href="/insurance-partner">Insurance partner</a></li>
            <li><a href="/user-agreement">User agreement</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Global Sites</h3>
          <ul>
            <li><a href="/india">India</a></li>
            <li><a href="/singapore">Singapore</a></li>
            <li><a href="/malaysia">Malaysia</a></li>
            <li><a href="/indonesia">Indonesia</a></li>
            <li><a href="/peru">Peru</a></li>
            <li><a href="/colombia">Colombia</a></li>
            <li><a href="/cambodia">Cambodia</a></li>
            <li><a href="/vietnam">Vietnam</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Our Partners</h3>
          <ul>
            <li><a href="/goibibo-bus">Goibibo Bus</a></li>
            <li><a href="/goibibo-hotels">Goibibo Hotels</a></li>
            <li><a href="/makemytrip-hotels">Makemytrip Hotels</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Ⓒ 2025 QuickBus Pvt Ltd. All rights reserved</p>
        <div className="social-icons">
          <a href="https://facebook.com/quickbus" target="_blank" rel="noopener noreferrer">
            <img src="https://th.bing.com/th/id/OIP.849QT1coi2iARQKb9g2VTwHaHa?w=151&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Facebook" />
          </a>
          <a href="https://instagram.com/quickbus" target="_blank" rel="noopener noreferrer">
            <img src="https://th.bing.com/th/id/OIP.7vfM_K66FMSrGovHI_839gHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};


export default MainPage;
