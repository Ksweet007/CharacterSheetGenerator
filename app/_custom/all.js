define(function(require) {
	var _i = {
		ko: require('knockout')
	};

	require('./cls');

	require('./bindinghandlers/columnbuilder');
	require('./bindinghandlers/LockScroll');

});
