module.exports.index = (req, res) => {
  const date = new Date();
  const year = date.getFullYear();
  res.render('home', { year });
};
