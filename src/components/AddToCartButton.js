/**
 * This class extends the HTMLElement class to create
 * a customElement from the defined class below.
 *
 * DO NOT:
 * 1. Touch Boiler Plate Code.
 *
 * DO:
 * 1. Use all of the objects in the class constructor
 * 2. Update the async addToCart() method to add the product
 *    to cart through a try..catch block.
 * 3. Call the drawer to open on success.
 * 4. Update the bindEvents method to add any events needed.
 * 5. Update the connectedCallback() method to fire any needed methods
 *    on mount.
 */

class AddToCartButton extends HTMLElement {
  constructor() {
    super();
    // the api endpoint to call
    this.api = `/cart`;
    // the methods to use.
    this.methods = {
      post: "POST"
    };
    // the headers for the request.
    this.headers = {
      "Content-Type": "application/json"
    };
    // the events to  be used.
    this.events = {
      open: "drawer:open"
    };
    // the data structure for the product to be added.
    this.product = {
      // get the name from the dom.
      name: document.querySelector("[data-title]").dataset.title,
      // set the quantity
      quantity: 1,
      // get the price from the dom
      line_price: document.querySelector("[data-price]").dataset.price,
      // get total_price to work.
      get total_price() {
        return this.quantity * this.line_price;
      }
    };
  }

  // make a try catch block that posts to the /cart endpoint
  // on success we want to open the cart drawer with the products showing.
  // TIP: use new CustomEvent to pass an object through the Event API.
  async addToCart() {
    alert("thsi is test");
  }

  // add all of the event bus here for the custom element.
  bindEvents() {
    // code here..
  }

  // executed when custom element mounts
  connectedCallback() {
    // code here
  }
}

// define the customElement in the DOM.
customElements.define("cart-button", AddToCartButton);
