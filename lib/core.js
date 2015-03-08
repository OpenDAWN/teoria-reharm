var Functional = require('./functional');

function Reharm() {

}

Reharm.prototype = {
	functional: function(scale) {
		return new Functional(scale);
	}
};

module.exports = Reharm;