import { useEffect, useState } from "react";
import Footer from '../component/Header/Footer';
import Header from "../component/Header/Header";
import { Link } from "react-router-dom";



const DonationCard = () => {
const [data,setData]=useState([]);


useEffect(()=>{
    fetch('/jsonData.json')
    .then((res)=>res.json())
    .then((data)=>setData(data))

},[])

    return (
        <>
        <Header></Header>
        <div className="grid  md:grid-cols-3 lg:grid-cols-4 gap-6 sm:grid-cols-1 m-4 bg-slate-100">
     
           {
          data?.map((item)=><div data={item} key={item.id} >
            <div className="card bg-base-100 lg:w-[370px] lg:h-[500px] shadow-xl">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    
    <h1 className="text-2xl font-bold">{item.title}</h1>

     <p className="">{item.description}</p>
    <div className="flex font-bold">
         
    <p>{item.status}</p>   <h2>{item.division}</h2>
    </div>
        <Link to="/donation" className="btn bg-green-500">CONTACT US </Link>
    <div className="card-actions ">
    
      <p className="">email:{item.contactInfo}</p>
    
    </div>
  </div>
</div>
          </div>)
           }
        </div>
        <Footer></Footer>

        </>
    );
};

export default DonationCard;




// {/* <div data={item} key={item.id}><img src={item.image} alt="" /></div> */}<Home item={item} key={item.id} ></Home>



