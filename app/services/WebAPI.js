define('service/WebAPI', function() {
	var _i = {
		$: require('jquery'),
		deferred: require('deferred')
	};

	function ApiCls() {};

	ApiCls.prototype.ajax = function() {
		config = _i.$.extend({
			contentType: 'application/json',
			dataType: 'json',
            Authorization: 'Basic' + btoa('ksweet007' + ":" + '@Manda!!o5'),
            Content-Type: 'application/json'
		}, config);

		var dfd = _i.$.Deferred();
        var promise = _i.$.ajax(config);
        promise.done(function () {
                    dfd.resolve.apply(this, arguments);
        }).fail(function (jqXHR, textStatus, errorThrown) {
            dfd.reject.apply(this, arguments);
        });
	};

	ApiCls.prototype.GetClassList = function() {
		var stringifiedObj = JSON.stringify(datatosend);

		_i.$.ajax({
			type: 'POST',
			url: 'https://ksweet007.cloudant.com/classes',
			headers: {
				"Authorization": "Basic " + btoa('ksweet007' + ":" + '@Manda!!o5'),
				"Content-Type": "application/json"
			},
			data: stringifiedObj,
			dataType: 'application/json'

		}).done(function(data) {
			console.log(data);
		});
	};

	ApiCls.prototype.AddClass = function(classToAdd) {
		var stringifiedObj = JSON.stringify(classToAdd);

		_i.$.ajax({
			type: 'POST',
			url: 'https://ksweet007.cloudant.com/classes',
			headers: {
				"Authorization": "Basic " + btoa('ksweet007' + ":" + '@Manda!!o5'),
				"Content-Type": "application/json"
			},
			data: stringifiedObj,
			dataType: 'application/json'

		}).done(function(data) {
			console.log(data);
		});
	};






});
