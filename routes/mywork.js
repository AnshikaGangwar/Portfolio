const router = require('express').Router();
const mywork = require('../model/mywork');

router.post('/myworkupload', async (req, res)=>{
    const w= new mywork(req.body);
    const data = await w.save();
    res.send("my work uploaded");
})

router.get('/myworkupload', async (req,res)=>{
    const data = await mywork.find({});
    res.send(data);
})

module.exports = router;