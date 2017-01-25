define(function(require){
	var _i = {
			$: require('jquery'),
			ko: require('knockout')
	};

	_i.ko.bindingHandlers.fadeselections = {
	    init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
			var $element = _i.$(element);
			var value = valueAccessor();

	    },
	    update: function(element, valueAccessor) {
	        var $element = _i.$(element);
	        var value = valueAccessor();
					
					if(value.selectedClassId() === 0){
						return;
					}

					if(value.classId === value.selectedClassId()){
						$element.fadeIn();
					}
					else{
						$element.fadeOut();
					}
	    }
	};

});
