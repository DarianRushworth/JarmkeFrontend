# Jarmke Jewellery

### What is Jarmke
Jarmke is a brand of jewellery made by Kristina Jarmke Matthews, this is a web shop that I am busy constructing to suit her wants.
She would like a web shop to be able to sell her jewellery as she doesnt have a store front as of yet, but with the beauty of the web do you really need one? 
### Working version
Follow this link to find the working version thus far. [JarmkeJewellery](https://flamboyant-goodall-aafafa.netlify.app/)

### Planning under went
The first meeting, we gathered and spoke about the processes she would like her site to have and the information she would like available.
After this I created my backend project board [BackendBoard](https://github.com/DarianRushworth/JarmkeBackend/projects/1)
, to plan out the information I needed from Kristina, and double check the placements of the authentication routers. I used 6 models with two join tables, which you can see within this [DatabaseDiagram](https://dbdiagram.io/d/5f313f2f08c7880b65c5b6f9)

### Backend Technologies
* Sequelize
* Postgres
* express
* Middlewares
* JWT's
* Stripe

Now that both Kristina and I were happy with the way the backend was firing, we approached her disires on the visual aspect and the reactivity of her web shop.
I came up with my frontend project board [FrontendBoard](https://github.com/DarianRushworth/JarmkeFrontend/projects/1), and to get and idea of a MVP, I drew up this [WireFrame](https://wireframepro.mockflow.com/view/Mf67a0a5723037b0e16e2c4b00e0a22de1597054524825#/page/546d0e2db7494ddcb0f911044f3eb80d)

### Frontend Technologies
* React
* Redux
* Axios
* React-Bootstrap
* Stripe

### Key Features
With both my backend and frontend firing together I could finally start putting all of these features in place:
1. Paginaiton

![Pagination-gif](https://github.com/DarianRushworth/JarmkeFrontend/blob/development/Pagination-gif.gif)

2. Favoriting Products
 
 ![Animated GIF-downsized_large](https://github.com/DarianRushworth/JarmkeFrontend/blob/development/Animated%20GIF-downsized_large.gif)
 
3. User Profile Page
    * Update user information
    * Shows all Orders belonging to user
    * Presents all favoured products
4. Adding/Removing from Cart
    * Updates the number of items in the Cart
    * Changes the total of the Cart
    * If no active order, one is made upon adding product.
    
![UpdateCart](https://github.com/DarianRushworth/JarmkeFrontend/blob/development/UpdateCart.gif)
    
5. Revising Shipping Details
    * Shipping to another address, pop up new address form
    * Express Shipping, updates the total accrodingly
    * Both get updated on the order 
    
![UpdateShipping](https://github.com/DarianRushworth/JarmkeFrontend/blob/development/UpdateShipping.gif)
    
6. Payment Methods
    * Confirmation of all Details
    * Upon successful payment redirect to user profile, to see completed order
    
![Payment](https://github.com/DarianRushworth/JarmkeFrontend/blob/development/Payment.gif)
