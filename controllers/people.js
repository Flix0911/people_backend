const express = require('express')
const People = require('../models/people')

const router = express.Router()


router.get('/', async (req, res) => {
    try {

        //before
        //const listofallpeople = await People.find({})
        //res.json(listofallpeople)

        //after
        res.json(await People.find({}))

    }catch(err){
        res.status(400).json(err)
    }
})

module.exports = router