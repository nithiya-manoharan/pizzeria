import React from 'react';
import './About.css';

const About = () => {
  return (
    <>
    <main className='aboutMain'>
    <div className="about-container">
      <h1>About Our Pizzeria</h1>
      <p>
        Welcome to our Pizza Store! We are passionate about delivering the best pizza experience to our customers.
      </p>
      <h2>Our Story</h2>
      <p>
        Founded in 2021, our pizza store started as a small family business with a simple goal: to make the best pizzas in town.
        Over the years, we have grown and expanded, but our commitment to quality and taste remains the same.
      </p>
      <h2>Our Ingredients</h2>
      <p>
        We believe in using only the freshest ingredients. Our dough is made daily, and we source our toppings from local suppliers
        to ensure the highest quality and taste.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to provide delicious, high-quality pizza in a welcoming and friendly atmosphere. Whether you're dining in or
        ordering for delivery, we strive to make every experience a memorable one.
      </p>
    </div>
    </main>
    </>
  );
};

export default About;
