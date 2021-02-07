const router = require('express').Router();
const myform = require('../model/myform');

router.post('/formupload',async (req,res) =>{
    const f = new myform(req.body);
    const data =await f.save();
    res.send("success")
   })
router.get('/formupload',async (req,res) =>{
    const data = await myform.find({});
    res.send(data);
})

router.put('/formupload/:id', async (req,res) =>{
    await myform.findByIdAndRemove({_id: req.params.id});
    res.send("Deleted");
})


// const data= axios.put(`http://localhost:6972/api/form/formupload/:${this.state.userid}`)

module.exports = router;