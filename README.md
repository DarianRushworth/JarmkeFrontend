# Jarmke Jewellery

Jarmke is a brand of jewellery made by Kristina Jarmke Matthews, this is a web shop that I am busy constructing to suit her wants.

The first meeting, we gathered and spoke about the processes she would like her site to have and the information she would like available.
After this I created my backend project board [BackendBoard](https://github.com/DarianRushworth/JarmkeBackend/projects/1)
, to plan out the information I needed from Kristina, and double check the placements of the authentication routers.

On the Backend, I used:
* Sequelize
* Postgres
* express
* Middlewares
* JWT's
* Stripe

Now that both Kristina and I were happy with the way the backend was firing, we approached her disires on the visual aspect and the reactivity of her web shop.
I came up with my frontend project board [FrontendBoard](https://github.com/DarianRushworth/JarmkeFrontend/projects/1), and to get and idea of a MVP, I drew up this [WireFrame](https://wireframepro.mockflow.com/editor.jsp?editor=off&publicid=M3d569fc6bbefd9c8a4d90c62e6340b9b1597063988156&projectid=Mf67a0a5723037b0e16e2c4b00e0a22de1597054524825&perm=Owner#/page/546d0e2db7494ddcb0f911044f3eb80d)

On the Frontend I used:
* React
* Redux
* Axios
* React-Bootstrap
* Stripe

With both my backend and frontend firing together I could finally start putting all of these features in place:
1. Paginaiton
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
5. Revising Shipping Details
    * Shipping to another address, pop up new address form
    * Express Shipping, updates the total accrodingly
    * Both get updated on the order 
6. Payment Methods
    * Confirmation of all Details
    * Upon successful payment redirect to user profile, to see completed order
