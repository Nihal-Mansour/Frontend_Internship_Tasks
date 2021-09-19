import React from 'react';

const CardPage = () => {
    return(
        <div className="cardPage">
            <div className="imageSection">
                <div className="cardImage">
                    <img src={require("../assets/Furn_7").default} alt="card_image" />
                </div>
                <div className="cardInformation">
                    <div className="details">
                        <span id="info">Working Chair</span>
                        <span id="name">Gronlid</span>
                        <span id="info">$419</span>
                    </div>
                    <div className="buy">
                        <button>BUY</button>
                    </div>
                </div>
            </div>
            <div className="infoSection">
                <div className="innerInfoDiv">
                <span id="productInfoTitle">Intro</span>
                <span id="description">Simple, timeless design that’s still going strong after 40 years in our stores. It’s loved by all ages so we made a grown-up size and a children’s size.</span>
                <div id="productInfo">
                    <span id="productInfoTitle">Product Information</span>
                    <div id="detailedCard">
                        <div id="cardTitle">Dimension</div>
                        <div id="cardDesc">52 x 50 x 88 cm</div>
                    </div>
                    <div id="detailedCard">
                        <div id="cardTitle">Matrials</div>
                        <div id="cardDesc">Polypropylene plastic Aluminium Solid birch.</div>
                    </div>
                    <div id="detailedCard">
                        <div id="cardTitle">Good to know</div>
                        <div id="cardDesc">Wipe clean with a cloth dampened in a mild cleaner.</div>
                    </div>
                    <div id="lookBookDiv">
                        <img id="lookBookImage" src={require("../assets/Furn_1").default} alt="card_image" />
                        <div id="lookBookText">Our LookBook</div>
                    </div>
                </div>
                </div> 
            </div>
        </div>
    );
}

export default CardPage;