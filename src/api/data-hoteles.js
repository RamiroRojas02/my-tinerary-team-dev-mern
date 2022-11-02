let datosHoteles=[
    {
        id:"ho1",
        name:"Serras",
        photo:["https://serrashotel.com/_novaimg/4689856-1442744_0_136_4800_3052_2200_1400.jpg","https://serrashotel.com/_novaimg/4786816-1457574_486_120_4095_2981_2200_1600.rc.jpg","https://serrashotel.com/_novaimg/4689810-1438485_0_0_2200_1600_2200_1600.rc.jpg"],
        capacity:50000,
        description: "Mild Mediterranean breezes, sunny balconies in our spacious and elegant rooms... This is Serras, an elegant boutique hotel located in the historic Gothic Quarter and opposite the exclusive Marina Port Vell. A small oasis in the heart of Barcelona where our personalized attention will make you live a unique experience.",
        citiId:"Barcelona-1",//id de la ciudad a la que pertenece , consultar los id con el compañero de trabajo
        userId:"adm1" //id del administrador de la app
     },    {
        id:"ho2",
        name:"Sheraton Mar del Plata",
        photo:["https://lh5.googleusercontent.com/p/AF1QipNpEZ4YcrUOqGVJzBTlMNe1u3nBk1ExR_HeMPEW=w253-h379-k-no","https://lh5.googleusercontent.com/p/AF1QipMyF68cL5Zw5IMfbYkz7eojgKqQiuWN4AFzhBqK=w253-h337-k-no","https://lh5.googleusercontent.com/p/AF1QipOW3qJcovahoxdPe5iERuMCK3_ZVT_A1kSIGF91=w253-h168-k-no"],
        capacity:50000,
        description: "Located on Leandro N. Alem street and in front of the Golf Club Mar del Plata, Sheraton has an exceptional view. A green hopeful and a majestic ocean frame a unique geography for the necessary comfort, being proposed from its first visit, repetition of the experience. The Sheraton Mar del Plata Hotel combines the tranquility of Bahía Playa Grande, the quietness of the links of the Golf Club and the proximity of the sea, with the functionality of a place that offers all the proposals of the big cities.",
        citiId:"Mar-del-Plata-1",//id de la ciudad a la que pertenece , consultar los id con el compañero de trabajo
        userId:"adm1" //id del administrador de la app
     },    {
        id:"ho3",
        name:"JW Marriott",
        photo:["https://s7d1.scene7.com/is/image/marriotts7prod/jw-saojw-exterior-40632:Classic-Hor?wid=1215&fit=constrain","https://s7d1.scene7.com/is/image/marriotts7prod/jw-saojw-lobby-24425:Classic-Hor?wid=1215&fit=constrain","https://s7d1.scene7.com/is/image/marriotts7prod/jw-saojw-reception-41547:Classic-Hor?wid=1215&fit=constrain"],
        capacity:50000,
        description: "Unwind with indulgent spa treatments, refresh in our modern swimming pool and lounge area or revitalize in our hotel's fitness center. Our beautifully appointed hotel rooms and suites blend São Paulo views of the cable-stayed Estaiada Bridge and the city skyline with impeccable design and 5-star perks. ",
        citiId:"Sao-Pablo-1",//id de la ciudad a la que pertenece , consultar los id con el compañero de trabajo
        userId:"adm1" //id del administrador de la app
     },    {
        id:"ho4",
        name:"Ocean Casino Resort",
        photo:["https://www.theoceanac.com/sites/default/files/2022-05/ocean-casino-resort-2.jpeg","https://www.theoceanac.com/sites/default/files/2022-05/blue-wave-hallway.jpeg","https://www.theoceanac.com/sites/default/files/2022-05/OCR_Building_Exterior_1200x800-750x500.jpeg"],
        capacity:50000,
        description: "Spanning 20 beachfront acres on the world-famous Atlantic City Boardwalk and voted Philadelphia Magazine's Best of Philly® 2021 Best Casino, Ocean Casino Resort is Atlantic City's most innovative and premier luxury casino resort.",
        citiId:"New-Jersey-1",//id de la ciudad a la que pertenece , consultar los id con el compañero de trabajo
        userId:"adm1" //id del administrador de la app
     },    {
        id:"ho5",
        name:"Four Seasons",
        photo:["https://www.fourseasons.com/alt/img-opt/~80.930.0,0000-247,7500-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/CFS/CFS_1217_original.jpg","https://www.fourseasons.com/alt/img-opt/~80.930.0,0000-209,4079-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/CFS/CFS_1462_original.jpg","https://www.fourseasons.com/alt/img-opt/~80.930.0,0000-0,0000-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/CFS/CFS_1788_original.jpg"],
        capacity:50000,
        description: "A vibrant hub of culture, style and energy, our newly transformed Hotel is iconic luxury boldly reimagined to capture the essence of Chicago through inspired food, drink, art and music. Experience unrivaled lake and skyline views at the heart of Magnificent Mile and North Michigan Avenue’s best shopping and attractions.",
        citiId:"Chicago-1",//id de la ciudad a la que pertenece , consultar los id con el compañero de trabajo
        userId:"adm1" //id del administrador de la app
     },    {
        id:"ho6",
        name:"Eden",
        photo:["https://www.dorchestercollection.com/wp-content/uploads/Hotel-Eden-Roma-exterior-904x904.jpg","https://www.dorchestercollection.com/wp-content/uploads/Hotel-Eden-Roma-Front-desk-with-lady-1600x900.jpg","https://www.dorchestercollection.com/wp-content/uploads/Hotel-Eden-Roma-Sala-Borghese-banqueting-round-tables-904x904.jpg"],
        capacity:50000,
        description: "An authentic Roman spirit infuses this radiant hotel, alive with the stories of a legendary city and the hospitality of its remarkable people.",
        citiId:"Roma-1",//id de la ciudad a la que pertenece , consultar los id con el compañero de trabajo
        userId:"adm1" //id del administrador de la app
     },    {
        id:"ho7",
        name:"The Langham",
        photo:["https://www.wikiwand.com/en/The_Langham,_New_York#Media/File:400_Fifth_Ave_May_2017.png","http://dimg04.c-ctrip.com/images/0204t120008vr9efi97A8.jpg","https://assets.langhamhotels.com/is/image/langhamhotelsstage/tlnyc-exterior-01:Medium?wid=2000&hei=1123"],
        capacity:50000,
        description: "When Gwathmey Siegel — the original architects of The Langham, New York, Fifth Avenue — first drew up the building plans, they aimed to make a mark on the skyline.",
        citiId:"New-York-1",//id de la ciudad a la que pertenece , consultar los id con el compañero de trabajo
        userId:"adm1" //id del administrador de la app
     },    {
        id:"ho8",
        name:"The Peninsula",
        photo:["https://www.peninsula.com/-/media/images/hero-images/rooms-and-suites/phk-room-_-suites1/phk-room-_-suites1-o.jpg","https://www.peninsula.com/en/-/media/01-hong-kong-property/phk-salisbury-room-513.jpg?mw=905&hash=7FA3617E09803D3B0D64745AC3269B1D","https://www.peninsula.com/en/-/media/01-hong-kong-property/phk-ext-rr-470.jpg?mw=905&hash=28BC5084F9564B09C73539F2ABE4384E"],
        capacity:50000,
        description: "Building on its long history as a global beacon of hospitality, the legendary “Grande Dame of the Far East” continues to set hotel standards worldwide, offering a blend of the best Eastern and Western hospitality in an atmosphere of unmatched classical grandeur and timeless elegance.",
        citiId:"Hong-Kong-1",//id de la ciudad a la que pertenece , consultar los id con el compañero de trabajo
        userId:"adm1" //id del administrador de la app
     },    {
        id:"ho9",
        name:"City Center",
        photo:["https://cache.marriott.com/content/dam/marriott-renditions/OSAOW/osaow-exterior-0909-ver-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=690px:*","https://cache.marriott.com/content/dam/marriott-renditions/OSAOW/osaow-lobby-0945-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1720px:*","https://cache.marriott.com/content/dam/marriott-renditions/OSAOW/osaow-living-room-0922-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1720px:*"],
        capacity:50000,
        description: "Nestled in the fun-filled heart of Shinsaibashi, on Midōsuji Boulevard, take in a fab city in Osaka, Japan, the W way. Reboot all your social needs at the electric nightlife scenery of Dotonbori just around the corner. W Osaka seamlessly blends Japan’s celebrated cultural heritage with bold contemporary designs in a rarified milieu of playful chic and boundless luxury. Immerse yourself in super social and mouthwatering dining experiences. Later, kick back in style in one of our extra-comfy hotel rooms",
        citiId:"Osaka-1",//id de la ciudad a la que pertenece , consultar los id con el compañero de trabajo
        userId:"adm1" //id del administrador de la app
     },    {
        id:"ho10",
        name:"Palazzo Venart Luxury Hotel",
        photo:["https://static-new.lhw.com/HotelImages/Final/LW2195/lw2195_82497437_790x490.jpg","https://static-new.lhw.com/HotelImages/Final/LW2195/lw2195_82497459_790x490.jpg","https://static-new.lhw.com/HotelImages/Final/LW2195/lw2195_82600933_790x490.jpg"],
        capacity:50000,
        description: "The stunning Palazzo Venart Luxury Hotel opened in August 2016. Centrally located in the heart of traditional Venice, it offers its guests superbly easy access to all the sights and sounds of the romantic City of Water. Each of its prestigious and fastidiously decorated rooms and suites is based on a unique aspect of Venetian history and culture.",
        citiId:"Venecia-1",//id de la ciudad a la que pertenece , consultar los id con el compañero de trabajo
        userId:"adm1" //id del administrador de la app
     },    {
        id:"ho11",
        name:"The Carlton",
        photo:["https://carltonmoscow.com/upload/iblock/b94/vuzgb9o0fizplb6di0a130szm9g2zq82.jpg","https://carltonmoscow.com/upload/iblock/c01/z87t6128x4a0gdmxejyhbobrgcrnzk32.jpg","https://carltonmoscow.com/upload/iblock/7da/g6fm6tvsdk2j4v3qemxrkza2f18pjcjf.jpg"],
        capacity:50000,
        description: "A luxury Red Square hotel «The Carlton, Moscow» promises guests a front row seat to Moscow, only steps away from the city’s invigorating riches. The breadth of experiences is amplified by newly transformed spaces, guest rooms and suites that celebrate the finest of Russian design and craftsmanship. Sip a pre-dinner cocktail at the Champagne Bar, savor seafood delights on the rooftop O2 Lounge by Genesis or slip into the serenity of our Spa.",
        citiId:"Moscu-1",//id de la ciudad a la que pertenece , consultar los id con el compañero de trabajo
        userId:"adm1" //id del administrador de la app
     },    {
        id:"ho12",
        name:"Palacio del Inka",
        photo:["https://cache.marriott.com/content/dam/marriott-renditions/CUZLC/cuzlc-courtyard-8109-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1846px:*","https://cache.marriott.com/content/dam/marriott-renditions/CUZLC/cuzlc-lobby-8125-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1846px:*","https://cache.marriott.com/content/dam/marriott-renditions/CUZLC/cuzlc-rumi-bar-5186-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1846px:*"],
        capacity:50000,
        description: "Considered a historic landmark, Palacio del Inka is a five-centuries-old mansion located in the heart of downtown Cusco. Our luxury hotel's unique & captivating design embraces historical aspects of our Peruvian culture while maintaining world-class luxury and modern conveniences",
        citiId:"Cuzco-1",//id de la ciudad a la que pertenece , consultar los id con el compañero de trabajo
        userId:"adm1" //id del administrador de la app
     }
]
export default datosHoteles;