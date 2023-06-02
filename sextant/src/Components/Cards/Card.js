import React from "react"
import bannerImage from "../images/Banner-image2.jpg";
import IPAddress from "../IP_address/IP_Address";
//import IPAddress from "../IP_address/IP_Address";

function Card1(){

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
                <IPAddress/>
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

export default Card1;