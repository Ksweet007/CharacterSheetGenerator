define('services/classDB',function(require) {
	var _i = {
		ko: require('knockout'),
		$: require('jquery')
	};

    function responseMsg(data) {
        console.log(data);
    };

    function DbClassRepoCls() {
        var self = this;
        //_i.$.couch.urlPrefix = "";
		//_i.$.couch.urlPrefix = "https://ksweet007.cloudant.com/_all_dbs"
    }

    DbClassRepoCls.prototype.saveClass = function(classObj) {
        var self = this;

		_i.$.ajax({method:'POST',url:'https://ksweet007.cloudant.com/classes/_all_docs',data:{}}).done(function(reply){
			console.log(reply);
		});

		//_i.$.post('https://ksweet007.cloudant.com/classes/_all_docs',classObj, responseMsg)
        // _i.$.couch.db("https://ksweet007.cloudant.com/classes/_all_docs").saveDoc({}, {
        // 	success: responseMsg,
        // 	error: responseMsg
        // });
    };

    DbClassRepoCls.prototype.saveBulkClasses = function(classList) {
    	var self = this;
    	var jsonList = JSON.parse(JSON.stringify(classList));

    	$.couch.db("classes").bulkSave({
    		"docs": jsonList
    	}, {
    		success: responseMsg,
    		error: responseMsg
    	});

    };

	return new DbClassRepoCls();
});
