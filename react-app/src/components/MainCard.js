import React from "react";

const MainCard = () => {
    return(
        <div className="mainCard">
            <div className="cardDetails">
                <div className="cardInfo">
                    <span id="info">Working Chair</span>
                    <span id="name">Gronlid</span>
                    <span id="info">$419</span>
                </div>
                <div className="cardImage">
                    <img src={require("../assets/Furn_7").default} alt="card_image" />
                </div>
            </div>
            <div className="buyButton">
                <button>BUY</button>
            </div>
        </div>
    );
}

export default MainCard;