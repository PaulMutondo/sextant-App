import React from "react"
import bannerImage from "../images/Banner-image.jpg";
import IPV6Address from "../IP_address/IP_Address";
//import IPAddress from "../IP_address/IP_Address";

function IPV6_Card(){

    return (
        

        <div className="IPV6_Card">
            <div>
                <h2>IPV6 Address</h2>
            </div>

            <div className="image3">
                <img src={bannerImage} alt="App Banner"/>
            </div>

            <div className="Card-Content">

            <div >
                <IPV6Address/>
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

export default IPV6_Card;