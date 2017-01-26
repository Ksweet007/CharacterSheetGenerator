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
		self.selectedClassId = _i.ko.observable(0);
		self.displayName = 'Select Class';
		self.alphaclassList = _i.ko.computed(function() {
			return _i.list.sortAlphabetically(self.classList());
		});

		self.classFadeIn = function(elem) {
			if (elem.nodeType === 1) _i.$(elem).hide().slideDown()
		}
		self.classFadeOut = function(elem) {
			if (elem.nodeType === 1) _i.$(elem).slideUp(function() {
				$(elem).remove();
			})
		}

		self.classListToBind = _i.ko.pureComputed(function() {
			var desiredType = self.selectedClassId();
			if (desiredType === 0) return self.classList();
			return ko.utils.arrayFilter(self.classList(), function(item) {
				return item.id === desiredType;
			});
		}, self);

		self.activate = function() {
			$.couch.info({
			    success: function(data) {
			        console.log(data);
			    }
			});
			//return _i.$.getJSON("app/ClassList.js", function(data) {
			//return _i.$.getJSON("app/Models/FinalClassList.js", function(data) {
			return _i.$.getJSON("http://localhost:5984",function(data){
				var mappedList = _i.$.map(data.Classes, function(obj, index) {
					obj.id = index + 1;
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

		self.selectClass = function(item, event) {
			var $element = _i.$(event.target);
			if (item.id === self.selectedClassId()) {
				self.selectedClassId(0);
			} else {
				self.selectedClassId(item.id);
			}
		};


	};


});
