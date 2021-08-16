const express = require('express')
const router = express.Router()
let users = [
    {
        userName: "Arslan",
        userid: 1
    },
    {
        userName: "Ali",
        userid: 2
    }
]
router.post('/addUser', (req, res) => {
    console.log(req.body)
    users.push(req.body)
    res.status(201).send(req.body)
})
router.get('/viewUser', (req, res) => {

    res.status(200).json(users)
})

module.exports = router