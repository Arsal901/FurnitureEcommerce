import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

import { FaShoppingCart } from "react-icons/fa";

import axios from "axios"; 



function ProductDetailPage({handleAddToCartProductdetailPage, setOpenCartBar, setCart}) { 
  const { id } = useParams();

  const [changeImage, setChangeImage] = useState(null);  

  

  const ProductImages = {
    1: [
      { id: 1, img: "/firstbox.webp", producttitle:"Fio Accent Chair with Footstool", productprice:799, productoffer:"₹1399", discount:"26%OFF", rating:"4.6", 
      description: `Designed to bring warmth and elegance to your living room, this premium orangish sofa combines modern aesthetics with exceptional comfort. 
      Upholstered in soft, breathable fabric and filled with high-density foam cushions, it provides excellent support for everyday relaxation. Built on a 
      durable hardwood frame, the sofa is crafted to withstand years of daily use while maintaining its stylish appearance. Its vibrant orange tone adds a 
      welcoming touch to any interior, making it a perfect centerpiece for contemporary and classic homes alike.`}, 
      // { id: 2, img: "/firstbox.webp", }, 
      { id: 3, img: "/firstboxtwo.webp" },
      { id: 4, img: "/firstboxthree.webp" },
      { id: 5, img: "/firstboxfourth.webp"},
      { id: 6, img: "/firstboxfifth.webp" },
      
    ],
    2: [ 
      { id: 1, img: "/secondbox.webp", producttitle:"Dune Upholstered Box Storage Queen Bed in Lyon Walnut Finish",  productprice:375 , productoffer:"₹599", discount:"37%OFF", rating:"4.5",
        description: `Transform your bedroom with this beautifully crafted pistachio-colored bed that blends timeless design with everyday comfort. Constructed from premium-quality engineered wood,
        it offers excellent stability and long-lasting durability. The elegant pistachio finish creates a calm and refreshing atmosphere, while the sturdy frame provides reliable support for a restful
        night's sleep. Its modern design complements a wide range of bedroom interiors, making it an ideal choice for any home.`
      },
      { id: 2, img: "/secondboxtwo.webp" },
      { id: 3, img: "/secondboxthree.webp" }, 
      { id: 4, img: "/secondboxfouth.webp" },
      { id: 5, img: "/secondboxfifth.webp" }, 
      { id: 5, img: "/secondboxsixth.webp" },
    ], 
    3: [
      { id: 1, img: "/Thirdbox.avif", producttitle:"Hako Solid Wood Bedside Table in Timeless Teak Finish",  productprice:699, productoffer:"₹1399", discount:"26%OFF", rating:"4", 
        Mainheading:`Write, Learn & Connect with the Holy Quran`,
        description: `Enhance your bedroom with this stylish wooden bedside table, thoughtfully designed for both beauty and functionality. Crafted from high-quality wood with a
        smooth natural finish, it features spacious storage for keeping your essentials organized and within easy reach. Its compact design fits perfectly beside any bed, while
        the sturdy construction ensures lasting durability. Whether used for a bedside lamp, books, or decorative items, this table adds warmth and sophistication to your space.`
        },
      { id: 2, img: "/Thirdboxtwo.webp" },
      { id: 3, img: "/Thirdboxthree.webp" },
      { id: 4, img: "/Thirdboxfourth.webp" },
    ],
    4: [
      { id: 1, img: "/Fourthbox.avif", producttitle:"Semi Automatic Washing Machine", productprice:999 , productoffer:"₹1399", discount:"26%OFF", rating:"4.2",
        Mainheading:`Experience the Perfect Blend of Tradition and Technology`,
        description: `Experience powerful and efficient laundry care with this modern washing machine, designed to make everyday washing effortless. Featuring
        multiple wash programs, energy-efficient performance, and a spacious drum capacity, it delivers outstanding cleaning results while protecting your clothes.
        Its user-friendly controls and quiet operation make it perfect for busy households, while the sleek contemporary design complements any laundry area. Built
        for reliability and convenience, it offers the perfect balance of performance and efficiency.`
        },
      { id: 2, img: "/Fourthboxtwo.webp" },
      { id: 3, img: "/Fourthboxthree.webp" },
      { id: 4, img: "/Fourthboxfourth.webp" }, 
    ],
  };
 
  const images = ProductImages[Number(id)] || [];

  useEffect(() => {
  setChangeImage(images[0].img);
}, [id]);
// useEffect(() => {
//   if (images.length > 0) {
//     setChangeImage(images[0].img);
//   }
// }, [id, images]);


// const product = images[0];

// const product = {
//    ...images[0],
//    id: Number(id)
// }

const product = images.length > 0 ? {
  ...images[0],
  id: Number(id)
} : {};


// function QuantityBox() {
  const [qty, setQty] = useState(1);

  const handleMinus = () => {
    setQty((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handlePlus = () => {
    setQty((prev) => prev + 1);
  };
// }
 
// payment function


// function PaymentButton() 

// const handlePayment = async (e) => { 
//   if (e) e.preventDefault();

//   try {
//     // 1. create order
//     const { data: order } = await axios.post(
//       "http://127.0.0.1:5000/create-order",
//       { amount: product.price * qty * 100 } // paise

//     );

//     console.log("Order:", order);

//     // 2. check razorpay
//     if (!window.Razorpay) {
//       alert("Razorpay SDK not loaded");
//       return;
//     }

//     // 3. options
//     const options = {
//       key: "rzp_test_T18WxjuzH98hhE",
//       amount: order.amount,
//       currency: order.currency,
//       name: "My Store",
//       description: "Product Purchase",
//       order_id: order.id,

//       handler: function (response) {
//         console.log("Payment Success:", response);
//         alert("Payment Successful");
//       },

//       theme: {
//         color: "#3399cc",
//       },
//     };

//     // 4. open
//     const rzp = new window.Razorpay(options);
//     rzp.open();

//   } catch (error) {
//     console.log("Payment error:", error);
//     alert("Backend / order creation failed");
//   }
// };


const handlePayment = async (e) => {
  if (e) e.preventDefault();
  console.log("KEY:", import.meta.env.VITE_RAZORPAY_KEY_ID); 

  try {
    const { data: order } = await axios.post(
      "http://127.0.0.1:5000/create-order",
      { amount: product.price * qty } // ✅ real price × qty
    );

    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded"); 
      return;
    }



    const options = {
      // key: import.meta.env.VITE_RAZORPAY_KEY_ID,  // ✅ from .env
      key: import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_T1s9MY6yA3irHF",  // ✅ from .env
      amount: order.amount,
      currency: order.currency,
      name: "My Store",
      description: "Product Purchase",
      order_id: order.id,

      handler: async function (response) {
        try {
          // ✅ verify payment on backend
          const { data } = await axios.post(
            "http://127.0.0.1:5000/verify-payment",
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }
          );

          if (data.success) {
            alert("Payment Successful & Verified ✅");
          } else {
            alert("Payment verification failed ❌");
          }
        } catch (err) {
          console.error("Verification error:", err); 
          alert("Could not verify payment");
        }
      },

      theme: { color: "#3399cc" },
    };

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", function (response) {
      alert("Payment failed: " + response.error.description);
    });
    rzp.open();

  } catch (error) {
    console.error("Payment error:", error);
    alert("Order creation failed");
  }
};

// const handleConfirmOrder = () => {
//   const selectedProduct = {
//     ...product,
//     qty,
//   };

//   setCart([selectedProduct]);

//   localStorage.setItem(
//     "cart",
//     JSON.stringify([selectedProduct])
//   );
// };


const handleConfirmOrder = () => {
  const selectedProduct = {
    ...product,
    qty,
    total: product.productprice * qty,
  };

  // Sirf Buy Now product save hoga
  localStorage.setItem(
    "buyNowProduct",
    JSON.stringify([selectedProduct]) 
  );
};
        
   
   

 


// export default PaymentButton;

  return (
    <div className="MainProductPage">
      {/* <h1>Product ID : {id}</h1> */}
  <div className="TopedSection">

       <div className="ProductRightSide">
      <div className="ProductImagesBox">
        {/* <img src={images[0]?.img} alt=""/> */}
        <img src={changeImage} alt="#"/> 
 
        <div className="OtherImages">
          {images.map((item) => (
            <img key={item.id} src={item.img} alt="" onClick={()=> setChangeImage(item.img)}
             
              />
          ))}
        </div>
      </div> 
      </div>
 
   
     <div className="LeftSide">
     <h2>{product?.producttitle}</h2>

     

     <div className="RatingBox"> 
        <h3>4.6<FaStar className="h3icon"/></h3> 
       {[...Array(5)].map((_, starIndex) => { 

                            if (product?.rating >= starIndex + 1) {
                                return <FaStar key={starIndex} className="FaStar"/>;
                            }

                            else if (product?.rating >= starIndex + 0.5) {
                                return <FaStarHalfAlt key={starIndex} className="FaStarHalfAlt"/>;
                            }

                            else {
                                return <FaRegStar key={starIndex}  className="FaRegStar"/>; 
                            }

                        })}
            </div>
      <div className="Pricedbox">
        <p>{product?.productoffer}</p>
        <h4>{product?.productprice}</h4>
        <span>{product?.discount}</span>  
      </div>


      <div className="Quantity"> 
        <h3>QTY:</h3> 
        <div className="AddItems">

  <div className="MinusBtn" onClick={handleMinus}>
    <FiMinus size={20}  />
  </div>

  <span className="Qty">{qty}</span>

  <div className="PlusBtn" onClick={handlePlus}>
    <GoPlus size={20}  />
  </div>
        </div>
      </div>


   <div className="FeturesDetail"> 
      <ul>
        <li>Premium-quality solid wood frame for long-lasting durability</li>
        <li>High-density foam cushions for exceptional comfort and support</li>
        <li>Soft, breathable upholstery available in multiple fabric options</li>
        <li>Modern design that complements any living room interior</li>
        <li>Sturdy construction with a weight capacity for everyday use</li>
        <li>Easy-to-clean fabric with scratch and stain-resistant finish</li>
      </ul>
   </div>

   <div className="ButtonsArea">

    <div className="ProductToCart">
      <FaShoppingCart className="ProductCart" />
      <button  onClick={()=> {
                  handleAddToCartProductdetailPage({
                    ...product,
                    title: product.producttitle,
                    price: product.productprice,
                    qty : qty 
                  });
                  setOpenCartBar(true);
      }}
       >Add To Cart</button>
    </div>

                    
    <div className="BuyNow">
    {/* <button type="button" onClick={handlePayment}>Buy Now</button>    */}
    <Link to={`/ConfirmOrder/${product.id}`}>
  <button
    type="button" 
    onClick={handleConfirmOrder}
  >
    Buy Now 
  </button>
</Link>  
    </div> 
   </div> 


   <div className="DeliveryTime">

    <div className="Delivery">
      <h3>Delivery:</h3>
      <p>Free Delivery</p> 
    </div>

    <div className="Days">
      <h3>Estimated:</h3>
      <p>2-3 days</p> 
    </div>


   </div>

   </div>

  </div>




   <div className="OurProductDetails">
    <h2>PRODUCT DETAILS</h2> 

   
    <h5>{product?.title}</h5>
    <h5>{product?.Mainheading}</h5>
    <p>{product?.description}</p>

      
        

    
   </div>



    </div>
  );
}


export default ProductDetailPage;