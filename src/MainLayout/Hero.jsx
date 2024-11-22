import { Link } from "react-router-dom";


const Hero = () => {
    return (
        <div className="hero bg-base-200 min-h-screen  "   style={{
          backgroundImage: "url(https://i.ibb.co.com/YNGsPPY/volunteers-donating-to-charity.jpg",
        }}>
       
          <div  >
           
            <Link to="/DonationCard" className="btn bg-orange-300   w-64 md:ml-96 mb-52 h-20 rounded-full text-2xl font-bold">Donation Now</Link >
          </div>
        </div>
    
    );
};

export default Hero;