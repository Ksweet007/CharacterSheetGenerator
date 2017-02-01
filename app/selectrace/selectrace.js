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

		self.activate = function() {
			return _i.$.getJSON('app/selectrace/RaceList.js', function(result) {
				var foo = result;

				for (var key in result) {
					if (result.hasOwnProperty(key)) {
						console.log(result[key]);
						//console.log(key + " -> " + result[key]);
						//turn it to JSON?
						saveText(JSON.stringify(result[key]),key);
					}
				}

				function saveText(text, filename) {
					var a = document.createElement('a');
					//a.setAttribute('href', 'data:text/plain;charset=utf-u,' + encodeURIComponent(text));
					//a.setAttribute('download', filename);
					//a.click()
				}


			});
		}

	};
});
