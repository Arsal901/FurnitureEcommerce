
function Onsale() { 

    const OnsaleProducts = [ 
                            {img:"TopPicks1.avif", category:"Bed", title:"Bed", offer:"₹999", price:"₹899"},
                            {img:"TopPicks2.avif", category:"Bed", title:"Bed", offer:"₹999", price:"₹899"},
                            {img:"TopPicks3.avif", category:"Sofa", title:"Sofa", offer:"₹999", price:"₹899"},
                            {img:"TopPicks4.webp", category:"Fridge", title:"Fridge", offer:"₹999", price:"₹899"},
                            {img:"TopPicks5.avif", category:"Chair", title:"Chair", offer:"₹999", price:"₹899"},
                            {img:"TopPicks6.webp", category:"Dressing", title:"Dressing", offer:"₹999", price:"₹899"},
                            {img:"TopPicks7.avif", category:"Table", title:"Table", offer:"₹999", price:"₹899"},
                            {img:"TopPicks8.webp", category:"Fridge", title:"Fridge", offer:"₹999", price:"₹899"},
                             
                           ]


    return (

        <>

        <div className="OnSaleContainer">
            <span><h2>ON SALE</h2> </span>

            <div className="onsalebutton">
                <button>View All</button>
            </div>
    
          <div className="line">
            <p></p>
          </div>


            {OnsaleProducts.map((item, index)=> ( 
              <div className="OnsaleBox">
                 <h3 id="category">{item.category}</h3>
                <img src={item.img} alt="#" />
                <h3>{item.title}</h3>
                <p><span>{item.offer}</span>  {item.price}</p>
                <div className="Selectbutton">
                    <button>ADD TO CART</button> 
                </div> 
            </div>
            ))}  
        </div>





        
        
        
        </>
    )
}
  
export default Onsale;