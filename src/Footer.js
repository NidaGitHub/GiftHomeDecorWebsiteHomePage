import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="Footer-Description">
        <h2>My Pooja Box - Your One-stop Puja Samagri Store</h2>
        <p>
          Being a one-stop pooja samagri online store in India, My Pooja Box
          bridges the gap between devotees and devotion. We have sorted all your
          devotional needs by putting forth a wide assortment of products by
          making it easier for you buy pooja items online. Hindu religion is a
          potpourri of traditions and ceremonies. Each religious occasion
          demands for special items as per the rituals. The concept of My Pooja
          Box revolves around bringing every required product on a single
          platform. We help you buy pooja items online in India. Decorative
          pooja thalis, dhoop, hawan samagri, god’s idols etc., we have a wide
          line-up of products to choose from. The idols and thalis will give you
          a glimpse of incredible Indian craftsmanship. Don’t worry if you need
          a pooja mandir for home to install the figurines of Gods and
          Goddesses. My Pooja Box has a wide variety of temples in brass and
          wooden materials and other pooja samagri store as well. Our range also
          includes home decor gift items oozing with traditional charm and
          modern aesthetics. Beautiful tea light scented candles, lanterns, wall
          hangings, showpieces, and more, choose from a wide list! Those looking
          for feng shui products also need not go anywhere else. Our assorted
          collection brings you laughing buddha figurines, tortoise statues,
          coin trees, owl figurines, and more in just a few clicks. We even
          possess all your Christmas and Christmas tree decorations, that you
          require to get with the festive vibes! So, buy havan samagri dhoop,
          puja store online right from the comfort of your couch to fulfil your
          religious needs.
        </p>
      </div>
      <div className="Footer-Box">
        <div className="Footer-Box-Content">
      
          <h1>Speedy delivery</h1>
        </div>
        <div className="Footer-Box-Content">
          <icon></icon>
          <h1>Cash on delivery</h1>
        </div>
        <div className="Footer-Box-Content">
          <icon></icon>
          <h1>Easy returns</h1>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items social-icons">
            <button className='social-button' >
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'>
              <i class='fab fa-facebook-f' />
           
            </Link>
              FACEBOOK
            </button>
            <button className='social-button'>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'>
              <i class='fab fa-instagram' />
            </Link>
              INSTAGRAM
            </button>
            
            </div>
            <div className="footer-link-items">
              <h2>INFORMATION</h2>
              <Link to="/sign-up">Track your Order</Link>
              <Link to="/">Returns and Refunds</Link>
              <Link to="/">Daily Horoscope</Link>
              <Link to="/">Holiday List</Link>
              <Link to="/">Terms & Conditions </Link>
              <Link to="/"> Aartis</Link>
              <Link to="/"> Privacy Policy</Link>
              <Link to="/"> Blog </Link>
              <Link to="/"> FAQ</Link>
            </div>
            <div className="footer-link-items">
              <h2>ABOUT MY POOJA BOX</h2>
              <Link to="/">Contact Us</Link>
              <Link to="/">About Us</Link>
              <Link to="/">Exchange/Cancel My Order</Link>
            </div>
            <div className="footer-link-items">
              <h2>CUSTOMER CARE</h2>
              <Link to="/">Phone : 0909090909 | 2121212121 </Link>
              <Link to="/">Email : poojabox@poojabox.com</Link>
            </div>
          </div>
        </div>

        <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo">
              <Link to="/" className="social-logo">
                MOBIKASA VENTURES LLP &nbsp;
                {/* <i class="fas fa-utensils"></i> */}
              </Link>
            </div>
            <small className="website-rights">
              © 2022, All Rights Reserved.
            </small>
            <div></div>

            <div className="social-icons"></div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Footer;