define(function(require){
    var _i = {
		$: require('jquery'),
		deferred: require('_custom/deferred')
	};

    function UtilsCls() {};

    UtilsCls.prototype.saveFile = function(text, filename) {
        var a = document.createElement('a');
        a.setAttribute('href', 'data:text/plain;charset=utf-u,' + encodeURIComponent(text));
        a.setAttribute('download', filename);
        a.click()
    };

    UtilsCls.prototype.readFiles = function(item, files){
        var self = this;
        // files is a FileList of File objects. List some properties.
        var output = [];
        for (var i = 0, f; f = files[i]; i++) {
            var file = f;
            currentFileName(f.name);
            var reader = new FileReader();

            //read into memory
            reader.readAsText(file);
            reader.onload = self.loaded;
        }

        self.loaded = function(evt){
            var fileString = evt.target.result;
            var asObject = JSON.parse(fileString);
            asObject._id = asObject.name;

            _i.charajax.post('races/', asObject).done(function(response){
            });
        };
    };

    return new UtilsCls();

});
