const axios = require('axios')
module.exports={
    checkStatus: (req,res) => {
        res.status(200).send("good")
    },
    getJSON: (req, res) => {
        axios.get(req.body.url).then(response => {
            res.status(200).send(response.data)
        }).catch(err => {
            res.status(404).send(`failed to reach source with message: ${err}`)
        })
        
    },
    sendJSON: (req,res) => {
        axios.post(req.body.url).then(response => {
            res.status(200).send(true)
        }).catch(err => {
            res.status(404).send(`failed to reach source with message: ${err}`)
        })
    }
}