import React from "react"
import bannerImage from "../images/Banner-image2.jpg";

function Card(){

    return (
        <div className="Card">
            <div className="image3">
                <img src={bannerImage} alt="App Banner"/>
            </div>

            <div className="Card-Content">
            <div >
                <h3>IP Address</h3>
            </div>

            <div >
                <p>An Internet Protocol (IP) address is a unique numerical 
        identifier for every device or network that connects to the internet. 
        Typically assigned by an internet service provider (ISP), 
        an IP address is an online device address used for communicating across the internet.</p>
            </div>
            </div>
            <div>
                <button>
                    <a>
                        View more
                    </a>
                </button>
            </div>
        </div>
    )


}

export default Card;