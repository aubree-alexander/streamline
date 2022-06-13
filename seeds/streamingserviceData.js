const { StreamingService } = require('../models');

const streamingservicedata = [
  {
    name: 'AMC+'
  },
  {
    name: 'Apple TV+'
  },
  {
    name: 'BET+',
  },
  {
    name: 'Crunchyroll'
  },
  {
    name: 'DIRECTV STREAM'
  },
  {
    name: 'Discovery+'
  },
  {
    name: 'Disney+'
  },
  {
    name: 'ESPN+'
  },
  {
    name: 'FandangoNOW'
  },
  {
    name: 'HBO Max'
  },
  {
    name: 'HIDIVE'
  },
  {
    name: 'Hulu'
  },
  {
    name: 'Netflix'
  },
  {
    name: 'Noggin'
  },
  {
    name: 'Paramount+'
  },
  {
    name: 'Peacock TV'
  },
  {
    name: 'Pluto TV'
  },
  {
    name: 'Prime Video'
  },
  {
    name: 'Showtime'
  },
  {
    name: 'Shudder'
  },
  {
    name: 'Sling TV'
  },
  {
    name: 'Starz'
  },
  {
    name: 'Sundance Now'
  },
  {
    name: 'Tubi TV'
  },
  {
    name: 'Vudu'
  }
];

// const seedStreamingService = async () => {
//   const rawServices = await StreamingService.bulkCreate(streamingservicedata);
//   const services = rawServices.map((service) => service.get({ plain: true }));
//   return services;
// }

// module.exports = seedStreamingService;

//new
const seedStreamingService = () => StreamingService.bulkCreate(streamingservicedata);


module.exports = seedStreamingService;

