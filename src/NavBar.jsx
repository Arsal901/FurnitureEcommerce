
import { RxHamburgerMenu } from "react-icons/rx";
import { FiUser } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";


import { MdHome } from "react-icons/md";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { IoMdRefresh } from "react-icons/io";
import { CiHeart } from "react-icons/ci";

import { MdOutlineShoppingCart } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";

import { RxCross1 } from "react-icons/rx";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


import { useEffect } from "react";

import axios from "axios";

import { FaUserLarge } from "react-icons/fa6";

import { MdKeyboardArrowDown } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import { TbMapPinCode } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";











 
function Navbar({cart, setCart, OpenCartBar, setOpenCartBar, onSearch}) {

    const [openSideBar, setOpenSideBar] = useState(false);
    // const [OpenCartBar, setOpenCartBar] = useState(false); 
    // const [mainpinCode, setMainPinCode] = useState(""); 
    const [pinInputValue, setPinInputValue] = useState("");


    // This is Saved PinCode Code 

    const [mainpinCode, setMainPinCode] = useState(() => {
      return localStorage.getItem("pincode") || "";
    }); 


    useEffect(()=> {
      if(mainpinCode) {
        localStorage.setItem("pincode", mainpinCode);
      }
    },[mainpinCode]);



    

    const NavBarPinImages = [
                              {img:"/PinCodeCityImgs/bengaluruimg.avif", name:"Bengaluru", pincode:"560001",},
                              {img:"/PinCodeCityImgs/mumbaiimg.avif", name:"Mumbai", pincode:"400001",},
                              {img:"/PinCodeCityImgs/hyderabadimg.avif", name:"Hyderabad", pincode:"500001",},
                              {img:"/PinCodeCityImgs/puneimg.avif", name:"Pune", pincode:"411001",},
                              {img:"/PinCodeCityImgs/delhiimg.avif", name:"Delhi", pincode:"110001",},
                              {img:"/PinCodeCityImgs/gurugramimg.avif", name:"Gurugram", pincode:"122001",},
                              {img:"/PinCodeCityImgs/noidaimg.avif", name:"Noida", pincode:"201301",},
                              {img:"/PinCodeCityImgs/chennaiimg.avif", name:"Chennai", pincode:"600001",}, 
                            ]

const OtherCities = [
  { name: "Kolkata", pincode: "700001" },
  { name: "Jaipur", pincode: "302001" },
  { name: "Chandigarh", pincode: "160001" },
  { name: "Ghaziabad", pincode: "201001" },
  { name: "Gandhinagar", pincode: "382001" },
  { name: "Ahmedabad", pincode: "380001" },
  { name: "Indore", pincode: "452001" },
  { name: "Faridabad", pincode: "121001" },
  { name: "Lucknow", pincode: "226001" },

  { name: "Coimbatore", pincode: "641001" },
  { name: "Kochi", pincode: "682001" },
  { name: "Bhopal", pincode: "462001" },
  { name: "Vadodara", pincode: "390001" },
  { name: "Kanpur", pincode: "208001" },
  { name: "Pondicherry", pincode: "605001" },
  { name: "Vijayawada", pincode: "520001" },
  { name: "Mysuru", pincode: "570001" },

  { name: "Meerut", pincode: "250001" },
  { name: "Sonipat", pincode: "131001" },
  { name: "Hosur", pincode: "635109" },
  { name: "Nashik", pincode: "422001" },
  { name: "Patiala", pincode: "147001" },
  { name: "Panipat", pincode: "132103" },
  { name: "Karnal", pincode: "132001" },
  { name: "Ambala", pincode: "133001" },
];



const col1 = OtherCities.slice(0, 9);
    const col2 = OtherCities.slice(9, 17);
    const col3 = OtherCities.slice(17, 25); 





useEffect(() => {
  if (openSideBar) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto"; 
  }
}, [openSideBar]);




// const handlePayment = async () => {
//   const totalAmount = cart.reduce((acc, item) => acc + item.total, 0);

//   try {
//     const { data: order } = await axios.post(
//       "http://127.0.0.1:5000/create-order",
//       { amount: totalAmount }
//     );

//     if (!window.Razorpay) {
//       alert("Razorpay SDK not loaded");
//       return;
//     }

//     const options = {
//       key: import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_T1s9MY6yA3irHF",
//       amount: order.amount,
//       currency: order.currency,
//       name: "My Store",
//       description: "Product Purchase",
//       order_id: order.id,

//       handler: async function (response) {
//         try {
//           const { data } = await axios.post(
//             "http://127.0.0.1:5000/verify-payment",
//             {
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_signature: response.razorpay_signature,
//             }
//           );
//           data.success ? alert("Payment Successful ✅") : alert("Verification failed ❌");
//         } catch {
//           alert("Could not verify payment");
//         }
//       },
//       theme: { color: "#3399cc" },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.on("payment.failed", (response) => {
//       alert("Payment failed: " + response.error.description); 
//     });
//     rzp.open();

//   } catch (error) {
//     console.error("Payment error:", error);
//     alert("Order creation failed");
//   }
// };
        

const handlePayment = async () => {
  const totalAmount = cart.reduce((acc, item) => acc + item.total, 0);

  try {
    const { data: order } = await axios.post(
      "http://127.0.0.1:5000/create-order",
      { amount: totalAmount }
    );

    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded");
      return;
    }

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_T1s9MY6yA3irHF",
      amount: order.amount,
      currency: order.currency,
      name: "My Store",
      description: "Product Purchase",
      order_id: order.id,

      handler: async function (response) {
        try {
          const { data } = await axios.post(
            "http://127.0.0.1:5000/verify-payment",
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }
          );

          if (data.success) {
            alert("Payment Successful ✅");

            // 🔥 CLEAR CART
            setCart([]);
            localStorage.removeItem("cart");

            // 🔥 CLOSE CART UI
            setOpenCartBar(false);

            // 🔥 GO HOME
            window.location.href = "/";
          } else {
            alert("Verification failed ❌");
          }
        } catch {
          alert("Could not verify payment");
        }
      },

      theme: { color: "#3399cc" },
    };

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", (response) => {
      alert("Payment failed: " + response.error.description);
    });

    rzp.open();

  } catch (error) {
    console.error("Payment error:", error);
    alert("Order creation failed");
  }
};

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

   




// const handleConfirmOrder = () => {
//   const selectedProduct = {
//     ...cart,
//     qty,
//   };

//   setCart([selectedProduct]);

//   localStorage.setItem(
//     "cart",
//     JSON.stringify([selectedProduct])
//   );
// };
    
        const handleConfirmOrder = () => {
          setOpenCartBar(false);
          localStorage.removeItem("buyNowProduct")
  localStorage.setItem("cart", JSON.stringify(cart));
}; 


const [openRentMenu, setOpenRentMenu] = useState(false); 
const [openBuyMenu, setOpenBuyMenu] = useState(false);  
const [openAdminMenu, setOpenAdminMenu] = useState(false);  


// const [ShowCurrentStateCode, setShowCurrentStateCode] = useState(false);

// API Pincodes 
 
const [pincodeCityName, setPincodeCityName] = useState("");
const [pincodeLoading, setPincodeLoading] = useState(false);
const [pincodeError, setPincodeError] = useState("");

useEffect(() => {
  // 6 digit se kam hai to kuch mat karo
  if (pinInputValue.length !== 6) {
    setPincodeCityName("");
    setPincodeError("");
    return;
  }

  // Debounce - user ke typing rukne ke 400ms baad hi call karo
  const timer = setTimeout(async () => {
    setPincodeLoading(true);
    setPincodeError("");
    try {
      const res = await axios.get(
        `https://api.postalpincode.in/pincode/${pinInputValue}`
      );
      const data = res.data[0];

      if (data.Status === "Success") {
        const postOffice = data.PostOffice[0];
        setPincodeCityName(
          `${postOffice.District}, ${postOffice.State}`
        );
      } else {
        setPincodeCityName("");
        setPincodeError("Invalid pincode");
      }
    } catch (err) {
      setPincodeCityName("");
      setPincodeError("Could not fetch location");
    } finally {
      setPincodeLoading(false);
    }
  }, 400);

  // Cleanup - agar user aur type kare to purana timer cancel karo
  return () => clearTimeout(timer);
}, [pinInputValue]);




// This is Completely new for and this is for  search bar 

const [searchInput, setSearchInput] = useState("");
const navigate = useNavigate();

// const handleSearch = () => {
//   if (searchInput.trim() === "") return;
//   if (props.onSearch) {
//     props.onSearch(searchInput);
//   }
//   navigate("/");
// };


// This is MobileMenuBar 

const [mobileSearchBar, setMobileSearchBar] = useState(false);      
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);  


// const [mobileMenuOpen, setMobileMenuOpen] = useState(window.innerWidth > 768);
// const [mobileSearchBar, setMobileSearchBar] = useState(window.innerWidth > 768);

// useEffect(() => {
//   const handleResize = () => { 

//     if (window.innerWidth > 768) {
//       setMobileMenuOpen(true);
//       setMobileSearchBar(true);
//     } else {
//       setMobileMenuOpen(false);
//       setMobileSearchBar(false);
//     }
//   };

//   window.addEventListener("resize", handleResize);
//   return () => window.removeEventListener("resize", handleResize);
// }, []);


    

    return (
      
        <>

           {openSideBar && ( 
            <div className="overlay" onClick={() => setOpenSideBar(false)}></div>
        )}   
         

        <div className="MainContainer">

          {/* <div className="StatePinCodeBox">

            <div className="StatePinCode">
             <h3>Select PinCode</h3>
             <MdKeyboardArrowDown />

             </div>

          </div> */}



            <div className="Menu">
                {/* <RxHamburgerMenu className="hamburgerIcon" onClick={()=> setOpenSideBar(true)} />    */}
                {/* <RxHamburgerMenu className="hamburgerIcon" onClick={()=> setOpenSideBar(true)} />  */}
                {/* <TbMapPinCode className="hamburgerIcon" onClick={()=> setOpenSideBar(true)} />  */}

                <div className="PinCodeArea">

                <RxHamburgerMenu className="MobileMenuBar" onClick={()=> {
                  setMobileMenuOpen(!mobileMenuOpen)
                   setMobileSearchBar(false)
                  }}/>

                <TbMapPinCode className="hamburgerIcon" onClick={()=> setOpenSideBar(true)} />
                <b>{mainpinCode}</b>
                </div>    
                                      
                
                
             
                 <div className={`SideBar ${openSideBar ? "ShowSideBar" : "HideSideBar" }`}>   
                 <div className="first">
                    <div className="Crossicon"> 
                     <RxCross2 className="Cancelicon" onClick={()=> setOpenSideBar(false)} />
                    </div>
                        {/* <FiUser className="usericon" /> */}
                        <span><h1>Select Delivery Location</h1></span>
                    </div> 
 

                 <div className="sideBarMenus">

                    <div className="PinCodeInputArea">
                     
                      
                      <div className="JustPinCode"> 
                      <input  type="text"
                       placeholder="Enter your pincode"
                       value={pinInputValue}
                        onChange={(e)=> {
                          setPinInputValue(e.target.value);
                        }}
                        maxLength={6} />
                      <FiArrowRight
                       className="PinCodeRightArrow"
                       onClick={() => {
                        if (/^\d{6}$/.test(pinInputValue)) {
                          setMainPinCode(pinInputValue);
                          setPinInputValue("");
                          setOpenSideBar(false)
                        }
                       }} />
                      </div>

                      {/* 👇 Naya part - API se aaya result yahan dikhega */}

{pinInputValue.length === 6 && (
  <p className="PinCodeCityHint">
    {pincodeLoading && "Checking pincode..."}
    {!pincodeLoading && pincodeCityName && ( 
      <>Location: <b>{pincodeCityName}</b></>
    )}
    {!pincodeLoading && pincodeError && pincodeError}
  </p>
)}


     {/* <div className="CurrentStateCode">
       <p>Currently selected pincode: <b>{mainpinCode}</b></p>
     </div> */}




                        
                    </div> 


                    {/* Third  */}

                      <div className="Third">
                        
                        <div className="SelectYourCity">
                          <div className="orDivider">
                              <div className="line"></div>
                              <span>Or select your city</span>
                              <div className="line"></div>
                        </div>

                        <div className="CitiesImages">
                          <div className="AllPinCities">
                           {NavBarPinImages.map((item, index)=> (
                            <div className="CityBox"
                             key={index}
                             onClick={()=> { 
                              setMainPinCode(item.pincode);
                              setOpenSideBar(false)
                              }}>
                              <img src={item.img} alt="#" />
                              <span>{item.name}</span>
                            </div>
                            ))}
                          </div>
                        </div>




                        </div>

                        
                    </div> 

                    {/* Fourth  */}

                      <div className="Fourth">
                        <h4>Other Cities</h4>  
                        
                        <div className="ALlCities">
                        <ul>
                          {col1.map((city)=> ( 
                          <li key={city.pincode} onClick={()=> {
                             setMainPinCode(city.pincode);
                             setOpenSideBar(false)
                          }}>{city.name}</li>
                          ))}
                         </ul>
                        
                         <ul>
                           {col2.map((city)=> ( 
                          <li key={city.pincode} onClick={()=> {
                            setMainPinCode(city.pincode);
                            setOpenSideBar(false)
                          }}
                            >{city.name}</li>
                          ))}
                          </ul>
                        
                        <ul>
                           {col3.map((city)=> ( 
                          <li key={city.pincode} onClick={()=> {
                            setMainPinCode(city.pincode);
                            setOpenSideBar(false)
                          }}>{city.name}</li>
                          ))}
                        </ul>
                        </div>
                                                
                                              




                    
                    </div>
                </div>                 
        </div>


                {/* This is For FurnitureWala - Here I Make Menus  */}
                {mobileMenuOpen && (
                <div className="FurniturewaleMenus">
                  
                  <ul> 
                    {/* <li onClick={() => setOpenLilMenu(!openLilMenu)}>Rent  */}
                    <li onMouseEnter={() => setOpenRentMenu(true)}
                      onMouseLeave={() => setOpenRentMenu(false)}>Rent 
                    {openRentMenu && (
                      <div className="RentSubmenus">
                         
                        <div className="AllRentSubMenu" > 
                        <h4>Bedroom</h4> 
                        <ul>
                        <li>Beds</li>  
                        <li>Kids Crib</li>
                        <li>Queen Beds</li>
                        <li>Storage Beds</li>
                        <li>King Beds</li> 
                        <li>Single Beds</li>
                        <li>Bedside Tables</li>
                        <li>Beds without Mattress</li>
                        <li>Mattress</li>
                        <li>Bedroom Combos</li>
                        <li>Kids Beds</li>
                        </ul>
                        </div>

                        <div className="AllRentSubMenu" >
                        <h4>BHK Combos</h4> 
                        <ul>
                        <li>Bedroom Combos</li>  
                        <li>Living Room Combos</li>
                        <li>Appliance Combos</li>
                        <li>Storage Combos</li>
                        <li>Dining Combos</li>
                        <li>Study Combos</li>
                        </ul>
                        </div>

                        <div className="AllRentSubMenu">
                        <h4>Living Room</h4> 
                        <ul>
                        <li>Sofas</li>  
                        <li>Kids Seating</li>
                        <li>3 Seater</li>
                        <li>Sofa Sets</li>
                        <li>2 Seater</li>
                        <li>1 Seater</li>
                        <li>Recliner</li>
                        <li>L Shape</li>
                        <li>Sofa Cum Bed</li>
                        <li>Multifunctional</li>
                        <li>Centre Tables</li>
                        <li>Living Room Combos</li>
                        </ul>
                        </div>


                        <div className="AllRentSubMenu" >
                          <div className="AllRentSubMenu" >
                        <h4>Steal Deals</h4> 
                        <ul><li></li></ul>
                        </div>
                        <h4>Appliances</h4> 
                        <ul>
                        <li>Washing machines</li>  
                        <li>Refrigerators</li>
                        <li>TV</li>
                        <li>Microwave</li>
                        <li>Water Purifier</li>
                        <li>Appliance Combos</li>
                        <li>AC</li>
                        </ul>
                        </div>

                       <div className="AllRentSubMenu" >
                        <h4>Storage</h4> 
                        <ul>
                        <li>Kids Storage</li>  
                        <li>Wardrobes</li>
                        <li>Chest of Drawers</li>
                        <li>Entertainment Units</li>
                        <li>Dressing Table</li>
                        <li>Bookshelves</li>
                        <li>Shoe Racks</li>
                        <li>Storage Combos</li>
                        </ul>
                        </div>

                       <div className="AllRentSubMenu" >
                        <h4>Kids</h4> 
                        <ul>
                        <li>Kids Study</li>  
                        <li>Kids Bed</li>
                        <li>Kids Crib</li>
                        <li>Kids Seating</li>
                        <li>Kids Storage</li>
                        </ul>

                        <div className="AllRentSubMenu" >
                        <h4>Study</h4> 
                        <ul>
                        <li>Workstations</li>
                        <li>Study Tables</li>
                        <li>Office Chairs</li>
                        <li>Study Combos</li>
                        </ul>
                        </div>
                        </div>

                       <div className="AllRentSubMenu" >
                        <h4>Dinning</h4>  
                        <ul>
                        <li>Dining Tables</li>  
                        <li>Dining Combos</li>
                        </ul>

                        <div className="AllRentSubMenu" >
                        <h4>Luxury</h4>
                        <ul><li></li></ul>
                        </div>

                        <div className="AllRentSubMenu" >
                        <h4>Fitness</h4>
                        <ul>
                          <li>Treadmills</li>
                          </ul>
                        </div>

                        <div className="AllRentSubMenu" >
                        <h4>Mattress</h4>
                        <ul>
                          <li>Mattress</li>
                          </ul>
                        </div>


                        <div className="AllRentSubMenu">
                          <h4>Z Rated</h4>
                        <ul>
                        <li>Sleep</li>
                        <li>Chill</li>
                        <li>Work</li>
                        <li>Z Rated Combos</li> 
                        </ul>
                        </div>

                        </div>
</div>
                    )}
                    
                    
 </li>
 

                   

                    <li onMouseEnter={() => setOpenBuyMenu(true)} 
                      onMouseLeave={() => setOpenBuyMenu(false)}>Buy

                      {openBuyMenu && (
                      <div className="BuySubmenus">
                         
                        <div className="AllBuySubMenu" > 
                        <h4>Living Room</h4> 
                        <ul>
                        <li>Sofas</li>  
                        <li>Ottomans</li>
                        <li>Recliner</li>
                        <li>Center Tables</li>
                        <li>Tv Units</li>
                        </ul>
                        </div>

                        <div className="AllBuySubMenu" >
                        <h4>Bedroom</h4> 
                        <ul>
                        <li>Queen Beds</li>  
                        <li>King Beds</li>
                        <li>Storage Beds</li>
                        <li>Single Beds</li>
                        <li>Beside Table</li>
                        <li>Wardrobes</li>
                        <li>Mattress</li>
                        </ul>

                         <div className="AllBuySubMenu">
                        <h4>Premium</h4>  
                        <ul><li></li></ul>
                        </div>

                        </div>



                        <div className="AllBuySubMenu">
                        <h4>Storage</h4> 
                        <ul>
                        <li>Chest of Drawers</li>  
                        <li>TV Units</li>
                        <li>Shoe Racks</li>
                        <li>Wardrobes</li>
                        </ul>


                         <div className="AllBuySubMenu">
                        <h4>Study</h4> 
                        <ul>
                        <li>Study Tables</li>
                        <li>Office Chairs</li>
                        </ul>
                        </div>

                         <div className="AllBuySubMenu">
                        <h4>Dining </h4> 
                        <ul>
                        <li>Dining Tables</li>
                        <li>Dining Chairs</li>
                        <li>Dining Sets</li>
                        </ul>
                        </div>

                        </div>

                        <div className="AllBuySubMenu" >
                        <h4>Tables</h4> 
                        <ul>
                        <li>Beside Tables</li>  
                        <li>Center Tables</li>
                        <li>Dining Tables</li>
                        <li>Study Tables</li> 
                       </ul>

                        <div className="AllBuySubMenu" >
                        <h4>Lounger</h4>
                        <ul>
                        <li>Office Chairs</li>
                        <li>Ottomans</li>
                        </ul>
                        </div>
                         
                        <div className="AllBuySubMenu" >
                        <h4>Kids Room</h4> 
                        <ul><li></li></ul>
                        </div>
                      </div>

                      <div className="AllBuySubMenu" >
                        <h4>Best Deals</h4> 
                        <ul>
                        <li>Best Deals-Bedroom</li> 
                        <li>Best Deals-Living Room</li> 
                        <li>Best Deals-Storage</li> 
                        <li>Best Deals-Study</li> 
                        <li>Best Deals-Dining</li> 
                       </ul>

                       <div className="AllBuySubMenu" >
                        <h4>Mattress</h4> 
                        <ul><li></li></ul>
                        </div>

                        <div className="AllBuySubMenu" >
                        <h4>Z Rated</h4>
                        <ul>
                        <li>Sleep</li>
                        <li>Chill</li>
                        <li>Work</li>
                        </ul>
                        </div>
                         
                        
                      </div>


</div>
                    )}
                    
 </li>




                    <li>Unlimited</li>
                    <li>B2B</li> 
                  </ul>
                </div>
                )}
                




              
                

                </div>

                {/* This is H1 Main Heading  */}

                   <Link className="HomeLink" to="/"><h1>FURNITUREWALE</h1></Link> 

                   <div className="MobileSearchBarDown"  >  
                   <CiSearch className="MobileSearchBaricon" onClick={()=> { 
                    setMobileSearchBar(prev => !prev);
                    setMobileMenuOpen(false)
                    }} /> 
                    </div>
                    



                       {/* This is Search Bar */}
                      
                  {mobileSearchBar && (   
                 <div className="MainSearchBarSection">
                  <div className="SearchBar">
                    <input type="text"
                     placeholder="Search sofa, chair, beds etc"
                     value={searchInput}
                     onChange={(e) => setSearchInput(e.target.value)}
                     onKeyDown={(e) => {
                       if (e.key === "Enter") {
                         if (searchInput.trim() === "") return;
                         onSearch(searchInput);
                        //  navigate("/");
        }
      }} 
    />

                    <FiSearch
                     className="MainSearchIcon"
                     onClick={()=> {
                      if(searchInput.trim() === "")  return;
                      onSearch(searchInput);
                      // navigate("/")
                     }}
                     /> 
                  </div>
                 </div>
                 )} 
                  



 
                <div className="ShoppingCart">
                    <FaShoppingCart className="Shopcart" onClick={()=> setOpenCartBar(true)} />
                </div>

                <div className="AdminIcon" onMouseEnter={() => setOpenAdminMenu(true)} 
                      onMouseLeave={() => setOpenAdminMenu(false)}>
                  {/* <FaUserLarge  className="AdminUser" onClick={()=> setOpenAdminMenu(!openAdminMenu)}/> */}
                  <FaUserLarge  className="AdminUser"  />

                {openAdminMenu && (
                  <div className="UserOptions">
                    <h4>Hello! Users</h4>
                    <hr />
                    <ul>
                      <li id="AdminLogin">Login</li>
                      <li>Track Product Issue Request</li>
                      <li>Contact Us</li>
                      <li>Find Store</li>
                      <li>Help Centre</li>  
                    </ul>
                  </div>
                )}
            </div>

                  


 
 

                {/* {OpenCartBar && ( */}
                   {/* <div className="RightCartBar">  */}
                   <div className={`RightCartBar ${OpenCartBar ? "ShowCartBar" : "HideCartBar" }`}> 
                    <div className="Head"> 
                        <MdOutlineShoppingCart className="CartBarCart" />  
                        <h1>CART</h1>  
                        <p></p>  
                        <RxCross2  className="CartClose" onClick={()=>setOpenCartBar(false)}/> 
                    </div>

              <div className="CartBody">
                    {cart.length === 0 ? (
                        <>
                       <BsCart4  className="BigCart"/>   
                       <p>Add items to get started</p>
                       </> 
                    ):(
                         cart.map((item, index) => (
                         <div key={index} className="cartItem">
                         <img src={item.img} alt="#" />   
                         <h4>{item.title}</h4>  
                         <RxCross1 className="AddItemCancel" onClick={ () =>  
                            setCart(prev => prev.filter((_, i) => i !== index))} />   
                         {/* <p>{item.price}</p>  */}

                         <p className="Cartitemline"></p>

                         <CiCircleMinus className="Minusbtn"
                         onClick={() => {
                            if(item.qty <= 1) return; 
                         setCart(prev =>
      prev
        .map(i =>
          i.id === item.id
            ? { ...i, qty: i.qty - 1,
                total: (i.qty - 1) * i.price 
             }
            : i
        )
        .filter(i => i.qty > 0) 
    );  
                         }} />
                          <h5 className="qtynumber">{item.qty}</h5><CiCirclePlus className="Plusbtn"
                         onClick={() => {
    setCart(prev =>
      prev.map(i =>
        i.id === item.id 
          ? { ...i, qty: i.qty + 1,
            total:(i.qty + 1) * i.price
           }
          : i
      )
    );
  }} /> 


  <p className="totalprice">₹{item.total}</p>     

                        </div>
                       ))
                       )}
</div>



{cart.length > 0 && (
<div className="CartLastbox">

    <div className="SubtotalValue">
        <h4>Subtotal</h4> 
        <h4>₹{cart.reduce((acc, item) => acc + item.total, 0)}</h4> 
    </div>

    {/* <p className="CartLastline"></p>  */}

    <div className="TotalCartValue">
        <h4>Total</h4> 
        <h4>₹{cart.reduce((acc, item) => acc + item.total, 0)}</h4>  
    </div>


    <div className="ViewFullCart">
        <button>VIEW FULL CART</button>
    </div>

      {/* <Link to={`/ConfirmOrder/${product.id}`}> */}
      <div className="BuyBtn">
  <Link to="/ConfirmOrder">
  <button type="button" onClick={handleConfirmOrder}>Buy Now </button></Link> 
</div>


</div>
)}


{/* /* Add to Cart notification   */}



{/* <div className="cartContainer">
 
      {cart.length > 0 && (
        <span className="cartBadge">
          {cart.length}
        </span>
      )}

    </div> */}


                    {/* <div className="BrowseShop">
                        <button>BROWSE SHOP</button>    
                    </div> */}
                </div>
                {/* )} */}

                <div className="cartContainer">
 
      {/* <IoCartOutline className="cartIcon" />  */}
      {cart.length > 0 && (
        <span className="cartBadge">
          {cart.length}
        </span>
      )}
      

    </div>
                
        </div>

       
        
        </>
        )
        }

export default Navbar;   