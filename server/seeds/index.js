const seedMemories = require('./memory-seed');

const sequelize = require('../config');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedMemories();
    console.log('\n----- MEMORIES SEEDED -----\n');

    process.exit(0);
};

seedAll();