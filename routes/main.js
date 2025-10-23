// routes/main.js
const express = require("express");
const path = require("path");
const router = express.Router();

/** ---------- Part A & B routes (keep these) ---------- */
router.get("/", (req, res) => res.send("Hello World!"));
router.get("/about", (req, res) => res.send("<h1>This is the about page</h1>"));
router.get("/contact", (req, res) => res.send("<h1>Contact me at anfas@example.com</h1>"));
router.get("/date", (req, res) =>
  res.send(`<h1>Today's date is: ${new Date().toLocaleString()}</h1>`)
);

/** ---------- Part D: Extension tasks ---------- */

// D10) Parameterised route: /welcome/:name
// Visit: http://localhost:8000/welcome/Ali
router.get("/welcome/:name", (req, res) => {
  const { name } = req.params;
  res.send(`<h1>Welcome, ${name}!</h1>`);
});

// D11) Chaining with next(): /chain
function stepOne(req, res, next) {
  console.log("Step 1 ran");
  req.customMessage = "Hello from step 1";
  next();
}
function stepTwo(req, res) {
  console.log("Step 2 ran");
  res.send(`<h1>Chained route</h1><p>${req.customMessage}</p>`);
}
router.get("/chain", stepOne, stepTwo);

// D12) Send a static HTML file: /file
// Make sure a.html exists in the project root (same level as index.js)
router.get("/file", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "a.html"));
});

module.exports = router;
