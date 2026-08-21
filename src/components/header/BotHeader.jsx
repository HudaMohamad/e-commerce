import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
// import { PiSignInBold } from "react-icons/pi";
// import { FaUserPlus } from "react-icons/fa6";
import "./Header.css";

const nav_links = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Accessories", link: "/accessories" },
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" },
];

function BotHeader() {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [isCategoryOPen, setIsCategoreOpen] = useState(false);


useEffect(() => {
  const closeCategory = () => {
    setIsCategoreOpen(false);
  };

  closeCategory();
}, [location]);


  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="btm_header">
      <div className="container">

        {/* Categories */}
        <div className="category_nav">
          <div
            className="category_btn"
            onClick={() => setIsCategoreOpen(!isCategoryOPen)}
          >
            <FiMenu />
            <p>Browse Category</p>
            <IoIosArrowDown />
          </div>

          <div
            className={`category_nav_list ${
              isCategoryOPen ? "active" : ""
            }`}
          >
            {categories.map((category, index) => (
              <Link key={index} to={`/category/${category.slug}`}>
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <nav className="nav_links">
          <ul>
            {nav_links.map((item) => (
              <li
                key={item.link}
                className={location.pathname === item.link ? "active" : ""}
              >
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Login & Register */}
        {/* <div className="sign_regs_icon">
          <Link to="/login">
            <PiSignInBold />
          </Link>

          <Link to="/register">
            <FaUserPlus />
          </Link>
        </div> */}

      </div>
    </div>
  );
}

export default BotHeader;