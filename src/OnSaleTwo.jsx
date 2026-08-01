


function OnSaleTwo() {

    const HugoData = [
                       {img:"OnSaleTwo/OnSaleTwoimg1.avif",bigtitle:"Hugo 2 Door Wardrobe with Mirror",price:" ₹439/mo",offer:" ₹571/mo",deliverTime:"Delivery by 17 Jul - 19 Jul"},
                       {img:"OnSaleTwo/OnSaleTwoimg2.avif",bigtitle:"Hugo 3 Door Wardrobe with Mirror",price:" ₹899/mo",offer:" ₹1,034/mo",deliverTime:"Delivery by 17 Jul - 19 Jul"},
                       {img:"OnSaleTwo/OnSaleTwoimg3.avif",title:"Hugo Beside Table",price:" ₹239/mo",offer:" ₹275/mo",deliverTime:"Delivery by 17 Jul - 19 Jul"},
                       {img:"OnSaleTwo/OnSaleTwoimg4.avif",bigtitle:"Hugo Upholstered Box Storage Compact Double Bed",price:" ₹799/mo",offer:" ₹1,039/mo",deliverTime:"Delivery by 17 Jul - 19 Jul"},
                       {img:"OnSaleTwo/OnSaleTwoimg5.avif",title:"Hugo Book Shelf",price:" ₹429/mo",offer:" ₹493/mo",deliverTime:"Delivery by 17 Jul - 19 Jul"},
                       {img:"OnSaleTwo/OnSaleTwoimg6.avif",bigtitle:"Hugo Engineered Wood 1 door wardrobe without mirror ",price:" ₹419/mo",offer:" ₹482/mo",deliverTime:"Delivery by 17 Jul - 19 Jul"},
                       {img:"OnSaleTwo/OnSaleTwoimg7.avif",title:"Hugo Chest of Drawer",price:" ₹479/mo",offer:" ₹571/mo",deliverTime:"Delivery by 17 Jul - 19 Jul"},
                       {img:"OnSaleTwo/OnSaleTwoimg8.avif",title:"Hugo Entertainment Unit",price:" ₹479/mo",offer:" ₹571/mo",deliverTime:"Delivery by 17 Jul - 19 Jul"},
                       {img:"OnSaleTwo/OnSaleTwoimg9.avif",title:"Hugo Shoe Rack",price:" ₹479/mo",offer:" ₹551/mo",deliverTime:"Delivery by 17 Jul - 19 Jul"},
                       {img:"OnSaleTwo/OnSaleTwoimg10.avif",title:"Hugo Dressing Table",price:" ₹469/mo",offer:" ₹539/mo",deliverTime:"Delivery by 17 Jul - 19 Jul"},
                       {img:"OnSaleTwo/OnSaleTwoimg11.webp",title:"Hugo 3+1 Door Wardrobe Combo",price:" ₹1,249/mo",offer:" ₹1,624/mo",deliverTime:"Delivery by 17 Jul - 19 Jul"},
                     ]

    return (


        <>

        <div className="OnSaleCollection">
            <div className="OnSaleHeading">
            <h2>Hugo Collection</h2>
            <h6>View All</h6>
            </div>
            <div className="OnSaleContainer">
             {HugoData.map((item, index)=> (
            <div className="OnSale" key={index}>
                <img src={item.img} alt="#" />
                <div className="JustOnSaleTitle">
                <h3>{item.title}</h3>
                <h2>{item.bigtitle}</h2>
                </div>
                <div className="OnSalePrices">
                <h4>{item.price}</h4>
                <h5>{item.offer}</h5>
                </div>
                <p>{item.deliverTime}</p>
            </div>
             ))}
             </div>
        </div>


        
        
        </>
    )
}

export default OnSaleTwo; 