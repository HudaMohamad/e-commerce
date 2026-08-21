import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaMobileScreenButton,
  FaStopwatch,
  FaDumbbell,
  FaHeadphones,
} from "react-icons/fa6";
import PageTransition from "../../components/PageTransition";
import SlideProduct from "../../components/slideProducts/SlideProduct";
import { ProductGridSkeleton } from "../../components/Skeleton/ProductGridSkeleton";
import "./Accessories.css";

const accessoryCategories = [
  {
    slug: "mobile-accessories",
    title: "Mobile Accessories",
    icon: <FaMobileScreenButton />,
  },
  {
    slug: "sports-accessories",
    title: "Sports Accessories",
    icon: <FaDumbbell />,
  },
  {
    slug: "mens-watches",
    title: "Watches",
    icon: <FaStopwatch />,
  },
  {
    slug: "womens-watches",
    title: "Women's Watches",
    icon: <FaHeadphones />,
  },
];

function Accessories() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchAccessories = async () => {
      try {
        const results = await Promise.all(
          accessoryCategories.map(async (cat) => {
            try {
              const res = await fetch(
                `https://dummyjson.com/products/category/${cat.slug}`
              );
              const data = await res.json();
              return { [cat.slug]: data.products || [] };
            } catch (err) {
              console.error(`Error fetching ${cat.slug}:`, err);
              return { [cat.slug]: [] };
            }
          })
        );

        const productsData = Object.assign({}, ...results);
        if (isMounted) setProducts(productsData);
      } catch (error) {
        console.error("Error fetching accessories:", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchAccessories();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <PageTransition>
      <div className="accessories_page">
        <div className="accessories_hero">
          <div className="container">
            <h4>Complete the look</h4>
            <h1>Accessories</h1>
            <p>
              Everything you need to go with your device — cases, straps,
              watches and more, all in one place.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="accessories_categories">
            {accessoryCategories.map((cat) => (
              <Link
                to={`/category/${cat.slug}`}
                className="accessory_cat_card"
                key={cat.slug}
              >
                <span className="accessory_cat_icon">{cat.icon}</span>
                <p>{cat.title}</p>
              </Link>
            ))}
          </div>
        </div>

        {loading ? (
          <>
            <ProductGridSkeleton count={6} />
            <ProductGridSkeleton count={6} />
          </>
        ) : (
          accessoryCategories.map((cat) => (
            <SlideProduct
              key={cat.slug}
              data={products[cat.slug]}
              title={cat.title}
            />
          ))
        )}
      </div>
    </PageTransition>
  );
}

export default Accessories;
