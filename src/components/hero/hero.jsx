import React from 'react';
import './hero.styles.scss';

const Hero = () => {
  return (
    <section className="hero is-info is-large hero-image">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Bags Reimagined For Modern Life.
          </h1>
          <h2 className="shop-now-btn">
            <button className='button is-black' id='shop-now'>
            SHOP NOW
            </button>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;