import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/slideProducts/product";
import './CategoryPage.css'
import PageTransition from "../../components/PageTransition";
import { ProductGridSkeleton } from "../../components/Skeleton/ProductGridSkeleton";

function CategoryPage() {
    const { category } = useParams();

    const [categoryProducts, setCategoryProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const fetchCategoryProducts = async () => {
            try {
                setLoading(true);
                const res = await fetch(
                    `https://dummyjson.com/products/category/${category}`
                );
                const data = await res.json();

                if (isMounted) {
                    setCategoryProducts(data && data.products ? data.products : []);
                }
            } catch (error) {
                console.error(error);
                if (isMounted) setCategoryProducts([]);
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchCategoryProducts();

        return () => {
            isMounted = false;
        };
    }, [category]);

    if (loading) {
        return (
            <div className="gategory_products">
                <div className="containrt">
                    <ProductGridSkeleton count={8} />
                </div>
            </div>
        );
    }

    return (
       <PageTransition key={category}>
         <div className="gategory_products">
            <div className="containrt">

                <div className="top_slide">
                    <h2>{category} : {categoryProducts.length}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className="products">
                    {categoryProducts.map((item, index) => (
                      <Product item={item} key={index}/>
                    ))}

                </div>
            </div>

        </div>
       </PageTransition>
    );
}

export default CategoryPage;