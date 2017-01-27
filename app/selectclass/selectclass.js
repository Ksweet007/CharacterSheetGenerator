define(function(require) {
	var _i = {
		ko: require('knockout'),
		$: require('jquery'),
		search: require('services/search'),
		list: require('services/listmanager'),
		classRepo: require('services/classDB'),
		_db: require('services/indexeddb')
	};

	return function() {
		var self = this;
		self.data = null;
		self.db = null;
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
			_i.$.getJSON("app/Models/FinishedCLassList.js", function(data) {
				var mappedList = _i.$.map(data, function(obj, index) {
					obj.id = index + 1;
					return obj;
				});
				self.data = mappedList;
				self.classList(data);
			});

			//setup indexedDB -- This should move to the router for durandal and load a table for each view
			if (_i._db.isCompatable) {
				var openRequest = indexedDB.open("charcreator", 1);
				openRequest.onupgradeneeded = function(e) {
					self.db = _i._db.createDatabase(e);
					var objectStore = _i._db.createTable(self.db, ["classes"]);
					_i._db.createIndex(objectStore);
				}
				openRequest.onsuccess = function(e) {
					console.log("--------SUCCESS--------");
					self.db = e.target.result;
				}
				openRequest.onerror = function(e) {
					console.log("--------ERROR--------");
					console.dir(e);
				}
			}
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

			// var $element = _i.$(event.target);
			// if (item.id === self.selectedClassId()) {
			// 	self.selectedClassId(0);
			// } else {
			// 	self.selectedClassId(item.id);
			// }
		};


	};


});
