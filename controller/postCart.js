const postCart = async (req, res) => {
  console.log(req.body);
  if (!Object.keys(req.body).length) {
    res.status(401).json({ err: "No product associated" });
  }

  const product = req.body;

  if (
    !product.name &&
    !product.quantity &&
    !product.price &&
    !product.total_price
  ) {
    res.status(401).json({ err: "Product doesn't follow correct structure" });
  }

  global.products.items.push(req.body);
  res.status(200).json(global.products);
};

module.exports = postCart;
