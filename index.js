// Do not touch, no need to change any code here.
const express = require("express");
const app = express();
const cart = require("./routes/cart").router;
const index = require("./routes/index").router;
const logger = require("morgan");

global.products = {
  items: [
    {
      name: "My Product",
      quantity: 3,
      line_price: 300.0,
      get total_price() {
        return this.quantity * this.line_price;
      }
    }
  ],
  get total_price() {
    const totals = this.items.map((item) => item && item.total_price);
    return totals.reduce(
      (previous, current) => previous.total_price + current.total_price
    );
  }
};

app.use(express.static("src"));
app.use(express.json());
app.use(logger("dev"));
app.use(cart);
app.use(index);

app.listen(8080, () => console.log(`server live on port 8080`));
