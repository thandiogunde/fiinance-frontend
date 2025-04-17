import React from 'react';
import './LearningHub.css';
import taxIcon from '../assets/icon-tax.png';
import inflationIcon from '../assets/icon-inflation.png';
import creditIcon from '../assets/icon-credit.png';
import { Link } from 'react-router-dom';

const LearningHub = () => {
    const cards = [
        { icon: taxIcon, title: 'Taxes' },
        { icon: inflationIcon, title: 'Inflation' },
        { icon: creditIcon, title: 'Credit' }
      ];

  return (
    <section className="learning-hub">
      <h2>Learning Hub</h2>
      <div className="cards">
        {cards.map((card, i) => (
          <div key={i} className="card">
            <img src={card.icon} alt={card.title} />
            <h3>{card.title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link to="/learning">
            <span className="read-more-link">Read more</span>
            </Link>
          </div>
        ))}
      </div>
      <Link to="/learning">
  <button className="learn-btn">Learn more</button>
</Link>
    </section>
  );
};

export default LearningHub;
