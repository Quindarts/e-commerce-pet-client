import React from "react";
import "../"
import Marquee from "react-fast-marquee";
const Running = () => {
    return (
        <div className="running">
            <Marquee pauseOnHover speed={70} gradientColor="white">
                <div className="running__text">
                    <span className="icon">📦</span>
                    <span className="text">Free Shipping</span>
                </div>
                <div className="running__text">
                    <span className="icon">👩🏼‍💼</span>
                    <span className="text">24/7 Support</span>
                </div>
                <div className="running__text">
                    <span className="icon">💰</span>
                    <span className="text">Money Back Guarantee</span>
                </div>
                <div className="running__text">
                    <span className="icon">☘️</span>
                    <span className="text">All Products is Natural</span>
                </div>
                <div className="running__text">
                    <span className="icon">📦</span>
                    <span className="text">Free Shipping</span>
                </div>
                <div className="running__text">
                    <span className="icon">👩🏼‍💼</span>
                    <span className="text">24/7 Support</span>
                </div>
                <div className="running__text">
                    <span className="icon">💰</span>
                    <span className="text">Money Back Guarantee</span>
                </div>
                <div className="running__text">
                    <span className="icon">☘️</span>
                    <span className="text">All Products is Natural</span>
                </div>
            </Marquee>
        </div>
    );
};

export default Running;
