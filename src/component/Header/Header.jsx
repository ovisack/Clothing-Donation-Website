import { Link, Navigate, Outlet } from "react-router-dom";




const Header = () => {
    return (
        <>
        
       
        <div className="navbar  bg-indigo-50">
  <div className="navbar-start">
    <div className="dropdown">
        
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
    
        <li>
         
        </li>

      </ul>
    </div>
    <a className="btn btn-ghost text-xl">      </a>
    <div>
         <img className="w-24 " src="https://i.ibb.co.com/B4rtcyF/1000009079.png" alt="" /> 
         <h2 className="font-bold text-1xl text-"> Donation </h2>
    </div>
  

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-bold text-3xl">
 <li>   <Link to="/">Home</Link></li>
 <li><Link to="/cart">cord</Link></li>
      <li>
    
      <Link to="/DonationCard">DonationCard</Link> 
          <ul className="p-2">
          
          </ul>
      </li>
      <li>  <Link to="/donation">Donation Now</Link> </li>
    </ul>
  </div>
  <div className="navbar-end">
    <button className="btn btn-success">Login</button>
  </div>
</div>
     
     <Outlet></Outlet>
     
     
        </>
    );
};

export default Header;