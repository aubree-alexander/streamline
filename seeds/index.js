const sequelize = require('../config/connection');
const seedMovieShow = require('./movieshowData');
const seedStreamingService = require('./streamingserviceData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedMovieShow();

    await seedStreamingService();

    process.exit(0);
};

seedAll();