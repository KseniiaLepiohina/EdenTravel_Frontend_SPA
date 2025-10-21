import React from "react";
import fcb from "../assets/facebook.svg";
import instgrm from "../assets/instagram.svg";
import twt from "../assets/twitter.svg";

import yt from "../assets/youtube.svg";
import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer>
      <section className="settings" >
        <section className="contact_container">
          <ul className="adress">
            <h3>Need any help?</h3>
            <li>Call 24/7 for any help</li>
            <li>
              <h2>+00 123 456 789</h2>
            </li>
          </ul>
          <ul className="adress">
            <li>Mail to our support team</li>
            <li>
              <h2>support@domain.com</h2>
            </li>
          </ul>
          <section className="subhelp">
            <ul>Follow us on</ul>
            <section className="follow">
              <li>
                <img
                 src={fcb} 
                 alt="facebook" 
                 loading="lazy"
                 />
              </li>
              <li>
                <img src={instgrm} alt="instagram"
                 loading="lazy"
                  />
              </li>
              <li>
                <img src={twt} alt="twitter" 
                 loading="lazy"
                 />
              </li>
              <li>
               
                <img src={yt} alt="youtube"
                 loading="lazy"
                />
              </li>
            </section>
          </section>
        </section>

        <section className="follow">
          <ul className="nav_container">
            <h4>Company</h4>
            <li>About Us</li>
            <li>Testimonials</li>
            <li>Rewards</li>
            <li>Work with Us</li>
            <li>Meet the Team </li>
            <li>Blog</li>
          </ul>

          <ul className="nav_container">
            <h4>Support</h4>
            <li>Account</li>
            <li>Faq</li>
            <li>Legal</li>
            <li>Contact</li>
            <li>Affiliate Program </li>
            <li>Privacy Policy</li>
          </ul>
          <ul className="nav_container">
            <h4>Services</h4>
            <li>Community Program</li>
            <li>Investor Relations</li>
            <li>Rewards Program</li>
            <li>Points Plus</li>
            <li>Partners</li>
            <li>List My Hotel</li>
          </ul>

          <ul className="nav_container">
            <h4>Top Cities</h4>
            <li>Rome</li>
            <li>Madrid</li>
            <li>New York</li>
            <li>Hong Kong</li>
            <li>Paris</li>
            <li>Tokyo</li>
          </ul>
        </section>
      </section>
      <hr />
      <section className="bottom">
        <p>Copyright © 2023 Kunturi Design</p>
        <img src={logo} alt="EdenTravel" />
      </section>
    </footer>
  );
}
