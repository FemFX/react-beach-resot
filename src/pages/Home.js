import React from 'react';
import Hero from '../components/Hero.jsx';
import Banner from '../components/Banner.jsx';
import { Link } from 'react-router-dom';
import Services from '../components/Services.jsx';
import FeaturedRooms from '../components/FeaturedRooms.jsx';
import Button from '../components/StyledHero'

export default () => {
  return (
    <>
      <Hero hero="defaultHero">
        <Banner title="luxurious room" subtitle="deluxe rooms starting at $299">
          <Link to="/rooms" className="btn-primary">
            Our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
      
    </>
  );
};
