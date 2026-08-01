import { PiShieldStarFill } from "react-icons/pi";
import { RiPoliceBadgeFill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { TbArrowsCross } from "react-icons/tb";



function WhyFurniturewale() {


    return (


        <>


        <div className="WhyContainer">
              <h2>Why Choose <b style={{color:"rgb(2, 184, 145)",}}>FurnitureWale</b>?</h2>  

             <div className="AllWhyhere">
              <div className="ZeroDeposit">
                {/* icon */}
                <PiShieldStarFill className="WhyChooseusIcons" />
                <h3>Zero Deposit</h3>
                <p>Skip the deposit and get started instaantly</p>
              </div>

              <div className="FreeDelivery">
                {/* icon */}
                <RiPoliceBadgeFill className="WhyChooseusIcons"/>
                <h3>Free Delivery</h3>
                <p>We bring it to your home at no cost quick, easy,hassle-free</p>
              </div>

              <div className="PickDate">
                {/* icon */}
                <SlCalender className="WhyChooseusIcons" />
                <h3>Pick Your Delivery Date</h3>
                <p>Choose a Delivery slot that works for you</p>
              </div>

              <div className="UpgradeFurniture">
                {/* icon */}
                <TbArrowsCross  className="WhyChooseusIcons"/>
                <h3>Upgrade Furniture</h3> 
                <p>Switch or Upgrade your Furniture whenever you want</p>   
              </div>
              </div>

              


        </div>
        
        
        
        </>
    )
}


export default WhyFurniturewale;