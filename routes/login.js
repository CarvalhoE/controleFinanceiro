const login_controller  = require('../controllers/login');
const express           = require('express');
const router            = express.Router();

router.get('/', (req, res) =>{
    login_controller.getAll(req,res);
});

module.exports = router;