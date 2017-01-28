define('services/classrepository',function(require) {
	var _i = {
		ko: require('knockout'),
		$: require('jquery')
	};


	function DbClassRepoCls() {
		// var self = this;
		// _i.$.couch.urlPrefix = "http://localhost:5984";
		// self.responseMsg = function(data) {
		// 	console.log(data);
		// };
	}

	DbClassRepoCls.prototype.saveClass = function(classObj) {
		// var self = this;
		//
		// $.couch.db("classes").saveDoc(classObj, {
		// 	success: self.responseMsg(data),
		// 	error: self.responseMsg(status)
		// });
	};

	// DbClassRepoCls.prototype.saveBulkClasses = function(classList) {
	// 	var self = this;
	// 	var jsonList = JSON.parse(JSON.stringify(classList));
    //
	// 	$.couch.db("classes").bulkSave({
	// 		"docs": jsonList
	// 	}, {
	// 		success: function(data) {
	// 			console.log(data);
	// 		},
	// 		error: function(status) {
	// 			console.log(status);
	// 		}
	// 	});
    //
	// };

	return new DbClassRepoCls();
});
