import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageTransition from "../../components/PageTransition";
import Product from "../../components/slideProducts/product";
import { ProductGridSkeleton } from "../../components/Skeleton/ProductGridSkeleton";

function SearchResult() {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const query = new URLSearchParams(useLocation().search).get("query");

    useEffect(() => {
        let isMounted = true;

        const fetchResults = async () => {
            try {
                setLoading(true);
                const res = await fetch(
                    `https://dummyjson.com/products/search?q=${query}`
                );
                const data = await res.json();
                if (isMounted) setResults(data.products || []);
            } catch (error) {
                console.error("Search Error:", error);
                if (isMounted) setResults([]);
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        if (query) fetchResults();

        return () => {
            isMounted = false;
        };
    }, [query]);

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
        <PageTransition key={query}>
            <div className="gategory_products">
                {results.length > 0 ? (
                    <div className="containrt">
                        <div className="top_slide">
                            <h2>Results for: {query}</h2>
                        </div>

                        <div className="products">
                            {results.map((item) => (
                                <Product item={item} key={item.id} />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="container">
                        <p>No Result Found</p>
                    </div>
                )}
            </div>
        </PageTransition>
    );
}

export default SearchResult;