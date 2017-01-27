define(function(require) {
	var _i = {
		ko: require('knockout'),
		$: require('jquery'),
		search: require('services/search'),
		list: require('services/listmanager'),
		classRepo: require('services/classDB')
		//_db: require('services/classDB'),
		//dbutils: require('services/CharacterCreatorAPI')
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
			_i.$.getJSON("app/Models/FinishedCLassList.js", function(data) {
				var mappedList = _i.$.map(data, function(obj, index) {
					obj.id = index + 1;
					return obj;
				});
				self.data = mappedList;
				self.classList(data);
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
			var datatosend = {id:5,name:"nameofoobar"};
			var stringifiedObj = JSON.stringify(datatosend);

			_i.$.ajax({
				type: 'POST',
				url: 'https://ksweet007.cloudant.com/classes',
				headers: {
  					"Authorization": "Basic " + btoa('ksweet007' + ":" + '@Manda!!o5'),
					"Content-Type": "application/json"
				},
				data: stringifiedObj,
				dataType:'application/json'

			}).done(function(reply){
				console.log("failed");
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
