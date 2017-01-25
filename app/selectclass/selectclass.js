define(function(require) {
	var _i = {
		ko: require('knockout'),
		$: require('jquery'),
		search: require('services/search'),
		list: require('services/listmanager')
	};

	return function() {
		var self = this;
		self.data = null;
		self.initialClassList = _i.ko.observableArray([]);
		self.classList = _i.ko.observableArray([]);
		self.selectedClassName = _i.ko.observable('');
		self.shouldFade = _i.ko.observable(false);
		self.displayName = 'Select Class';

		self.alphaclassList = _i.ko.computed(function() {
			return _i.list.sortAlphabetically(self.classList());
		});

		self.activate = function() {
			return _i.$.getJSON("app/ClassList.js", function(data) {
				var mappedList = _i.$.map(data.Classes,function(obj,index){
					obj.id = index;
					return obj;
				});

				self.data = mappedList;
				self.classList(data.Classes);
			});
		};

		self.search = function(searchTerm) {
			if (!searchTerm || searchTerm === "") {
				self.classList(self.data);
			} else {
				var searchResults = _i.search.searchClassname(self.data, searchTerm);
				self.classList(searchResults);
			}
		};

		self.selectClass = function(selectedClassName) {
			self.selectedClassName(selectedClassName);
		}

	};

});
