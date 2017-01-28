define(function(require) {
	var _i = {
		ko: require('knockout'),
		$: require('jquery'),
		search: require('_custom/services/search'),
		list: require('_custom/services/listmanager'),
		charajax: require('_custom/services/WebAPI'),
		cleric: require('services/Cleric'),
		classListing: require('Models/ClassObjectListing')
	};

	return function() {
		var self = this;
		self.data = null;
		self.initialClassList = _i.ko.observableArray([]);
		self.classList = _i.ko.observableArray([]);
		self.selectedClassId = _i.ko.observable(0);
		self.displayName = 'Select Class';

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
		});

		self.activate = function() {
			var classListing = _i.classListing;
			var mappedList = _i.$.map(classListing,function(obj,index){

			});
			//JSON.stringify(cleric.Class)
			// var fied = JSON.stringify();
			// return _i.$.getJSON({url:'app/Models/testo.js', method:'GET'}).done(function(data) {
			// 	var mappedList = _i.$.map(data.rows, function(obj, index) {
			// 		obj.doc.Class
			// 		obj.doc.Class.id = index + 1;
			// 		obj.doc.id = index + 1;
			// 		responseData.push(obj.doc.Class);
			// 		return obj.doc.Class;
			// 	});
			// 	self.data = mappedList;
			// 	self.classList(responseData);
			// });
			// return _i.$.getJSON("app/Models/testo.js", function(data) {
			// 	var mappedList = _i.$.map(data.Classes, function(obj, index) {
			// 		obj.id = index + 1;
			// 		return obj;
			// 	});
			// 	self.data = mappedList;
			// 	self.classList(data.Classes);
			// });
			// var responseData = [];
			// _i.charajax.get('classes/_all_docs?include_docs=true').done(function(data) {
			// 	var mappedList = _i.$.map(data.rows, function(obj, index) {
			// 		obj.doc.Class
			// 		obj.doc.Class.id = index + 1;
			// 		obj.doc.id = index + 1;
			// 		responseData.push(obj.doc.Class);
			// 		return obj.doc.Class;
			// 	});
			// 	self.data = mappedList;
			// 	self.classList(responseData);
			// });
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
			return _i.$.getJSON('app/ClassList.js', function(result) {
				var foobar = result;
			});
			// var $element = _i.$(event.target);
			// if (item.id === self.selectedClassId()) {
			// 	self.selectedClassId(0);
			// } else {
			// 	self.selectedClassId(item.id);
			// }
		};


	};
});
