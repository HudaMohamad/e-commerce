import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";

import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { FaCartArrowDown, FaRegHeart } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";

import "./slideProduct.css";
import CartContext from "../context/CartContext";
import toast from "react-hot-toast";

function Product({ item }) {

  const navigate = useNavigate()

  const { cartItems, addToCart, favorites, addToFavorites, removeFromFav } = useContext(CartContext);

  const isInCart = cartItems.some((i) => i.id === item.id);
  if (!item) return null;

  const { id, images, thumbnail, title, price } = item;
  const img = images?.[0] || thumbnail;

  const handlAddToCart = () => {
    handleAddToCart(item)
    toast.success(
      <div className="toast-wrapper">
        <img src={img} alt="" className="toast-img" />

        <div className="toast_content">
          <strong>{item.title}</strong>
          added to cart
          <div>
            <button className="btn" onClick={() => navigate('/cart')}  >View Cart</button>
          </div>
        </div>

      </div>
      , { duration: 3500 }
    )

  }


  const isInfav = favorites.some((i) => i.id === item.id);
  const handlAddToFav = () => {
    if (isInfav) {
      removeFromFav(item.id)
       toast.error(`${item.title} Removed To Favorites`)
    } else {
      addToFavorites(item)
      toast.success(`${item.title} Added To Favorites`)
    }

  }

  const handleAddToCart = () => {
    if (isInCart) return; // حماية إضافية بالـ JS حتى لو تجاوز الـ CSS
    addToCart(item);
  };

  return (
    <div className={`prodect ${isInCart ? "in-cart" : ""}`}>
      <Link
        to={`/product/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <span className="stat_cart">
          <FaCheck /> in cart
        </span>

        {/* صورة المنتج */}
        <div className="img_product">
          <img src={img} alt={title} />
        </div>

        {/* اسم المنتج */}
        <p className="name_product">{title}</p>
      </Link>

      {/* التقييم */}
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStarHalfStroke />
      </div>

      {/* السعر */}
      <p className="price">
        <span>{price} $</span>
      </p>

      {/* أزرار المنتج */}
      <div className="icons">
        <span
          className="butn_cart"
          onClick={handlAddToCart}
          title={isInCart ? "Already in cart" : "Add to cart"}
        >
          {isInCart ? <FaCheck /> : <FaCartArrowDown />}
        </span>
        <span className={`${isInfav ? "in-fav" : ""}`} onClick={handlAddToFav}><FaRegHeart /></span>
        <span><IoMdShareAlt /></span>
      </div>
    </div>
  );
}

export default Product;