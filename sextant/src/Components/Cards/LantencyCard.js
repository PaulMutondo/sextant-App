import bannerImage from "../images/Banner-image3.jpg";

function LantencyCard(){

    return (
        <div className="LantencyCard">
            
            <div >
                <h3>Network Lantency</h3>
            </div>

            <div className="image3">
                <img src={bannerImage} alt="App Banner"/>
            </div>

            <div className="Card-Content">
            <div >
                <p>View the Network Lantency here</p>
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

export default LantencyCard;