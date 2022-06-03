//establish associations between models, and foreign keys, and references. 

const User = require('./User');
const MovieShow = require('./MovieShow');
const StreamingService = require('./StreamingService');


MovieShow.hasMany(StreamingService, {
    foreignKey: 'streamingservice_id'
});

StreamingService.hasMany(MovieShow, {
    foreignKey: 'movieshow_id'
});

module.exports = { User, MovieShow, StreamingService }

