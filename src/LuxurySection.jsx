

function LuxurySection() {

    const LuxuryData = [
                        {img:"LuxuryRent1.png"}, 
                        {img:"LuxuryRent2.PNG"},
                        {img:"LuxuryRent3.PNG"},
                        {img:"LuxuryRent4.PNG"},
                       ]

    return (
 
        <>

        <div className="LuxuryConatainer">
            {LuxuryData.map((item, index)=> (
            <div className="LuxuryImages">
                <img src={item.img} alt="#" />
            </div>
            ))}   
        </div>


        
        
        </>
    )
}

export default LuxurySection;