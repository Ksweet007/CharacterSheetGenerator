define(function(require) {
	var _i = {
		ko: require('knockout'),
		$: require('jquery'),
		search: require('_custom/services/search'),
		list: require('_custom/services/listmanager')
	};

	return function() {
		var self = this;
		self.displayName = 'Select Race';

	};
});
