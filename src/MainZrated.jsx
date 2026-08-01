import { IoBedOutline } from "react-icons/io5";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { RiSofaLine } from "react-icons/ri";
import { LuPercent } from "react-icons/lu";
import { RiFridgeLine } from "react-icons/ri";
import { RiArchiveDrawerLine } from "react-icons/ri";
import { TbMoodKid } from "react-icons/tb";
import { RiBookShelfLine } from "react-icons/ri";
import { MdDining } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { IoMdFitness } from "react-icons/io";
import { FaMattressPillow } from "react-icons/fa6";
import { GrFireball } from "react-icons/gr";

import { useState, useEffect } from "react";

import { MdArrowForwardIos } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

import { Link } from "react-router-dom";





const LivingRoomImages = [

                              {id:"Zrated1", img:"ZRatedImg/MainZratedimg1.avif", title:"LIT Compact Double Bed with Premium 4 Mattress #Zrated1", price:"₹1,379/mo", offer:"₹1,586/mo", off:"13%OFF", delivertime:"Delivery by 10 Jul-11 Jul"},
                              {id:"Zrated2", img:"ZRatedImg/MainZratedimg2.avif", title:"NO CAP Workstation #Zrated", price:"₹1,379/mo", offer:"₹1,586/mo", off:"13%OFF", delivertime:"Delivery by 10 Jul-11 Jul"},
                              {id:"Zrated3", img:"ZRatedImg/MainZratedimg3.avif", title:"LIT Engineered wood Compact Double Bed #Zrated2", price:"₹1,379/mo", offer:"₹1,586/mo", off:"13%OFF", delivertime:"Delivery by 10 Jul-11 Jul"},
                              {id:"Zrated4", img:"ZRatedImg/MainZratedimg4.avif", title:"Hugo Upholstered Box Storage Compact Double Bed with Premium Mattress #Zrated", price:"₹1,379/mo", offer:"₹1,586/mo", off:"13%OFF", delivertime:"Delivery by 10 Jul-11 Jul"},
                              {id:"Zrated5", img:"ZRatedImg/MainZratedimg5.avif", title:"Hugo Upholstered Box Storage Compact Double Bed, Mattress & Hugo 3 Door Wardrobe #Zrated", price:"₹1,379/mo", offer:"₹1,586/mo", off:"13%OFF", delivertime:"Delivery by 10 Jul-11 Jul"},
                              {id:"Zrated6", img:"ZRatedImg/MainZratedimg6.webp", title:"LIT Compact Double Bed, Mattress & Hugo 2 Door Wardrobe", price:"₹1,379/mo", offer:"₹1,586/mo", off:"13%OFF", delivertime:"Delivery by 10 Jul-11 Jul"},
                              {id:"Zrated7", img:"ZRatedImg/MainZratedimg7.avif", title:"LIT Compact Double Bed, Mattress & Dank Workstation", price:"₹1,379/mo", offer:"₹1,586/mo", off:"13%OFF", delivertime:"Delivery by 10 Jul-11 Jul"},
                              {id:"Zrated9", img:"ZRatedImg/MainZratedimg9.avif", title:"FOMO Engineered Wood Nested Center Table with 4 Pouffs in Mushroom Beige Finish", price:"₹1,379/mo", offer:"₹1,586/mo", off:"13%OFF", delivertime:"Delivery by 10 Jul-11 Jul"},
                              {id:"Zrated10", img:"ZRatedImg/MainZratedimg10.avif", title:"Slay Engineered Wood Center Table", price:"₹1,379/mo", offer:"₹1,586/mo", off:"13%OFF", delivertime:"Delivery by 10 Jul-11 Jul"},
                              {id:"Zrated11", img:"ZRatedImg/MainZratedimg11.avif", title:"Hugo Engineered Wood 1 door wardrobe without mirror #Zrated", price:"₹1,379/mo", offer:"₹1,586/mo", off:"13%OFF", delivertime:"Delivery by 10 Jul-11 Jul"},
                              {id:"Zrated12", img:"ZRatedImg/OutofStockMainZratedimg1.avif", title:"Mattress Premium Foam Double Size - (72 x 48 x 4 inches)", price:"₹949/mo", offer:"₹1,091/mo", off:"13% OFF", StockOut:"Out Of Stock", delivertime:"Delivery by 10 Jul-11 Jul"},
                              {id:"Zrated13", img:"ZRatedImg/OutofStockMainZratedimg2.avif", title:"LIT AF Compact Double Bed with 4 Inch Premium Mattress", price:"₹949/mo", offer:"₹1,091/mo", off:"13% OFF", StockOut:"Out Of Stock", delivertime:"Delivery by 10 Jul-11 Jul"},
                              {id:"Zrated14", img:"ZRatedImg/OutofStockMainZratedimg3.avif", title:"Rizz Diwan cum Floor Pads in Honey Mustered Color #Zrated", price:"₹949/mo", offer:"₹1,091/mo", off:"13% OFF", StockOut:"Out Of Stock", delivertime:"Delivery by 10 Jul-11 Jul"},
                              {id:"Zrated15", img:"ZRatedImg/OutofStockMainZratedimg4.avif", title:"G.O.A.T Sofa cum Bed and FOMO Nested Center Table Combo", price:"₹949/mo", offer:"₹1,091/mo", off:"13% OFF", StockOut:"Out Of Stock", delivertime:"Delivery by 10 Jul-11 Jul"},
                              {id:"Zrated16", img:"ZRatedImg/OutofStockMainZratedimg5.avif", title:"Bounce Fabric Set of 2 Floor Pads in Chocolava Brown Color", price:"₹949/mo", offer:"₹1,091/mo", off:"13% OFF", StockOut:"Out Of Stock", delivertime:"Delivery by 10 Jul-11 Jul"},
                              ]
 

function MainZrated() {

    const [filtersOpen, setFiltersOpen] = useState(true);    
    const [sortByOpen, setSortByOpen] = useState(false); 
    const [PriceRangeOpen, setPriceRangeOpen] = useState(false); 
    const [BadgeOpen, setBadgeOpen] = useState(false); 
    const [OpenColor, setOpenColor] = useState(false); 
    const [OpenSize, setOpenSize] = useState(false); 
    const [OpenBedType, setOpenBedType] = useState(false); 
    const [OpenPrimary, setOpenPrimary] = useState(false); 
    // const [OpenAppliance, setOpenAppliance] = useState(false); 
    const [OpenAppliance, setOpenAppliance] = useState(false); 
    const [OpenThickness, setOpenThickness] = useState(false); 
    const [OpenUpholstered, setOpenUpholstered] = useState(false); 
    const [OpenFinish, setOpenFinish] = useState(false); 
    const [OpenAgeRange, setOpenAgeRange] = useState(false);  

    // const [indexes, setIndexes] = useState(0);
    const [CurrentImg, setCurrentImg] = useState(0);

// useEffect(() => {
//   const timer = setInterval(() => {
//     setIndexes((prev) => (prev + 1) % 3);
//   }, 4000);

//   return () => clearInterval(timer);
// }, []);

const handleHover = () => {
    setCurrentImg((prev) => (prev + 1) % 3);
}
    
    
    // const LivingRoomImages = [
    //                           {img: [
    //                             "LivingRoomimg1.avif",
    //                             "LivingRoomimg2.avif",
    //                             "LivingRoomimg3.avif",

    //                         ], title:"Two Seater Recliner - Leatherette", price:"₹1,379/mo", offer:"₹1,586/mo", off:"13%OFF", delivertime:"Delivery by 10 Jul-11 Jul"},

    

                             


    return (

 
        <> 

        <div className="MainboxContainer"> 

            <div className="TopLivingAreas">

                <div className="LittleCategoryNav">

                    <div className="LilBedroom">
                        <IoBedOutline />
                        <h3>Bedroom</h3>
                    </div>

                    <div className="LilBHKCombos">
                        <BiSolidBuildingHouse />
                        <h3>BHK Combos</h3>
                    </div>

                    <div className="LilLivingRoom">
                        <RiSofaLine />
                        <h3>Living Room</h3>
                    </div>

                    <div className="LilStealDeals">
                        <LuPercent />
                        <h3>Steal Deals</h3>
                    </div>

                    <div className="LilAppliances">
                        <RiFridgeLine />
                        <h3>Appliances</h3>
                    </div>

                    <div className="LilStorage">
                        <RiArchiveDrawerLine />
                        <h3>Storage</h3>
                    </div>

                    <div className="LilKids">
                        <TbMoodKid />
                        <h3>Kids</h3>
                    </div>

                    <div className="LilStudy">
                        <RiBookShelfLine />
                        <h3>Study</h3>
                    </div>

                    <div className="LilDining">
                        <MdDining />
                        <h3>Dining</h3>
                    </div>

                    <div className="LilLuxury">
                        <CiStar />
                        <h3>Luxury</h3> 
                    </div>

                     <div className="LilFitness">
                        <IoMdFitness />
                        <h3>Fitness</h3> 
                    </div>

                     <div className="LilMattress">
                        <FaMattressPillow />
                        <h3>Mattress</h3> 
                    </div>

                    <div className="LilZRated">
                        <GrFireball />
                        <h3>Z Rated</h3>  
                    </div>
                </div>
                </div>

             <div className="TopSection">
                <img src="ZRatedImg/BigZratedimg.webp" alt="#" /> 
             </div>



             <div className="LilSection">
                {/* <div className="OuterFilterbox"> */}
             <div className="AllFilters">
                    <h1 onClick={()=> setFiltersOpen(!filtersOpen)}>Show Filters</h1> 
                   {filtersOpen ? (
                        <IoIosArrowDown className="FilterArrow" onClick={()=> setFiltersOpen(!filtersOpen)} />
                    ) : (
                        <MdArrowForwardIos className="FilterArrow" onClick={()=> setFiltersOpen(!filtersOpen)} />
                    )} 

                    <div className="JustTags">
                        <ul>
                            <li>Sofa</li>
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
                </div> 
                {/* </div> */}
             </div>



             <div className="LeftedSection">
                {filtersOpen && (
            <div className="LeftLivingArea">
            {/* <div className={`LeftLivingArea ${filtersOpen ? 'open' : 'closed'}`}>  */}
              <div className="LeftBar">
                <div className="SortBy">
                    <h2 onClick={()=> setSortByOpen(!sortByOpen)}>SORT BY</h2> 
                    {sortByOpen ? (  <IoIosArrowDown className="SortbyIcon"  onClick={()=> setSortByOpen(!sortByOpen)}/> ):( <MdArrowForwardIos className="SortbyIcon"  onClick={()=> setSortByOpen(!sortByOpen)}/>  )}
                  
                    {sortByOpen && (
                        <div className="sortoptions">
                    <div className="LowPric">
                    <input type="radio" name="sort" />
                    <h2>Price - Low to High</h2> 
                    </div>
                    <div className="HighPrice">
                    <input type="radio"  name="sort"/> 
                    <h2>Price - High to Low</h2> 
                    </div>
                    </div>
                    )}
                </div>
                

                <div className="PriceRange">
                    <div className="PriceRangeBox" onClick={()=> setPriceRangeOpen(!PriceRangeOpen)}>
                    <h2>PRICE RANGE</h2>
                        {PriceRangeOpen ? (  <IoIosArrowDown className="PriceRangeIcon" onClick={()=> setPriceRangeOpen(!PriceRangeOpen)} /> ):( <MdArrowForwardIos className="PriceRangeIcon" onClick={()=> setPriceRangeOpen(!PriceRangeOpen)}/>  )}
                    </div>

                    {PriceRangeOpen && (
                        <div className="AllPrices">
                    <div className="Under500">
                    <input type="checkbox" />
                    <h2>Under ₹500</h2>
                    </div>

                    <div className="Under1000">
                    <input type="checkbox" />
                    <h2>₹501-₹1000</h2> 
                    </div>

                    <div className="Under2000">
                    <input type="checkbox" />
                    <h2>₹1501-₹2000</h2>
                    </div>

                    <div className="Under2500">
                    <input type="checkbox" />
                    <h2>₹2001-₹2500</h2>
                    </div>

                    <div className="Over2500">
                    <input type="checkbox" />
                    <h2>Over ₹2500</h2>
                    </div>
                  </div>
                    )}
                    
                </div>

                <div className="Badge">
                    <div className="BadgeBox" onClick={()=> setBadgeOpen(!BadgeOpen)}>
                    <h2>BADGE</h2>
                        {BadgeOpen ? (  <IoIosArrowDown className="BadgeIcon" onClick={()=> setBadgeOpen(!BadgeOpen)} /> ):( <MdArrowForwardIos className="BadgeIcon" onClick={()=> setBadgeOpen(!BadgeOpen)}/>  )}
                    </div>

                    {BadgeOpen && (
                        <div className="AllPrices">

                    <div className="NewArrivals">
                    <input type="checkbox" />
                    <h2>New Arrivals</h2>
                    </div>

                    <div className="BestSeller">
                    <input type="checkbox" />
                    <h2>Best Seller</h2> 
                    </div>

                    <div className="ZRated">
                    <input type="checkbox" />
                    <h2>Z Rated</h2>
                    </div>

                    <div className="StealDeal">
                    <input type="checkbox" />
                    <h2>Steal Deal</h2>
                    </div>

                    <div className="LimitedStocks">
                    <input type="checkbox" />
                    <h2>Limited Stocks</h2>
                    </div>

                    <div className="Price-Drop">
                    <input type="checkbox" />
                    <h2>Price-Drop</h2>
                    </div>
                  </div>
                    )}
                    
                </div>

                <div className="Color">
                    <div className="ColorBox" onClick={()=> setOpenColor(!OpenColor)}>
                    <h2>COLOR</h2>
                        {OpenColor ? (  <IoIosArrowDown className="ColorIcon" onClick={()=> setOpenColor(!OpenColor)} /> ):( <MdArrowForwardIos className="ColorIcon" onClick={()=> setOpenColor(!OpenColor)}/>  )}
                    </div>

                    {OpenColor && (
                        <div className="AllPrices">
                    <div className="Purple">
                    <input type="checkbox" />
                    <h2>Purple</h2>
                    </div>

                    <div className="Orange">
                    <input type="checkbox" />
                    <h2>Orange</h2> 
                    </div>

                    <div className="Green">
                    <input type="checkbox" />
                    <h2>Green</h2>
                    </div>

                    <div className="Grey">
                    <input type="checkbox" />
                    <h2>Grey</h2>
                    </div>

                    <div className="Beige">
                    <input type="checkbox" />
                    <h2>Beige</h2>
                    </div>

                    <div className="Yellow"> 
                    <input type="checkbox" />
                    <h2>Yellow</h2> 
                    </div>

                    <div className="Blue">
                    <input type="checkbox" />
                    <h2>Blue</h2> 
                    </div>

                    <div className="Pink">
                    <input type="checkbox" />
                    <h2>Pink</h2>
                    </div>

                    <div className="Red">
                    <input type="checkbox" />
                    <h2>Red</h2>
                    </div>

                    <div className="Brown">
                    <input type="checkbox" />
                    <h2>Brown</h2>
                    </div>
                  </div>
                    )}
                    
                </div>

                <div className="Size">
                    <div className="SizeBox" onClick={()=> setOpenSize(!OpenSize)}>
                    <h2>SIZE</h2>
                        {OpenSize ? (  <IoIosArrowDown className="SizeIcon" onClick={()=> setOpenSize(!OpenSize)} /> ):( <MdArrowForwardIos className="SizeIcon" onClick={()=> setOpenSize(!OpenSize)}/>  )}
                    </div>

                    {OpenSize && (
                        <div className="AllPrices">
                    <div className="Single">
                    <input type="checkbox" />
                    <h2>Single</h2>
                    </div>

                    <div className="Queen">
                    <input type="checkbox" />
                    <h2>Queen</h2> 
                    </div>

                   
                  </div>
                    )}
                    
                </div>

                <div className="BedType">
                    <div className="BedTypeBox" onClick={()=> setOpenBedType(!OpenBedType)}>
                    <h2>BED TYPE</h2>
                        {OpenBedType ? (  <IoIosArrowDown className="BedTypeIcon" onClick={()=> setOpenBedType(!OpenBedType)} /> ):( <MdArrowForwardIos className="BedTypeIcon" onClick={()=> setOpenBedType(!OpenBedType)}/>  )}
                    </div>

                    {OpenBedType && (
                        <div className="AllPrices">
                    <div className="Kids">
                    <input type="checkbox" />  
                    <h2>Kids</h2>
                    </div>

                    <div className="NonStorage">
                    <input type="checkbox" />
                    <h2>NonStorage</h2>  
                    </div>

                    
                  </div>
                    )}
                    
                </div>

                <div className="Primary">
                    <div className="PrimaryBox" onClick={()=> setOpenPrimary(!OpenPrimary)}>
                    <h2>PRIMARY MATERIAL</h2>
                        {OpenPrimary ? (  <IoIosArrowDown className="PrimaryIcon" onClick={()=> setOpenPrimary(!OpenPrimary)} /> ):( <MdArrowForwardIos className="PrimaryIcon" onClick={()=> setOpenPrimary(!OpenPrimary)}/>  )}
                    </div>

                    {OpenPrimary && (
                        <div className="AllPrices">

                    <div className="Metal">
                    <input type="checkbox" />
                    <h2>Metal</h2>
                    </div>

                    <div className="Solidwood">
                    <input type="checkbox" />
                    <h2>Solidwood</h2> 
                    </div>

                    <div className="EngineerWood">
                    <input type="checkbox" />
                    <h2>EngineerWood</h2> 
                    </div>

                    
                  </div>
                    )}
                    
                </div>

                <div className="ApplianceType">
                    <div className="ApplianceTypeBox" onClick={()=> setOpenAppliance(!OpenAppliance)}>
                    <h2>APPLIANCE TYPE</h2>
                        {OpenAppliance ? (  <IoIosArrowDown className="ApplianceTypeIcon" onClick={()=> setOpenAppliance(!OpenAppliance)} /> ):( <MdArrowForwardIos className="ApplianceTypeIcon" onClick={()=> setOpenAppliance(!OpenAppliance)}/>  )}
                    </div>

                    {OpenAppliance && (
                        <div className="AllPrices">

                    <div className="SmartTV">
                    <input type="checkbox" />
                    <h2>SmartTV</h2>
                    </div>

                    <div className="FullyAutoWashingMachine">
                    <input type="checkbox" />
                    <h2>Fully Automatic Washing Machine</h2> 
                    </div>    
                  </div>
                    )}
                    
                </div>

                <div className="Thickness">
                    <div className="ThicknessBox" onClick={()=> setOpenThickness(!OpenThickness)}>
                    <h2>THICKNESS</h2>
                        {OpenThickness ? (  <IoIosArrowDown className="ThicknessIcon" onClick={()=> setOpenThickness(!OpenThickness)} /> ):( <MdArrowForwardIos className="ThicknessIcon" onClick={()=> setOpenThickness(!OpenThickness)}/>  )}
                    </div>

                    {OpenThickness && (
                        <div className="AllPrices">

                    <div className="SixInch">
                    <input type="checkbox" />
                    <h2>6 Inch</h2>
                    </div>

                  </div>
                    )}
                    
                </div>

                <div className="Upholstered">
                    <div className="UpholsteredBox" onClick={()=> setOpenUpholstered(!OpenUpholstered)}>
                    <h2>UPHOLSTERED</h2>
                        {OpenUpholstered ? (  <IoIosArrowDown className="UpholsteredIcon" onClick={()=> setOpenUpholstered(!OpenUpholstered)} /> ):( <MdArrowForwardIos className="UpholsteredIcon" onClick={()=> setOpenUpholstered(!OpenUpholstered)}/>  )}
                    </div>

                    {OpenUpholstered && (
                        <div className="AllPrices">

                    <div className="Yes">
                    <input type="checkbox" />
                    <h2>Yes</h2>
                    </div>

                    <div className="No">
                    <input type="checkbox" />
                    <h2>No</h2>  
                    </div>

                  </div>
                    )}
                    
                </div>

                <div className="Finish">
                    <div className="FinishBox" onClick={()=> setOpenFinish(!OpenFinish)}>
                    <h2>FINISH </h2>
                        {OpenFinish ? (  <IoIosArrowDown className="FinishIcon" onClick={()=> setOpenFinish(!OpenFinish)} /> ):( <MdArrowForwardIos className="FinishIcon" onClick={()=> setOpenFinish(!OpenFinish)}/>  )}
                    </div>

                    {OpenFinish && (
                        <div className="AllPrices">

                    <div className="WalnutFinish">
                    <input type="checkbox" />
                    <h2>Walnut Finish</h2>
                    </div>

                    <div className="GreyFinish">
                    <input type="checkbox" />
                    <h2>GreyFinish</h2> 
                    </div>

                    <div className="BeigeFinish">
                    <input type="checkbox" />
                    <h2>Beige Finish</h2>
                    </div>

                    <div className="WhiteFinish">
                    <input type="checkbox" />
                    <h2>White Finish</h2>
                    </div>

                    <div className="TeakFinish">
                    <input type="checkbox" />
                    <h2>Teak Finish</h2>
                    </div>

                    <div className="LightWoodFinish">
                    <input type="checkbox" />
                    <h2>Light Wood Finish</h2>  
                    </div>
                  </div>
                    )}
                    
                </div>

                <div className="AgeRange">
                    <div className="AgeRangeBox" onClick={()=> setOpenAgeRange(!OpenAgeRange)}>
                    <h2>AGE RANGE</h2>
                        {OpenAgeRange ? (  <IoIosArrowDown className="AgeRangeIcon" onClick={()=> setOpenAgeRange(!OpenAgeRange)} /> ):( <MdArrowForwardIos className="AgeRangeIcon" onClick={()=> setOpenAgeRange(!OpenAgeRange)}/>  )}
                    </div>

                    {OpenAgeRange && (
                        <div className="AllPrices">

                    <div className="two-sixYears">
                    <input type="checkbox" />
                    <h2>2-6Years</h2> 
                    </div>

                    <div className="TwoYears">
                    <input type="checkbox" />
                    <h2>0-2 Years</h2> 
                    </div>

                    <div className="SixYears">
                    <input type="checkbox" />
                    <h2>6+ Years</h2>
                    </div>

                    
                  </div>
                    )}        
                    
                </div>
                
              </div>
  </div>
                  )}  

             </div>


             <div className="RightSection">
                <div className="RightLivingArea" 
            style={{
                left: filtersOpen ? "20%" : "0%",
                width: filtersOpen ? "75%" : "100%"

            }} >
                {LivingRoomImages.map((item, index)=> (
                <div className="LivingRoomCard" key={index}

                // style={{
                //     left: filtersOpen ? "20%" : "0",
                //     height: filtersOpen ? "50%" : "100%",
                //     width: filtersOpen ? "22%" : "100%"
                // }}
                
                >





                <Link to={`/MainProductDetailPageZrated/${item.id}`}>   
                <img src={item.img} alt="" />
                </Link>

                
                {/* <img src={item.img[indexes]} alt="#" /> */}
                {/* <img src={item.img[CurrentImg]} alt="#" onMouseEnter={handleHover} /> */}

                {/* {item.StockOut && (
                <h1 className="OutofStock">{item.StockOut}</h1>
                )} */}

                {item.StockOut ? (
                <h1 className="OutofStock">{item.StockOut}</h1>
                ): null}


                <h3>{item.title}</h3>
                <div className="PriceofItem">
                <h4>{item.price}</h4>
                <p>{item.offer}</p>
                <h5>{item.off}</h5>
                </div>
                <p className="DeliverTime">{item.delivertime}</p> 
               </div>
                ))}
               
            </div>
            </div> 
        </div>


        
      




                    
            
             

                    
                 

        
        
        
        </>
    )
}

                              export const ZratedImages = LivingRoomImages;

 
export default MainZrated;   