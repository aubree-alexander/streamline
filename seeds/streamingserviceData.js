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
  }
];

const seedStreamingService = () => StreamingService.bulkCreate(streamingservicedata);

module.exports = seedStreamingService;

