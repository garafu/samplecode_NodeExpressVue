var face = require("cool-ascii-faces");
var router = require("express").Router();

router.get("/message", (req, res) => {
  res.json(`${face()} > "${req.query.message}"`);
});

module.exports = router;