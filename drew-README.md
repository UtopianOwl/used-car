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

#### ONLY ADMIN USER 
```
{
  "success": true,
  "user": {
    "__v": 0,
    "name": "Narzi",
    "username": "admin",
    "password": "$2a$10$yfZ8QhuHTtEugbp3.2SaCOn5YyHUyZIJEQAHeZ4REILbNW6NC7zMe",
    "_id": "57832914107817f035f75048",
    "admin": true
  },
  "message": "Successfully created new user"
}
```

