import React from 'react';
import Hero from '../components/Hero.jsx';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';

export default () => {
  return (
    <>
      <Hero>
        <Banner title="404" subtitle="Page noy found">
          <Link to="/" className="btn btn-primary">
            To Home Page
          </Link>
        </Banner>
      </Hero>
    </>
  );
};
