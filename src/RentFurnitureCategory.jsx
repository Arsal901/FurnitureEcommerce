import React from "react";
import { Link } from "react-router-dom";

function RentFurniture() {

    return (

        <>

        <div className="CategoriesArena">
        <h2>Rent Furniture</h2> 
        <div className="AllCategories">

           <Link to="/MainBedRoom" className="nav-link"><div className="Bedroom"> 
                <img src="Bed.avif" alt="#" />
                <h3>Bedroom</h3>
            </div></Link>

            <Link to="MainCombo" className="nav-link"><div className="Combos">
                <img src="Combo.avif" alt="#" />
                <h3>Combo</h3>
            </div></Link>

           {/* <Link to="/MainLivingRoom" className="nav-link"> <div className="Livingroom">
                <img src="LivingRoom.avif" alt="#" />  
                <h3>Living Room</h3>
            </div> </Link> */}

            <Link to="/MainLivingRoomDuplicate" className="nav-link"> <div className="Livingroom">
                <img src="LivingRoom.avif" alt="#" />  
                <h3>Living Room</h3>
            </div> </Link> 

            <Link to="/MainStealDeal" className="nav-link"><div className="Steal-Deal">
                <img src="StealDealbanner.avif" alt="#" />
                <h3>Steal Deal</h3>
            </div></Link>

            <Link to="/MainAppliances" className="nav-link"><div className="Appliances">
                <img src="Appliances.avif" alt="#" />
                <h3>Appliances</h3>
            </div></Link>

           <Link to="/MainStorage" className="nav-link"><div className="Storage">
                <img src="Storage.avif" alt="#" />
                <h3>Storage</h3>
            </div></Link>

            <Link to="/MainKids" className="nav-link"><div className="Kidz">
                <img src="Kids.avif" alt="#" />
                <h3>Kids</h3>
            </div></Link>

            <Link to="/MainStudy" className="nav-link"><div className="Study">
                <img src="Study.avif" alt="#" />
                <h3>Study</h3>
            </div></Link>

            <Link to="/MainDinning" className="nav-link"><div className="Dinning">
                <img src="Dining.avif" alt="#" />
                <h3>Dinning</h3>
            </div></Link>

            <Link to="/MainLuxury" className="nav-link"><div className="Luxury">
                <img src="Luxury.avif" alt="#" />
                <h3>Luxury</h3>
            </div></Link>

            <Link to="/MainFitness" className="nav-link"><div className="Fitness">
                <img src="Fitness.avif" alt="#" />
                <h3>Fitness</h3>
            </div></Link>

            <Link to="/MainMattress" className="nav-link"><div className="Mattress">
                <img src="Matters.avif" alt="#" />
                <h3>Mattress</h3>
            </div></Link>

            <Link to="/MainZrated" className="nav-link"><div className="Z-Rated">
                <img src="Z Rated.avif" alt="#" /> 
                <h3>Z Rated</h3>
            </div></Link>


        </div>
        </div>


        
        
        
        
        </>
    )
}

export default RentFurniture;