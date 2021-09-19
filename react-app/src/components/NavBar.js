import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

const bagIcon = <FontAwesomeIcon icon={faShoppingBag} />

const NavBar = () => {
    return(
        <div className="navBar">
            <div className="ecommerceName">
                <h3>The Furnish</h3>
            </div>
            <div className="navBarOptions">
                <ul className="navBarOptions">
                    <li id="shop">Shop</li>
                    <li id="collection">Collection</li>
                    <li id="bagIcon">{bagIcon}</li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;