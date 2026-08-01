


import { useState, useEffect } from "react";

import { RiQuestionLine } from "react-icons/ri"; 
import { PiBookmarksSimpleThin } from "react-icons/pi";
import { PiTruckFill } from "react-icons/pi";
import { MdArrowForwardIos } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { IoHeart } from "react-icons/io5";

import { useParams } from "react-router-dom";



function MainProductDetail() { 

    const [ChangeMainIMage, setChangeMainIMage] = useState("");

    const [ShowTip, setShowTip] = useState(false);
    const [OpenAccordian,  setOpenAccordian] = useState(false);
    const [OpenAccordiantwo,  setOpenAccordiantwo] = useState(false);
    const [OpenAccordianthree,  setOpenAccordianthree] = useState(false);
    const [OpenAccordianfourth,  setOpenAccordianfourth] = useState(false);
    const [OpenAccordianfifth,  setOpenAccordianfifth] = useState(false);


    const [LastAccordianOpen, setLastAccordianOpen] = useState(false);
    const [LastAccordiantwoOpen, setLastAccordiantwoOpen] = useState(false);
    const [LastAccordianthreeOpen, setLastAccordianthreeOpen] = useState(false); 


    const {id} = useParams(); 
    console.log(id);

 

    const MainProductImg = {
                              1:[ 
                                {id:"1",
                                 img:"/MainProductDetailsPageimg/MainProductDetailImg.avif",
                                 maintitle:"Aara Solid Wood Upholstered Queen Bed",
                                 hurry:"Hurry up! Only 7 Left",
                                 mainPrice:"₹1,249/mo",
                                 mainOffer:"₹1,436/mo",
                                 maindiscount:"13% OFF",
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductDetailsPageimg/SmallImages1.webp"},
                                {id:"3", img:"/MainProductDetailsPageimg/SmallImages2.webp"},
                                {id:"4", img:"/MainProductDetailsPageimg/SmallImages3.webp"},
                                {id:"5", img:"/MainProductDetailsPageimg/SmallImages4.webp"},
                                {id:"6", img:"/MainProductDetailsPageimg/SmallImages5.webp"},
                                {id:"7", img:"/MainProductDetailsPageimg/SmallImages6.webp"},
                                {id:"8", img:"/MainProductDetailsPageimg/SmallImages7.webp"},
                                {id:"9", img:"/MainProductDetailsPageimg/SmallImages8.webp"},
                               ],

                               2:[
                                {id:"1",
                                 img:"/MainProductDetailsPageimg/SecondProductDetailImg1.avif",
                                 maintitle:"Mattress Premium Foam Queen Size - (78 x 60 x 6 inches)",
                                 mainPrice:"₹589/mo",
                                 mainOffer:"₹677/mo",
                                 maindiscount:"13% OFF",
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductDetailsPageimg/SecondProductDetailImg2.webp"},
                                {id:"3", img:"/MainProductDetailsPageimg/SecondProductDetailImg3.webp"},
                                {id:"4", img:"/MainProductDetailsPageimg/SecondProductDetailImg4.webp"},
                                {id:"5", img:"/MainProductDetailsPageimg/SecondProductDetailImg5.webp"},
                                {id:"6", img:"/MainProductDetailsPageimg/SecondProductDetailImg6.webp"},
                                {id:"7", img:"/MainProductDetailsPageimg/SecondProductDetailImg7.webp"},
                                {id:"8", img:"/MainProductDetailsPageimg/SecondProductDetailImg8.webp"},
                                {id:"9", img:"/MainProductDetailsPageimg/SecondProductDetailImg9.avif"},
                               ],

                                3:[
                                {id:"1",
                                 img:"/MainProductDetailsPageimg/ThirdProductDetailImg1.avif",
                                 maintitle:"LIT Compact Double Bed with Premium 4 Mattress",
                                 mainPrice:"₹699/mo",
                                 mainOffer:"₹909/mo",
                                 maindiscount:"23% OFF",
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductDetailsPageimg/ThirdProductDetailImg2.webp"},
                                {id:"3", img:"/MainProductDetailsPageimg/ThirdProductDetailImg3.webp"},
                                {id:"4", img:"/MainProductDetailsPageimg/ThirdProductDetailImg4.webp"},
                                {id:"5", img:"/MainProductDetailsPageimg/ThirdProductDetailImg5.webp"},
                                {id:"6", img:"/MainProductDetailsPageimg/ThirdProductDetailImg6.webp"},
                                {id:"7", img:"/MainProductDetailsPageimg/ThirdProductDetailImg7.webp"},
                                {id:"8", img:"/MainProductDetailsPageimg/ThirdProductDetailImg8.webp"},
                                {id:"9", img:"/MainProductDetailsPageimg/ThirdProductDetailImg9.webp"},
                                {id:"10", img:"/MainProductDetailsPageimg/ThirdProductDetailImg10.webp"},
                                {id:"11", img:"/MainProductDetailsPageimg/ThirdProductDetailImg11.webp"},
                               ],

                                4:[
                                {id:"1",
                                 img:"/MainProductDetailsPageimg/FourthProductDetailImg1.avif",
                                 maintitle:"Blanca Queen Bed with 4 Premium Mattress",
                                 mainPrice:"₹889/mo",
                                 mainOffer:"₹1,156/mo",
                                 maindiscount:"23% OFF",
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductDetailsPageimg/FourthProductDetailImg2.webp"},
                                {id:"3", img:"/MainProductDetailsPageimg/FourthProductDetailImg3.webp"},
                                {id:"4", img:"/MainProductDetailsPageimg/FourthProductDetailImg4.webp"},
                                {id:"5", img:"/MainProductDetailsPageimg/FourthProductDetailImg5.webp"},
                                {id:"6", img:"/MainProductDetailsPageimg/FourthProductDetailImg6.webp"},
                                {id:"7", img:"/MainProductDetailsPageimg/FourthProductDetailImg7.webp"},
                                {id:"8", img:"/MainProductDetailsPageimg/FourthProductDetailImg8.webp"},
                               ],

                                5:[
                                {id:"1",
                                 img:"/MainProductDetailsPageimg/FifthProductDetailImg1.avif",
                                 maintitle:"Aara Solid Wood Queen  Hydraulic  Storage Bed",
                                 mainPrice:"₹1,799/mo",
                                 mainOffer:"₹2,069/mo",
                                 maindiscount:"13% OFF",
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductDetailsPageimg/FifthProductDetailImg2.webp"},
                                {id:"3", img:"/MainProductDetailsPageimg/FifthProductDetailImg3.webp"},
                                {id:"4", img:"/MainProductDetailsPageimg/FifthProductDetailImg4.webp"},
                                {id:"5", img:"/MainProductDetailsPageimg/FifthProductDetailImg5.webp"},
                                {id:"6", img:"/MainProductDetailsPageimg/FifthProductDetailImg6.webp"},
                                {id:"7", img:"/MainProductDetailsPageimg/FifthProductDetailImg7.webp"},
                                {id:"8", img:"/MainProductDetailsPageimg/FifthProductDetailImg8.webp"},
                                {id:"9", img:"/MainProductDetailsPageimg/FifthProductDetailImg9.webp"}, 
                                {id:"10", img:"/MainProductDetailsPageimg/FifthProductDetailImg10.webp"},
                                {id:"11", img:"/MainProductDetailsPageimg/FifthProductDetailImg11.webp"},
                                {id:"12", img:"/MainProductDetailsPageimg/FifthProductDetailImg12.webp"},
                                {id:"13", img:"/MainProductDetailsPageimg/FifthProductDetailImg13.webp"},
                                {id:"14", img:"/MainProductDetailsPageimg/FifthProductDetailImg14.webp"},
                                {id:"15", img:"/MainProductDetailsPageimg/FifthProductDetailImg15.webp"},
                               ],

                                6:[
                                {id:"1",
                                 img:"/MainProductDetailsPageimg/SixthProductDetailImg1.avif",
                                 maintitle:"Dune Upholstered Box Storage bed with 4 Premium Mattress",
                                 mainPrice:"₹1,549/mo",
                                 mainOffer:"₹2,014/mo",
                                 maindiscount:"23% OFF",
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductDetailsPageimg/SixthProductDetailImg2.webp"},
                                {id:"3", img:"/MainProductDetailsPageimg/SixthProductDetailImg3.webp"},
                                {id:"4", img:"/MainProductDetailsPageimg/SixthProductDetailImg4.webp"},
                                {id:"5", img:"/MainProductDetailsPageimg/SixthProductDetailImg5.webp"},
                                {id:"6", img:"/MainProductDetailsPageimg/SixthProductDetailImg6.webp"},
                                {id:"7", img:"/MainProductDetailsPageimg/SixthProductDetailImg7.webp"},
                                {id:"8", img:"/MainProductDetailsPageimg/SixthProductDetailImg8.webp"},
                                {id:"9", img:"/MainProductDetailsPageimg/SixthProductDetailImg9.webp"},
                                {id:"10", img:"/MainProductDetailsPageimg/SixthProductDetailImg10.webp"},
                                {id:"11", img:"/MainProductDetailsPageimg/SixthProductDetailImg11.webp"},
                                {id:"12", img:"/MainProductDetailsPageimg/SixthProductDetailImg12.webp"},
                                {id:"13", img:"/MainProductDetailsPageimg/SixthProductDetailImg13.webp"},
                                {id:"14", img:"/MainProductDetailsPageimg/SixthProductDetailImg14.webp"},
                                {id:"15", img:"/MainProductDetailsPageimg/SixthProductDetailImg15.webp"},
                               ],

                                7:[
                                {id:"1",
                                 img:"/MainProductDetailsPageimg/SevenProductDetailImg1.avif",
                                 maintitle:"Haimish Engineered Wood King Bed in Lyon Walnut with 6 Premium Mattress",
                                 mainPrice:"₹1,029/mo",
                                 mainOffer:"₹1,183/mo",
                                 maindiscount:"13% OFF",
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductDetailsPageimg/SevenProductDetailImg2.webp"},
                                {id:"3", img:"/MainProductDetailsPageimg/SevenProductDetailImg3.webp"},
                                {id:"4", img:"/MainProductDetailsPageimg/SevenProductDetailImg4.webp"},
                                {id:"5", img:"/MainProductDetailsPageimg/SevenProductDetailImg5.webp"},
                                {id:"6", img:"/MainProductDetailsPageimg/SevenProductDetailImg6.webp"},
                                {id:"7", img:"/MainProductDetailsPageimg/SevenProductDetailImg7.webp"},
                                {id:"8", img:"/MainProductDetailsPageimg/SevenProductDetailImg8.webp"},
                                {id:"9", img:"/MainProductDetailsPageimg/SevenProductDetailImg9.webp"},
                               ],

                                8:[
                                {id:"1",
                                 img:"/MainProductDetailsPageimg/EightProductDetailImg1.avif",
                                 maintitle:"Mojave Upholstered Queen Bed with 4 Premium Mattress",
                                 mainPrice:"₹1,199/mo",
                                 mainOffer:"₹1,559/mo",
                                 maindiscount:"23% OFF",
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductDetailsPageimg/EightProductDetailImg2.webp"},
                                {id:"3", img:"/MainProductDetailsPageimg/EightProductDetailImg3.webp"},
                                {id:"4", img:"/MainProductDetailsPageimg/EightProductDetailImg4.webp"},
                                {id:"5", img:"/MainProductDetailsPageimg/EightProductDetailImg5.webp"},
                                {id:"6", img:"/MainProductDetailsPageimg/EightProductDetailImg6.webp"},
                                {id:"7", img:"/MainProductDetailsPageimg/EightProductDetailImg7.webp"},
                                {id:"8", img:"/MainProductDetailsPageimg/EightProductDetailImg8.webp"},
                                {id:"9", img:"/MainProductDetailsPageimg/EightProductDetailImg9.webp"},
                                {id:"10", img:"/MainProductDetailsPageimg/EightProductDetailImg10.webp"},
                               ],

                                9:[
                                {id:"1",
                                 img:"/MainProductDetailsPageimg/NineProductDetailImg1.avif",
                                 maintitle:"Hugo Upholstered Box Storage Compact Double Bed with Premium Mattress",
                                 mainPrice:"₹1,189/mo",
                                 mainOffer:"₹1,367/mo",
                                 maindiscount:"13% OFF",
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductDetailsPageimg/NineProductDetailImg2.webp"},
                                {id:"3", img:"/MainProductDetailsPageimg/NineProductDetailImg3.webp"},
                                {id:"4", img:"/MainProductDetailsPageimg/NineProductDetailImg4.webp"},
                                {id:"5", img:"/MainProductDetailsPageimg/NineProductDetailImg5.webp"},
                                {id:"6", img:"/MainProductDetailsPageimg/NineProductDetailImg6.webp"},
                                {id:"7", img:"/MainProductDetailsPageimg/NineProductDetailImg7.webp"},
                                {id:"8", img:"/MainProductDetailsPageimg/NineProductDetailImg8.webp"},
                                {id:"9", img:"/MainProductDetailsPageimg/NineProductDetailImg9.webp"},
                                {id:"10",img:"/MainProductDetailsPageimg/NineProductDetailImg10.webp"},
                                {id:"11",img:"/MainProductDetailsPageimg/NineProductDetailImg11.webp"},
                                {id:"12",img:"/MainProductDetailsPageimg/NineProductDetailImg12.webp"},
                                {id:"13",img:"/MainProductDetailsPageimg/NineProductDetailImg13.webp"},
                                {id:"14",img:"/MainProductDetailsPageimg/NineProductDetailImg14.webp"},
                                {id:"15",img:"/MainProductDetailsPageimg/NineProductDetailImg15.webp"},
                                {id:"16",img:"/MainProductDetailsPageimg/NineProductDetailImg16.webp"},
                               ],

                                10:[
                                {id:"1",
                                 img:"/MainProductDetailsPageimg/TenProductDetailImg1.avif",
                                 maintitle:"Aara Hydraulic Queen Storage Bed with Eclectic Velvet 3 Seater Sofa in Sapphire Blue Color",
                                 mainPrice:"₹4,819/mo",
                                 mainOffer:"₹6,265/mo",
                                 maindiscount:"23% OFF",
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductDetailsPageimg/TenProductDetailImg2.webp"},
                                {id:"3", img:"/MainProductDetailsPageimg/TenProductDetailImg3.webp"},
                                {id:"4", img:"/MainProductDetailsPageimg/TenProductDetailImg4.webp"},
                                {id:"5", img:"/MainProductDetailsPageimg/TenProductDetailImg5.webp"},
                                {id:"6", img:"/MainProductDetailsPageimg/TenProductDetailImg6.webp"},
                                {id:"7", img:"/MainProductDetailsPageimg/TenProductDetailImg7.webp"},
                                {id:"8", img:"/MainProductDetailsPageimg/TenProductDetailImg8.webp"},
                                {id:"9", img:"/MainProductDetailsPageimg/TenProductDetailImg9.webp"},
                               ],

                                11:[
                                {id:"1",
                                 img:"/MainProductDetailsPageimg/ElevenProductDetailImg1.avif",
                                 maintitle:"Dune Box Storage Bed (Queen), Mattress & Lana Wardrobe",
                                 mainPrice:"₹1,849/mo",
                                 mainOffer:"₹2,404/mo",
                                 maindiscount:"23% OFF",
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductDetailsPageimg/ElevenProductDetailImg2.webp"},
                                {id:"3", img:"/MainProductDetailsPageimg/ElevenProductDetailImg3.webp"},
                                {id:"4", img:"/MainProductDetailsPageimg/ElevenProductDetailImg4.webp"},
                                {id:"5", img:"/MainProductDetailsPageimg/ElevenProductDetailImg5.webp"},
                                {id:"6", img:"/MainProductDetailsPageimg/ElevenProductDetailImg6.webp"},
                                
                               ],

                                OFS1:[
                                {id:"1",
                                 img:"/MainProductDetailsPageimg/twelveProductDetailImg1.avif",
                                 maintitle:"Bordo Solid Wood Queen Bed with 6 Premium Mattress",
                                 mainPrice:"₹1,419/mo",
                                 OutOfStock:"OUT OF STOCK",
                                },


                                {id:"2", img:"/MainProductDetailsPageimg/twelveProductDetailImg2.webp"},
                                {id:"3", img:"/MainProductDetailsPageimg/twelveProductDetailImg3.webp"},
                                {id:"4", img:"/MainProductDetailsPageimg/twelveProductDetailImg4.webp"},
                                {id:"5", img:"/MainProductDetailsPageimg/twelveProductDetailImg5.webp"},
                                {id:"6", img:"/MainProductDetailsPageimg/twelveProductDetailImg6.webp"},
                                {id:"7", img:"/MainProductDetailsPageimg/twelveProductDetailImg7.webp"},
                                {id:"8", img:"/MainProductDetailsPageimg/twelveProductDetailImg8.webp"},
                                {id:"9", img:"/MainProductDetailsPageimg/twelveProductDetailImg9.webp"},
                                {id:"10", img:"/MainProductDetailsPageimg/twelveProductDetailImg10.webp"},
                               ],

                                OFS2:[
                                {id:"1",
                                 img:"/MainProductDetailsPageimg/thirtheenProductDetailImg1.avif",
                                 maintitle:"Bordo Solid Wood Queen Bed with 4 Premium Mattress",
                                 mainPrice:"₹929/mo",
                                 OutOfStock:"OUT OF STOCK",
                                },


                                {id:"2", img:"/MainProductDetailsPageimg/thirtheenProductDetailImg2.webp"},
                                {id:"3", img:"/MainProductDetailsPageimg/thirtheenProductDetailImg3.webp"},
                                {id:"4", img:"/MainProductDetailsPageimg/thirtheenProductDetailImg4.webp"},
                                {id:"5", img:"/MainProductDetailsPageimg/thirtheenProductDetailImg5.webp"},
                                {id:"6", img:"/MainProductDetailsPageimg/thirtheenProductDetailImg6.webp"},
                                {id:"7", img:"/MainProductDetailsPageimg/thirtheenProductDetailImg7.webp"},
                               ],

                                OFS3:[
                                {id:"1",
                                 img:"/MainProductDetailsPageimg/FourteenProductDetailImg1.avif",
                                 maintitle:"Mojave Upholstered Queen Box Storage Bed in Moroccan Blue",
                                 mainPrice:"₹1,299/mo",               
                                 OutOfStock:"OUT OF STOCK",
                                },


                                {id:"2", img:"/MainProductDetailsPageimg/FourteenProductDetailImg2.webp"},
                                {id:"3", img:"/MainProductDetailsPageimg/FourteenProductDetailImg3.webp"},
                                {id:"4", img:"/MainProductDetailsPageimg/FourteenProductDetailImg4.webp"},
                                {id:"5", img:"/MainProductDetailsPageimg/FourteenProductDetailImg5.webp"},
                                {id:"6", img:"/MainProductDetailsPageimg/FourteenProductDetailImg6.webp"},
                                {id:"7", img:"/MainProductDetailsPageimg/FourteenProductDetailImg7.webp"},
                                {id:"8", img:"/MainProductDetailsPageimg/FourteenProductDetailImg8.webp"},
                                {id:"9", img:"/MainProductDetailsPageimg/FourteenProductDetailImg9.webp"},
                                {id:"10",img:"/MainProductDetailsPageimg/FourteenProductDetailImg10.webp"},
                                {id:"11",img:"/MainProductDetailsPageimg/FourteenProductDetailImg11.webp"},
                                {id:"12",img:"/MainProductDetailsPageimg/FourteenProductDetailImg12.webp"},
                                {id:"13",img:"/MainProductDetailsPageimg/FourteenProductDetailImg13.webp"},
                               ],

                                OFS4:[
                                {id:"1",
                                 img:"/MainProductDetailsPageimg/FifteenProductDetailImg1.avif",
                                 maintitle:"Hugo Bedside Table",
                                 mainPrice:"₹239/mo", 
                                 OutOfStock:"OUT OF STOCK",
                                },


                                {id:"2", img:"/MainProductDetailsPageimg/FifteenProductDetailImg2.webp"},
                                {id:"3", img:"/MainProductDetailsPageimg/FifteenProductDetailImg3.webp"},
                                {id:"4", img:"/MainProductDetailsPageimg/FifteenProductDetailImg4.webp"},
                                {id:"5", img:"/MainProductDetailsPageimg/FifteenProductDetailImg5.webp"},
                                {id:"6", img:"/MainProductDetailsPageimg/FifteenProductDetailImg6.webp"},
                                {id:"7", img:"/MainProductDetailsPageimg/FifteenProductDetailImg7.webp"},
                                {id:"8", img:"/MainProductDetailsPageimg/FifteenProductDetailImg8.webp"},
                                {id:"9", img:"/MainProductDetailsPageimg/FifteenProductDetailImg9.webp"},
                                {id:"10",img:"/MainProductDetailsPageimg/FifteenProductDetailImg10.webp"},
                                {id:"11",img:"/MainProductDetailsPageimg/FifteenProductDetailImg11.webp"},
                                {id:"12",img:"/MainProductDetailsPageimg/FifteenProductDetailImg12.webp"},
                               ],
                           }

        // Guard: agar route se invalid/undefined id aaye to crash mat hone do
        if (!MainProductImg[id]) {
            return <p>Product not found</p>;
        }

        const product = MainProductImg[id][0];

        // Right card hamesha mattress (id "2") wala hi rahega, chahe user kisi bhi product ko open kare
        const mattressProduct = MainProductImg["2"] ? MainProductImg["2"][0] : null;

        // Jab bhi id change ho (ya component mount ho), main image ko
        // product ki default image se set kar do — pehle ye khaali (blank) rehta tha
        useEffect(() => {
            setChangeMainIMage(product.img);
        }, [id]);



    return (


        <>

        <div className="MainContainerProductPage">
            <div className="LeftSideProductPage">
                <div className="smallPicsContainer">
                    {MainProductImg[id].map((item) =>(
                    <img key={item.id} src={item.img} alt="#" onClick={()=> setChangeMainIMage(item.img)} />
                    ))}
                </div>
                <div className="BigPicsContainer">
                <img src={ChangeMainIMage} alt="#" />
                </div>
            </div>


            <div className="RightSideProductPage">

                 <div className="RightProductPageData">
                    <div className="MainTitleArea">
                    <h1>{product.maintitle}</h1>
                    <h5>{product.hurry}</h5>
                    </div>

                    <div className="MainPriceSection">
                        <h3><b>{product.mainPrice}</b></h3>
                        {product.OutOfStock ? (
                            <h4>{product.OutOfStock}</h4>
                        ):(
                        <>
                        <h3 id="MainOffer">{product.mainOffer}</h3>
                        <h3 id="MainDiscount">{product.maindiscount}</h3>
                        <h2>{product.mainCoupen}</h2>
                        </>
                        )}
                    </div>
                </div>

                <div className="ExtraData">
               <p>Zero deposit | Free delivery</p>
               <button id="AddtoCartbtn1">Add to Cart</button>
               <button id="AddtoWishCartbtn2">Add to wishlist</button>
               </div>


               <div className="OtherDataofRightSide">
                <h2>Other Variant:</h2>
                <div id="OtherVariant">
                    <p className="ClickedDataofRightSide">Queen</p>
                    <p>King</p>
                </div>

                 <h2>Storage/NonStorage:</h2>
                 <div id="Storage_NonStorage">
                    <p className="ClickedDataofRightSide">NonStorage</p>
                    <p>Storage</p>
                </div>


                <h2>Add on:</h2>
                <div id="Addon">
                    <p className="ClickedDataofRightSide">OnlyCot</p>
                    <p>6"KingMattress</p>
                    <p>6"QueenMattress</p>
                </div>
               </div>



             {/* This is Tip component  */}


             <div className="TipCompo">
                <p>As good as new</p>
                <RiQuestionLine className="TipIcon"
                onMouseEnter={()=> setShowTip(true)}
                 onMouseLeave={()=> setShowTip(false)} />
             </div>


             {ShowTip && (
                 <div className="TipsiconData">
                <p>Our state of the art refurbishment centers restore
                every piece of furniture to its original condition before
                it is shipped to you.</p>
             </div>
             )}



         <div className="CoupenSection">
            <div className="OfferandCoupens">
                <h2>Offers & Coupons</h2>
                <h4>View all</h4>
            </div>

            <div className="CoupenTemplates">

            <div className="Couponbox">
                <h3>20% off upto ₹1100</h3>
                <p>Apply this coupon to get
                20% off upto ₹1100 on your first
                month's rent. Great reason to start
                renting today!</p>
                <div className="MaxSaving">
                    <PiBookmarksSimpleThin  className="MaxSavingIcon"/>
                    <h4>MAXSAVING</h4>
                </div>
                <h5>T&C Apply</h5>
            </div>

            <div className="Couponbox">
                <h3>20% off upto ₹1100</h3>
                <p>Apply this coupon to get
                20% off upto ₹1100 on your first
                month's rent. Great reason to start
                renting today!</p>
                <div className="MaxSaving">
                    <PiBookmarksSimpleThin  className="MaxSavingIcon"/>
                    <h4>MAXSAVING</h4>
                </div>
                <h5>T&C Apply</h5>
            </div>
            </div>
         </div>


        <div className="AssemblyDetails">
            <h3>Delivery & Assembly Details</h3>

            <div className="ProductPinCodeSection">
                <fieldset className="PincodeBox">
                    <legend>Pincode</legend>
                    <input type="text" placeholder="Enter Pincode "/>
                    <button>Change</button>
                </fieldset>
            </div>
            <div className="DeliveryTiming">
            <PiTruckFill className="DeliverTruckicon"/>
            <p>Delivery and Assemble by 21 Jul - 23 Jul</p>
            </div>
        </div>



     <div className="SeamlessGuaranteed">
        <h4>Seamless Delivery Guaranteed</h4>

        <div className="timeline">
             <span className="dot"></span>
             <span className="line"></span>
             <span className="dot"></span>
             <span className="line"></span>
             <span className="dot"></span>
        </div>

        <div className="SeamlessGuaranteedData">


            <div className="AllStepshere">
            <div className="Stepone">
                <p><b>Step: 1:</b>To ensure a seamless process, kindly
                 complete your KYC verification after placing
                 your order</p>

                 <div className="Steponebtn">
                  <p>Know More</p>
                 <MdArrowForwardIos className="Steponeicon" /> 
                 </div>
            </div>

            <div className="Steptwo">
                <p><b>Step: 2:</b>Select your delivery date as per your
                 convenience</p>
                 <div className="Steptwobtn">
                  <p>Know More</p>
                 <MdArrowForwardIos className="Steptwoicon" />
                 </div>
            </div>

             <div className="Stepthree">
                <p><b>Step: 3:</b>Your furniture will be delivered and
                assembled all set to transform your space.</p>
            </div>
            </div>

        </div>
      </div>



    <div className="MainProductAccordian">

    <div className="AllAccordinaBox">

        <div className="HeadAccordianBox" onClick={()=> setOpenAccordian(!OpenAccordian)}>
            <img src={product.img} alt="#" />
            <h1>{product.maintitle}</h1>

            {OpenAccordian ? (
                <MdOutlineKeyboardArrowUp className="HeadAccordianBoxicon" />
            ) : (
                <RiArrowDownSLine className="HeadAccordianBoxicon" />
            )}

        </div>
       {OpenAccordian && (
        <div className="DownAccordian">
        <div className="HeadAccordianBoxtwo" onClick={()=> setOpenAccordiantwo(!OpenAccordiantwo)}>
            <h1>Product Specifications</h1>
            {OpenAccordiantwo ? (
                <MdOutlineKeyboardArrowUp className="HeadAccordianBoxtwoicon" />
            ) : (
                <RiArrowDownSLine className="HeadAccordianBoxtwoicon" />
            )}
        </div>

        {OpenAccordiantwo && (
            <div className="HeadAccordiantwoData">

                <div className="Dimension">
                    <ul>
                        <h2>Dimensions</h2>
                        <li>Side Beam Height: 35 cm</li>
                        <li>Recommended Mattress Size: 152.40 cm x 198.12 cm x 15.24 cm</li>
                        <li>Height: 120 cm</li>
                        <li>Depth: 207 cm</li>
                        <li>Width: 171 cm</li>
                    </ul>
                </div>

                <div className="GeneralSpecifications">
                    <ul>
                        <h2>General Specifications</h2>
                        <li>Primary Material: Solid Wood</li>
                        <li>Bed Type: Queen Bed</li>
                        <li>Finish: Walnut Finish</li>
                        <li>Upholstery Material: Fabric</li>
                        <li>Upholstery Color: Peacock Green</li>
                    </ul>
                </div>

                <div className="HeadAccordiantwoimg">
                    <img src="/HeadAccordiantwodataimg.webp" alt="" />
                </div>

            </div>
            )}

        <div className="HeadAccordianBoxthree" onClick={()=> setOpenAccordianthree(!OpenAccordianthree)}>
            <h1>About this Product</h1>
        {OpenAccordianthree ? (
            <MdOutlineKeyboardArrowUp className="HeadAccordianBoxthreeicon" />
        ) : (
            <RiArrowDownSLine className="HeadAccordianBoxthreeicon" />
        )}

        </div>

      {OpenAccordianthree && (
        <div className="HeadAccordianBoxthreeData">
            <p>Classic elegance meets refined comfort.
            Aara’s quilted velvet headboard and walnut
            frame bring timeless style, offering a plush and
            luxurious centerpiece for your bedroom without
            compromising on design. The bed features a soft,
            quilted headboard for relaxing comfort, emerald
            green velvet upholstery for a luxurious look, and
            a walnut-finish wooden frame with turned legs.
            Its timeless design seamlessly blends classic
            charm with modern style, creating a warm and
            sophisticated bedroom statement.</p>
        </div>
)}

        <div className="HeadAccordianBoxfour" onClick={()=> setOpenAccordianfourth(!OpenAccordianfourth)}>
            <h1>Care Instructions</h1>
            {OpenAccordianfourth ? (
                <MdOutlineKeyboardArrowUp className="HeadAccordianBoxfouricon" />
            ) : (
                <RiArrowDownSLine className="HeadAccordianBoxfouricon" />
            )}
        </div>


       {OpenAccordianfourth && (
        <div className="HeadAccordianBoxfourData">

            <h4>Cleaning Methods</h4>

            <p>Use a soft, lint-free microfiber cloth.
             Avoid using rough sponges or dry cloths
             that can trap grit and scratch the finish</p>

             <p>If a spill occurs on fabric or wood,
             blot it immediately with a clean, dry cloth.
             Rubbing pushes the liquid deeper into the fibers
             or wood grain.</p>

             <h4>Prevention Methods</h4>

             <p>Avoid placing furniture in direct,
             prolonged sunlight. UV rays can fade fabrics
             and cause wood finishes to crack or discolor.</p>

             <p>Always use coasters for drinks and mats for hot items.</p>
        </div>
        )}

        <div className="HeadAccordianBoxfifth" onClick={()=> setOpenAccordianfifth(!OpenAccordianfifth)}>
            <h1>Quality Performace</h1>
            {OpenAccordianfifth ? (
                <MdOutlineKeyboardArrowUp className="HeadAccordianBoxfifthicon" />
            ) : (
                <RiArrowDownSLine className="HeadAccordianBoxfifthicon" />
            )}

        </div>

         {OpenAccordianfifth && (
        <div className="HeadAccordianBoxfifthData">

            <h4>High Quality Materials</h4>

            <p>We only use the best materials to build our furniture.
            From the solid frames of our wardrobes to the soft cushions
            on our sofas and loungers, everything is chosen for its
            beauty and strength.</p>

             <h4>Built to Last</h4>

             <p>Our furniture is made to handle real life. We use high-quality
             hardware and heavy-duty joints to make sure every piece is rock-solid.
             We don’t cut corners when it comes to support. We use extra-thick framing
             and reinforced bases to ensure our furniture can handle heavy weight without
             any trouble.</p>

             <h4>Designed for Safety</h4>

             <p>Your safety is a core part of our design process.
             We ensure every piece of furniture undergoes a rigorous
             finishing process to eliminate snags, burrs, or rough surfaces.</p>

             <h4>Easy to Move</h4>
             <p>Our furniture is designed to be easily taken apart and put back together.
             It’s simple to assemble with basic tools, making it the perfect companion for
             whenever you’re ready to move to a new home.</p>
        </div>
        )}





        </div>
        )}


    </div>
 </div>









   <div className="FurnitureWaleCare">
        <div className="FurniturewaleCareLeftSide">
       <IoHeart className="FurniturewaleCaricon"/>
       </div>
   <div className="FurniturewaleCareRightSide">
       <h2>Furniturewale Care</h2>
       <p>Avail a damage waiver up to Rs 70,000 on your
       furniture and appliances <b> Insure your furniture 
       @ ₹162.37/mo</b></p>
       <h4>Learn more</h4>
    </div>
   </div>








   <div className="BuytwoSection">
    <div className="Buytwoinside">
        <h2>Frequently bought together</h2>
        <p>Get all the products together at a cheaper price</p>


        <div className="DoubleCard">

          <div className="LeftCard">
            <img src={product.img} alt="#" />
            <h2>{product.maintitle}</h2>
            <div className="LeftCardprices">
            <h4>{product.mainPrice}</h4>
            <h5>{product.mainOffer}</h5> 
           </div>
          </div>


           {/* <div className="RightCard">
            <img src={product.img} alt="#" />
            <h2>{product.maintitle}</h2>
            <div className="RightCardprices">
            <h4>{product.mainPrice}</h4>
            <h5>{product.mainOffer}</h5> 
           </div>
          </div> */}

          {/* Right card: hamesha mattress (id "2") fix rahega */}
            {mattressProduct && (
                <div className="RightCard">
                    <img src={mattressProduct.img} alt={mattressProduct.maintitle} />
                    <h2>{mattressProduct.maintitle}</h2>
                    <div className="RightCardprices">
                        <h4>{mattressProduct.mainPrice}</h4>
                        <h5>{mattressProduct.mainOffer}</h5> 
                    </div>
                </div>
            )}



        </div>

        <div className="AddAllitem">
            <button>Add All item to cart</button>
        </div>




    </div>
   </div>



   

     <div className="LastAccordians">

            <div className="Cancellation" onClick={()=> setLastAccordianOpen(!LastAccordianOpen)}>
                <div className="CancellationHeading">
                <h2>Cancellation & Return</h2>

                {LastAccordianOpen ? (
                <MdOutlineKeyboardArrowUp className="CancellationIcon"/> ):( <RiArrowDownSLine className="CancellationIcon"  /> 
            )}
                </div>
 
               {LastAccordianOpen && (
                <div className="CancellationData">
                    <h3>Cancelling an order or a part of an order:</h3>
                    <p>We allow you to cancel your order until it reaches
                    your door-step, for all our rental products. Please check
                    your products thoroughly before accepting delivery.</p>

                    <h3>Returning an item: </h3>
                    <p>You can return your products before your subscription ends.
                    In such a scenario, you will be eligible for a refund if you 
                    have opted for a Flexi Cancellation service. At the end of 
                    your tenure, your subscription will be auto-renewed by default
                    if you don't take any action.</p>
                </div>
                )}
            </div>

            <div className="ImportTerms" onClick={()=> setLastAccordiantwoOpen(!LastAccordiantwoOpen)}>
                <div className="ImportTermsHeading"> 
                <h2>Important Terms</h2>  
                  {LastAccordiantwoOpen ? (
                <MdOutlineKeyboardArrowUp className="ImportTermsIcon"/> ):( <RiArrowDownSLine className="ImportTermsIcon"  /> 
            )}
                </div>
 
               {LastAccordiantwoOpen && (
                <div className="ImportTermsData">
                    <ul>
                        <li>Furlenco shall provide shipping and delivery of your
                        order to the registered address if it falls in the areas
                        serviceable by the company. Unless otherwise notified,
                        you will be charged a small fee for this service based on
                        the location of your registered address.</li>

                        <li>We endeavour to deliver all products within the timeline
                        promised at the time of purchase. We will keep you informed
                        via call, SMS, and e-mail about the progress of your order.
                        However, we acknowledge that sometimes delivery may get delayed
                        and we promise to keep you informed in such a case. </li>

                        <li>Once the products ordered by you reach a nearby delivery centre,
                        our delivery representatives will make 2 two delivery attempts,
                        beyond which if you do not take the delivery of the product,
                        your order is subject to cancellation</li>

                        <li>The images displayed on the platform may slightly vary from the
                        actual product. However, this will not affect the quality and performance
                        the product. We endeavour to deliver only the best products to you,
                        which are manufactured professionally and put through rigorous quality
                        checks.</li>
                    </ul>
                </div>
                )}
            </div>


            <div className="FrequentlyAskedQuestion">
                <div className="FAQHeading" onClick={()=> setLastAccordianthreeOpen(!LastAccordianthreeOpen)}> 
                <h2>Frequently Asked Question</h2>  
                  {LastAccordianthreeOpen ? (
                <MdOutlineKeyboardArrowUp className="FAQIcon"/> ):( <RiArrowDownSLine className="FAQIcon"  /> 
            )}
                </div>
 
               {LastAccordianthreeOpen && (
                <div className="FAQData">

                    <h4>Is there a minimum rental tenure? What happens if I stop
                    my subscription before completing the minimum tenure?</h4>
                    <p>Yes, the minimum rental tenure is for 3 months.</p>

                    <h4>Is there a cancellation fee if I place the order and cancel
                     before the products are delivered?</h4>
                    <p>If you cancel the order before the products are delivered,
                    you will not be charged any cancellation fee and your
                    entire booking amount will be refunded.</p>

                    <h4>Do I have to submit any documents for my subscription?</h4>
                    <p>Yes, you will need to provide your identity and address proof.</p>

                    <h4>I am shifting to a new city. Can I take my Furlenco furniture?</h4>
                    <p>No, you will need to terminate your subscription and rent again from 
                    your new address.</p>

                    <h4>Is there a booking amount?</h4>
                    <p>No, there is no booking amount. You can just pick a
                    Rentastic Saver plan and continue with your subscription.</p> 

                    <h4>Can I exchange the furniture if I don't like it?</h4>
                    <p>We recommend you to be present at the time of delivery
                    and check the products delivered to you. If you do not like
                    the products at the time of delivery, you can return them 
                    immediately. Please note: Once delivery is completed, your
                    rental tenure will begin immediately so all cancellations will
                    be non-refundable while your tenure is ongoing. However, you can
                    choose to swap your products after you complete your rental tenure.</p> 

                    <h4>What is the condition of the products which are delivered to me?</h4>
                    <p>These are not brand-new products, however they are restored to their
                    original condition and are delivered to you as good as new.</p>

                    <h4>How can I terminate my subscription?</h4>
                    <p>It's super easy! You can terminate your subscription from
                    your Furlenco mobile app under the account dashboard. Place a
                    request with at least 7 days' notice to cancel the subscription
                    or to return some of the products in your subscription.</p> 


                </div>
                )}
            </div>




     </div>




 


     </div>



 </div>



        </>
    )
}


    export default MainProductDetail;