import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import SlideProduct from "../../components/slideProducts/SlideProduct";

import "./productDetails.css";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import PageTransition from "../../components/PageTransition";
import ProductDetailsSkeleton from "../../components/Skeleton/ProductDetailsSkeleton";
import { ProductGridSkeleton } from "../../components/Skeleton/ProductGridSkeleton";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState("");

  const [relatedproducts, setRelatedproducts] = useState([]);
  const [lodingRelatedproducts, setLodingRelatedproducts] = useState(true);

  // Fetch the main product whenever the :id in the URL changes
  useEffect(() => {
    let isMounted = true;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();

        if (!isMounted) return;

        if (!data || data.message) {
          setProduct(null);
          return;
        }

        setProduct(data);
        setMainImage(data.images && data.images.length > 0 ? data.images[0] : "");
      } catch (error) {
        console.log(error);
        if (isMounted) setProduct(null);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchProduct();

    return () => {
      isMounted = false;
    };
  }, [id]);

  // Fetch related products from the SAME category as the loaded product
  useEffect(() => {
    if (!product?.category) return;

    let isMounted = true;

    const fetchRelated = async () => {
      try {
        setLodingRelatedproducts(true);
        const res = await fetch(
          `https://dummyjson.com/products/category/${product.category}`
        );
        const data = await res.json();

        if (isMounted) {
          setRelatedproducts(data && data.products ? data.products : []);
        }
      } catch (error) {
        console.error(error);
      } finally {
        if (isMounted) setLodingRelatedproducts(false);
      }
    };

    fetchRelated();

    return () => {
      isMounted = false;
    };
  }, [product?.category]);

  const handleImageClick = (img) => {
    setMainImage(img);
  };

  if (loading) return <ProductDetailsSkeleton />;
  if (!product) return <h2>Product Not Found</h2>;

  return (
    <PageTransition key={id}>
      <div>
        <div className="container product_details">
          <ProductImages
            product={product}
            mainImage={mainImage}
            handleImageClick={handleImageClick}
          />

          <ProductInfo product={product} />
        </div>

        {lodingRelatedproducts ? (
          <ProductGridSkeleton count={4} />
        ) : (
          <SlideProduct
            key={product.category}
            data={relatedproducts}
            title={product.category ? product.category.replace(/-/g, " ") : ""}
          />
        )}
      </div>
    </PageTransition>
  );
}

export default ProductDetails;