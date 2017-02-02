define(function(require) {
	var _i = {
		ko: require('knockout'),
		$: require('jquery'),
		search: require('_custom/services/search'),
		list: require('_custom/services/listmanager'),
		charajax: require('_custom/services/WebAPI'),
		utils: require('_custom/services/utils')
	};
	return function() {
		var self = this;
		self.currentFileName = _i.ko.observable('');
		self.displayName = 'Select Race';

//https://www.html5rocks.com/en/tutorials/file/dndfiles/

		self.activate = function() {
			self.handleFileSelect = function(item, evt) {
				_i.utils.readFiles(item,evt);
			}

		};


	}
});
