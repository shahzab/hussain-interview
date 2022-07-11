# THIS TEST SHOULD TAKE NO LONGER THAN AN HOUR.

## GOAL

Your goal is to send the product data defined in the
addToCartButton.js file to the API endpoint at /cart.

The Cart Drawer <cart-drawer>:

1. Should get the items from the API on mount.
2. Should append a listItem for each item in the API response.
3. Should close when the close button is clicked.
4. Should open when a user successfully adds to cart.

The Cart Drawer button (top right) <cart-open>:

1. Should toggle open the drawer on click.
2. Should bind the click method on mount.

The add to cart button <cart-button>:

1. Should add the product data to cart via the API.
2. Should open the drawer with the items from the endpoint on success.
3. Should bind the click method on mount.

All styles and boilerplate HTML should already be provided.

### DO NOT:

1. DO NOT EDIT ANY FILES IN THE CONTROLLER/ROUTES FOLDER
2. DO NOT CHANGE ANY BOILERPLATE CODE
3. DO NOT EDIT INDEX.JS

### DO:

1. EDIT ONLY THE JS FILES IN COMPONENTS
2. READ ALL COMMENTS IN THE COMPONENT FILES
