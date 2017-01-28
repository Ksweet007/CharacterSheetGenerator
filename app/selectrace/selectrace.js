define(function(require) {
	var _i = {
		ko: require('knockout'),
		$: require('jquery'),
		search: require('services/search'),
		list: require('services/listmanager')
	};

	return function() {
		var self = this;
		self.displayName = 'Select Race';

	};
});
