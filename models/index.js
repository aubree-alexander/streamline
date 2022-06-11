//establish associations between models, and foreign keys, and references. 

const User = require('./User');
const MovieShow = require('./MovieShow');
const StreamingService = require('./StreamingService');


StreamingService.hasOne(MovieShow, {
    foreignKey: 'id',
    sourceKey: 'name',
    as: 'streamName'
});
MovieShow.belongsTo(StreamingService);

module.exports = { User, MovieShow, StreamingService }

