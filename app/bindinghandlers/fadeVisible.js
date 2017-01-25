define(function(require){
	var _i = {
			$: require('jquery'),
			ko: require('knockout')
	};

	_i.ko.bindingHandlers.fadeVisible = {
	    init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
			var $element = _i.$(element);
			var value = valueAccessor();
			var isSelected = _i.ko.observable(true);

	    },
	    update: function(element, valueAccessor) {
	        var $element = _i.$(element);
	        var value = valueAccessor();

					if(value.selectedClassId() > 0){
						return;
					}

					if(value.className === value.selectedClassId()){
						$element.fadeIn();
					}
					else{
						$element.fadeOut();
					}
	    }
	};

});
