import React from "react";
import "./about.css";
import { Link } from "react-router";


function About() {
  return (
    <div className="about-page">

      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About LuzeGifts</h1>
          <p>
            Making every moment special with beautiful gifts
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content">

          <div className="about-text">
            <span>WELCOME TO LUZEGIFTS</span>

            <h2> 
              Gifts That Create
              <br />
              Beautiful Memories
            </h2>

            <p>
              At LuzeGifts, we believe that a thoughtful gift can make
              someone's day brighter. We offer a carefully selected
              collection of beautiful gifts for every special moment.
            </p>

            <p>
              From cute teddy bears and elegant mugs to gift boxes,
              personalized gifts, flowers and chocolates, we have
              something for everyone.
            </p>

            <p>
              Whether you are celebrating a birthday, anniversary,
              wedding, friendship or any special occasion, LuzeGifts
              is here to help you find the perfect gift.
            </p>
          </div>

          <div className="about-card">
            <div className="gift-icon">🎁</div>

            <h3>Our Mission</h3>

            <p>
              To make gifting simple, beautiful and memorable for
              everyone.
            </p>

            <div className="gold-line"></div>

            <h3>Our Vision</h3>

            <p>
              To become a trusted destination for thoughtful gifts
              and happy moments.
            </p>
          </div>

        </div>
      </section>


      <section className="why-section">

        <div className="section-title">
          <span>WHY CHOOSE US</span>
          <h2>Make Every Gift Special</h2>
        </div>

        <div className="features">

          <div className="feature-card">
            <div className="feature-icon">🎁</div>
            <h3>Beautiful Gifts</h3>
            <p>
              Carefully selected gifts designed to make your
              loved ones smile.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💝</div>
            <h3>Perfect for Every Occasion</h3>
            <p>
              Find the right gift for birthdays, anniversaries,
              weddings and more.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h3>Quality Products</h3>
            <p>
              We focus on attractive and quality products that
              make every gift meaningful.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">❤️</div>
            <h3>Made with Love</h3>
            <p>
              Every order is prepared with care to make your
              gifting experience special.
            </p>
          </div>

        </div>

      </section>


      <section className="occasion-section">

        <div className="section-title">
          <span>CELEBRATE EVERY MOMENT</span>
          <h2>Gifts For Every Occasion</h2>
        </div>

        <div className="occasion-list">

          <div className="occasion">
            <span>🎂</span>
            <h3>Birthdays</h3>
          </div>

          <div className="occasion">
            <span>💍</span>
            <h3>Anniversaries</h3>
          </div>

          <div className="occasion">
            <span>💐</span>
            <h3>Weddings</h3>
          </div>

          <div className="occasion">
            <span>❤️</span>
            <h3>Valentine's Day</h3>
          </div>

          <div className="occasion">
            <span>🎓</span>
            <h3>Graduation</h3>
          </div>

          <div className="occasion">
            <span>👫</span>
            <h3>Friendship</h3>
          </div>

        </div>

      </section>


      <section className="about-cta">

        <h2>Find Something Special</h2>

        <p>
          Explore our collection and find a gift that speaks from
          the heart.
        </p>
        <Link to="/shopping" ><button className="explore-btn"> 
  Explore Gifts</button>
</Link>

       

      </section>

    </div>
  );
}

export default About;
