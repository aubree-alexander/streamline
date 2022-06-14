//establish associations between models, and foreign keys, and references. 

const User = require('./User');
const MovieShow = require('./MovieShow');
const StreamingService = require('./StreamingService');


StreamingService.hasMany(MovieShow, {
    foreignKey: 'streamingservice_id'
});


MovieShow.belongsTo(StreamingService, {
    foreignKey: 'streamingservice_id'
});


module.exports = { User, MovieShow, StreamingService }

