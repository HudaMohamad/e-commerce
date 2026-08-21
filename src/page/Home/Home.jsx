import { useEffect, useState } from "react";
import HeroSlider from "../../components/HeroSlider";
import SlideProduct from "../../components/slideProducts/SlideProduct";
import "./home.css";
import PageTransition from "../../components/PageTransition";
import { ProductGridSkeleton } from "../../components/Skeleton/ProductGridSkeleton";

const categories = [
  "smartphones",
  "laptops",
  "mobile-accessories",
  "tablets",
  "sports-accessories",
  "mens-watches",
];

function Home() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            try {
              const res = await fetch(
                `https://dummyjson.com/products/category/${category}`
              );
              const data = await res.json();
              return { [category]: data.products || [] };
            } catch (err) {
              console.error(`Error fetching ${category}:`, err);
              return { [category]: [] };
            }
          })
        );

        const productsData = Object.assign({}, ...results);

        if (isMounted) setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <PageTransition>
      <div>
        <HeroSlider />

        {loading ? (
          <>
            <ProductGridSkeleton count={6} />
            <ProductGridSkeleton count={6} />
          </>
        ) : (
          categories.map((category) => (
            <SlideProduct
              key={category}
              data={products[category]}
              title={category.replace(/-/g, " ")}
            />
          ))
        )}
      </div>
    </PageTransition>
  );
}

export default Home;