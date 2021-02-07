const router = require('express').Router();
const journey = require('../model/journey');

router.post('/journeyupload',async (req,res) =>{
    const j = new journey(req.body);
    const data = await j.save();
    res.send('journey uploaded');
})

router.get('/journeyupload', async (req, res) =>{
    const data = await journey.find({});
    res.send(data);
})

module.exports= router;