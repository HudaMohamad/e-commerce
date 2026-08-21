import { useContext } from 'react'

import { FaStar } from "react-icons/fa6";
import { FaCartArrowDown, FaRegHeart } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import CartContext from '../../components/context/CartContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function ProductInfo({ product }) {

    const { cartItems, addToCart ,favorites, addToFavorites, removeFromFav  } = useContext(CartContext);
    const navigate = useNavigate();

    const isInCart = cartItems.some((item) => item.id === product.id);

    const handleAddToCart = () => {
        addToCart(product);
        toast.success(
            <div className="toast-wrapper">
                <img src={product.thumbnail} alt="" className="toast-img" />

                <div className="toast_content">
                    <strong>{product.title}</strong>
                    added to cart
                    <div>
                        <button className="btn" onClick={() => navigate('/cart')}>View Cart</button>
                    </div>
                </div>
            </div>,
            { duration: 3500 }
        );
    };



      const isInfav = favorites.some((i) => i.id === product.id);
  const handlAddToFav = () => {
    if (isInfav) {
      removeFromFav(product.id)
       toast.error(`${product.title} Removed To Favorites`)
    } else {
      addToFavorites(product)
      toast.success(`${product.title} Added To Favorites`)
    }

  }
    return (
        <div className="details_item">
            <h1>{product.title}</h1>
            <div className="stars">
                {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                ))}
            </div>
            <div className="prise">${product.price}</div>
            <div className="product_info">
                <h5>
                    Category: <span>{product.category}</span>
                </h5>
                <h5>
                    Availability: <span>{product.availabilityStatus}</span>
                </h5>
                <h5>
                    Brand: <span>{product.brand}</span>
                </h5>
                <h5>
                    Stock: <span>{product.stock}</span>
                </h5>
            </div>
            <p className="desc">{product.description}</p>

            <div className="product_actions">
                <button
                    className={`add_to_cart ${isInCart ? "in-cart" : ""}`}
                    onClick={handleAddToCart}
                >
                    <FaCartArrowDown /> {isInCart ? "Item in cart" : "Add to cart"}
                </button>
                <button className="action_icon favorite" title="Add to wishlist">
                    <span className={`${isInfav ? "in-fav" : ""}`} onClick={handlAddToFav}>  
                         <FaRegHeart /></span>
                  
                </button>
                <button className="action_icon share" title="Share">
                    <IoMdShareAlt />
                </button>
            </div>
        </div>
    )
}

export default ProductInfo