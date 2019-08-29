import React from 'react';
import Hero from '../components/Hero.jsx';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import RoomsContainer from '../components/RoomsContainer'

export default () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <Link to="/" className="btn-primary">
            To Home Page
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
};
