


import { useState, useEffect } from "react";

import { RiQuestionLine } from "react-icons/ri"; 
import { PiBookmarksSimpleThin } from "react-icons/pi";
import { PiTruckFill } from "react-icons/pi";
import { MdArrowForwardIos } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { IoHeart } from "react-icons/io5";

import { useParams } from "react-router-dom";



function MainProductDetailCombo() { 

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
                              Combo1:[   
                                {id:"1",
                                 img:"/MainComboImgs/MainCombo1.avif",
                                 maintitle:"Treadmill FITXP MT05 - Powered by Sportsadda",
                                 hurry:"Hurry up! Only 7 Left",
                                 mainPrice:"₹2,779/mo",
                                 mainOffer:"₹3,195/mo",
                                 maindiscount:"13% OFF",
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"3", img:"/MainProductCombo/Comboimg3.webp"},
                                {id:"4", img:"/MainProductCombo/Comboimg4.webp"},
                                {id:"5", img:"/MainProductCombo/Comboimg5.webp"},
                                {id:"6", img:"/MainProductCombo/Comboimg6.webp"},
                                {id:"7", img:"/MainProductCombo/Comboimg7.webp"},
                                {id:"8", img:"/MainProductCombo/Comboimg8.webp"},
                                {id:"9", img:"/MainProductCombo/Comboimg9.webp"},
                                
                               
                               ],

                               Combo2:[   
                                {id:"1",
                                 img:"/MainComboImgs/MainCombo2.avif",
                                 maintitle:"LIT Essentails Collection",
                                 mainPrice:"₹1,789/mo",
                                 mainOffer:"₹3,195/mo",
                                 maindiscount:"40% OFF",
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductCombo/Combtwoimg2.webp"},
                                {id:"3", img:"/MainProductCombo/Combtwoimg3.webp"},
                                {id:"4", img:"/MainProductCombo/Combtwoimg4.webp"},
                                {id:"5", img:"/MainProductCombo/Combtwoimg5.webp"},
                                {id:"6", img:"/MainProductCombo/Combtwoimg6.webp"},
                                {id:"7", img:"/MainProductCombo/Combtwoimg7.webp"},
                                {id:"8", img:"/MainProductCombo/Combtwoimg8.webp"},
                                {id:"9", img:"/MainProductCombo/Combtwoimg9.webp"},
                                {id:"10", img:"/MainProductCombo/Combtwoimg10.webp"},
                                {id:"11", img:"/MainProductCombo/Combtwoimg11.webp"},
                                {id:"12", img:"/MainProductCombo/Combtwoimg12.webp"},
                                {id:"13", img:"/MainProductCombo/Combtwoimg13.webp"},
                                {id:"14", img:"/MainProductCombo/Combtwoimg14.webp"},
                                 
                               ],    
 
                               Combo3:[   
                                {id:"1",
                                 img:"/MainComboImgs/MainCombo3.avif",
                                 maintitle:"LIT BHK",
                                 hurry:"Hurry up! Only 7 Left",
                                 mainPrice:"₹2,189/mo",
                                 mainOffer:"₹3,095/mo",
                                 maindiscount:"20% OFF",
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductCombo/Combthreeimg1.webp"},
                                {id:"3", img:"/MainProductCombo/Combthreeimg2.webp"},
                                {id:"4", img:"/MainProductCombo/Combthreeimg3.webp"},
                                {id:"5", img:"/MainProductCombo/Combthreeimg4.webp"},
                                {id:"6", img:"/MainProductCombo/Combthreeimg5.webp"},
                                {id:"7", img:"/MainProductCombo/Combthreeimg6.webp"},
                                {id:"8", img:"/MainProductCombo/Combthreeimg7.webp"},
                                {id:"9", img:"/MainProductCombo/Combthreeimg8.webp"},
                                {id:"10", img:"/MainProductCombo/Combthreeimg9.webp"},
                                {id:"11", img:"/MainProductCombo/Combthreeimg10.webp"},
                                {id:"12", img:"/MainProductCombo/Combthreeimg11.webp"},
                                {id:"13", img:"/MainProductCombo/Combthreeimg12.webp"},
                                {id:"14", img:"/MainProductCombo/Combthreeimg13.webp"},
                                 
                               ],

                               Combo4:[   
                                {id:"1",
                                 img:"/MainComboImgs/MainCombo4.avif",
                                 maintitle:"Starter Hive BHK",
                                 mainPrice:"₹2,389/mo",
                                 mainOffer:"₹3,195/mo",
                                 maindiscount:"20% OFF",
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductCombo/Combfourimg1.webp"},
                                {id:"3", img:"/MainProductCombo/Combfourimg2.webp"},
                                {id:"4", img:"/MainProductCombo/Combfourimg3.webp"},
                                {id:"5", img:"/MainProductCombo/Combfourimg4.webp"},
                                {id:"6", img:"/MainProductCombo/Combfourimg5.webp"},
                                {id:"7", img:"/MainProductCombo/Combfourimg6.webp"},
                                {id:"8", img:"/MainProductCombo/Combfourimg7.webp"},
                                {id:"9", img:"/MainProductCombo/Combfourimg8.webp"},
                                {id:"10", img:"/MainProductCombo/Combfourimg9.webp"},
                                {id:"11", img:"/MainProductCombo/Combfourimg10.webp"},
                                {id:"12", img:"/MainProductCombo/Combfourimg11.webp"},
                                {id:"13", img:"/MainProductCombo/Combfourimg12.webp"},
                                 
                               ],

                               Combo5:[   
                                {id:"1",
                                 img:"/MainComboImgs/MainCombo5.avif",
                                 maintitle:"Blanca Home Essentails",
                                 hurry:"Hurry up! Only 7 Left",
                                 mainPrice:"₹1,809/mo",
                                 mainOffer:"₹2,352/mo",
                                 maindiscount:"23% OFF",
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductCombo/Combfiveimg1.webp"},
                                {id:"3", img:"/MainProductCombo/Combfiveimg2.webp"},
                                {id:"4", img:"/MainProductCombo/Combfiveimg3.webp"},
                                {id:"5", img:"/MainProductCombo/Combfiveimg4.webp"},
                                {id:"6", img:"/MainProductCombo/Combfiveimg5.avif"},
                                 
                               ],

                               Combo6:[   
                                {id:"1",
                                 img:"/MainComboImgs/MainCombo6th.avif",
                                 maintitle:"Vive Brick Accent Chair with Leatherette Ottoman",
                                 mainPrice:"₹499/mo",
                                 mainOffer:"₹1,195/mo",
                                 maindiscount:"23% OFF",
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductCombo/CombSiximg1.webp"},
                                {id:"3", img:"/MainProductCombo/CombSiximg2.webp"},
                                {id:"4", img:"/MainProductCombo/CombSiximg3.webp"},
                                {id:"5", img:"/MainProductCombo/CombSiximg4.webp"},
                                {id:"7", img:"/MainProductCombo/CombSiximg6.webp"},
                                {id:"8", img:"/MainProductCombo/CombSiximg7.webp"},
                                {id:"9", img:"/MainProductCombo/CombSiximg8.webp"},
                                {id:"10", img:"/MainProductCombo/CombSiximg9.webp"},
                                {id:"11", img:"/MainProductCombo/CombSiximg10.webp"},
                                {id:"12", img:"/MainProductCombo/CombSiximg11.webp"},
                                 
                               ],

                               Combo7:[   
                                {id:"1",
                                 img:"/MainComboImgs/MainCombo7.avif",
                                 maintitle:"1 BHK Mojave Queen bed Collection", 
                                 mainPrice:"₹2,969/mo",
                                 mainOffer:"₹3,495/mo",
                                 maindiscount:"13% OFF",
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductCombo/CombSevenimg1.webp"},
                                {id:"3", img:"/MainProductCombo/CombSevenimg2.webp"},
                                {id:"4", img:"/MainProductCombo/CombSevenimg3.webp"},
                                {id:"5", img:"/MainProductCombo/CombSevenimg4.webp"},
                                 
                               ],

                               Combo8:[   
                                {id:"1",
                                 img:"/MainComboImgs/MainCombo8.avif",
                                 maintitle:" Urban UNO 1 BHK",
                                 mainPrice:"₹2,289/mo",
                                 mainOffer:"₹3,004/mo",
                                 maindiscount:"13% OFF",
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductCombo/Combeightimg1.webp"},
                                {id:"3", img:"/MainProductCombo/Combeightimg2.webp"},
                                {id:"4", img:"/MainProductCombo/Combeightimg3.webp"},
                                {id:"5", img:"/MainProductCombo/Combeightimg4.webp"},
                                {id:"6", img:"/MainProductCombo/Combeightimg5.webp"},
                                {id:"7", img:"/MainProductCombo/Combeightimg6.webp"},
                                {id:"8", img:"/MainProductCombo/Combeightimg7.webp"},
                                {id:"9", img:"/MainProductCombo/Combeightimg8.webp"},
                                {id:"10", img:"/MainProductCombo/Combeightimg9.webp"},
                                {id:"11", img:"/MainProductCombo/Combeightimg10.webp"},
                                {id:"12", img:"/MainProductCombo/Combeightimg11.webp"},
                                {id:"13", img:"/MainProductCombo/Combeightimg12.webp"},
                                {id:"14", img:"/MainProductCombo/Combeightimg13.webp"},
                                 
                               ],

                               Combo9:[   
                                {id:"1",
                                 img:"/MainComboImgs/MainCombo9.avif",
                                 maintitle:"All in One Package",
                                 mainPrice:"₹3,759/mo",
                                 mainOffer:"₹4,195/mo",
                                 maindiscount:"13% OFF",
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductCombo/CombNineimg1.webp"},
                                {id:"3", img:"/MainProductCombo/CombNineimg2.webp"},
                                {id:"4", img:"/MainProductCombo/CombNineimg3.webp"},
                                {id:"5", img:"/MainProductCombo/CombNineimg4.webp"},
                                {id:"6", img:"/MainProductCombo/CombNineimg5.webp"},
                                {id:"7", img:"/MainProductCombo/CombNineimg6.webp"},
                                {id:"8", img:"/MainProductCombo/CombNineimg7.webp"},
                                {id:"9", img:"/MainProductCombo/CombNineimg8.webp"},
                                {id:"10", img:"/MainProductCombo/CombNineimg9.webp"},
                                {id:"11", img:"/MainProductCombo/CombNineimg10.webp"},
                                {id:"12", img:"/MainProductCombo/CombNineimg11.webp"},
                                {id:"13", img:"/MainProductCombo/CombNineimg12.webp"},
                                {id:"14", img:"/MainProductCombo/CombNineimg13.webp"},
                                {id:"15", img:"/MainProductCombo/CombNineimg14.webp"},
                                {id:"16", img:"/MainProductCombo/CombNineimg15.webp"},
                                {id:"17", img:"/MainProductCombo/CombNineimg16.webp"},
                                {id:"18", img:"/MainProductCombo/CombNineimg17.webp"},
                                {id:"19", img:"/MainProductCombo/CombNineimg18.webp"},
                                {id:"20", img:"/MainProductCombo/CombNineimg19.webp"},
                                {id:"21", img:"/MainProductCombo/CombNineimg20.webp"},
                                {id:"22", img:"/MainProductCombo/CombNineimg21.webp"},
                                {id:"23", img:"/MainProductCombo/CombNineimg22.webp"},
                                {id:"24", img:"/MainProductCombo/CombNineimg23.webp"},
                                {id:"25", img:"/MainProductCombo/CombNineimg24.webp"},
                                {id:"26", img:"/MainProductCombo/CombNineimg25.webp"},
                                {id:"27", img:"/MainProductCombo/CombNineimg26.webp"},
                                {id:"28", img:"/MainProductCombo/CombNineimg27.webp"},
                                 
                               ],

                               Combo10:[   
                                {id:"1",
                                 img:"/MainComboImgs/MainCombo10.avif",
                                 maintitle:"Blanca BHK",
                                 mainPrice:"₹2,329/mo",
                                 mainOffer:"₹3,028/mo",
                                 maindiscount:"23% OFF",
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductCombo/Combtenimg1.webp"},
                                {id:"3", img:"/MainProductCombo/Combtenimg2.webp"},
                                {id:"4", img:"/MainProductCombo/Combtenimg3.webp"},
                                {id:"5", img:"/MainProductCombo/Combtenimg4.webp"},
                                {id:"6", img:"/MainProductCombo/Combtenimg5.webp"},
                                {id:"7", img:"/MainProductCombo/Combtenimg6.webp"},
                                {id:"8", img:"/MainProductCombo/Combtenimg7.webp"},
                                {id:"9", img:"/MainProductCombo/Combtenimg8.webp"},
                                {id:"10", img:"/MainProductCombo/Combtenimg9.webp"},
                                 
                               ],

                                Combo11:[   
                                {id:"1",
                                 img:"/MainComboImgs/MainCombo11.avif",
                                 maintitle:"Wardrobe, Bed & Sofa BHK",
                                 mainPrice:"₹2,819/mo",
                                 mainOffer:"₹3,665/mo",
                                 maindiscount:"23% OFF",
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductCombo/Combelevenimg1.avif"},
                                {id:"3", img:"/MainProductCombo/Combelevenimg2.webp"},
                                {id:"4", img:"/MainProductCombo/Combelevenimg3.webp"},
                                {id:"5", img:"/MainProductCombo/Combelevenimg4.webp"},
                                {id:"6", img:"/MainProductCombo/Combelevenimg5.webp"},
                                {id:"7", img:"/MainProductCombo/Combelevenimg6.webp"},
                                {id:"8", img:"/MainProductCombo/Combelevenimg7.webp"},
                                {id:"9", img:"/MainProductCombo/Combelevenimg8.webp"},
                                {id:"10", img:"/MainProductCombo/Combelevenimg9.webp"},
                                {id:"11", img:"/MainProductCombo/Combelevenimg10.webp"},
                                {id:"12", img:"/MainProductCombo/Combelevenimg11.webp"},
                                 
                               ],

                                Combo12:[   
                                {id:"1",
                                 img:"/MainComboImgs/MainCombo12.avif",
                                 maintitle:"Versatile Living Collection",
                                 mainPrice:"₹3,059/mo",
                                 mainOffer:"₹3,995/mo",
                                 maindiscount:"13% OFF",
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductCombo/Combtwelveimg1.webp"},
                                {id:"3", img:"/MainProductCombo/Combtwelveimg2.webp"},
                                {id:"4", img:"/MainProductCombo/Combtwelveimg3.webp"},
                                {id:"5", img:"/MainProductCombo/Combtwelveimg4.webp"},
                                {id:"6", img:"/MainProductCombo/Combtwelveimg5.webp"},
                                {id:"7", img:"/MainProductCombo/Combtwelveimg6.webp"},
                                {id:"8", img:"/MainProductCombo/Combtwelveimg7.webp"},
                                {id:"9", img:"/MainProductCombo/Combtwelveimg8.webp"},
                                {id:"10", img:"/MainProductCombo/Combtwelveimg9.webp"},
                                {id:"11", img:"/MainProductCombo/Combtwelveimg10.webp"},
                                {id:"12", img:"/MainProductCombo/Combtwelveimg11.webp"},
                                {id:"13", img:"/MainProductCombo/Combtwelveimg12.webp"},
                                {id:"14", img:"/MainProductCombo/Combtwelveimg3.webp"},
                                {id:"15", img:"/MainProductCombo/Combtwelveimg14.webp"},
                                 
                               ],

                                Combo13:[   
                                {id:"1",
                                 img:"/MainComboImgs/MainCombo13.avif",
                                 maintitle:"Noah 3 seater sofa Turquoise with Slay Coffee Table",
                                 mainPrice:"₹829/mo",
                                 mainOffer:"₹1,078/mo",
                                 maindiscount:"23% OFF",
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductCombo/Combthirtheenimg1.webp"},
                                {id:"3", img:"/MainProductCombo/Combthirtheenimg2.webp"},
                                {id:"4", img:"/MainProductCombo/Combthirtheenimg3.webp"},
                                 
                                
                                
                               ],

                                Combo14:[   
                                {id:"1",
                                 img:"/MainComboImgs/MainCombo14.avif",
                                 maintitle:"Ella 3 Seater Moroccan Blue & FOMO Center Table",
                                 mainPrice:"₹1,379/mo",
                                 mainOffer:"₹2,379/mo",
                                 maindiscount:"40% OFF",
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductCombo/Combfourtheenimg1.webp"},
                                {id:"3", img:"/MainProductCombo/Combfourtheenimg2.webp"},
                                {id:"4", img:"/MainProductCombo/Combfourtheenimg3.webp"},
                                {id:"5", img:"/MainProductCombo/Combfourtheenimg4.webp"},
                                {id:"6", img:"/MainProductCombo/Combfourtheenimg5.webp"},
                                {id:"7", img:"/MainProductCombo/Combfourtheenimg6.webp"},
                                {id:"8", img:"/MainProductCombo/Combfourtheenimg7.webp"},
                                {id:"9", img:"/MainProductCombo/Combfourtheenimg8.webp"},
                                {id:"10", img:"/MainProductCombo/Combfourtheenimg9.webp"},
                                {id:"11", img:"/MainProductCombo/Combfourtheenimg10.webp"},
                                {id:"12", img:"/MainProductCombo/Combfourtheenimg11.webp"},
                                 
                               ],

                                Combo15:[   
                                {id:"1",
                                 img:"/MainComboImgs/MainCombo15th.avif",
                                 maintitle:"Ella 3 Seater - Dark Green with LED Smart 43 inch TV and Bianca Entertainment Unit",
                                 mainPrice:"₹2,559/mo",
                                 mainOffer:"₹3,195/mo",
                                 maindiscount:"13% OFF",
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductCombo/Combofiftheenimg1.webp"},
                                {id:"3", img:"/MainProductCombo/Combofiftheenimg2.webp"},
                                {id:"4", img:"/MainProductCombo/Combofiftheenimg3.webp"},
                                {id:"5", img:"/MainProductCombo/Combofiftheenimg4.webp"},
                                {id:"6", img:"/MainProductCombo/Combofiftheenimg6.webp"},
                                {id:"7", img:"/MainProductCombo/Combofiftheenimg7.webp"},
                                {id:"8", img:"/MainProductCombo/Combofiftheenimg8.webp"},
                                {id:"9", img:"/MainProductCombo/Combofiftheenimg9.webp"},
                                {id:"10", img:"/MainProductCombo/Combofiftheenimg10.webp"},
                                {id:"11", img:"/MainProductCombo/Combofiftheenimg11.webp"},
                                {id:"12", img:"/MainProductCombo/Combofiftheenimg12.webp"},
                                {id:"13", img:"/MainProductCombo/Combofiftheenimg13.webp"},
                                {id:"14", img:"/MainProductCombo/Combofiftheenimg14.webp"},
                                {id:"15", img:"/MainProductCombo/Combofiftheenimg15.webp"},
                                {id:"16", img:"/MainProductCombo/Combofiftheenimg16.webp"},
                                 
                               ],

                                Combo16:[   
                                {id:"1",
                                 img:"/MainComboImgs/MainCombo16.avif",
                                 maintitle:"Refrigerator 190L With Parker Console Unit",
                                 hurry:"Hurry up! Only 2 Left",
                                 mainPrice:"₹1,109/mo",
                                 mainOffer:"₹1,442/mo",
                                 maindiscount:"23% OFF",
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductCombo/CombSixteenimg1.webp"},
                                {id:"3", img:"/MainProductCombo/CombSixteenimg2.webp"},
                                {id:"4", img:"/MainProductCombo/CombSixteenimg3.webp"},
                                {id:"5", img:"/MainProductCombo/CombSixteenimg4.webp"},
                                {id:"6", img:"/MainProductCombo/CombSixteenimg5.webp"},
                                {id:"8", img:"/MainProductCombo/CombSixteenimg7.webp"},
                                {id:"9", img:"/MainProductCombo/CombSixteenimg8.webp"},
                                {id:"10", img:"/MainProductCombo/CombSixteenimg9.webp"},
                                {id:"11", img:"/MainProductCombo/CombSixteenimg10.webp"},
                                {id:"12", img:"/MainProductCombo/CombSixteenimg11.webp"},
                                {id:"13", img:"/MainProductCombo/CombSixteenimg12.webp"},
                                {id:"14", img:"/MainProductCombo/CombSixteenimg13.webp"},
                                {id:"15", img:"/MainProductCombo/CombSixteenimg14.webp"},
                                {id:"16", img:"/MainProductCombo/CombSixteenimg15.webp"},
                                {id:"17", img:"/MainProductCombo/CombSixteenimg16.webp"},
                                {id:"18", img:"/MainProductCombo/CombSixteenimg17.webp"}, 
                                 
                               ],

                                Combo17:[   
                                {id:"1",
                                 img:"/MainComboImgs/MainCombo17.webp",
                                 maintitle:"Hugo 3 Door Wardrobe & Bianca Chest of Drawers",
                                 mainPrice:"₹1,379/mo",
                                 mainOffer:"₹1,793/mo",
                                 maindiscount:"23% OFF",
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductCombo/Combseventeenimg1.webp"},
                                {id:"3", img:"/MainProductCombo/Combseventeenimg2.webp"},
                                {id:"4", img:"/MainProductCombo/Combseventeenimg3.webp"},
                                {id:"5", img:"/MainProductCombo/Combseventeenimg4.webp"},
                                {id:"6", img:"/MainProductCombo/Combseventeenimg5.webp"},
                                {id:"7", img:"/MainProductCombo/Combseventeenimg6.webp"},
                                {id:"8", img:"/MainProductCombo/Combseventeenimg7.webp"},
                                {id:"9", img:"/MainProductCombo/Combseventeenimg8.webp"},
                                {id:"10", img:"/MainProductCombo/Combseventeenimg9.webp"},
                                {id:"11", img:"/MainProductCombo/Combseventeenimg10.webp"},
                                 
                               ],

                                Combo18:[   
                                {id:"1",
                                 img:"/MainComboImgs/MainCombo18.avif",
                                 maintitle:"Aara Hydraulic Queen Storage Bed with Eclectic Velvet 3 Seater Sofa in Sapphire Blue Color",
                                 mainPrice:"₹4,819/mo",
                                 mainOffer:"₹3,024/mo",
                                 maindiscount:"17% OFF",
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductCombo/Combeighteenimg1.webp"},
                                {id:"3", img:"/MainProductCombo/Combeighteenimg2.webp"},
                                {id:"4", img:"/MainProductCombo/Combeighteenimg3.webp"},
                                {id:"5", img:"/MainProductCombo/Combeighteenimg4.webp"},
                                {id:"6", img:"/MainProductCombo/Combeighteenimg5.webp"},
                                {id:"7", img:"/MainProductCombo/Combeighteenimg6.webp"},
                                {id:"8", img:"/MainProductCombo/Combeighteenimg7.webp"},
                                {id:"9", img:"/MainProductCombo/Combeighteenimg8.webp"},
                                {id:"10", img:"/MainProductCombo/Combeighteenimg9.webp"},
                                 
                               ],

                                Combo19:[   
                                {id:"1",
                                 img:"/MainComboImgs/MainCombo19.avif",
                                 maintitle:"Blanca Bed & Storage Essentials",
                                 mainPrice:"₹2,779/mo",
                                 mainOffer:"₹3,195/mo",
                                 maindiscount:"13% OFF",
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductCombo/Combninteenimg1.webp"},
                                {id:"3", img:"/MainProductCombo/Combninteenimg2.webp"},
                                {id:"4", img:"/MainProductCombo/Combninteenimg3.webp"},
                                {id:"5", img:"/MainProductCombo/Combninteenimg4.webp"},
                                {id:"6", img:"/MainProductCombo/Combninteenimg5.webp"},
                                {id:"7", img:"/MainProductCombo/Combninteenimg6.webp"},
                                {id:"8", img:"/MainProductCombo/Combninteenimg7.webp"},
                                {id:"9", img:"/MainProductCombo/Combninteenimg8.webp"},
                                {id:"10", img:"/MainProductCombo/Combninteenimg9.webp"},
                                {id:"11", img:"/MainProductCombo/Combninteenimg10.webp"},
                                {id:"12", img:"/MainProductCombo/Combninteenimg11.webp"},
                                {id:"13", img:"/MainProductCombo/Combninteenimg12.webp"},
                                {id:"14", img:"/MainProductCombo/Combninteenimg13.webp"},
                                {id:"15", img:"/MainProductCombo/Combninteenimg14.webp"},
                                {id:"16", img:"/MainProductCombo/Combninteenimg15.webp"},
                                {id:"17", img:"/MainProductCombo/Combninteenimg16.webp"},
                                {id:"18", img:"/MainProductCombo/Combninteenimg17.webp"},
                                {id:"19", img:"/MainProductCombo/Combninteenimg18.webp"},
                                {id:"20", img:"/MainProductCombo/Combninteenimg19.webp"},
                                {id:"21", img:"/MainProductCombo/Combninteenimg20.webp"},
                                {id:"22", img:"/MainProductCombo/Combninteenimg21.webp"},
                                {id:"23", img:"/MainProductCombo/Combninteenimg22.webp"},
                                {id:"24", img:"/MainProductCombo/Combninteenimg23.webp"},
                                 
                               ],

                                Combo20:[   
                                {id:"1",
                                 img:"/MainComboImgs/MainCombo20.avif",
                                 maintitle:"Bianca 2 Door Wardrobe & Shoe Rack",
                                 mainPrice:"₹1,039/mo",
                                 mainOffer:"₹1,351/mo",
                                 maindiscount:"23% OFF",
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductCombo/Combtwentyimg1.webp"},
                                {id:"3", img:"/MainProductCombo/Combtwentyimg2.webp"},
                                {id:"4", img:"/MainProductCombo/Combtwentyimg3.webp"},
                                {id:"5", img:"/MainProductCombo/Combtwentyimg4.webp"},
                                {id:"6", img:"/MainProductCombo/Combtwentyimg5.webp"},
                                {id:"7", img:"/MainProductCombo/Combtwentyimg6.webp"},
                                {id:"8", img:"/MainProductCombo/Combtwentyimg7.webp"},
                                {id:"9", img:"/MainProductCombo/Combtwentyimg8.webp"},
                                {id:"10", img:"/MainProductCombo/Combtwentyimg9.webp"},
                                {id:"11", img:"/MainProductCombo/Combtwentyimg10.webp"},
                                {id:"12", img:"/MainProductCombo/Combtwentyimg11.webp"},
                                {id:"13", img:"/MainProductCombo/Combtwentyimg12.webp"},
                                {id:"14", img:"/MainProductCombo/Combtwentyimg13.webp"},
                                 
                               ],

                                OFSCombo1:[   
                                {id:"1",
                                 img:"/MainComboImgs/outofstockcombo1.avif",
                                 maintitle:"1 BHK - Sol Queen Bed Collection 2",
                                 mainPrice:"₹3,009/mo",
                                 OutOfStock:"OUT OF STOCK", 
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductCombo/OutofStockCombo1.webp"},
                                {id:"3", img:"/MainProductCombo/OutofStockCombo2.webp"},
                                {id:"4", img:"/MainProductCombo/OutofStockCombo3.webp"},
                                {id:"5", img:"/MainProductCombo/OutofStockCombo4.webp"},
                                {id:"6", img:"/MainProductCombo/OutofStockCombo5.webp"},
                                {id:"7", img:"/MainProductCombo/OutofStockCombo6.webp"},
                                {id:"8", img:"/MainProductCombo/OutofStockCombo7.webp"},
                                {id:"9", img:"/MainProductCombo/OutofStockCombo8.webp"},
                                {id:"10", img:"/MainProductCombo/OutofStockCombo9.webp"},
                                {id:"11", img:"/MainProductCombo/OutofStockCombo10.webp"},
                                {id:"12", img:"/MainProductCombo/OutofStockCombo11.webp"},
                                {id:"13", img:"/MainProductCombo/OutofStockCombo12.webp"},
                                {id:"14", img:"/MainProductCombo/OutofStockCombo13.webp"},
                                {id:"15", img:"/MainProductCombo/OutofStockCombo14.webp"},
                                {id:"16", img:"/MainProductCombo/OutofStockCombo15.webp"},
                                {id:"17", img:"/MainProductCombo/OutofStockCombo16.webp"},
                                {id:"18", img:"/MainProductCombo/OutofStockCombo17.webp"},
                                {id:"19", img:"/MainProductCombo/OutofStockCombo18.webp"},
                                {id:"20", img:"/MainProductCombo/OutofStockCombo19.webp"},
                                {id:"21", img:"/MainProductCombo/OutofStockCombo20.webp"},
                                {id:"22", img:"/MainProductCombo/OutofStockCombo21.webp"},
                                {id:"23", img:"/MainProductCombo/OutofStockCombo22.webp"},
                                {id:"24", img:"/MainProductCombo/OutofStockCombo23.webp"},
                                {id:"25", img:"/MainProductCombo/OutofStockCombo24.webp"},
                                {id:"26", img:"/MainProductCombo/OutofStockCombo25.webp"},
                                 
                               ],

                                OFSCombo2:[   
                                {id:"1",
                                 img:"/MainComboImgs/outofstockcombo2.avif",
                                 maintitle:"Bordo Comfort Collection",
                                 mainPrice:"₹2,869/mo",
                                 OutOfStock:"OUT OF STOCK", 
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductCombo/OutofStocktwoCombo1.webp"},
                                {id:"3", img:"/MainProductCombo/OutofStocktwoCombo2.webp"},
                                {id:"4", img:"/MainProductCombo/OutofStocktwoCombo3.webp"},
                                {id:"5", img:"/MainProductCombo/OutofStocktwoCombo4.webp"},
                                {id:"6", img:"/MainProductCombo/OutofStocktwoCombo5.webp"},
                                {id:"7", img:"/MainProductCombo/OutofStocktwoCombo6.webp"},
                                {id:"8", img:"/MainProductCombo/OutofStocktwoCombo7.webp"},
                                {id:"9", img:"/MainProductCombo/OutofStocktwoCombo8.webp"},
                                {id:"10", img:"/MainProductCombo/OutofStocktwoCombo9.webp"},
                                {id:"11", img:"/MainProductCombo/OutofStocktwoCombo10.webp"},
                                {id:"12", img:"/MainProductCombo/OutofStocktwoCombo11.webp"},
                                 
                               ],

                                OFSCombo3:[   
                                {id:"1",
                                 img:"/MainComboImgs/outofstockcombo3.avif",
                                 maintitle:"Blanca Queen bed with 6 Premium Mattress with Lana Workstation",
                                 mainPrice:"₹1,309/mo",
                                 OutOfStock:"OUT OF STOCK", 
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductCombo/OutofStockthreeCombo1.webp"},
                                {id:"3", img:"/MainProductCombo/OutofStockthreeCombo2.webp"},
                                {id:"4", img:"/MainProductCombo/OutofStockthreeCombo3.webp"},
                                {id:"5", img:"/MainProductCombo/OutofStockthreeCombo4.webp"},
                                {id:"6", img:"/MainProductCombo/OutofStockthreeCombo5.webp"},
                                {id:"7", img:"/MainProductCombo/OutofStockthreeCombo6.webp"},
                                {id:"8", img:"/MainProductCombo/OutofStockthreeCombo7.webp"},
                                {id:"9", img:"/MainProductCombo/OutofStockthreeCombo8.webp"},
                                {id:"10", img:"/MainProductCombo/OutofStockthreeCombo9.webp"},
                                 
                               ],

                                OFSCombo4:[   
                                {id:"1",
                                 img:"/MainComboImgs/outofstockcombo4.avif",
                                 maintitle:"LIT Premium BHK",
                                 mainPrice:"₹3,489/mo", 
                                 OutOfStock:"OUT OF STOCK", 
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductCombo/OutofStockfourCombo1.avif"},
                                {id:"3", img:"/MainProductCombo/OutofStockfourCombo2.avif"},
                                {id:"4", img:"/MainProductCombo/OutofStockfourCombo3.avif"},
                                {id:"4", img:"/MainProductCombo/OutofStockfourCombo4.webp"},
                                {id:"4", img:"/MainProductCombo/OutofStockfourCombo5.webp"},
                                {id:"4", img:"/MainProductCombo/OutofStockfourCombo6.webp"},
                                {id:"4", img:"/MainProductCombo/OutofStockfourCombo7.webp"},
                                 
                               ],

                                OFSCombo5:[   
                                {id:"1",
                                 img:"/MainComboImgs/outofstockcombo5.avif",
                                 maintitle:"Mojave & Noah 1 BHK",
                                 mainPrice:"₹2,599/mo",
                                 OutOfStock:"OUT OF STOCK", 
                                 mainCoupen:"Apply: MAXSAVING to get 20% off upto ₹1100",
                                },


                                {id:"2", img:"/MainProductCombo/OutofStockfiveCombo1.webp"},
                                {id:"3", img:"/MainProductCombo/OutofStockfiveCombo2.webp"},
                                {id:"4", img:"/MainProductCombo/OutofStockfiveCombo3.webp"},
                                {id:"5", img:"/MainProductCombo/OutofStockfiveCombo4.webp"},
                                {id:"6", img:"/MainProductCombo/OutofStockfiveCombo5.webp"},
                                {id:"7", img:"/MainProductCombo/OutofStockfiveCombo6.webp"},
                                {id:"8", img:"/MainProductCombo/OutofStockfiveCombo7.webp"},
                                {id:"9", img:"/MainProductCombo/OutofStockfiveCombo8.webp"},
                                {id:"10", img:"/MainProductCombo/OutofStockfiveCombo9.webp"},
                                {id:"11", img:"/MainProductCombo/OutofStockfiveCombo10.webp"},
                                {id:"12", img:"/MainProductCombo/OutofStockfiveCombo11.webp"},
                                {id:"13", img:"/MainProductCombo/OutofStockfiveCombo12.webp"},
                                {id:"14", img:"/MainProductCombo/OutofStockfiveCombo13.webp"},
                                {id:"15", img:"/MainProductCombo/OutofStockfiveCombo14.webp"},
                                {id:"16", img:"/MainProductCombo/OutofStockfiveCombo15.webp"},
                                {id:"17", img:"/MainProductCombo/OutofStockfiveCombo16.webp"},
                                {id:"18", img:"/MainProductCombo/OutofStockfiveCombo17.webp"},
                                {id:"19", img:"/MainProductCombo/OutofStockfiveCombo18.webp"},
                                 
                               ],

                               Mattress: [
                                         {
                                           id: "1",
                                           img: "/Mattressimg/MainMattress1.avif",
                                           maintitle: "Orthopedic Memory Foam Mattress",
                                           mainPrice: "₹899/mo",
                                           mainOffer: "₹1,099/mo",
                                           maindiscount: "18% OFF",
                                           mainCoupen: "Apply: MAXSAVING to get 20% off upto ₹1100",
                                         },
                                       ],
                               

                           }

        // Guard: agar route se invalid/undefined id aaye to crash mat hone do
        if (!MainProductImg[id]) {
            return <p>Product not found</p>;
        }

        const product = MainProductImg[id][0];

        // Right card hamesha mattress (id "2") wala hi rahega, chahe user kisi bhi product ko open kare
        const mattressProduct = MainProductImg["Mattress"] ? MainProductImg["Mattress"][0] : null;

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


    export default MainProductDetailCombo;