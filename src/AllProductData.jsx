import { ApplianceImages } from "./MainAppliances";
import { BedRoomImages } from "./MainBedroom";
import { ComboImages } from "./MainCombo";
import { DinningImages } from "./MainDinning";
import { FitnessImages } from "./MainFitness";
import { KidsImages } from "./MainKids";
import { MainLivingImages } from "./MainLivingRoomDuplicate";
import { LuxuryImages } from "./MainLuxury";
import { MattressImages } from "./MainMattress";
import { StealDealImages } from "./MainStealDeal";
import { StorageImages } from "./MainStorage";
import { StudyImages } from "./MainStudy"; 
import { ZratedImages } from "./MainZrated";

// Har category ko tag karo: category name + detail page link + normalized image field
const tag = (arr, category, linkPath, imgKey = "img") =>
  arr.map((item) => ({
    ...item,
    category,
    link: `${linkPath}/${item.id}`,
    displayImg: item[imgKey], // StealDeal mein "imgs" hai, baaki mein "img"
  }));

const AllProducts = [
  ...tag(ApplianceImages, "Appliances", "/MainProductDetailPageappliances"),
  ...tag(BedRoomImages, "Bedroom", "/MainProductDetailPage"),
  ...tag(ComboImages, "BHK Combos", "/MainProductDetailPageCombo"),
  ...tag(DinningImages, "Dining", "/MainProductDetailPageDinning"),
  ...tag(FitnessImages, "Fitness", "/MainProductDetailPageFitness"),
  ...tag(KidsImages, "Kids", "/MainProductDetailPageKids"),
  ...tag(MainLivingImages, "Living Room", "/MainProductDetailPageLivingroom"),
  ...tag(LuxuryImages, "Luxury", "/MainProductDetailPageLuxury"),
  ...tag(MattressImages, "Mattress", "/MainProductDetailPageMattress"),
  ...tag(StealDealImages, "Steal Deals", "/MainProductDetailPageStealDeal", "imgs"),
  ...tag(StorageImages, "Storage", "/MainProductDetailPageStorage"),
  ...tag(StudyImages, "Study", "/MainProductDetailPageStudy"),
  ...tag(ZratedImages, "Z Rated", "/MainProductDetailPageZrated"),
];

export default AllProducts;