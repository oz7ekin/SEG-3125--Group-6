// iPhones
import iphone5sBlackNew from './assets/products/iphones/iphone5s-black-new.png';
import iphone5sBlackGood from './assets/products/iphones/iphone5s-black-good.png';
import iphone6sRosegoldNew from './assets/products/iphones/iphone6s-rosegold-new.png';
import iphone6sGreyNew from './assets/products/iphones/iphone6s-grey-new.png';
import iphone7plusBlackGood from './assets/products/iphones/iphone7plus-black-good.png';
import iphone7plusBlackAcceptable from './assets/products/iphones/iphone7plus-black-acceptable.png';
import iphone8SilverGood from './assets/products/iphones/iphone8-silver-good.png';
import iphone8plusGoldNew from './assets/products/iphones/iphone8plus-gold-new.png'
import iphoneseRedNew from './assets/products/iphones/iphonese-red-new.png'
import iphone11promaxGreenAcceptable from './assets/products/iphones/iphone11promax-green-acceptable.png';

// iPads
import ipadair109BlueNew from './assets/products/ipads/ipadair109-blue-new.png';
import ipadair109BlackGood from './assets/products/ipads/ipadair109-black-good.png';
import ipadmini4SilverAcceptable from './assets/products/ipads/ipadmini4-silver-acceptable.png';
import ipadpro105SilverGood from './assets/products/ipads/ipadpro105-silver-good.png';
import ipadpro129GreyNew from './assets/products/ipads/ipadpro129-grey-new.png';

// MacBooks
import macbookairGreyNew from './assets/products/macbooks/macbookair-grey-new.png';
import macbookairSilverAcceptable from './assets/products/macbooks/macbookair-silver-acceptable.png';
import macbookairGoldGood from './assets/products/macbooks/macbookair-gold-good.png';
import macbookproGreyAcceptable from './assets/products/macbooks/macbookpro-grey-acceptable.png';
import macbookproSilverNew from './assets/products/macbooks/macbookpro-silver-new.png';

// Apple Watches
import watch3gps38GreyGood from './assets/products/watches/watch3gps38-grey-good.png';
import watch6gps40GoldNew from './assets/products/watches/watch6gps40-gold-new.png';
import watchsecellular40PistachioAcceptable from './assets/products/watches/watchsecellular40-pistachio-acceptable.png';
import watch6cellular44GreyNew from './assets/products/watches/watch6cellular44-grey-new.png';

const allProducts = [
  
  // iPhones
  {
    id: "0",
    category: "iPhone",
    name: "iPhone 5s 64GB",
    image: iphone5sBlackNew,
    price: "129.97",
    rating: 3.1,
    quality: "Used - Like New",
    colour: "Black",
    description: "An iPhone 5s in black, like new, at a very cheap price!",
    reviews: ["Not bad, although it doesn't feel like it's really all that new.", "Works fine, no issues."],
    reviewers: ["Paul D. from Toronto", "Benson Q. from Mississauga"]
  },
  {
    id: "1",
    category: "iPhone",
    name: "iPhone 5s 16GB",
    image: iphone5sBlackGood,
    price: "69.97",
    rating: 2.4,
    quality: "Used - Good",
    colour: "Black",
    description: "This black iPhone 5s is in good condition. Almost like new!",
    reviews: ["This phone looks really busted but it works...", "I feel like I got finessed with this iPhone but a phone's a phone!"],
    reviewers: ["Adam W. from Ottawa", "Robert M. from Thunder Bay"]
  },
  {
    id: "2",
    category: "iPhone",
    name: "iPhone 6s 256GB",
    image: iphone6sRosegoldNew,
    price: "199.97",
    rating: 3.9,
    quality: "Used - Like New",
    colour: "Rose Gold",
    description: "Great quality iPhone 6s 256GB in rose gold.",
    reviews: ["A huge stretch, saying that this phone is like new.", "Love it! Shoutout to the owner!"],
    reviewers: ["Muhammed A. from Brampton", "Iggy X. from Waterloo"]
  },
  {
    id: "3",
    category: "iPhone",
    name: "iPhone 6s 64GB",
    image: iphone6sGreyNew,
    price: "209.97",
    rating: 4.1,
    quality: "Used - Like New",
    colour: "Space Grey",
    description: "A perfect gift for someone looking for a new iPhone at a low price.",
    reviews: ["Amazing phone. Love the colour. Thanks for the phone, guys!", "They weren't capping when they said \"like new\"!"],
    reviewers: ["Ronald S. from Kingston", "Edward M. from Ottawa"]
  },
  {
    id: "4",
    category: "iPhone",
    name: "iPhone 7 Plus 128GB",
    image: iphone7plusBlackGood,
    price: "219.97",
    rating: 3.8,
    quality: "Used - Good",
    colour: "Jet Black",
    description: "A lightly used iPhone 7 Plus in one of the finest colours - Jet Black.",
    reviews: ["Love the colour on this phone. Looks fine.", "Not bad."],
    reviewers: ["Mac B. from Toronto", "Leslie K. from Windsor"]
  },
  {
    id: "5",
    category: "iPhone",
    name: "iPhone 7 Plus 256GB",
    image: iphone7plusBlackAcceptable,
    price: "209.97",
    rating: 3.2,
    quality: "Used - Acceptable",
    colour: "Black",
    description: "Heavily used iPhone 7 Plus, discounted in compensation.",
    reviews: ["Surprisingly working fine despite the quality.", "Amazing customer service."],
    reviewers: ["Jake P. from Dryden", "Alex V. from Kitchener"]
  },
  {
    id: "6",
    category: "iPhone",
    name: "iPhone 8 256GB",
    image: iphone8SilverGood,
    price: "299.95",
    rating: 3.9,
    quality: "Used - Good",
    colour: "Silver",
    description: "An iPhone 8 256GB in good condition, no scratches guaranteed.",
    reviews: ["Works fine, no complaints.", "My dream phone... thank you!"],
    reviewers: ["Olivia G. from Hamilton", "Molly E. from Cornwall"]
  },
  {
    id: "7",
    category: "iPhone",
    name: "iPhone 8 Plus 256GB",
    image: iphone8plusGoldNew,
    price: "319.97",
    rating: 4.2,
    quality: "Used - Like New",
    colour: "Gold",
    description: "A like new gold iPhone 8 Plus, pretty much in mint condition!",
    reviews: ["Like new indeed! Thanks guys.", "Amazing customer service, loving this phone!"],
    reviewers: ["Santiago A. from Burlington", "Raymond H. from Elliot Lake"]
  },
  {
    id: "8",
    category: "iPhone",
    name: "iPhone SE 128GB",
    image: iphoneseRedNew,
    price: "699.98",
    rating: 4.3,
    quality: "Used - Like New",
    colour: "(PRODUCT)RED",
    description: "A PRODUCT(RED) iPhone SE 128GB, guaranteed to look like new.",
    reviews: ["The red is CLEAN. Thank you!!", "Looks brand new! A phone a discounted price- can't go wrong!"],
    reviewers: ["Michael S. from Belleville", "Sue M. from London"]
  },
  {
    id: "9",
    category: "iPhone",
    name: "iPhone 11 Pro Max 64GB",
    image: iphone11promaxGreenAcceptable,
    price: "735.99",
    rating: 4.1,
    quality: "Used - Acceptable",
    colour: "Midnight Green",
    description: "One of the newest additions in the iPhone industry, heavily used, but still good!",
    reviews: ["Adequate quality, works great, though!", "Quality isn't that bad."],
    reviewers: ["Kevin H. from Niagara Falls", "Sarah V. from North Bay"]
  },

  // iPads

  {
    id: "10",
    category: "iPad",
    name: "iPad Air 10.9 Inch 256GB",
    image: ipadair109BlueNew,
    price: "649.95",
    rating: 3.1,
    quality: "Used - Like New",
    colour: "Sky Blue",
    description: "A beautiful sky blue iPad Air.",
    reviews: ["Saying this phone is like new is a bit of a reach. Do better, guys.", "Loving this phone, thank you!"],
    reviewers: ["Cameron T. from Rockland", "Jacob G. from Kenora"]
  },
  {
    id: "11",
    category: "iPad",
    name: "iPad Air 10.9 Inch 64GB",
    image: ipadair109BlackGood,
    price: "619.95",
    rating: 2.3,
    quality: "Used - Good",
    colour: "Space Grey",
    description: "A slightly used iPad Air, perfect for those who are in need for a tablet.",
    reviews: ["I feel like this iPad is busted. Why did I buy an iPad Air?!", "Not bad for the price... still feel like I got scammed though."],
    reviewers: ["Davis D. from Markham", "Harnza O. from Sudbury"]
  },
  {
    id: "12",
    category: "iPad",
    name: "iPad Mini 4 Wi-Fi 16GB",
    image: ipadmini4SilverAcceptable,
    price: "175.99",
    rating: 1.1,
    quality: "Used - Acceptable",
    colour: "Silver",
    description: "A heavily used iPad Mini 4 - in liquidation.",
    reviews: ["WHAT IS THIS LOL I DIDN'T MEAN TO BUY THIS TRASH IPAD!", "Who thought it was a good idea to sell this trash?"],
    reviewers: ["Jim H. from Brant", "Scott P. from Guelph"]
  },
  {
    id: "13",
    category: "iPad",
    name: "iPad Pro 10.5 2017 64GB",
    image: ipadpro105SilverGood,
    price: "679.99",
    rating: 3.6,
    quality: "Used - Good",
    colour: "Silver",
    description: "An iPad Pro 2017 in decent quality and at a respectable price.",
    reviews: ["Not bad for the price.", "Thank you to Andrew from customer service for this phone. Works great!"],
    reviewers: ["David S. from Ottawa", "Harry J. from London"]
  },
  {
    id: "14",
    category: "iPad",
    name: "iPad Pro 12.9 2020 64GB",
    image: ipadpro129GreyNew,
    price: "799.99",
    rating: 4.9,
    quality: "Used - Like New",
    colour: "Space Grey",
    description: "Nearly brand new 2020 iPad Pro, get them while they're hot!",
    reviews: ["GODLY IPAD. BUY THIS WHILE IT'S STILL ON SALE!", "I won."],
    reviewers: ["Riley G. from North Bay", "Ellen B. from Toronto"]
  },

  // MacBooks

  {
    id: "15",
    category: "MacBook",
    name: "MacBook Air M1 2020 256GB",
    image: macbookairGreyNew,
    price: "999.99",
    rating: 4.3,
    quality: "Used - Like New",
    colour: "Space Grey",
    description: "Nearly mint condition MacBook Air, can't go wrong!",
    reviews: ["Works great and looks great, thanks!", "The price is a bit high but Apple products are generally great quality."],
    reviewers: ["Shirley J. from Sudbury", "Ted C. from Kingston"]
  },
  {
    id: "16",
    category: "MacBook",
    name: "MacBook Air M1 2020 256GB",
    image: macbookairSilverAcceptable,
    price: "999.99",
    rating: 1.2,
    quality: "Used - Acceptable",
    colour: "Silver",
    description: "Heavily used MacBook air, but still usable.",
    reviews: ["Why is this even in the store? Take it down.", "I was on hold for 37 seconds on the phone when I was asking for the manager. This is unacceptable."],
    reviewers: ["Charles B. from Kawartha Lakes", "Xavier X. from Brockville"]
  },
  {
    id: "17",
    category: "MacBook",
    name: "MacBook Air M1 2020 512GB",
    image: macbookairGoldGood,
    price: "1399.99",
    rating: 4.2,
    quality: "Used - Good",
    colour: "Gold",
    description: "MacBook Air 2020 in good condition, can't go wrong!",
    reviews: ["This MacBook works flawlessly. I feel like I got a like new one...", "Amazing!"],
    reviewers: ["Landon J. from London", "Stewart O. from Markham"]
  },
  {
    id: "18",
    category: "MacBook",
    name: "MacBook Pro M1 13\" 2020 256GB",
    image: macbookproGreyAcceptable,
    price: "1629.95",
    rating: 2.9,
    quality: "Used - Acceptable",
    colour: "Space Grey",
    description: "This MacBook Pro is heavily used, but still looks nearly new.",
    reviews: ["This is a bit sketchy. I'd avoid buying this if I were you.", "Meh..."],
    reviewers: ["Davis E. from Brampton", "Mason J. from Cornwall"]
  },
  {
    id: "19",
    category: "MacBook",
    name: "MacBook Pro i5 16\" 2020 1TB",
    image: macbookproSilverNew,
    price: "2299.97",
    rating: 4.5,
    quality: "Used - Like New",
    colour: "Silver",
    description: "A nearly brand new silver MacBook price at a competitive price.",
    reviews: ["POWERFUL ALMIGHTY MACBOOK!", "Great price, great quality!"],
    reviewers: ["Jessie M. from Kingston", "Lily B. from Kenora"]
  },

  // Apple Watches

  {
    id: "20",
    category: "Apple Watch",
    name: "Apple Watch Series 3 GPS, 38mm",
    image: watch3gps38GreyGood,
    price: "149.98",
    rating: 3.3,
    quality: "Used - Good",
    colour: "Silver",
    description: "An Apple Watch Series 3 at a reasonable price.",
    reviews: ["A bit slow, but it works.", "Works fine."],
    reviewers: ["Erwin S. from Kitchener", "Levi A. from Guelph"]
  },
  {
    id: "21",
    category: "Apple Watch",
    name: "Apple Watch Series 6 GPS, 40mm",
    image: watch6gps40GoldNew,
    price: "349.98",
    rating: 4.2,
    quality: "Used - Like New",
    colour: "Gold",
    description: "Basically a brand new Apple Watch series 6, get it while you can!",
    reviews: ["Great quality, thanks guys.", "Thanks for this BEAST!"],
    reviewers: ["Homer D. from Elliot Lake", "Brandon R. from Burlington"]
  },
  {
    id: "22",
    category: "Apple Watch",
    name: "Apple Watch SE Cellular, 40mm",
    image: watchsecellular40PistachioAcceptable,
    price: "239.98",
    rating: 2.3,
    quality: "Used - Acceptable",
    colour: "Pistachio",
    description: "A beautiful creamy green colour to complement your Apple Watch SE!",
    reviews: ["World's ugliest colour; it reminds me of my dark past... love it!", "My watch is very slow."],
    reviewers: ["Barry B. from Barrie", "Norm S. from Belleville"]
  },
  {
    id: "23",
    category: "Apple Watch",
    name: "Apple Watch Series 6 Cellular, 44mm",
    image: watch6cellular44GreyNew,
    price: "509.97",
    rating: 4.8,
    quality: "Used - Like New",
    colour: "Space Grey",
    description: "Get this while it's still available! Virtually a brand new Apple Watch series 6 cellular at a competitive price!",
    reviews: ["Lightning quick watch, thank you iSellForLess!", "Amazing quality, works great!"],
    reviewers: ["Adam S. from Ottawa", "April L. from Etobicoke"]
  },
]

export default allProducts;