/**
 * This class extends the HTMLElement class to create
 * a customElement from the defined class below.
 *
 * DO:
 * 1. Update the sendEvent() method to send an event
 *    using the Event API with the predefined events object
 *    in the class constructor.
 * 2. Update the bindEvents() method with any events that need to
 *    be bound.
 * 3. Update the connectedCallback() method with any methods
 *    needed to be called on mount.
 */
class CartOpen extends HTMLElement {
  constructor() {
    super();
    this.events = {
      open: "drawer:open"
    };
  }

  // Use Event API to tell the cartdrawer element when to open
  sendEvent() {
    // code here:
  }

  // add all of the event bus here for the custom element.
  bindEvents() {
    // code here..
  }

  // executed when custom element mounts
  connectedCallback() {
    // code here..
  }
}

customElements.define("cart-open", CartOpen);
