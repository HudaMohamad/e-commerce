import { Link } from "react-router-dom";
import {
  FaTruckFast,
  FaShieldHalved,
  FaHeadset,
  FaMedal,
  FaUsers,
  FaBoxOpen,
  FaStore,
  FaAward,
} from "react-icons/fa6";
import PageTransition from "../../components/PageTransition";
import bannerHero1 from "../../img/banner_Hero1.jpg";
import "./About.css";

const features = [
  {
    icon: <FaTruckFast />,
    title: "Fast Delivery",
    desc: "Quick and reliable shipping to your doorstep, tracked every step of the way.",
  },
  {
    icon: <FaShieldHalved />,
    title: "Secure Payment",
    desc: "Your transactions are protected with industry-standard encryption.",
  },
  {
    icon: <FaMedal />,
    title: "Quality Guaranteed",
    desc: "Every product is checked so you always get what you expect.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "Our team is always ready to help, whenever you need us.",
  },
];

const stats = [
  { icon: <FaUsers />, value: "25K+", label: "Happy Customers" },
  { icon: <FaBoxOpen />, value: "1.2K+", label: "Products" },
  { icon: <FaStore />, value: "8+", label: "Years In Business" },
  { icon: <FaAward />, value: "50+", label: "Brand Partners" },
];

function About() {
  return (
    <PageTransition>
      <div className="about_page">
        {/* Hero */}
        <div className="about_hero">
          <div className="container about_hero_inner">
            <div className="about_hero_text">
              <h4>Get to know us</h4>
              <h1>
                We Help You Shop <span>Smarter</span>, Not Harder
              </h1>
              <p>
                From the latest smartphones to everyday accessories, we bring
                a curated store to one place, backed by fast delivery and a
                team that genuinely cares about your experience.
              </p>
              <Link to="/" className="btn">
                Start Shopping
              </Link>
            </div>
            <div className="about_hero_img">
              <img src={bannerHero1} alt="About our store" />
            </div>
          </div>
        </div>


        {/* Features */}
        <div className="about_features">
          <div className="container">
            <div className="top_slide">
              <h2>Why Choose Us</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="features_grid">
              {features.map((f) => (
                <div className="feature_card" key={f.title}>
                  <span className="feature_icon">{f.icon}</span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="container about_stats">
          {stats.map((s) => (
            <div className="stat_card" key={s.label}>
              <span className="stat_icon">{s.icon}</span>
              <h3>{s.value}</h3>
              <p>{s.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="about_cta">
          <div className="container about_cta_inner">
            <div>
              <h2>Ready to find your next favorite gadget?</h2>
              <p>Browse our full collection of tech and accessories today.</p>
            </div>
            <Link to="/accessories" className="btn">
              Explore Accessories
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default About;
