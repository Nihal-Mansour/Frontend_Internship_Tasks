import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import productData from "../data/productData";
import { Link } from 'react-router-dom';

const rightArrow = <FontAwesomeIcon icon={faArrowRight} />

const GridCard = () => {
    const productsList = productData.map((item) =>  
        <div className="gridCard" style={{backgroundColor: item.color}} key={item.id}>
            <span id="title">{item.title}</span>
            <img src={item.image} alt="furniture name"/>
            <div className="moreDiv">
                <button id="circle"></button>
                <Link to="/cardPage" id="moreInfo">More info {rightArrow}</Link>
            </div>
        </div> 
    );
    return(
        <div className="gridList">
            <div>
                <span id="boldTitle">Lean</span><span id="lightTitle"> too far</span>
            </div>
            <div className="showList">
                {productsList}
            </div>
            <div>
                <button id="moreButton">VIEW MORE</button>
            </div>
        </div>
    );
}

export default GridCard;