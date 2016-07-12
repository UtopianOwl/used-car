# Used Car App

## Angular Front End

### States
This app uses Angular UI to handle routing on the view (front-end).
There are 7 different "states"
  1. /home
  1. /inventory
  1. /inventoryEdit
  1. /contact
  1. /contactView
  1. /directions
  1. /login

Each state has its own module.js (to handle state provision in app.config)
Each state has its own controller.js (controller for the html template)
Each state has its own tpl.html (view displayed to client)

### Services
There are 4 custom controllers to handle HTTP calls and UserAuth
  1. CarService
  1. ContactService
  1. UserService
  1. TokenService

* CarService makes calls to "/api/cars" to get the Inventory
  * All other calls are made to "/auth/inventory"
  * This division prevents calls for edit, delete, add, etc. from an unauthenticed client
* ContactService makes post calls to "/contact" to create a new Contact (and send an email)
  * All other calls are made to "/auth/contacts"
  * This division prevents calls for edit, delete, get, etc. from an unauthenticed client
* UserService calls to "/api/user"
  * handles login / signup
* TokenService handles getting setting and removing Auth Tokens from localStorage

### Other Stuff
* css, font-awesome, fonts, and js folders all came preloaded with the Bootstrap template
* img folder has the background texture used in styles.css

#### NAVBAR DIRECTIVE CURRENTLY DOESNT WORK 

## Back-End

### config.js
database: contains the database address which mongoose.connect accesses in server.js

secret: contains the secret used by JSON Web Tokens for User Auth

### server.js
* line 7: pulls in the two values from config.js explained above
* line 9: creates the port for the server to listen on
* line 12: connects the server to the database
* lines 16-18: some important middleware
* line 19: middleware to serve up static files on client side
* line 21: authenticate calls made to any endpoint that begins "/auth";
  * uses the secret from config
  * protects the endpoints: 'auth/inventory' and 'auth/contacts'
* lines 23-27: the first parameter assigns the api endpoint
  * the second parameter begins with require because it is calling another node module
  * the second parameter assigns the module which delineates how calls made to that api are handled

### Routes
There are 5 modules to handle the server routing: two for cars, two for contacts, one for user:
1. carRouter
1. inventoryRouter
1. contactRouter
1. newContactRouter
1. userRouter

The car and newContact router each handle a single request type, while the inventory and contact routers respectively handle the rest of the request types for their model. This is so that unauthenticated users can access the api in a limited scope, to get the inventory list, or add themselves as a contact. Authenticated uses can then access the other functions

### Models
There a 3 models for the database:
1. Car
1. Contact
1. User

None of the models are connected to any of the others

#### Default Inventory
Ignore ._id and .__v

```
[
  {
    "_id": "5783ca6a7a6b2b0d3916f9d2",
    "name": "1967 CHEVROLET CORVETTE 427/435",
    "stars": 5,
    "reviews": 13,
    "price": 149900,
    "desc": "Jet Black 1967 Chevrolet Corvette Coupe with Red Stinger and Matching Red interior, Body-Off Restored with very few miles since restoration, Date Code Correct, Numbers Matching 427/435HP engine, Tri-Power 3x2 Carburetor Setup, Power Steering, True factory Black Car with Red Interior, Side Exhaust, and Turbine Style Bolt On Wheels.  This Gorgeous coupe was purchased from a premier collection of Corvettes and was showcased in climate controlled environment with very few miles added since purchased. This is not an NCRS car and does not have the original paper work. If it did it would be priced significantly higher.",
    "__v": 0,
    "img": {
      "front": "http://www.admcars.com/galleria_images/322/322_p5_l.jpg",
      "side": "http://www.admcars.com/galleria_images/322/322_main_l.jpg"
    }
  },
  {
    "_id": "5783cc30705ff71f39699ff2",
    "desc": "Extensively Restored Grabber Blue 1970 Mustang Mach I a  351 Windsor, Automatic And Chrome Magnum Wheels. Complete Marti Report",
    "name": "1970 FORD MUSTANG MACH I",
    "price": 44900,
    "reviews": 3,
    "stars": 5,
    "__v": 0,
    "img": {
      "side": "http://www.admcars.com/galleria_images/364/364_p2_l.jpg",
      "front": "http://www.admcars.com/galleria_images/364/364_p4_l.jpg"
    }
  },
  {
    "_id": "5783cd32b2ddff2939819188",
    "name": "1966 CADILLAC DEVILLE CONVERTIBLE",
    "desc": "DARK EMERALD GREEN METALLIC 1966 CADILLAC DE VILLE CONVERIBLE, LOOKS BLACK UNTIL THE SUN HITS IT.  EXTENSIVE RESTORATION, GORGEOUS PAINT AND METAL STRUCTURE NEW CHROME ALL THE WAY AROUND,  CHECK OUT THE UNDERCARRIAGE RESTORATION, LIKE NEW BLACK LEATHER, INTERIOR WITH BEAUTIFUL INSTRUMENTATION, THE CAR IS LOADED!!!! 429 CUBIC INCH ENGINE TOPPED OFF WITH POWER STEERING, POWER DISC BRAKES, FACTORY AIR CONDITIONING, POWER SEATS, POWER WINDOWS, AND A BRAND NEW EXPENSIVE BLACK CLOTH TOP, ROLLING ON CORRECT WHEELS AND NEW WHITE WALL RADIALS. THIS CAR HAS A COMPREHENSIVE RESTORATION WITH ATTENTION TO DETAIL.",
    "price": 39900,
    "reviews": 10,
    "stars": 5,
    "__v": 0,
    "img": {
      "front": "http://www.admcars.com/galleria_images/365/365_p6_l.jpg",
      "side": "http://www.admcars.com/galleria_images/365/365_main_l.jpg"
    }
  },
  {
    "_id": "5783ceae67460a3439bc72b6",
    "name": "1970 DODGE CHALLENGER RT",
    "price": 69900,
    "reviews": 4,
    "stars": 5,
    "desc": "TORCH RED CHALLENGER CONVERTIBLE, 440 6 PACK PISTOL GRIP, NEW RED INTERIOR WITH RT OPTIONS. LOW MILES ON HIGH QUALITY FRAME OFF RESTORATION. ORIGINAL 4-SPEED MANUAL CAR, TRANSMISSION AND FRESH 440 ENGINE  REBUILT TO FACTORY SPECS AND READY TO BURN RUBBER. THE PREVIOUS OWNER UPGRADED THE CAR FROM AN ( N-CODE) 383 HIGH PERFORMANCE ENGINE TO A FIRE BREATHING 440CID SIX PACK WITH SHAKER HOOD, AWESOME MOPAR PERFORMANCE. HIGHLY OPTIONED CAR WITH POWER STEERING AND POWER BRAKES, FACTORY TACHOMETER AND GAUGES SILK-SCREENED AND RESTORED TO LOOK NEW. ORIGINAL NOS LOCKING GAS CAP. ORIGINAL RADIO RESTORED, RIM BLOW HORN, 6-WAY BUCKET SEATS, CONSOLE RESTORED. DEALERS, OWNERS AND RESTORATION MANUALS INCLUDED. NEW RED LEGENDARY INTERIOR, AND GORGEOUS MATCHING RED CANVAS TOP. ORIGINAL SEAT BELTS RESTORED BY SNAKE-OYL, PISTOL-GRIP SHIFTER, NEW REAR HEMI LEAF SUSPENSION, ENGINE AND UNDERCARRIAGE DETAILED BEAUTIFULLY. THIS INVESTMENT QUALITY MOPAR STREET MACHINE IS SET OFF WITH NEW RED LINE RADIAL TIRES",
    "__v": 0,
    "img": {
      "side": "http://www.admcars.com/galleria_images/231/231_p2_l.jpg",
      "front": "http://www.admcars.com/galleria_images/231/231_p11_l.jpg"
    }
  },
  {
    "_id": "57852428b296e3893ed9168a",
    "name": "1968 CHEVROLET CHEVELLE 138-SS",
    "desc": "Real 138 SS 1968 Chevrolet Chevelle SS Number matching 396/350 Big Block Power Steering Power Brakes \n1968 CHEVELLE SS WITH MATCHING NUMBERS 396/350 HP ENGINE THAT HAS BEEN PROFESSIONALLY REBUILT WITH RECIEPTS TO PROVE IT! THE TURBO HYDRAMATIC TRANSMISSION HAS ALSO BEEN PROFESSIONALLY REBUIILT. IT BOASTS A HOLLEY DUAL FEED 4-BARREL CARB., EDELBROCK ALUMINUM INTAKE, CERAMIC COATED HOOKER HEADERS AND CHROME BREATHER AND VALVE COVERS. THIS BEAUTY HAS A LASER STRAIGHT BODY WITH TUXEDO BLACK PAINT. THE BLACK INTERIOR HAS BUCKET SEATS WITH CONSOLE, FACTORY DASH AND A SPORT STEERING WHEEL. POWER STEERING, POWER FRONT DISC BRAKES AND A 12 BOLT 3.73 POSITRACTION REAREND AND SWAY BAR. SOME OF THE OTHER EXTRAS ON THIS CAR ARE A SUN TACH, AUTO METER TRIPLE GAUGE, FLOWMASTER DUAL EXHAUST WITH CHROME TIPS AND A FACTORY JACK WITH SPARE TIRE. THIS CERTIFIED TRUE #'S MATCH SS CAR IS ROLLING ON BRAND NEW SS WHEELS AND BF GOODRICH RADIAL TIRES.",
    "price": 49900,
    "reviews": 9,
    "stars": 5,
    "__v": 0,
    "img": {
      "side": "http://www.admcars.com/galleria_images/372/372_p2_l.jpg",
      "front": "http://www.admcars.com/galleria_images/372/372_p7_l.jpg"
    }
  },
  {
    "_id": "578524f9b296e3893ed9168b",
    "name": "1957 CADILLAC ELDORADO",
    "desc": "Gorgeous Red 1957 Eldorado Biarritz Convertible with supple red and white leather interior.\nThis car has had an extensive frame-off restoration with less than a 1000 miles on the car since its completion. \nProfessional red paint job in the right color over a structurally incredible body. Beautifully restored from the spotless red bottom to the new white convertible top. Almost every piece of chrome, stainless and pot metal has been redone. New lush red and white real leather interior, new dash bezel, new instrument cluster and gages, and electronic eye on the dash. Optioned with power windows, power seats, power top. Correct numbers matching 365 engine with the correct rebuilt dual quad carburetor set up which is topped off with the famous bat-wing air cleaner assembly.",
    "price": 199900,
    "reviews": 17,
    "stars": 5,
    "__v": 0,
    "img": {
      "side": "http://www.admcars.com/galleria_images/287/287_main_l.jpg",
      "front": "http://www.admcars.com/galleria_images/287/287_p12_l.jpg"
    }
  },
  {
    "_id": "57852675b296e3893ed9168d",
    "name": "1964 FORD THUNDERBIRD CONVERTIBLE",
    "desc": "GORGEOUS RED ON RED THUNDERBIRD CONVERTIBLE, EXTENSIVE RESTORATION, (ARIZONA CAR) LOADED WITH A 390CI, PS, PB, TILT AWAY WHEEL, POWER WINDOWS. EXTENSIVE RESTORATION ON PAINT BODY, DRIVE TRAIN AND MOST OF THE INTERIOR WITH LESS THAN 2000 BABIED MILES. Very nice show quality correct rangoon red paint over an extremely nice body. Lots of new chrome all the way around including bumpers, grill door handles, window trim, new emblems and with a new white power top. The previous owner was Thunderbird enthusiast that took pride in winning local shows with the car he owned for 31 years. The undercarriage is solid clean and intact,  from front bumper to rear bumper,  with no rust issues as you would expect from an Arizona car. The engine is equally show quality with a beautifully embellished 390, with less then 2000 miles. It is nicely optioned with power steering and power brakes that stop on a dime. The cowl and inner fenders are spotless. The interior matches the exterior perfectly with lush",
    "price": 32900,
    "reviews": 6,
    "stars": 5,
    "__v": 0,
    "img": {
      "side": "http://www.admcars.com/galleria_images/190/190_p13_l.jpg",
      "front": "http://www.admcars.com/galleria_images/190/190_p11_l.jpg"
    }
  },
  {
    "_id": "57852719b296e3893ed9168e",
    "name": "1969 CHEVROLET EL CAMINO 396",
    "desc": "Gorgeous Crystal Blue 1969 Chevrolet El Camino with SS options, 396ci Big Block, 4 speed, Factory AC, Power Steering, Power Disc Brakes, Very Nice Rust Free Bed with removable rubber bedliner, 12 bolt rear.  We can not prove or disprove the authenticity of this being a real SS without a build sheet.",
    "price": 29900,
    "reviews": 3,
    "stars": 5,
    "__v": 0,
    "img": {
      "side": "http://www.admcars.com/galleria_images/327/327_p2_l.jpg",
      "front": "http://www.admcars.com/galleria_images/327/327_p14_l.jpg"
    }
  },
  {
    "_id": "578527dbb296e3893ed9168f",
    "name": "1970 DODGE CORONET 500 CONVERTIBLE",
    "desc": "Code correct Hemi orange paint over a great lookng Coronet 500 structurally beautiful B body. New parts:  front and rear bumpers, wheel well chrome, rocker moldings, trunk moldings, door handles and quarter louvers.  Also new windshield and weather strips.  Car is riding on factory rally wheels and BFG white lettered tires. Very white code correct bucket interior with matching white top. It features bucket seats, new door panels and carpeting. The dash is in excellent condition with great looking instrumentation and dash pad. Original interior parts are in very nice condition and show well. A rare option inside are electric windows.  Show quality engine compartment, rebuilt 360c.i. engine with performance upgrades. Aluminum water pump, Chrome accents, an Edelbrock Torker aluminum intake and Holley carbuetor, racing cam, Hedman ceremic headers means all performance.  Drive line has a 727 3 speed automatic transmission and factory rear axle. Options inclu",
    "price": 29900,
    "reviews": 16,
    "stars": 5,
    "__v": 0,
    "img": {
      "side": "http://www.admcars.com/galleria_images/272/272_p13_l.jpg",
      "front": "http://www.admcars.com/galleria_images/272/272_p5_l.jpg"
    }
  }
]
```


