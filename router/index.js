const Router = require("express").Router;
const fs = require('fs');
const SiteModel = require('../model/sait_model');
const crypto = require('crypto');

const router = new Router();

router.get('/', (req, res) => {
    fs.readFile("./public/index.html", 'utf-8', (err, data) => {
        if (err) console.log(err);
        res.send(data);
    })
})



router.post('/add', async (req, res) => {
    try {
        const gottenSite = req.body.site;
        const findSite = await SiteModel.findOne({ site: gottenSite });
        if (findSite) {
            res.send('Ссылка на такой сайт уже создана')
        }
        const id = crypto.randomBytes(3).toString('hex');
        const newLinkSite = await SiteModel.create({ id, site: gottenSite })

        res.send(`localhost:5000/api/${id}`)
    } catch (e) {
        console.log(e)
    }

})
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const siteInDB = await SiteModel.findOne({ id });
    const oldSite = siteInDB.site;
    res.redirect(`${oldSite}`)
})






module.exports = router