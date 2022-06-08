const { StreamingService } = require('../models');

const streamingservicedata = [
  {
    name: 'Netflix'
  },
  {
    name: 'Hulu'
  },
  {
    name: 'Apple TV',
  },
  {
    name: 'Amazon Prime Video'
  },
  {
    name: 'Disney+'
  },
  {
    name: 'HBO Max'
  },
  {
    name: 'Crunchyroll'
  },
  {
    name: 'Peacock'
  },
  {
    name: 'Funimation'
  }
];

const seedStreamingService = async () => {
  const rawServices = await StreamingService.bulkCreate(streamingservicedata);
  const services = rawServices.map((service) => service.get({ plain: true }));
  return services;
}

module.exports = seedStreamingService;

