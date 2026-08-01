
function KidSection() {

    const KidData = [
        {
            img: "KidSectionimg1.webp",
            Offer: "13% OFF only today",
            title: "Rio Kids Wardrobe - Jungle Green",
            price: "₹929/mo",
            discount: "₹1,068/mo",
            DeliverTime: "Delivery by 27 Jun - 28 Jun"
        },
        {
            img: "KidSectionimg2.avif",
            Offer: "13% OFF only today",
            title: "Hillo Kids Crib - Jungle Green",
            price: "₹619/mo",
            discount: "₹712/mo",
            DeliverTime: "Delivery by 27 Jun - 28 Jun"
        },
        {
            img: "KidSectionimg3.avif",
            Offer: "13% OFF only today",
            title: "Zzoom Kids Crib - Jungle Green",
            price: "₹979/mo",
            discount: "₹1,126/mo",
            DeliverTime: "Delivery by 27 Jun - 28 Jun"
        },

        {
            img: "KidSectionimg4.avif",
            Offer: "13% OFF only today",
            title: "Kids CoZzzy Cradle",
            price: "₹1,129/mo",
            discount: "₹1,298/mo",
            DeliverTime: "Delivery by 27 Jun - 28 Jun"
        },

        {
            img: "KidSectionimg5.avif",
            Offer: "23% OFF only today",
            title: "Mio Toddler Bed with Mattress",
            price: "₹1,049/mo",
            discount: "₹1,364/mo",
            DeliverTime: "Delivery by 27 Jun - 28 Jun"
        },

        {
            img: "KidSectionimg6.avif",
            Offer: "13% OFF only today",
            title: "Giggle Kids Activity Table Set",
            price: "₹599/mo",
            discount: "₹689/mo",
            DeliverTime: "Delivery by 27 Jun - 28 Jun"
        },
        {
            img: "KidSectionimg7.avif",
            Offer: "13% OFF only today",
            title: "Cubbee Open Storage",
            price: "₹309/mo",
            discount: "₹355/mo",
            DeliverTime: "Delivery by 27 Jun - 28 Jun"
        },
        
    ];

    return (
        <div className="KidFurnitureSection">

            <div className="KidCardBox">

                {KidData.map((item, index) => (
                    <div className="KidCard" key={index}>

                        <div className="Kidimage">
                            <img src={item.img} alt={item.title} />
                            <h4>{item.Offer}</h4>
                        </div>

                        <div className="KidContent">
                            <p className="KidCartTitle">{item.title}</p>

                            <span className="PriceBox">
                                <h4>{item.price}</h4>
                                <p>{item.discount}</p>
                            </span>

                            <p className="Deliverys">
                                {item.DeliverTime}
                            </p>
                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default KidSection;