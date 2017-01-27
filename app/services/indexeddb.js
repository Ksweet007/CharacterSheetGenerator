define('services/indexeddb', function(require) {
	var _i = {
		ko: require('knockout'),
		$: require('jquery')
	};

	function IndexDbCls() {
		var self = this;
		//https://code.tutsplus.com/tutorials/working-with-indexeddb--net-34673
	}

	IndexDbCls.prototype.isCompatable = function() {
		if ("indexedDB" in window) {
			return true;
		}
		return false;
	};

	//Accepts Array of strings using the Store/Table to be created
	IndexDbCls.prototype.createObjectStoreFromArray = function(database, objStoreArray) {
		for (var i = 0; i < objStoreArray.length; i++) {
			var tablename = objStoreArray[i];
			if (!database.objectStoreNames.contains(tablename)) {
				database.createObjectStore(tablename,{autoIncrement: true});
			}
		}
	}

	IndexDbCls.prototype.createDatabase = function(e){
		console.log("--------RUNNING ONUPGRADENEEDED--------");
		var thisDB = e.target.result;
		return thisDB;
	}

	IndexDbCls.prototype.deleteDatabase = function(database){
		var req = indexedDB.deleteDatabase(database);
		req.onsuccess = function() {
			console.log("Deleted " +database+ " database successfully");
		};
		req.onerror = function() {
			console.log("Couldn't delete "+database+" database");
		};
		req.onblocked = function() {
			console.log("Couldn't delete " +database+ " database due to the operation being blocked");
		}
	}

	return new IndexDbCls();
});
