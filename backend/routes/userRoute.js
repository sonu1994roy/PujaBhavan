const express = require('express');
const router = express.Router();

const {
    createUser,
    user 
} = require('../controller/userController')

router.route('/create-user').post(createUser)

router.route('/user').get(user)

module.exports = router