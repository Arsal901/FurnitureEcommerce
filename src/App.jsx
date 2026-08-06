
import Navbar from "./NavBar";
import HeroSlider from "./HeroSection";
// import Products from "./ProductSection";
import RentFurniture from "./RentFurnitureCategory"; 
import SectionFour from "./Section4"; 
import Card from "./Cards";
// import Onsale from "./Onsale"; 
import OnSaleTwo from "./OnSaleTwo";
import FooterArea from "./Footer";
import ProductDetailPage from "./ProductDetailPage";
import { useState, useEffect } from "react";
import CheckoutStepper from "./ConfirmOrder";
// import { useLocation } from "react-router-dom";
import VideoCallBanner from "./VideoCallBanner";
import KidSection from "./KidSection";
import LuxurySection from "./LuxurySection";
import WhyFurniturewale from "./WhyFurniturewale";


// import MainLivingRoom from "./MainLivingRoom";
import MainLivingRoomDuplicate from "./MainLivingRoomDuplicate"; 
import MainBedRoom from "./MainBedroom";
import MainStealDeal from "./MainStealDeal";
import MainCombo from "./MainCombo";
import MainAppliances from "./MainAppliances";
import MainStorage from "./MainStorage";
import MainKids from "./MainKids";
import MainStudy from "./MainStudy";
import MainDinning from "./MainDinning";
import MainLuxury from "./MainLuxury";
import MainFitness from "./MainFitness";
import MainMattress from "./MainMattress";
import MainZrated from "./MainZrated";

import MainProductDetail from "./MainProductDetailPage"; 
import MainProductDetailFitness from "./MainProductDetailPageFitness";
import MainProductDetailCombo from "./MainProductDetailPageCombo";
import MainProductDetailLivingroom from "./MainProductDetailPageLivingroom";
import MainProductDetailStealDeal from "./MainProductDetailPageStealDeal";
import MainProductDetailAppliances from "./MainProductDetailPageappliances";
import MainProductDetailStorage from "./MainProductDetailPageStorage";
import MainProductDetailKids from "./MainProductDetailPageKids";
import MainProductDetailStudy from "./MainProductDetailPageStudy";
import MainProductDetailZrated from "./MainProductDetailPageZrated";
import MainProductDetailMattress from "./MainProductDetailPageMattress";
import MainProductDetailLuxury from "./MainProductDetailPageLuxury";
import MainProductDetailDinning from "./MainProductDetailPageDinning";

import AllProducts from "./AllProductData"; 
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";



import {BrowserRouter, Routes, Route, Link } from "react-router-dom";  

// import axios from "axios";

 
// import PaymentButton from "./PaymentButton";     



function App() {

          // const [cart, setCart] = useState([]); 
          const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : []; 
});

useEffect(() => { 
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);



          const [OpenCartBar, setOpenCartBar] = useState(false); 
          const location = useLocation(); // footer ko confirmorderpage se hatane ke liye 

//           const handlePayment = async (e) => {
//   if (e) e.preventDefault();
//   console.log("KEY:", import.meta.env.VITE_RAZORPAY_KEY_ID); 

//   try {
//     const { data: order } = await axios.post(
//       "http://127.0.0.1:5000/create-order",
//       { amount: product.price * qty } // ✅ real price × qty
//     );

//     if (!window.Razorpay) {
//       alert("Razorpay SDK not loaded"); 
//       return;
//     }



//     const options = {
//       // key: import.meta.env.VITE_RAZORPAY_KEY_ID,  // ✅ from .env
//       key: import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_T1s9MY6yA3irHF",  // ✅ from .env
//       amount: order.amount,
//       currency: order.currency,
//       name: "My Store",
//       description: "Product Purchase",
//       order_id: order.id,

//       handler: async function (response) {
//         try {
//           // ✅ verify payment on backend
//           const { data } = await axios.post(
//             "http://127.0.0.1:5000/verify-payment",
//             {
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_signature: response.razorpay_signature,
//             }
//           );

//           if (data.success) {
//             alert("Payment Successful & Verified ✅");
//           } else {
//             alert("Payment verification failed ❌");
//           }
//         } catch (err) {
//           console.error("Verification error:", err);
//           alert("Could not verify payment");
//         }
//       },

//       theme: { color: "#3399cc" },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.on("payment.failed", function (response) {
//       alert("Payment failed: " + response.error.description);
//     });
//     rzp.open();

//   } catch (error) {
//     console.error("Payment error:", error);
//     alert("Order creation failed");
//   }
// };



  //  function handleAddToCart(item) {
  //                   setCart([...cart, item]);
  //                   console.log(item);
  //                }

  function handleAddToCart(item) {
  setCart(prev => { 
    const existing = prev.find(i => i.id === item.id); 

    if (existing) {
      return prev.map(i =>
        i.id === item.id
          ? { ...i, qty: i.qty + 1, 
            total: (i.qty + 1) * i.price 
           }
          : i
      );
    }

    return [...prev, { ...item, qty: 1, total: item.price }];
  });
}

const handleAddToCartProductdetailPage = (product) => {

  setCart((prevCart) => {

    const existingItem = prevCart.find(
      (item) => item.id === product.id
    );

    // AGAR ITEM PEHLE SE HAI
    if (existingItem) {

      return prevCart.map((item) =>
        item.id === product.id
          ? {
              ...item,

              qty: item.qty + product.qty, 

              total:
                (item.qty + product.qty) * item.price,
            }
          : item
      );
    }

    // AGAR NAYA ITEM HAI
    return [
      ...prevCart,
      {
        ...product,
        total: product.price * product.qty,
      },
    ];
  });
};

// const handleAddToCart = (newProduct) => {
//   setCart((prev) => {
//     const existing = prev.find(item => item.id === newProduct.id);

//     if (existing) {
//       return prev.map(item =>
//         item.id === newProduct.id
//           ? { ...item, qty: item.qty + newProduct.qty }
//           : item
//       );
//     }

//     return [...prev, newProduct];
//   });
// };

     

  useEffect(() => {
  if (OpenCartBar) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [OpenCartBar]); 

// const [searchResults, setSearchResults] = useState(null);
// const [searchTerm, setSearchTerm] = useState("");

// const handleSearch = (query) => {
//   const lower = query.toLowerCase();
//   const results = AllProducts.filter((item) =>
//     item.title.toLowerCase().includes(lower)
//   );
//   setSearchTerm(query);
//   setSearchResults(results);
// };

// useEffect(() => {
//   if (location.pathname !== "/") {
//     setSearchResults(null);
//   }
// }, [location.pathname]);

const [searchParams] = useSearchParams();
const navigate = useNavigate();

const searchTerm = searchParams.get("search") || "";

const searchResults = searchTerm
  ? AllProducts.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  : null;

const handleSearch = (query) => {
  navigate(`/?search=${encodeURIComponent(query)}`);
}

  return (

    <>

  {/* <BrowserRouter> */}
         {OpenCartBar && (
          <div
          className="RightSideoverlays"
          onClick={()=> setOpenCartBar(false)}>
          </div>
         )}
         {!location.pathname.startsWith("/ConfirmOrder") && (
            <Navbar cart={cart} OpenCartBar={OpenCartBar} setOpenCartBar={setOpenCartBar} setCart={setCart} onSearch={handleSearch} /> 
)}
         
         <Routes> 
          <Route path="/" element={ 
      <>


    {searchResults && (
      <div style={{ padding: "20px 40px" }}>
        <h2 style={{marginBottom:"20px", fontFamily:"monospace",fontSize:"1.6rem"}}>{searchTerm}</h2>
        {searchResults.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent:"center" }}>
            {searchResults.map((item, index) => (
              <Link to={item.link} key={index} style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ width: "290px", cursor: "pointer", }}>
                  <img src={item.displayImg} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <h4 style={{ fontSize: "0.9rem", marginTop: "8px" }}>{item.title}</h4>
                  <p style={{ fontSize: "0.85rem", color: "green", marginLeft:"10px" }}>{item.price}</p>
                </div>
              </Link>
            ))} 
          </div>
        )}
      </div>
    )}

    


    {!searchResults && (
      <>

         {/* <Products /> */}
                   <HeroSlider /> 
         <RentFurniture />
         <Card handleAddToCart={handleAddToCart} setOpenCartBar={setOpenCartBar}/>  
         <SectionFour />         
         {/* <Onsale />  */}
         <OnSaleTwo />
         <VideoCallBanner />
         <KidSection />
         <LuxurySection />
         <WhyFurniturewale />

          </>
    )}
  </> 
} />

          {/* <PaymentButton/>   */}
         
    
        <Route path="/ConfirmOrder/:id"  element={<CheckoutStepper cart={cart} setCart={setCart} />}/>
        <Route path="/ConfirmOrder"  element={<CheckoutStepper cart={cart} setCart={setCart} />}/>
        <Route path="/product-detail/:id" element={<ProductDetailPage handleAddToCartProductdetailPage={handleAddToCartProductdetailPage} setOpenCartBar={setOpenCartBar} setCart={setCart}/> }  /> 
        {/* <Route path="/MainLivingRoom" element={<MainLivingRoom />} />  */}
         <Route path="/MainLivingRoomDuplicate" element={<MainLivingRoomDuplicate />} />   
         <Route path="/MainBedRoom" element={<MainBedRoom />} />   
         <Route path="/MainStealDeal" element={<MainStealDeal />} />   
         <Route path="/MainCombo" element={<MainCombo />} />   
         <Route path="/MainAppliances" element={<MainAppliances />} />   
         <Route path="/MainStorage" element={<MainStorage />} />   
         <Route path="/MainKids" element={<MainKids />} />   
         <Route path="/MainStudy" element={<MainStudy />} />   
         <Route path="/MainDinning" element={<MainDinning />} />   
         <Route path="/MainLuxury" element={<MainLuxury />} />   
         <Route path="/MainFitness" element={<MainFitness />} />    
         <Route path="/MainMattress" element={<MainMattress />} />   
         <Route path="/MainZrated" element={<MainZrated />} />  
         <Route path="/MainProductDetailPage/:id" element={<MainProductDetail />} />  
         <Route path="/MainProductDetailPageFitness/:id" element={<MainProductDetailFitness />} />  
         <Route path="/MainProductDetailPageCombo/:id" element={<MainProductDetailCombo />} />  
         <Route path="/MainProductDetailPageLivingroom/:id" element={<MainProductDetailLivingroom />} />  
         <Route path="/MainProductDetailPageStealDeal/:id" element={<MainProductDetailStealDeal />} />  
         <Route path="/MainProductDetailPageappliances/:id" element={<MainProductDetailAppliances />} />  
         <Route path="/MainProductDetailPageStorage/:id" element={<MainProductDetailStorage />} />  
         <Route path="/MainProductDetailPageKids/:id" element={<MainProductDetailKids />} />  
         <Route path="/MainProductDetailPageStudy/:id" element={<MainProductDetailStudy />} />  
         <Route path="/MainProductDetailPageZrated/:id" element={<MainProductDetailZrated />} />  
         <Route path="/MainProductDetailPageMattress/:id" element={<MainProductDetailMattress />} />  
         <Route path="/MainProductDetailPageLuxury/:id" element={<MainProductDetailLuxury />} />  
         <Route path="/MainProductDetailPageDinning/:id" element={<MainProductDetailDinning />} />  


      
</Routes>

{/* <FooterArea />  */} 
{!location.pathname.startsWith("/ConfirmOrder") && ( 
  <FooterArea />
)}

       
{/* </BrowserRouter> */}  
    
    </>
  )
}

export default App;