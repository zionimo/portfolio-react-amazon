import React from "react";
import "../style/Header.css";
import SearchIcon from "@mui/icons-material/SearchRounded";
import ShoppingBag from "@mui/icons-material/ShoppingBag";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      {/* 로고 */}
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG3.png"
          alt=""
        ></img>
      </Link>

      {/* 검색창 */}
      <div className="header_search">
        <input className="header_searchBar" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      {/* 로그인 */}
      <div className="header_option">
        <div className="header_option_login">
          <p>반가워요!</p>
          <Link to="/login" className="header_login">
            <p>
              <strong>로그인</strong>
            </p>
          </Link>
        </div>
        <div className="header_option_basket">
          <Link to="/checkout">
            <ShoppingBag className="header_shoppingBag" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
