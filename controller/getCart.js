const getCart = async (req, res) => {
  res.json(global.products);
  res.end();
};

module.exports = getCart;
