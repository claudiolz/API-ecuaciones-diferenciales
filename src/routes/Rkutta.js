const { Router } = require('express');
const router = Router();

const rk = require('../Mnumericos/R_kutta');

//router.get('', (req, res) => {
router.get('/:xStart/:yStart/:h', (req, res) => {
    var xStart = req.params.xStart
    var yStart = req.params.yStart
    let data = []

    data.push(parseInt(yStart.charAt(1)))
    data.push(parseInt(yStart.charAt(3)))
    var da = yStart.charAt(5) + yStart.charAt(6)
    data.push(parseInt(da))
    console.log(data)
    var h = req.params.h
    res.json(rk.result(parseInt(xStart), data, parseFloat(h)))
});

module.exports = router;