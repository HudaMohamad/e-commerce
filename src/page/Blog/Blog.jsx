import { useState } from "react";
import { FaRegCalendar, FaRegCommentDots, FaArrowRightLong } from "react-icons/fa6";
import PageTransition from "../../components/PageTransition";
import bannerHero1 from "../../img/banner_Hero1.jpg";
import bannerHero2 from "../../img/banner_Hero2.jpg";
import bannerHero3 from "../../img/banner_Hero3.jpg";
import blog1 from "../../img/blog1.png";
import "./Blog.css";

const posts = [
  {
    id: 1,
    img: bannerHero1,
    category: "Smartphones",
    date: "March 2, 2026",
    comments: 12,
    title: "5 Things To Check Before Buying Your Next Smartphone",
    excerpt:
      "Screen quality, battery life, camera performance — here's a quick checklist to help you pick the right phone without the regret.",
  },
  {
    id: 2,
    img: bannerHero2,
    category: "Accessories",
    date: "Feb 18, 2026",
    comments: 8,
    title: "How To Choose Accessories That Actually Fit Your Lifestyle",
    excerpt:
      "From cases to watches, not every accessory is worth your money. Here's how to tell which ones are.",
  },
  {
    id: 3,
    img: bannerHero3,
    category: "Laptops",
    date: "Jan 27, 2026",
    comments: 5,
    title: "Laptop Shopping 101: Specs That Actually Matter",
    excerpt:
      "RAM, storage, processor — we break down which specs matter most depending on how you plan to use your laptop.",
  },
  {
    id: 4,
    img: blog1,
    category: "Store News",
    date: "Jan 10, 2026",
    comments: 3,
    title: "New Arrivals: What Just Landed In Our Store",
    excerpt:
      "Take a look at the latest products we've added this month across smartphones, tablets, and accessories.",
  },
];

function Blog() {
  const [activePost, setActivePost] = useState(null);

  return (
    <PageTransition>
      <div className="blog_page">
        <div className="blog_hero">
          <div className="container">
            <h4>From our team</h4>
            <h1>The Blog</h1>
            <p>
              Guides, tips, and news to help you get the most out of your
              tech and accessories.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="blog_grid">
            {posts.map((post) => (
              <article className="blog_card" key={post.id}>
                <div className="blog_card_img">
                  <img src={post.img} alt={post.title} />
                  <span className="blog_category">{post.category}</span>
                </div>
                <div className="blog_card_body">
                  <div className="blog_meta">
                    <span>
                      <FaRegCalendar /> {post.date}
                    </span>
                    <span>
                      <FaRegCommentDots /> {post.comments} Comments
                    </span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>
                    {activePost === post.id
                      ? post.excerpt
                      : `${post.excerpt.slice(0, 80)}...`}
                  </p>
                  <button
                    className="blog_read_more"
                    onClick={() =>
                      setActivePost(activePost === post.id ? null : post.id)
                    }
                  >
                    {activePost === post.id ? "Show Less" : "Read More"}{" "}
                    <FaArrowRightLong />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Blog;
