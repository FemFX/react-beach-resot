import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

class Services extends Component {
  constructor() {
    super();
    this.state = {
      services: [
        {
          icon: <FaCocktail />,
          title: 'Free Cocktails',
          info:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?'
        },
        {
          icon: <FaHiking />,
          title: 'Endless Hiking',
          info:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?'
        },
        {
          icon: <FaShuttleVan />,
          title: 'Free Shuttle',
          info:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?'
        },
        {
          icon: <FaBeer />,
          title: 'Strongest Beer',
          info:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?'
        }
      ]
    };
  }

  render() {
    return (
      <div className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => (
            <article key={`item-${item.title}`} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          ))}
        </div>
      </div>
    );
  }
}

export default Services;
