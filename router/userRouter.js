const express = require('express');
const router = express.Router();
const {
  create,
  getAllUser,
  deleteUser,
} = require('../controller/userController');
const isAuthenticate = require('../middleware/Authenticate');
router.post('/create', isAuthenticate, create);

router.get('/read', isAuthenticate, getAllUser);

router.delete('/delete/:id', isAuthenticate, deleteUser);

module.exports = router;
