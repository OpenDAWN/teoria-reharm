var Reharm = require('./lib/reharm');

module.exports = function createNewReharm(opt) {
    return new Reharm(opt);
};