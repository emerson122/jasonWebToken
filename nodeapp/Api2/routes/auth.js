const router = require('express').Router();

router.post('/registro', async(req,res)=>{
    res.json({
        error:null,
        data: "data de registro"
    })
});

module.exports = router;