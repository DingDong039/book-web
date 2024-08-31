const express = require('express')
const router = express.Router()

router.get('/register', (req,res) =>{
    res.send(`Hello register.`)
})
router.post('/login',(req,res)=>{
    res.send(`Hello login.`)
})

module.exports = router