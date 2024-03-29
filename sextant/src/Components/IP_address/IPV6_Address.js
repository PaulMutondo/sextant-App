import { useState, useEffect } from 'react'
import axios from 'axios';
function IPV6Address(){

 //creating IP state
 const [ip, setIP] = useState("");

 //creating function to load ip address from the API
 // const getData = async () => {
 //   const res = await axios.get("https://geolocation-db.com/json/");
 //   console.log(res.data);
 //   setIP(res.data.IPv4);
 // };

 // Updated Code

 const getData = async () => {
   const res = await axios.get("https://api64.ipify.org?format=json");
   console.log(res.data);
   setIP(res.data.ip);
 };

 useEffect(() => {
   //passing getData method to the lifecycle method
   getData();
 }, []);

 return (
   <div>
     <h3>Your IPv4 Address is</h3>
     <h4>{ip}</h4>
   </div>
 );


}
export default IPV6Address;