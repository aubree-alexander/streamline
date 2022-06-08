const sequelize = require('../config/connection');
const seedMovieShow = require('./movieshowData');
const seedStreamingService = require('./streamingserviceData');
const seedUser = require('./userData');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    var streamingServices = await seedStreamingService();

    console.log('\n----- StreamingService SEEDED -----\n');

    await seedMovieShow(streamingServices);
    console.log('\n----- MovieShow SEEDED -----\n');

    await seedUser();
    console.log('\n----- User SEEDED -----\n');

    process.exit(0);
};

seedAll();