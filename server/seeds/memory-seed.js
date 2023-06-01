const { Memories } = require('../models');

const memoryData = [
    {
        name: 'CJ Sanders',
        memory: 'He was my brother',
        createdAt: '2023-05-31',
    },
    {
        name: 'Michael Sanders',
        memory: 'He was my son',
        createdAt: '2023-05-31',
    },
];

const seedMemories = () => Memories.bulkCreate(memoryData);

module.exports = seedMemories;