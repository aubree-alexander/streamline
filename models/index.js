//establish associations between models, and foreign keys, and references. 

const User = require('./User');
const MovieShow = require('./MovieShow');
const StreamingService = require('./StreamingService');


//AA - changeing from hasone to hasmany
//AA - tried switching around sourcekey and foreignkey to no avail
StreamingService.hasMany(MovieShow, {
    foreignKey: 'streamingservice_id'
    // sourceKey: 'name',
    // as: 'streamName'
});


MovieShow.belongsTo(StreamingService);

module.exports = { User, MovieShow, StreamingService }

