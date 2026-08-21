import { useContext } from 'react';
import { Link } from 'react-router-dom';
import blog1 from '../../img/blog1.png';

import './Header.css';
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import CartContext from '../context/CartContext';
import SearchBox from './SearchBox';


function TopHeader() {


  const { cartItems, favorites } = useContext(CartContext)



  return (
    <div className="top_header">
      <div className="container">
        <Link className='logo' to="/">
          <img src={blog1} alt="Logo" />
        </Link>


        <SearchBox />
        <div className="header_icons">
          <div className='icon'>
            <Link to="/favorites">
              <FaRegHeart />
              <span className='count'>{favorites.length}</span>
            </Link>
          </div>

          <div className='icon'>
            <Link to="/cart">
              <HiOutlineShoppingCart />
              <span className='count'>{cartItems.length}</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default TopHeader;