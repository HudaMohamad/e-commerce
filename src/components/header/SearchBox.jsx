import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function SearchBox() {
    const [serchTerm, setSerchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();

    const handleSbumit = (e) => {
        e.preventDefault();
        if (serchTerm.trim()) {
            navigate(`/search?query=${encodeURIComponent(serchTerm.trim())}`);
            setSerchTerm("");
            setSuggestions([]);
        }
    };

    useEffect(() => {
        let isMounted = true;

        const fetchSuggestions = async () => {
            if (!serchTerm.trim()) {
                if (isMounted) setSuggestions([]);
                return;
            }

            try {
                const res = await fetch(
                    `https://dummyjson.com/products/search?q=${serchTerm}`
                );
                const data = await res.json();
                if (isMounted) setSuggestions(data.products || []);
            } catch (error) {
                console.error("Search Error:", error);
                if (isMounted) setSuggestions([]);
            }
        };

        const debounce = setTimeout(() => {
            fetchSuggestions();
        }, 500);

        return () => {
            isMounted = false;
            clearTimeout(debounce);
        };
    }, [serchTerm]);

    const handleSuggestionClick = (title) => {
        navigate(`/search?query=${encodeURIComponent(title)}`);
        setSerchTerm("");
        setSuggestions([]);
    };

    return (
      <div className="SearchBox_contaner">
    <form onSubmit={handleSbumit} className="search_box">
        <input
            type="text"
            name="search"
            id="search"
            placeholder="Search For Product"
            value={serchTerm}
            onChange={(e) => setSerchTerm(e.target.value)}
            autoComplete="off"
        />
        <button type="submit">
            <FiSearch />
        </button>
    </form>

    {suggestions.length > 0 && (
        <ul className="suggestions_list">
            {suggestions.map((item) => (
                <li key={item.id} onClick={() => handleSuggestionClick(item.title)}>
                    <img src={item.images[0]} alt={item.title} />
                    {item.title}
                </li>
            ))}
        </ul>
    )}
</div>
    );
}

export default SearchBox;