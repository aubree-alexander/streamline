const sequelize = require('../config/connection');
const seedMovieShow = require('./movieshowData');
const seedStreamingService = require('./streamingserviceData');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedMovieShow();
    console.log('\n----- MovieShow SEEDED -----\n');

    await seedStreamingService();
    console.log('\n----- StreamingService SEEDED -----\n');

    process.exit(0);
};

seedAll();