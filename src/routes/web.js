const express = require('express');
const { getAdmin,
    getEditPassword,
    getListUser,
    getAddUser,
    getloginAdmin,
    getHome,
    getForm

} = require('../controllers/homeController')
const router = express.Router();

router.get('/login', getloginAdmin)

router.get('/admin', getAdmin);

router.get('/editpassword', getEditPassword);

router.get('/listuser', getListUser);

router.get('/adduser', getAddUser);

router.get('/home', getHome);

router.get('/form', getForm);

module.exports = router;