const router = require('express').Router();
const skills = require('../model/skills');

router.post('/skillupload', async (req, res) => {
    const skill = new skills(req.body);
    const data = await skill.save();
    res.send("Skills uploaded");
})

router.get('/skillupload', async (req, res) => {
    const data = await skills.find({});
    res.send(data);
})

module.exports = router;

