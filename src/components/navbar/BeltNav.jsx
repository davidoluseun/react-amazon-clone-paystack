import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import useStateValue from "../../hooks/useStateValue";
import "../../styles/navbar/belt-nav.css";
import SiteHeaderLogo from "../../images/amazon-logo-01.png";
import USAFlag from "../../images/usa-flag.png";

const BeltNav = () => {
  const [{ cart, user }] = useStateValue();
  const [selectText, setSelectText] = useState("All");
  const [isFocus, setIsFocus] = useState(false);
  const history = useHistory();

  const handleSignInSignOut = () => {
    if (user) auth.signOut();
    else history.push("/sign-in");
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const selectElem = e.target;
    const selectText = selectElem.options[selectElem.selectedIndex].textContent;
    setSelectText(selectText);
  };

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  const formClasses = isFocus
    ? "belt-search nav-fill belt-search-focus"
    : "belt-search nav-fill";

  return (
    <div className="belt-nav">
      <div className="content-wrap">
        <div className="nav-left">
          <h1 className="site-title">
            <Link className="belt-logo" to="/">
              <img src={SiteHeaderLogo} alt="" />
            </Link>
          </h1>
          <Link to="/" className="belt-location">
            <span
              className="marker fas fa-map-marker-alt"
              aria-hidden="true"
            ></span>
            <span className="belt-lines">
              <span className="belt-line-1">Deliver to</span>
              <span className="belt-line-2">Nigeria</span>
            </span>
          </Link>
        </div>

        <form className={formClasses} onSubmit={handleSearch}>
          <div className="select-wrap">
            <button type="button" className="search-facade">
              <span className="facade-text">{selectText}</span>
              <span
                className="caret fas fa-caret-down"
                aria-hidden="true"
              ></span>
            </button>
            <select onChange={handleChange} tabIndex="-1" name="" id="">
              <option value="All Departments">All Departments</option>
              <option value="Arts and Crafts">Arts &amp; Crafts</option>
              <option value="Automotive">Automotive</option>
              <option value="Baby">Baby</option>
              <option value="Beauty and Personal Care">
                Beauty &amp; Personal Care
              </option>
              <option value="Books">Books</option>
              <option value="Computers">Computers</option>
              <option value="Digital Music">Digital Music</option>
              <option value="Electronics">Electronics</option>
              <option value="Kindle Store">Kindle Store</option>
              <option value="Prime Video">Prime Video</option>
              <option value="Women's Fashion">Women's Fashion</option>
              <option value="Men's Fashion">Men's Fashion</option>
              <option value="Girls' Fashion">Girls' Fashion</option>
              <option value="Boys' Fashion">Boys' Fashion</option>
              <option value="Deals">Deals</option>
              <option value="Health and Household">
                Health &amp; Household
              </option>
              <option value="Home &amp; Kitchen">Home &amp; Kitchen</option>
              <option value="Industrial &amp; Scientific">
                Industrial &amp; Scientific
              </option>
              <option value="Luggage">Luggage</option>
              <option value="Movies &amp; TV">Movies &amp; TV</option>
              <option value="Music, CDs &amp; Vinyl">
                Music, CDs &amp; Vinyl
              </option>
              <option value="Pet Supplies">Pet Supplies</option>
              <option value="Software">Software</option>
              <option value="Sports &amp; Outdoors">
                Sports &amp; Outdoors
              </option>
              <option value="Sports &amp; Outdoors">
                Sports &amp; Outdoors
              </option>
              <option value="Toys &amp; Games">Toys &amp; Games</option>
              <option value="Video Games">Video Games</option>
            </select>
          </div>

          <input onFocus={handleFocus} onBlur={handleBlur} type="search" />

          <button type="submit" className="belt-search-btn">
            <span className="fas fa-search" aria-hidden="true"></span>
          </button>
        </form>

        <div className="nav-right">
          <Link to="/language" className="belt-language">
            <img src={USAFlag} alt="" />
            <span className="caret fas fa-caret-down" aria-hidden="true"></span>
          </Link>
          <button
            onClick={handleSignInSignOut}
            className="btn-link belt-auth"
          >
            <span className="belt-line-1">
              <span className="belt-username">
                Hello, <span>{user ? user.displayName : "Guess"}</span>
              </span>
            </span>

            <span className="belt-line-2">{user ? "Sign Out" : "Sign In"}</span>
          </button>
          <Link to="/orders" className="belt-orders">
            <span className="belt-line-1">Returns</span>
            <span className="belt-line-2">&amp; Orders</span>
          </Link>
          <Link to="/cart" className="belt-cart">
            <span
              className="cart-icon fas fa-shopping-cart"
              aria-hidden="true"
            ></span>
            <span className="belt-cart-info">
              <span className="cart-count">{cart.length}</span>
              <span className="belt-line-2">Cart</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BeltNav;
