define(function(require){
	var _i = {
			$: require('jquery'),
			ko: require('knockout')
	};

	_i.ko.bindingHandlers.fadeVisible = {
	    init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
			var $element = _i.$(element);
			var value = valueAccessor();

	    },
	    update: function(element, valueAccessor,allBindings, viewModel, bindingContext) {
	        var $element = _i.$(element);
	        var value = valueAccessor();

					var valueUnwrapped = _i.ko.unwrap(value);

					if(valueUnwrapped === bindingContext.$data.id || valueUnwrapped === 0){
						$element.hide().slideDown();
					}
					else{
						$element.slideUp(function(){
							$element.remove();
						});
					}
					//var selectedId = _i.ko.unwrap(value);
					// if(value.classId === value.selectedClassId() || value.selectedClassId() === 0){
					// 	$element.hide().slideDown();
					// }
					// else{
					// 	$element.slideUp(function(){
					// 		$element.remove();
					// 	});
					// }
	    }
	};

});
