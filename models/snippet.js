const mongoose = require("mongoose");

const SnippetSchema = new mongoose.Schema({
  title: String,
  code: String,
  language: String,
  userId: String
});

module.exports = mongoose.model("Snippet", SnippetSchema);