const express = require('express')
const router = express.Router()

router.post('/hospitalsData', (req,res)=>{
    try{
       res.send([global.hospitals])
    } catch(error){
       console.log(error)
    }
})

module.exports = router;