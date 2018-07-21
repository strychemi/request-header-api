const express = require('express');
const path = require('path');
const router = express.Router();
const requestHeaderController = require('../controllers/requestHeader');

// root route
router.get("/", function (request, response) {
  response.sendFile(path.join(__dirname, '../views/index.html'));
});

// api routes
router.get("/api/whoami", requestHeaderController.parseRequestHeader);

// export the router
module.exports = router;