define(function(require) {
	var _i = {
		ko: require('knockout'),
		$: require('jquery'),
		classes: require('services/characterlisting')
	};
	var ctor = function() {
		var self = this;

		self.totalClasses = _i.ko.observable(0);
		self.classListOptions = _i.ko.observableArray([]);
		self.displayName = 'Welcome to the Character Builder!';
		self.className = _i.ko.observable('TTTT');
		self.classList = _i.ko.observableArray([]);
		//get by name self.classList()["barbarian"]
		self.classList(_i.classes.getBarbarian());
		self.mappedList = _i.ko.computed(function() {
			if (_i.ko.utils.unwrapObservable(self.classList())) {
				return Object.entries(self.classList());
			}
		});

		_i.$.each(self.mappedList(), function(objectIndex, value) {
			var objectKey = value[0];
			var objectValue = value[1];
			self.classListOptions.push(objectValue);
			var totalCount = self.totalClasses() + 1;
			self.totalClasses(totalCount);
		});

		self.columnCount = _i.ko.computed(function(){
			if(self.totalClasses() > 0 && self.totalClasses() < 8){
				return 1;
			}
			else if(self.totalClasses() >= 8 && self.totalClasses() < 17){
				return 2;
			}
			else if(self.totalClasses() >= 17){
				return 3;
			}
		});

		var columnTruth = self.totalClasses() % 2 === 0

		self.selectClass = function() {

		};


	};

	return ctor;
});
