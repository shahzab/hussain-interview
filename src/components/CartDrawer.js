/**
 * This class extends the HTMLElement class to create
 * a customElement from the defined class below.
 *
 * DO NOT:
 * 1. Touch Boiler Plate Code.
 *
 * DO:
 * 1. Update the async getItems() method to fetch items from the API
 * 2. Update the hydrateDrawer(items) method to:
 *      a. take the items parameter
 *      b. Use the items when passed to it to render a <li>
 *         element for each item.
 *      c. Add the HTML to the list.
 * 3. update the async open() method to open the drawer, with
 *    the items hydrated.
 * 4. Update the bindEvents() method to assign any relevant
 *    events using the Event API.
 * 5. Use the connectedCallback() method to do anything
 *    when the element mounts in the DOM.
 */
class CartDrawer extends HTMLElement {
  constructor() {
    super();
    // available attrbutes to open the drawer.
    this.availableAttributes = {
      open: "open"
    };
    // the api endpoint to be called.
    this.api = `/cart`;

    // a predefined object of methods to be used in the fetch calls
    this.methods = {
      get: "GET"
    };
    // a predefined list of events to be used.
    this.events = {
      click: "click",
      open: "drawer:open"
    };
  }

  // boiler plate code, do not touch.
  createCloseButton() {
    const btn = document.createElement("button");
    btn.innerHTML = `<svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.1111 0.888889L0.888889 15.1111M0.888889 0.888889L15.1111 15.1111"
      stroke="#0A0A0A"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>`;

    btn.addEventListener(this.events.click, this.close.bind(this));
    this.appendChild(btn);
  }

  // we want to get the items when the drawer mounts
  // so it's prepoulated with content.
  // using a try catch block, we want to get the items
  // from the API and return the response so we can reuse this
  // when we need the drawer to adhoc rehydrate.
  async getItems() {
    // code here..
  }

  // the method to call when the drawer needs to rehydrate
  // takes in a param items as an object.
  // this should update the <ul> element inside of the
  // <cart-drawer></cart-drawer> element.
  hydrateDrawer(items) {
    // we want to map over the items and render them in a
    // unordered list.
    // code here..
  }

  // boiler plate code, do not touch.
  // the method to call when the drawer needs to be closed.
  // check the attributes object in the constructor.
  close() {
    this.removeAttribute(this.availableAttributes.open);
  }

  // an async method to open the drawer, we might need to fetch
  // the items before the drawer actually opens?
  async open({ detail }) {
    // code here..
  }

  // add all of the event bus here for the custom element.
  bindEvents() {
    // code here..
  }

  // executed when custom element mounts
  connectedCallback() {
    //  code here..
  }
}

// define the customElement in the DOM.
this.customElements.define("cart-drawer", CartDrawer);
