const { Router } = require('express');
const router = Router();


const mHeu = require('../Mnumericos/huen');

router.get("/:ti/:tf/", (req, res) => {
    const ti = req.params.ti;
    const tf = req.params.tf;
    res.json(mHeu.MetodoHeun(parseInt(ti), parseInt(tf)));
});

module.exports = router;