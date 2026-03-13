const express = require("express");
const router = express.Router();
const Snippet = require("../models/snippet");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/snippet", authMiddleware, async (req, res) => {

  const { title, code, language } = req.body;

  const snippet = new Snippet({
    title,
    code,
    language,
    userId: req.userId
  });

  await snippet.save();

  res.json(snippet);
});

module.exports = router;