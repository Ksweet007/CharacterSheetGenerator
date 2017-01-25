define(function(require){
	var _i = {
			$: require('jquery'),
			ko: require('knockout')
	};

	_i.ko.bindingHandlers.fadeVisible = {
	    init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
				var $element = _i.$(element);
				var value = valueAccessor();
				
				$element.on('click',function(){

				});


        // $(element).toggle(ko.unwrap(value)); // Use "unwrapObservable" so we can handle values that may or may not be observable
	    },
	    update: function(element, valueAccessor) {
	        // Whenever the value subsequently changes, slowly fade the element in or out
	        var value = valueAccessor();
	        ko.unwrap(value) ? $(element).fadeIn() : $(element).fadeOut();
	    }
	};

});
