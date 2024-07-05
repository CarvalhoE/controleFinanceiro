const user_controller   = require('../controllers/usuario');
const express           = require('express');
const router            = express.Router();

router.get('/', (req, res) =>{
    user_controller.getAll(req,res);
});

module.exports = router;