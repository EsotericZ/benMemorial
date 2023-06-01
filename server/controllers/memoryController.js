const { Memories } = require('../models');

async function getAllMemories(req, res) {
    await Memories.findAll({
        order: [
            ['createdAt', 'DESC']
        ]
    })
    .then((result) => {
        return res.status(200).send({
            data: result
        })
    }).catch((err) => {
        return res.status(500).send({
            status: err
        })
    })
}

async function newMemory(req, res) {
    await Memories.create(req.body)
    .then((result) => {
        return res.status(200).send({
            data: result
        })
    }).catch((err) => {
        return res.status(500).send({
            status: err
        })
    })
}

exports.getAllMemories = getAllMemories;
exports.newMemory = newMemory;