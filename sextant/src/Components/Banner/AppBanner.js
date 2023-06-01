import bannerImage from "../images/Banner-image4.jpg";

function AppBanner() {

    return (
    <div className="flex flex-col items-center justify-center" > 
        <p className="text- [50px] font=semibold ">Sextant App</p>
        <p>Welcome to the network perfomance dashbord</p>
        <img width={1000} height={200} src={bannerImage} alt="App Banner"/>
    </div>);

}

export default AppBanner;