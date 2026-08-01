import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function FooterArea() {

    return (

        <>
         
        {/* <div className="EmailSubsCribebox">
        <h1>Stay Connected With Us</h1>
        <p>Subscribe for new arrivals & exclusive offers</p>

        <form>
            <div className="Subscribe">
                <input type="email" 
                placeholder="Your Email Address" /> 
                <button>Subscribe</button> 
            </div>
        </form>
</div>  */}

<div className="Footerbox">
    <h2>FurnitureWale</h2>

    {/* <div className="SocialIconsofFooter">
        <FaFacebook id="FACEBOOKICON" />
        <FaInstagramSquare id="iNSTAGRAMICON" />
        <FaTwitter id="TWITTER" />
        <FaLinkedin id="LINKEDINICON"/> 
    </div> */}
 
     <div className="SocialIconsofFooter">
        <img src="/FooterSocialiconimagesone.avif" alt="#" className="FooterSocialicon"/>
        <img src="/FooterSocialiconimages2.avif" alt="#" className="FooterSocialicon" />
        <img src="/FooterSocialiconimages3.webp" alt="#" className="FooterSocialicon" />
        <img src="/FooterSocialiconimages4.avif" alt="#" className="FooterSocialicon" />
    </div>


    <div className="Shopdata">
        <ul>
            <h3>Home</h3>
            <li>Buy Furniture</li>
            <li>Rent Furniture</li>
            <li>For Investors</li>
        </ul>
    </div>

    <div className="Accountdata">
        <ul>
             <h3>About Us</h3>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Find Store</li>
        </ul>
    </div>

    <div className="Help">
        <h2>NEED HELP?</h2>
        <button>HELP CENTER</button> 
    </div>
</div>


<div className="Copyright">
 
<div className="CitiesweDeliver">
    <h3>CITIES WE DELIVER TO</h3>
    <p>Bengaluru, Mumbai, Pune, Delhi,
    Gurugram, Noida, Hyderabad, Chennai, 
    Ghaziabad, Faridabad, Jaipur, Mysuru, Chandigarh,
    Vijayawada, Nashik, Sonipat, Patiala, Meerut, Panipat,
    Ambala, Karnal, Hosur, Kolkata, Ahmedabad, Coimbatore,
    Gandhinagar, Lucknow, Indore, Kochi, Bhopal, Vadodara,
     Kanpur, Pondicherry</p>
</div>

<div className="AvailableStores">
    <img src="/FooterGoogleplaystoreimg.png" alt="#" /> 
    <img src="/FooterGoogleapplestoreimg.svg" alt="#" />  
</div>

<div className="extralines">
    <h4>Rent & Buy Furniture Online | Furniturewale</h4> 
</div>



</div>
         
        
        </>
    )
}

export default FooterArea;
