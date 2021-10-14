const express = require('express');
const router = express.Router();
const { create, login, Logout } = require('../controller/authoController');
const isAuthenticate = require('../middleware/Authenticate');
// router.post('/register', create);

router.post('/login', login);
router.get('/logout', isAuthenticate, Logout);

module.exports = router;
