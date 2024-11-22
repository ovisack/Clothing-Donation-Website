import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../page/Home";

import DonationCard from "../page/DonationCard";
import DonationLogin from "../page/DonationLogin ";


const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
        

            },
            {

            },
           
            {
    

            }
        ],


      
    },  {
                path:"/donation",
                element:<DonationLogin></DonationLogin>
            },

            {
          path:"/DonationCard",
          element:<DonationCard></DonationCard>
        
            },
            {
path:"/cart",
element:<Home></Home>
            }


])

export default router;