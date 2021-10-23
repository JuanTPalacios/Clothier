const request = require('supertest');
const server = require('./index');

const data = [
  {
      "title": "Core Essence Tights",
      "category": "Pants",
      "brand": "Craft",
      "image": "https://www.zappos.com/images/z/5/1/1/6/2/0/5116203-p-DETAILED.jpg",
      "productId": "9409552",
      "productUrl": "https://www.zappos.com/p/craft-core-essence-tights-black/product/9409552/color/3",
      "primaryKey": 226,
      "createdAt": "2021-09-23T06:17:27.618Z"
  },
  {
      "title": "Rideout Bib",
      "category": "Outerwear Pants and Sets",
      "brand": "Roxy",
      "image": "https://www.zappos.com/images/z/5/3/7/0/6/4/5370645-p-DETAILED.jpg",
      "productId": "9392514",
      "productUrl": "https://www.zappos.com/p/roxy-rideout-bib-true-black-1/product/9392514/color/188392",
      "primaryKey": 227,
      "createdAt": "2021-09-23T06:17:27.621Z"
  },
  {
      "title": "Launch 3.0 Storm Jacket",
      "category": "Coats & Outerwear",
      "brand": "Under Armour",
      "image": "https://www.zappos.com/images/z/5/2/3/4/8/5/5234856-p-DETAILED.jpg",
      "productId": "9464919",
      "productUrl": "https://www.zappos.com/p/under-armour-launch-3-0-storm-jacket-pitch-gray-reflective/product/9464919/color/894209",
      "primaryKey": 228,
      "createdAt": "2021-09-23T06:17:27.621Z"
  },
  {
      "title": "Crop Sweatshirt",
      "category": "Hoodies & Sweatshirts",
      "brand": "Hard Tail",
      "image": "https://www.zappos.com/images/z/5/2/9/7/5/3/5297538-p-DETAILED.jpg",
      "productId": "9490796",
      "productUrl": "https://www.zappos.com/p/hard-tail-crop-sweatshirt-alligator-lines-2/product/9490796/color/905241",
      "primaryKey": 229,
      "createdAt": "2021-09-23T06:17:27.622Z"
  },
  {
      "title": "Cable Knit Cotton 1/4 Zip Sweater",
      "category": "Sweaters",
      "brand": "Polo Ralph Lauren",
      "image": "https://www.zappos.com/images/z/5/5/8/4/6/9/5584691-p-DETAILED.jpg",
      "productId": "9616897",
      "productUrl": "https://www.zappos.com/p/polo-ralph-lauren-cable-knit-cotton-1-4-zip-sweater-royal-heather/product/9616897/color/164401",
      "primaryKey": 230,
      "createdAt": "2021-09-23T06:17:27.622Z"
  },
  {
      "title": "Classic Fit Garment Dyed Oxford Shirt",
      "category": "Shirts & Tops",
      "brand": "Polo Ralph Lauren",
      "image": "https://www.zappos.com/images/z/5/5/8/4/7/5/5584758-p-DETAILED.jpg",
      "productId": "9141625",
      "productUrl": "https://www.zappos.com/p/polo-ralph-lauren-classic-fit-garment-dyed-oxford-shirt-classic-wine/product/9141625/color/763407",
      "primaryKey": 232,
      "createdAt": "2021-09-23T06:17:27.622Z"
  },
  {
      "title": "Classic Fit Soft Cotton T-Shirt",
      "category": "Shirts & Tops",
      "brand": "Polo Ralph Lauren",
      "image": "https://www.zappos.com/images/z/5/5/8/4/8/1/5584819-p-DETAILED.jpg",
      "productId": "9353732",
      "productUrl": "https://www.zappos.com/p/polo-ralph-lauren-classic-fit-soft-cotton-t-shirt-andover-heather-dark-grey-heather/product/9353732/color/949798",
      "primaryKey": 233,
      "createdAt": "2021-09-23T06:17:27.623Z"
  },
  {
      "title": "Classic Fit Garment Dyed Oxford Shirt",
      "category": "Shirts & Tops",
      "brand": "Polo Ralph Lauren",
      "image": "https://www.zappos.com/images/z/5/5/8/4/7/5/5584758-p-DETAILED.jpg",
      "productId": "9141625",
      "productUrl": "https://www.zappos.com/p/polo-ralph-lauren-classic-fit-garment-dyed-oxford-shirt-new-forest/product/9141625/color/709047",
      "primaryKey": 231,
      "createdAt": "2021-09-23T06:17:27.622Z"
  },
  {
      "title": "The Iconic Rugby Shirt",
      "category": "Shirts & Tops",
      "brand": "Polo Ralph Lauren",
      "image": "https://www.zappos.com/images/z/5/5/8/3/2/5/5583259-p-DETAILED.jpg",
      "productId": "9146255",
      "productUrl": "https://www.zappos.com/p/polo-ralph-lauren-the-iconic-rugby-shirt-french-navy-arctic-yellow/product/9146255/color/949502",
      "primaryKey": 234,
      "createdAt": "2021-09-23T06:17:27.623Z"
  },
  {
      "title": "Legendary Jean Jacket",
      "category": "Coats & Outerwear",
      "brand": "Lee",
      "image": "https://www.zappos.com/images/z/5/4/4/8/0/9/5448092-p-DETAILED.jpg",
      "productId": "9558450",
      "productUrl": "https://www.zappos.com/p/lee-legendary-jean-jacket-black/product/9558450/color/3",
      "primaryKey": 236,
      "createdAt": "2021-09-23T06:17:27.623Z"
  },
  {
      "title": "Nola Essential Pants",
      "category": "Pants",
      "brand": "tasc Performance",
      "image": "https://www.zappos.com/images/z/5/3/8/6/3/4/5386345-p-DETAILED.jpg",
      "productId": "9529154",
      "productUrl": "https://www.zappos.com/p/tasc-performance-nola-essential-pants-black/product/9529154/color/3",
      "primaryKey": 237,
      "createdAt": "2021-09-23T06:17:27.623Z"
  },
  {
      "title": "Legendary Jean Jacket",
      "category": "Coats & Outerwear",
      "brand": "Lee",
      "image": "https://www.zappos.com/images/z/5/4/4/8/0/9/5448092-p-DETAILED.jpg",
      "productId": "9558450",
      "productUrl": "https://www.zappos.com/p/lee-legendary-jean-jacket-compass/product/9558450/color/588601",
      "primaryKey": 235,
      "createdAt": "2021-09-23T06:17:27.623Z"
  },
  {
      "title": "Airweight Bralette",
      "category": "Underwear & Intimates",
      "brand": "Splits59",
      "image": "https://www.zappos.com/images/z/5/4/1/1/0/5/5411051-p-DETAILED.jpg",
      "productId": "9540072",
      "productUrl": "https://www.zappos.com/p/splits59-airweight-bralette-black/product/9540072/color/3",
      "primaryKey": 238,
      "createdAt": "2021-09-23T06:17:27.623Z"
  },
  {
      "title": "Long Sleeve Slouchy V-Neck Tee",
      "category": "Shirts & Tops",
      "brand": "Hard Tail",
      "image": "https://www.zappos.com/images/z/4/7/9/6/4/5/4796454-p-DETAILED.jpg",
      "productId": "9265186",
      "productUrl": "https://www.zappos.com/p/hard-tail-long-sleeve-slouchy-v-neck-tee-black/product/9265186/color/3",
      "primaryKey": 239,
      "createdAt": "2021-09-23T06:17:27.624Z"
  },
  {
      "title": "Long Sleeve Puff Crew Neck",
      "category": "Sweaters",
      "brand": "7 For All Mankind",
      "image": "https://www.zappos.com/images/z/5/5/2/1/4/0/5521402-p-DETAILED.jpg",
      "productId": "9467282",
      "productUrl": "https://www.zappos.com/p/7-for-all-mankind-long-sleeve-puff-crew-neck-black/product/9467282/color/3",
      "primaryKey": 240,
      "createdAt": "2021-09-23T06:17:27.624Z"
  },
  {
      "title": "Spacedye High Waisted Capri Legging",
      "category": "Pants",
      "brand": "Beyond Yoga",
      "image": "https://www.zappos.com/images/z/5/4/5/7/1/8/5457189-p-DETAILED.jpg",
      "productId": "9621355",
      "productUrl": "https://www.zappos.com/p/beyond-yoga-spacedye-high-waisted-capri-legging-black-white-spacedye/product/9621355/color/647942",
      "primaryKey": 241,
      "createdAt": "2021-09-23T06:17:27.624Z"
  },
  {
      "title": "Lolly Quartz Washed Long Sleeve Crew Neck Balloon Sleeve Sweatshirt Dress",
      "category": "Dresses",
      "brand": "Michael Stars",
      "image": "https://www.zappos.com/images/z/5/5/1/1/6/1/5511614-p-DETAILED.jpg",
      "productId": "9588704",
      "productUrl": "https://www.zappos.com/p/michael-stars-lolly-quartz-washed-long-sleeve-crew-neck-balloon-sleeve-sweatshirt-dress-berry-combo/product/9588704/color/222903",
      "primaryKey": 242,
      "createdAt": "2021-09-23T06:17:27.624Z"
  },
  {
      "title": "Pocket Crew Neck Sweatshirt",
      "category": "Hoodies & Sweatshirts",
      "brand": "Linksoul",
      "image": "https://www.zappos.com/images/z/5/4/1/9/7/4/5419749-p-DETAILED.jpg",
      "productId": "9462577",
      "productUrl": "https://www.zappos.com/p/linksoul-pocket-crew-neck-sweatshirt-natural/product/9462577/color/19",
      "primaryKey": 243,
      "createdAt": "2021-09-23T06:17:27.624Z"
  },
  {
      "title": "Legendary Regular Fit Bootcut Jeans Plus",
      "category": "Jeans",
      "brand": "Lee",
      "image": "https://www.zappos.com/images/z/5/4/4/6/9/4/5446940-p-DETAILED.jpg",
      "productId": "9557658",
      "productUrl": "https://www.zappos.com/p/lee-legendary-regular-fit-bootcut-jeans-plus-compass/product/9557658/color/588601",
      "primaryKey": 244,
      "createdAt": "2021-09-23T06:17:27.624Z"
  },
  {
      "title": "Mazzy Pullover Sweatshirt",
      "category": "Hoodies & Sweatshirts",
      "brand": "Spiritual Gangster",
      "image": "https://www.zappos.com/images/z/5/5/7/8/5/3/5578539-p-DETAILED.jpg",
      "productId": "9395585",
      "productUrl": "https://www.zappos.com/p/spiritual-gangster-mazzy-pullover-sweatshirt-vintage-black/product/9395585/color/51023",
      "primaryKey": 245,
      "createdAt": "2021-09-23T06:17:27.624Z"
  },
  {
      "title": "Bridget Raglan Pullover",
      "category": "Hoodies & Sweatshirts",
      "brand": "Spiritual Gangster",
      "image": "https://www.zappos.com/images/z/5/5/7/8/5/4/5578541-p-DETAILED.jpg",
      "productId": "9456802",
      "productUrl": "https://www.zappos.com/p/spiritual-gangster-bridget-raglan-pullover-blackberry/product/9456802/color/3548",
      "primaryKey": 246,
      "createdAt": "2021-09-23T06:17:27.624Z"
  },
  {
      "title": "Muscle Tank",
      "category": "Shirts & Tops",
      "brand": "Spiritual Gangster",
      "image": "https://www.zappos.com/images/z/5/5/7/8/5/8/5578583-p-DETAILED.jpg",
      "productId": "9289408",
      "productUrl": "https://www.zappos.com/p/spiritual-gangster-muscle-tank-stone-5/product/9289408/color/285112",
      "primaryKey": 247,
      "createdAt": "2021-09-23T06:17:27.625Z"
  },
  {
      "title": "Grateful Crop Tank",
      "category": "Shirts & Tops",
      "brand": "Spiritual Gangster",
      "image": "https://www.zappos.com/images/z/5/5/7/8/5/9/5578592-p-DETAILED.jpg",
      "productId": "9254674",
      "productUrl": "https://www.zappos.com/p/spiritual-gangster-grateful-crop-tank-slate/product/9254674/color/642",
      "primaryKey": 248,
      "createdAt": "2021-09-23T06:17:27.627Z"
  },
  {
      "title": "Kindness Paradise Tank",
      "category": "Shirts & Tops",
      "brand": "Spiritual Gangster",
      "image": "https://www.zappos.com/images/z/5/5/7/8/5/9/5578596-p-DETAILED.jpg",
      "productId": "9614452",
      "productUrl": "https://www.zappos.com/p/spiritual-gangster-kindness-paradise-tank-stone/product/9614452/color/652",
      "primaryKey": 249,
      "createdAt": "2021-09-23T06:17:27.627Z"
  },
  {
      "title": "Mia High-Rise Fab Ab Toothpick in Loving",
      "category": "Jeans",
      "brand": "KUT from the Kloth",
      "image": "https://www.zappos.com/images/z/5/4/6/3/4/8/5463481-p-DETAILED.jpg",
      "productId": "9565654",
      "productUrl": "https://www.zappos.com/p/kut-from-the-kloth-mia-high-rise-fab-ab-toothpick-in-loving-loving/product/9565654/color/714678",
      "primaryKey": 250,
      "createdAt": "2021-09-23T06:17:27.628Z"
  },
  {
      "title": "Mia High-Rise Fab Ab Toothpick Skinny in Endless",
      "category": "Jeans",
      "brand": "KUT from the Kloth",
      "image": "https://www.zappos.com/images/z/5/4/6/3/5/1/5463519-p-DETAILED.jpg",
      "productId": "9565688",
      "productUrl": "https://www.zappos.com/p/kut-from-the-kloth-mia-high-rise-fab-ab-toothpick-skinny-in-endless-endless/product/9565688/color/234338",
      "primaryKey": 251,
      "createdAt": "2021-09-23T06:17:27.628Z"
  },
  {
      "title": "Milani Henley",
      "category": "Sweaters",
      "brand": "Prana",
      "image": "https://www.zappos.com/images/z/5/3/5/3/0/9/5353091-p-DETAILED.jpg",
      "productId": "9517341",
      "productUrl": "https://www.zappos.com/p/prana-milani-henley-gingerbread/product/9517341/color/113337",
      "primaryKey": 255,
      "createdAt": "2021-09-23T06:17:27.628Z"
  },
  {
      "title": "Escambia 1/2 Zip",
      "category": "Hoodies & Sweatshirts",
      "brand": "Prana",
      "image": "https://www.zappos.com/images/z/5/3/9/2/4/2/5392421-p-DETAILED.jpg",
      "productId": "9517947",
      "productUrl": "https://www.zappos.com/p/prana-escambia-1-2-zip-nautical/product/9517947/color/81942",
      "primaryKey": 253,
      "createdAt": "2021-09-23T06:17:27.628Z"
  },
  {
      "title": "Connie High-Rise Ankle Skinny in Prospective",
      "category": "Jeans",
      "brand": "KUT from the Kloth",
      "image": "https://www.zappos.com/images/z/5/4/6/3/6/7/5463671-p-DETAILED.jpg",
      "productId": "9565757",
      "productUrl": "https://www.zappos.com/p/kut-from-the-kloth-connie-high-rise-ankle-skinny-in-prospective-prospective/product/9565757/color/929977",
      "primaryKey": 259,
      "createdAt": "2021-09-23T06:17:27.628Z"
  },
  {
      "title": "Spacedye High Waisted Midi Leggings",
      "category": "Pants",
      "brand": "Beyond Yoga",
      "image": "https://www.zappos.com/images/z/4/3/9/5/2/3/4395236-p-DETAILED.jpg",
      "productId": "9101286",
      "productUrl": "https://www.zappos.com/p/beyond-yoga-spacedye-high-waisted-midi-leggings-black-white/product/9101286/color/151",
      "primaryKey": 263,
      "createdAt": "2021-09-23T06:17:27.629Z"
  },
  {
      "title": "Miranda Crew Neck Intarsia Jumper",
      "category": "Sweaters",
      "brand": "Joules",
      "image": "https://www.zappos.com/images/z/5/4/3/3/7/5/5433753-p-DETAILED.jpg",
      "productId": "9550950",
      "productUrl": "https://www.zappos.com/p/joules-miranda-crew-neck-intarsia-jumper-gold-dog/product/9550950/color/831543",
      "primaryKey": 268,
      "createdAt": "2021-09-23T06:17:27.629Z"
  },
  {
      "title": "Hellebore Vest",
      "category": "Coats & Outerwear",
      "brand": "Prana",
      "image": "https://www.zappos.com/images/z/5/4/7/8/0/2/5478028-p-DETAILED.jpg",
      "productId": "9573165",
      "productUrl": "https://www.zappos.com/p/prana-hellebore-vest-sage-color-block/product/9573165/color/931912",
      "primaryKey": 273,
      "createdAt": "2021-09-23T06:17:27.630Z"
  },
  {
      "title": "Luna Ankle",
      "category": "Jeans",
      "brand": "Joe's Jeans",
      "image": "https://www.zappos.com/images/z/5/5/2/5/5/8/5525589-p-DETAILED.jpg",
      "productId": "9594567",
      "productUrl": "https://www.zappos.com/p/joes-jeans-luna-ankle-2008/product/9594567/color/940078",
      "primaryKey": 278,
      "createdAt": "2021-09-23T06:17:27.630Z"
  },
  {
      "title": "7/8 High Waist Airbrush Leggings",
      "category": "Pants",
      "brand": "ALO",
      "image": "https://www.zappos.com/images/z/4/9/9/9/0/0/4999009-p-DETAILED.jpg",
      "productId": "8975283",
      "productUrl": "https://www.zappos.com/p/alo-7-8-high-waist-airbrush-leggings-black/product/8975283/color/3",
      "primaryKey": 283,
      "createdAt": "2021-09-23T06:17:27.631Z"
  },
  {
      "title": "Remi High-Rise Straight in Coated Chicory Coffee",
      "category": "Jeans",
      "brand": "Hudson Jeans",
      "image": "https://www.zappos.com/images/z/5/4/4/9/9/4/5449940-p-DETAILED.jpg",
      "productId": "9559343",
      "productUrl": "https://www.zappos.com/p/hudson-jeans-remi-high-rise-straight-in-coated-chicory-coffee-coated-chicory-coffee/product/9559343/color/928145",
      "primaryKey": 288,
      "createdAt": "2021-09-23T06:17:27.631Z"
  },
  {
      "title": "West Village Dress",
      "category": "Dresses",
      "brand": "Yumi Kim",
      "image": "https://www.zappos.com/images/z/5/4/9/3/3/5/5493353-p-DETAILED.jpg",
      "productId": "9420333",
      "productUrl": "https://www.zappos.com/p/yumi-kim-west-village-dress-swiss-dot-clay/product/9420333/color/950704",
      "primaryKey": 293,
      "createdAt": "2021-09-23T06:17:27.631Z"
  },
  {
      "title": "Tuscany II Jacket",
      "category": "Coats & Outerwear",
      "brand": "Obermeyer",
      "image": "https://www.zappos.com/images/z/5/0/8/3/7/8/5083789-p-DETAILED.jpg",
      "productId": "9398538",
      "productUrl": "https://www.zappos.com/p/obermeyer-tuscany-ii-jacket-black-ice/product/9398538/color/202622",
      "primaryKey": 298,
      "createdAt": "2021-09-23T06:17:27.632Z"
  },
  {
      "title": "Dare Racerback Bra",
      "category": "Underwear & Intimates",
      "brand": "Brooks",
      "image": "https://www.zappos.com/images/z/4/8/8/0/3/8/4880389-p-DETAILED.jpg",
      "productId": "9308462",
      "productUrl": "https://www.zappos.com/p/brooks-dare-racerback-bra-black/product/9308462/color/3",
      "primaryKey": 303,
      "createdAt": "2021-09-23T06:17:27.632Z"
  },
  {
      "title": "Sculpting Slim Fit Slim Leg Pull-On Jeans",
      "category": "Jeans",
      "brand": "Lee",
      "image": "https://www.zappos.com/images/z/5/4/4/6/5/9/5446591-p-DETAILED.jpg",
      "productId": "9557433",
      "productUrl": "https://www.zappos.com/p/lee-sculpting-slim-fit-slim-leg-pull-on-jeans-infinity/product/9557433/color/92067",
      "primaryKey": 308,
      "createdAt": "2021-09-23T06:17:27.632Z"
  },
  {
      "title": "Benton Springs&#8482; II Printed Fleece (Little Kids/Big Kids)",
      "category": "Coats & Outerwear",
      "brand": "Columbia Kids",
      "image": "https://www.zappos.com/images/z/5/0/8/9/8/2/5089829-p-DETAILED.jpg",
      "productId": "8538910",
      "productUrl": "https://www.zappos.com/p/columbia-kids-benton-springss-ii-printed-fleece-little-kids-big-kids-plum-fairisle-dot-print/product/8538910/color/870320",
      "primaryKey": 313,
      "createdAt": "2021-09-23T06:17:27.633Z"
  },
  {
      "title": "Charlie Ankle in Ignite",
      "category": "Jeans",
      "brand": "Joe's Jeans",
      "image": "https://www.zappos.com/images/z/5/2/7/0/0/4/5270049-p-DETAILED.jpg",
      "productId": "9477984",
      "productUrl": "https://www.zappos.com/p/joes-jeans-charlie-ankle-in-ignite-ignite/product/9477984/color/587684",
      "primaryKey": 318,
      "createdAt": "2021-09-23T06:17:27.633Z"
  },
  {
      "title": "Walk On By 5K Parka",
      "category": "Coats & Outerwear",
      "brand": "Volcom",
      "image": "https://www.zappos.com/images/z/5/4/1/5/9/4/5415949-p-DETAILED.jpg",
      "productId": "9314392",
      "productUrl": "https://www.zappos.com/p/volcom-walk-on-by-5k-parka-black-1/product/9314392/color/125647",
      "primaryKey": 323,
      "createdAt": "2021-09-23T06:17:27.634Z"
  },
  {
      "title": "The Icon Ankle in Stephaney",
      "category": "Jeans",
      "brand": "Joe's Jeans",
      "image": "https://www.zappos.com/images/z/4/8/3/1/1/2/4831127-p-DETAILED.jpg",
      "productId": "9282252",
      "productUrl": "https://www.zappos.com/p/joes-jeans-the-icon-ankle-in-stephaney-stephaney/product/9282252/color/831412",
      "primaryKey": 252,
      "createdAt": "2021-09-23T06:17:27.628Z"
  },
  {
      "title": "High-Rise Twiggy in Inifinite",
      "category": "Jeans",
      "brand": "Joe's Jeans",
      "image": "https://www.zappos.com/images/z/5/1/6/4/9/5/5164956-p-DETAILED.jpg",
      "productId": "9432201",
      "productUrl": "https://www.zappos.com/p/joes-jeans-high-rise-twiggy-in-inifinite-inifinite/product/9432201/color/881743",
      "primaryKey": 260,
      "createdAt": "2021-09-23T06:17:27.628Z"
  },
  {
      "title": "Skinnylicious Ankle Pants with Control Top Panel",
      "category": "Pants",
      "brand": "Jamie Sadock",
      "image": "https://www.zappos.com/images/z/5/0/5/1/0/3/5051036-p-DETAILED.jpg",
      "productId": "9383703",
      "productUrl": "https://www.zappos.com/p/jamie-sadock-skinnylicious-ankle-pants-with-control-top-panel-sugar-white/product/9383703/color/311054",
      "primaryKey": 265,
      "createdAt": "2021-09-23T06:17:27.629Z"
  },
  {
      "title": "Double Trouble&#8482; Jacket (Infant)",
      "category": "Coats & Outerwear",
      "brand": "Columbia Kids",
      "image": "https://www.zappos.com/images/z/5/0/9/0/1/8/5090187-p-DETAILED.jpg",
      "productId": "8143430",
      "productUrl": "https://www.zappos.com/p/columbia-kids-double-troublee-jacket-infant-bright-indigo/product/8143430/color/416719",
      "primaryKey": 270,
      "createdAt": "2021-09-23T06:17:27.629Z"
  },
  {
      "title": "Hybrid Oxford Button-Down Shirt",
      "category": "Shirts & Tops",
      "brand": "Linksoul",
      "image": "https://www.zappos.com/images/z/5/4/1/9/7/7/5419774-p-DETAILED.jpg",
      "productId": "9544039",
      "productUrl": "https://www.zappos.com/p/linksoul-hybrid-oxford-button-down-shirt-black/product/9544039/color/3",
      "primaryKey": 275,
      "createdAt": "2021-09-23T06:17:27.630Z"
  },
  {
      "title": "Edge Jr. OTC Midweight with Cushion (Toddler/Little Kid/Big Kid)",
      "category": "Socks",
      "brand": "Darn Tough Vermont",
      "image": "https://www.zappos.com/images/z/5/1/4/2/0/9/5142092-p-DETAILED.jpg",
      "productId": "9421235",
      "productUrl": "https://www.zappos.com/p/darn-tough-vermont-edge-jr-otc-midweight-with-cushion-toddler-little-kid-big-kid-nightshade/product/9421235/color/134745",
      "primaryKey": 280,
      "createdAt": "2021-09-23T06:17:27.630Z"
  },
  {
      "title": "Remi High-Rise Straight Crop in Dream Fantasy",
      "category": "Jeans",
      "brand": "Hudson Jeans",
      "image": "https://www.zappos.com/images/z/5/4/4/9/9/0/5449909-p-DETAILED.jpg",
      "productId": "9559327",
      "productUrl": "https://www.zappos.com/p/hudson-jeans-remi-high-rise-straight-crop-in-dream-fantasy-dream-fantasy/product/9559327/color/928137",
      "primaryKey": 285,
      "createdAt": "2021-09-23T06:17:27.631Z"
  },
  {
      "title": "Jenna Dress",
      "category": "Dresses",
      "brand": "Yumi Kim",
      "image": "https://www.zappos.com/images/z/5/5/8/9/4/7/5589473-p-DETAILED.jpg",
      "productId": "9533094",
      "productUrl": "https://www.zappos.com/p/yumi-kim-jenna-dress-rustic-paisley-black/product/9533094/color/950702",
      "primaryKey": 290,
      "createdAt": "2021-09-23T06:17:27.631Z"
  },
  {
      "title": "Glennaker&#8482; Rain Jacket (Toddler)",
      "category": "Coats & Outerwear",
      "brand": "Columbia Kids",
      "image": "https://www.zappos.com/images/z/5/0/8/4/6/8/5084686-p-DETAILED.jpg",
      "productId": "8463584",
      "productUrl": "https://www.zappos.com/p/columbia-kids-glennakerr-rain-jacket-toddler-collegiate-navy-city-grey/product/8463584/color/869469",
      "primaryKey": 295,
      "createdAt": "2021-09-23T06:17:27.632Z"
  },
  {
      "title": "Transform Leggings",
      "category": "Pants",
      "brand": "Prana",
      "image": "https://www.zappos.com/images/z/5/3/5/4/3/4/5354340-p-DETAILED.jpg",
      "productId": "9517935",
      "productUrl": "https://www.zappos.com/p/prana-transform-leggings-charcoal-stripe/product/9517935/color/160368",
      "primaryKey": 300,
      "createdAt": "2021-09-23T06:17:27.632Z"
  },
  {
      "title": "Rosa Faia Twin Underwire Bra 5490",
      "category": "Underwear & Intimates",
      "brand": "Anita",
      "image": "https://www.zappos.com/images/z/2/6/6/8/0/4/2668045-p-DETAILED.jpg",
      "productId": "8317178",
      "productUrl": "https://www.zappos.com/p/anita-rosa-faia-twin-underwire-bra-5490-rosewood/product/8317178/color/1214",
      "primaryKey": 305,
      "createdAt": "2021-09-23T06:17:27.632Z"
  },
  {
      "title": "Legendary Slim Fit Skinny Jeans",
      "category": "Jeans",
      "brand": "Lee",
      "image": "https://www.zappos.com/images/z/5/4/4/6/6/0/5446608-p-DETAILED.jpg",
      "productId": "9557437",
      "productUrl": "https://www.zappos.com/p/lee-legendary-slim-fit-skinny-jeans-lagoon-blue/product/9557437/color/108059",
      "primaryKey": 310,
      "createdAt": "2021-09-23T06:17:27.633Z"
  },
  {
      "title": "Multipath Hooded Insulated Jacket",
      "category": "Coats & Outerwear",
      "brand": "Burton",
      "image": "https://www.zappos.com/images/z/5/3/8/2/5/9/5382595-p-DETAILED.jpg",
      "productId": "9528061",
      "productUrl": "https://www.zappos.com/p/burton-multipath-hooded-insulated-jacket-foxglove-violet/product/9528061/color/872525",
      "primaryKey": 315,
      "createdAt": "2021-09-23T06:17:27.633Z"
  },
  {
      "title": "Impact Run Tights",
      "category": "Pants",
      "brand": "New Balance",
      "image": "https://www.zappos.com/images/z/5/2/6/4/7/0/5264709-p-DETAILED.jpg",
      "productId": "9475708",
      "productUrl": "https://www.zappos.com/p/new-balance-impact-run-tights-black/product/9475708/color/3",
      "primaryKey": 320,
      "createdAt": "2021-09-23T06:17:27.633Z"
  },
  {
      "title": "Cotton Mesh 1/4 Zip Sweater",
      "category": "Sweaters",
      "brand": "Polo Ralph Lauren",
      "image": "https://www.zappos.com/images/z/5/5/8/3/0/6/5583065-p-DETAILED.jpg",
      "productId": "9616172",
      "productUrl": "https://www.zappos.com/p/polo-ralph-lauren-cotton-mesh-1-4-zip-sweater-park-avenue-red/product/9616172/color/672223",
      "primaryKey": 257,
      "createdAt": "2021-09-23T06:17:27.628Z"
  },
  {
      "title": "All Day Straight Leg Pants (Plus)",
      "category": "Jeans",
      "brand": "Lee",
      "image": "https://www.zappos.com/images/z/5/4/4/8/0/5/5448054-p-DETAILED.jpg",
      "productId": "9558430",
      "productUrl": "https://www.zappos.com/p/lee-all-day-straight-leg-pants-plus-imperial-blue/product/9558430/color/12680",
      "primaryKey": 261,
      "createdAt": "2021-09-23T06:17:27.629Z"
  },
  {
      "title": "Esla Skirt",
      "category": "Skirts",
      "brand": "Prana",
      "image": "https://www.zappos.com/images/z/5/5/6/9/3/6/5569365-p-DETAILED.jpg",
      "productId": "9611199",
      "productUrl": "https://www.zappos.com/p/prana-esla-skirt-slate-green/product/9611199/color/35303",
      "primaryKey": 266,
      "createdAt": "2021-09-23T06:17:27.629Z"
  },
  {
      "title": "Easy V-Neck Tee",
      "category": "Shirts & Tops",
      "brand": "tasc Performance",
      "image": "https://www.zappos.com/images/z/5/2/0/8/1/4/5208147-p-DETAILED.jpg",
      "productId": "9453505",
      "productUrl": "https://www.zappos.com/p/tasc-performance-easy-v-neck-tee-black/product/9453505/color/3",
      "primaryKey": 271,
      "createdAt": "2021-09-23T06:17:27.629Z"
  },
  {
      "title": "Adicolor Classics Bra Top",
      "category": "Shirts & Tops",
      "brand": "adidas Originals",
      "image": "https://www.zappos.com/images/z/5/3/5/6/4/0/5356408-p-DETAILED.jpg",
      "productId": "9518755",
      "productUrl": "https://www.zappos.com/p/adidas-originals-adicolor-classics-bra-top-rose-tone/product/9518755/color/450679",
      "primaryKey": 276,
      "createdAt": "2021-09-23T06:17:27.630Z"
  },
  {
      "title": "Krista Super Skinny Ankle in Sunset Canyon",
      "category": "Jeans",
      "brand": "Hudson Jeans",
      "image": "https://www.zappos.com/images/z/5/4/4/9/9/0/5449901-p-DETAILED.jpg",
      "productId": "9559323",
      "productUrl": "https://www.zappos.com/p/hudson-jeans-krista-super-skinny-ankle-in-sunset-canyon-sunset-canyon/product/9559323/color/928136",
      "primaryKey": 281,
      "createdAt": "2021-09-23T06:17:27.630Z"
  },
  {
      "title": "Knit Trouser Joggers in Charcoal Heather",
      "category": "Pants",
      "brand": "Hudson Jeans",
      "image": "https://www.zappos.com/images/z/5/4/4/9/9/2/5449929-p-DETAILED.jpg",
      "productId": "9559336",
      "productUrl": "https://www.zappos.com/p/hudson-jeans-knit-trouser-joggers-in-charcoal-heather-charcoal-heather/product/9559336/color/29105",
      "primaryKey": 286,
      "createdAt": "2021-09-23T06:17:27.631Z"
  },
  {
      "title": "Class Act Dress",
      "category": "Dresses",
      "brand": "Yumi Kim",
      "image": "https://www.zappos.com/images/z/5/5/8/9/4/7/5589474-p-DETAILED.jpg",
      "productId": "9160796",
      "productUrl": "https://www.zappos.com/p/yumi-kim-class-act-dress-its-magic-ink/product/9160796/color/950703",
      "primaryKey": 291,
      "createdAt": "2021-09-23T06:17:27.631Z"
  },
  {
      "title": "Plus Size Pintuck Blouse",
      "category": "Shirts & Tops",
      "brand": "NYDJ Plus Size",
      "image": "https://www.zappos.com/images/z/4/0/3/6/8/8/4036882-p-DETAILED.jpg",
      "productId": "8910826",
      "productUrl": "https://www.zappos.com/p/nydj-plus-size-plus-size-pintuck-blouse-elmhurst-park/product/8910826/color/858764",
      "primaryKey": 296,
      "createdAt": "2021-09-23T06:17:27.632Z"
  },
  {
      "title": "Esla Vest",
      "category": "Coats & Outerwear",
      "brand": "Prana",
      "image": "https://www.zappos.com/images/z/5/3/5/4/3/7/5354374-p-DETAILED.jpg",
      "productId": "9517946",
      "productUrl": "https://www.zappos.com/p/prana-esla-vest-black/product/9517946/color/3",
      "primaryKey": 301,
      "createdAt": "2021-09-23T06:17:27.632Z"
  },
  {
      "title": "Flex Motion Regular Fit Bootcut Jeans",
      "category": "Jeans",
      "brand": "Lee",
      "image": "https://www.zappos.com/images/z/5/4/4/6/5/9/5446593-p-DETAILED.jpg",
      "productId": "9624165",
      "productUrl": "https://www.zappos.com/p/lee-flex-motion-regular-fit-bootcut-jeans-renegade/product/9624165/color/203677",
      "primaryKey": 306,
      "createdAt": "2021-09-23T06:17:27.632Z"
  },
  {
      "title": "Legendary Slim Fit Skinny Jeans",
      "category": "Jeans",
      "brand": "Lee",
      "image": "https://www.zappos.com/images/z/5/4/4/6/6/0/5446608-p-DETAILED.jpg",
      "productId": "9557437",
      "productUrl": "https://www.zappos.com/p/lee-legendary-slim-fit-skinny-jeans-blackout/product/9557437/color/17860",
      "primaryKey": 311,
      "createdAt": "2021-09-23T06:17:27.633Z"
  },
  {
      "title": "Essentials Crew",
      "category": "Hoodies & Sweatshirts",
      "brand": "New Balance",
      "image": "https://www.zappos.com/images/z/5/1/0/8/7/7/5108774-p-DETAILED.jpg",
      "productId": "9406519",
      "productUrl": "https://www.zappos.com/p/new-balance-essentials-crew-black/product/9406519/color/3",
      "primaryKey": 316,
      "createdAt": "2021-09-23T06:17:27.633Z"
  },
  {
      "title": "Lil Hoodie",
      "category": "Hoodies & Sweatshirts",
      "brand": "Volcom",
      "image": "https://www.zappos.com/images/z/5/3/1/8/5/5/5318553-p-DETAILED.jpg",
      "productId": "9032421",
      "productUrl": "https://www.zappos.com/p/volcom-lil-hoodie-blue-fog/product/9032421/color/133823",
      "primaryKey": 321,
      "createdAt": "2021-09-23T06:17:27.633Z"
  },
  {
      "title": "Cindy w/ Exposed Button in Skysong",
      "category": "Jeans",
      "brand": "Paige",
      "image": "https://www.zappos.com/images/z/5/3/2/0/2/2/5320228-p-DETAILED.jpg",
      "productId": "9502140",
      "productUrl": "https://www.zappos.com/p/paige-cindy-w-exposed-button-in-skysong-skysong/product/9502140/color/908195",
      "primaryKey": 254,
      "createdAt": "2021-09-23T06:17:27.628Z"
  },
  {
      "title": "Cotton 1/4 Zip Sweater",
      "category": "Sweaters",
      "brand": "Polo Ralph Lauren",
      "image": "https://www.zappos.com/images/z/5/5/8/3/0/6/5583066-p-DETAILED.jpg",
      "productId": "9616171",
      "productUrl": "https://www.zappos.com/p/polo-ralph-lauren-cotton-1-4-zip-sweater-dark-grey-heather/product/9616171/color/112311",
      "primaryKey": 258,
      "createdAt": "2021-09-23T06:17:27.628Z"
  },
  {
      "title": "Halle Pant",
      "category": "Pants",
      "brand": "Prana",
      "image": "https://www.zappos.com/images/z/4/9/2/2/6/2/4922622-p-DETAILED.jpg",
      "productId": "8070628",
      "productUrl": "https://www.zappos.com/p/prana-halle-pant-slate-green/product/8070628/color/35303",
      "primaryKey": 262,
      "createdAt": "2021-09-23T06:17:27.629Z"
  },
  {
      "title": "Terminal Tackle&#8482; L/S Tee (Little Kids/Big Kids)",
      "category": "Shirts & Tops",
      "brand": "Columbia Kids",
      "image": "https://www.zappos.com/images/z/5/0/8/4/1/9/5084199-p-DETAILED.jpg",
      "productId": "8240554",
      "productUrl": "https://www.zappos.com/p/columbia-kids-terminal-tacklee-l-s-tee-little-kids-big-kids-lime-glow-white-logo/product/8240554/color/896127",
      "primaryKey": 267,
      "createdAt": "2021-09-23T06:17:27.629Z"
  },
  {
      "title": "Solid Metti Crew",
      "category": "Hoodies & Sweatshirts",
      "brand": "FP Movement",
      "image": "https://www.zappos.com/images/z/5/3/8/8/4/8/5388483-p-DETAILED.jpg",
      "productId": "9482501",
      "productUrl": "https://www.zappos.com/p/fp-movement-solid-metti-crew-miami-pink/product/9482501/color/202558",
      "primaryKey": 272,
      "createdAt": "2021-09-23T06:17:27.630Z"
  },
  {
      "title": "Sunsense&#174; 35 SPF Lightweight Long Sleeve Crew Neck Crop Layering Top",
      "category": "Shirts & Tops",
      "brand": "Jamie Sadock",
      "image": "https://www.zappos.com/images/z/5/3/8/1/4/5/5381455-p-DETAILED.jpg",
      "productId": "9218074",
      "productUrl": "https://www.zappos.com/p/jamie-sadock-sunsense-35-spf-lightweight-long-sleeve-crew-neck-crop-layering-top-jet-black/product/9218074/color/42005",
      "primaryKey": 277,
      "createdAt": "2021-09-23T06:17:27.630Z"
  },
  {
      "title": "90s Hoodie",
      "category": "Hoodies & Sweatshirts",
      "brand": "Hudson Jeans",
      "image": "https://www.zappos.com/images/z/5/4/4/9/9/2/5449927-p-DETAILED.jpg",
      "productId": "9559313",
      "productUrl": "https://www.zappos.com/p/hudson-jeans-90s-hoodie-charcoal-heather/product/9559313/color/29105",
      "primaryKey": 282,
      "createdAt": "2021-09-23T06:17:27.630Z"
  },
  {
      "title": "Nico Mid-Rise Super Skinny Ankle in Tobacco Brown Coat",
      "category": "Jeans",
      "brand": "Hudson Jeans",
      "image": "https://www.zappos.com/images/z/5/4/4/9/9/3/5449939-p-DETAILED.jpg",
      "productId": "9559342",
      "productUrl": "https://www.zappos.com/p/hudson-jeans-nico-mid-rise-super-skinny-ankle-in-tobacco-brown-coat-tobacco-brown-coat/product/9559342/color/928144",
      "primaryKey": 287,
      "createdAt": "2021-09-23T06:17:27.631Z"
  },
  {
      "title": "Class Act Dress",
      "category": "Dresses",
      "brand": "Yumi Kim",
      "image": "https://www.zappos.com/images/z/5/5/8/9/4/7/5589474-p-DETAILED.jpg",
      "productId": "9160796",
      "productUrl": "https://www.zappos.com/p/yumi-kim-class-act-dress-swiss-dot-niagra/product/9160796/color/950696",
      "primaryKey": 292,
      "createdAt": "2021-09-23T06:17:27.631Z"
  },
  {
      "title": "Mighty Mogul&#8482; II Jacket (Little Kids/Big Kids)",
      "category": "Coats & Outerwear",
      "brand": "Columbia Kids",
      "image": "https://www.zappos.com/images/z/5/3/9/9/2/5/5399259-p-DETAILED.jpg",
      "productId": "9534171",
      "productUrl": "https://www.zappos.com/p/columbia-kids-mighty-mogull-ii-jacket-little-kids-big-kids-nocturnal-smorgas-berg-nocturnal/product/9534171/color/921438",
      "primaryKey": 297,
      "createdAt": "2021-09-23T06:17:27.632Z"
  },
  {
      "title": "Esla Vest",
      "category": "Coats & Outerwear",
      "brand": "Prana",
      "image": "https://www.zappos.com/images/z/5/3/5/4/3/7/5354374-p-DETAILED.jpg",
      "productId": "9517946",
      "productUrl": "https://www.zappos.com/p/prana-esla-vest-slate-green/product/9517946/color/35303",
      "primaryKey": 302,
      "createdAt": "2021-09-23T06:17:27.632Z"
  },
  {
      "title": "Flex Motion Regular Fit Straight Leg Jeans",
      "category": "Jeans",
      "brand": "Lee",
      "image": "https://www.zappos.com/images/z/5/4/4/6/5/8/5446585-p-DETAILED.jpg",
      "productId": "9644546",
      "productUrl": "https://www.zappos.com/p/lee-flex-motion-regular-fit-straight-leg-jeans-niagara/product/9644546/color/219677",
      "primaryKey": 307,
      "createdAt": "2021-09-23T06:17:27.632Z"
  },
  {
      "title": "Legendary Slim Fit Skinny Jeans",
      "category": "Jeans",
      "brand": "Lee",
      "image": "https://www.zappos.com/images/z/5/4/4/6/6/0/5446608-p-DETAILED.jpg",
      "productId": "9557437",
      "productUrl": "https://www.zappos.com/p/lee-legendary-slim-fit-skinny-jeans-solstice/product/9557437/color/85429",
      "primaryKey": 312,
      "createdAt": "2021-09-23T06:17:27.633Z"
  },
  {
      "title": "Icon Ankle in Gemini",
      "category": "Jeans",
      "brand": "Joe's Jeans",
      "image": "https://www.zappos.com/images/z/5/2/7/0/0/4/5270041-p-DETAILED.jpg",
      "productId": "9477977",
      "productUrl": "https://www.zappos.com/p/joes-jeans-icon-ankle-in-gemini-gemini/product/9477977/color/340223",
      "primaryKey": 317,
      "createdAt": "2021-09-23T06:17:27.633Z"
  },
  {
      "title": "Firnanda Shirt Jacket",
      "category": "Shirts & Tops",
      "brand": "Joe's Jeans",
      "image": "https://www.zappos.com/images/z/5/5/2/5/6/6/5525666-p-DETAILED.jpg",
      "productId": "9594614",
      "productUrl": "https://www.zappos.com/p/joes-jeans-firnanda-shirt-jacket-plaid-5/product/9594614/color/940089",
      "primaryKey": 322,
      "createdAt": "2021-09-23T06:17:27.633Z"
  },
  {
      "title": "Azure Sweater",
      "category": "Sweaters",
      "brand": "Prana",
      "image": "https://www.zappos.com/images/z/5/3/5/3/1/0/5353105-p-DETAILED.jpg",
      "productId": "9517333",
      "productUrl": "https://www.zappos.com/p/prana-azure-sweater-danish-blue/product/9517333/color/208483",
      "primaryKey": 256,
      "createdAt": "2021-09-23T06:17:27.628Z"
  },
  {
      "title": "Impact Run Woven Pants",
      "category": "Pants",
      "brand": "New Balance",
      "image": "https://www.zappos.com/images/z/5/2/6/7/8/2/5267829-p-DETAILED.jpg",
      "productId": "9477029",
      "productUrl": "https://www.zappos.com/p/new-balance-impact-run-woven-pants-black/product/9477029/color/3",
      "primaryKey": 264,
      "createdAt": "2021-09-23T06:17:27.629Z"
  },
  {
      "title": "Double Trouble&#8482; Jacket (Infant)",
      "category": "Coats & Outerwear",
      "brand": "Columbia Kids",
      "image": "https://www.zappos.com/images/z/5/0/9/0/1/8/5090187-p-DETAILED.jpg",
      "productId": "8143430",
      "productUrl": "https://www.zappos.com/p/columbia-kids-double-troublee-jacket-infant-black-2/product/8143430/color/60041",
      "primaryKey": 269,
      "createdAt": "2021-09-23T06:17:27.629Z"
  },
  {
      "title": "Momento Crop Top",
      "category": "Shirts & Tops",
      "brand": "Prana",
      "image": "https://www.zappos.com/images/z/5/4/7/8/0/4/5478046-p-DETAILED.jpg",
      "productId": "9573171",
      "productUrl": "https://www.zappos.com/p/prana-momento-crop-top-nautical/product/9573171/color/81942",
      "primaryKey": 274,
      "createdAt": "2021-09-23T06:17:27.630Z"
  },
  {
      "title": "Surfers Original Pants",
      "category": "Pants",
      "brand": "Rip Curl",
      "image": "https://www.zappos.com/images/z/5/3/9/0/6/7/5390671-p-DETAILED.jpg",
      "productId": "9530749",
      "productUrl": "https://www.zappos.com/p/rip-curl-surfers-original-pants-washed-black/product/9530749/color/96425",
      "primaryKey": 279,
      "createdAt": "2021-09-23T06:17:27.630Z"
  },
  {
      "title": "Merino 250 Drape Neck Hoodie",
      "category": "Hoodies & Sweatshirts",
      "brand": "Smartwool",
      "image": "https://www.zappos.com/images/z/5/3/7/8/2/7/5378273-p-DETAILED.jpg",
      "productId": "9230094",
      "productUrl": "https://www.zappos.com/p/smartwool-merino-250-drape-neck-hoodie-deep-navy/product/9230094/color/61010",
      "primaryKey": 284,
      "createdAt": "2021-09-23T06:17:27.631Z"
  },
  {
      "title": "Sycamore Long Sleeve Flannel (Big Kids)",
      "category": "Shirts & Tops",
      "brand": "Vans Kids",
      "image": "https://www.zappos.com/images/z/5/4/8/2/3/5/5482357-p-DETAILED.jpg",
      "productId": "8965715",
      "productUrl": "https://www.zappos.com/p/vans-kids-sycamore-long-sleeve-flannel-big-kids-blue-coral-demitasse/product/8965715/color/932897",
      "primaryKey": 289,
      "createdAt": "2021-09-23T06:17:27.631Z"
  },
  {
      "title": "Glennaker&#8482; Rain Jacket (Toddler)",
      "category": "Coats & Outerwear",
      "brand": "Columbia Kids",
      "image": "https://www.zappos.com/images/z/5/0/8/4/6/8/5084686-p-DETAILED.jpg",
      "productId": "8463584",
      "productUrl": "https://www.zappos.com/p/columbia-kids-glennakerr-rain-jacket-toddler-shark/product/8463584/color/19666",
      "primaryKey": 294,
      "createdAt": "2021-09-23T06:17:27.631Z"
  },
  {
      "title": "Mickey Joggers Set (Toddler)",
      "category": "Kids' Sets",
      "brand": "Pippa & Julie",
      "image": "https://www.zappos.com/images/z/5/5/9/9/7/7/5599774-p-DETAILED.jpg",
      "productId": "9623559",
      "productUrl": "https://www.zappos.com/p/pippa-julie-mickey-joggers-set-toddler-multi/product/9623559/color/767",
      "primaryKey": 299,
      "createdAt": "2021-09-23T06:17:27.632Z"
  },
  {
      "title": "Unwind Cargo Pants",
      "category": "Pants",
      "brand": "ALO",
      "image": "https://www.zappos.com/images/z/4/9/9/9/0/5/4999055-p-DETAILED.jpg",
      "productId": "9358535",
      "productUrl": "https://www.zappos.com/p/alo-unwind-cargo-pants-black/product/9358535/color/3",
      "primaryKey": 304,
      "createdAt": "2021-09-23T06:17:27.632Z"
  },
  {
      "title": "Sculpting Slim Fit Slim Leg Pull-On Jeans",
      "category": "Jeans",
      "brand": "Lee",
      "image": "https://www.zappos.com/images/z/5/4/4/6/5/9/5446591-p-DETAILED.jpg",
      "productId": "9557433",
      "productUrl": "https://www.zappos.com/p/lee-sculpting-slim-fit-slim-leg-pull-on-jeans-black/product/9557433/color/3",
      "primaryKey": 309,
      "createdAt": "2021-09-23T06:17:27.633Z"
  },
  {
      "title": "Rupert Denim Jacket",
      "category": "Coats & Outerwear",
      "brand": "Jag Jeans",
      "image": "https://www.zappos.com/images/z/5/4/8/9/3/4/5489342-p-DETAILED.jpg",
      "productId": "9059448",
      "productUrl": "https://www.zappos.com/p/jag-jeans-rupert-denim-jacket-miami/product/9059448/color/8378",
      "primaryKey": 314,
      "createdAt": "2021-09-23T06:17:27.633Z"
  },
  {
      "title": "Perfectly Fit Flex (Infinite Flex) Lightly Lined",
      "category": "Underwear & Intimates",
      "brand": "Calvin Klein Underwear",
      "image": "https://www.zappos.com/images/z/5/4/4/1/3/2/5441327-p-DETAILED.jpg",
      "productId": "9554754",
      "productUrl": "https://www.zappos.com/p/calvin-klein-underwear-perfectly-fit-flex-infinite-flex-lightly-lined-black/product/9554754/color/3",
      "primaryKey": 319,
      "createdAt": "2021-09-23T06:17:27.633Z"
  }
]

afterAll(() => {
 server.close();
});

//TODO: Check for username uniqueness
describe('Testing of endpoints on server', () => {
 test('GET / should not work', async () => {
  const response = await request(server).get('/');
  expect(response.status).toEqual(404);
 });

 test('GET /users should return all users', async () => {
  const res = await request(server).get('/users');
  expect(res.status).toEqual(200);
 });

 test('POST /users should create a user', async () => {
  const addUser = await request(server)
    .post('/users')
    .send({
      "email": "testUser1234@gmail.com",
      "password" : "password",
      "firstName" : "TestFirstName",
      "lastName" : "TestLastName",
      "username" : "userName123"
    })
    .expect(201);
  expect(addUser.body).toHaveProperty('primaryKey');
 });

 test('POST /login should login a user with correct login', (done : Function) => {
  request(server)
    .post('/login')
    .send({
      "email": "testUser1234@gmail.com",
      "password" : "password"
    })
    .expect(200)
    .then((response: any) => {
      expect(response.body).toHaveProperty('accessToken');
      done();
    })
    .catch((err : any) => done(err));
 });

 test('POST /login should not login a user with incorrect login', (done : Function) => {
   request(server)
    .post('/login')
    .send({
      "email": "testUser1234@gmail.com",
      "password" : "ihuhiufsdiuhfihufsd"
    })
    .expect(401)
    .end((err : any) => {
      if(err) return done(err);
      return done();
    })
 });

 test('GET /me should get user info', async () => {
   const login = await request(server)
   .post('/login')
   .send({
     "email": "testUser1234@gmail.com",
     "password" : "password"
   })
   await request(server)
    .get('/me')
    .set('authorization','Bearer ' + login.body['accessToken'])
    .expect(200)
 });

 test('GET /items should get items', async () => {
   const result = await request(server).get('/items');
   if(result.body.length !== 98){
    await request(server).post('/items').send(data);
    const updatedRes = await request(server).get('/items');
    expect(updatedRes.body.length).toEqual(98);
  }else{expect(result.body.length).toEqual(98);}
 });

 test('POST /OneItem should get item by id if exists', (done) => {
  request(server)
    .post('/OneItem')
    .send({
      ItemId: 226
    })
    .expect(200)
    .end((err:any) => {
      if(err) return done(err);
      return done();
    })
 });
 test('POST /OneItem should error if id does not exist', (done) => {
   request(server)
    .post('/OneItem')
    .send({
      ItemId: 0
    })
    .expect(204)
    .end((err:any) => {
      if(err) return done(err);
      return done();
    })
 });
 test('POST /follow should follow a user', (done) => {
   request(server)
    .post('/follow')
    .send({
      currentUserId: 1,
      profileUser: 2,
    })
    .expect(201)
    .end((err:any) => {
      if(err) return done(err);
      return done();
    })
 });

 test('POST /follow should error if follow user id does not exist', (done) => {
   request(server)
    .post('/follow')
    .send({
      currentUserId: 6444454848,
      profileUser: 2,
    })
    .expect(404)
    .end((err:any) => {
      if(err) return done(err);
      return done();
    })
 });

  test('POST /follow should error if user id does not exist', (done) => {
    request(server)
    .post('/follow')
    .send({
      currentUserId: 1,
      profileUser: 50000,
    })
    .expect(404)
    .end((err:any) => {
      if(err) return done(err);
      return done();
    })
  });

  test('GET /follow should return all follows', (done) => {
    request(server)
      .get('/follow')
      .expect(200)
      .end((err:any) => {
        if(err) return done(err);
        return done();
      })

  });

  test('GET /adq should get all relationships', (done) => {
    request(server)
      .get('/adq')
      .expect(200)
      .end((err:any) => {
        if(err) return done(err);
        return done();
      })
  })

  test('POST /adq should add item user relationship', (done) => {
    request(server)
      .post('/adq')
      .send({
        UserId: 1,
        ItemId: 226,
      })
      .expect(201)
      .end((err:any) => {
        if(err) return done(err);
        return done();
      })
  })

  test('POST /adq should fail if user does not exist', (done) => {
    request(server)
      .post('/adq')
      .send({
        UserId: 5849848,
        ItemId: 226,
      })
      .expect(404)
      .end((err:any) => {
        if(err) return done(err);
        return done();
      })
  })

  test('POST /adq should fail if item does not exist', (done) => {
    request(server)
      .post('/adq')
      .send({
        UserId: 1,
        ItemId: 65454848874984,
      })
      .expect(404)
      .end((err:any) => {
        if(err) return done(err);
        return done();
      })
  })
  test('DELETE /adq should remove item from closet', async () => {
    const priorToAdd = await request(server).get('/adq')
    await request(server).post('/adq').send({UserId: 1, ItemId: 227})
    const afterAdd = await request(server).get('/adq')
    await request(server).delete('/adq').send({UserId: 1,ItemId: 227})
    const afterRemove = await request(server).get('/adq')
    if(priorToAdd.body.length < afterAdd.body.length && afterAdd.body.length > afterRemove.body.length){
        expect(true).toBe(true);
    }else{expect(false).toBe(true)}

  })

  test('POST /logout should blacklist the session', async () => {
    const login = await request(server).post('/login').send({
     "email": "testUser1234@gmail.com",
     "password" : "password"
   });
   await request(server).post('/logout').set(
    {
        'authorization': 'Bearer ' + login.body['accessToken'],
        'userId': '1'
    });
    await request(server)
    .get('/me')
    .set('authorization','Bearer ' + login.body['accessToken'])
    .expect(401)
  });
 

});