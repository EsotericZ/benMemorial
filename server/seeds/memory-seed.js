const { Memories } = require('../models');

const memoryData = [
    {
        name: 'CJ Sanders',
        memory: 'A great man with a gentle and caring heart. His girls were his world and had a passion for helping others. A true kind soul',
        createdAt: '2023-06-01',
    },
];

const seedMemories = () => Memories.bulkCreate(memoryData);

module.exports = seedMemories;