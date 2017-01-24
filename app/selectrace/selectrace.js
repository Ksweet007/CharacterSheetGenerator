define(function(require) {
	var _i = {
		ko: require('knockout'),
		$: require('jquery'),
		classes: require('services/characterlisting')
	};

	return function() {
		var self = this;
		self.data = null;
		self.classList = _i.ko.observableArray([]);
		self.displayName = 'Welcome to the Character Builder!';

		self.activate = function(){
			return _i.$.getJSON("app/ClassList.js", function(data){
				self.classList(data.Classes);
			});
		};

		self.columnCount = _i.ko.computed(function(){
			if(self.classList().length > 0 && self.classList().length < 8){
				return 1;
			}
			else if(self.classList().length >= 8 && self.classList().length < 17){
				return 2;
			}
			else if(self.classList().length >= 17){
				return 3;
			}
		});

		// var columnTruth = self.totalClasses() % 2 === 0

		self.selectClass = function() {

		};
	};

});
