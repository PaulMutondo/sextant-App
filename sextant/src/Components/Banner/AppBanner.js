import bannerImage from "../images/Banner-image.jpg";

function AppBanner() {

    return (
    <div className="flex flex-col items-center justify-center" > 
        <h3 className="text- [50px] font=semibold ">Sextant App</h3>
        <p>Welcome to the network perfomance dashbord</p>
        <img width={1000} height={150} src={bannerImage} alt="App Banner"/>

    </div>);

}

export default AppBanner;