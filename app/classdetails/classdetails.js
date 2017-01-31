define(function(require) {
	var _i = {
		ko: require('knockout'),
		$: require('jquery'),
		search: require('_custom/services/search'),
		list: require('_custom/services/listmanager'),
		charajax: require('_custom/services/WebAPI'),
		app: require('durandal/app')
	};

	return function() {
		var self = this;
		self.data = null;
		self.displayName = _i.ko.observable('');
		self.levelDetail = _i.ko.observableArray([]);
		self.primaryAbility = _i.ko.observable('');
		self.hitPoints = _i.ko.observable({});
		self.proficiencies = _i.ko.observableArray([]);
		self.armor = _i.ko.observableArray([]);
		self.weapons = _i.ko.observableArray([]);
		self.tools = _i.ko.observableArray([]);
		self.savingThrows = _i.ko.observableArray([]);
		self.skills = _i.ko.observableArray([]);
		self.features = _i.ko.observableArray([]);
		self.equipment = _i.ko.observableArray([]);
		self.classDetails = _i.ko.observableArray([]);

		self.deactivate = function() {
			return _i.app.trigger('view:done', 'Details');
		};

		self.canDeactivate = function() {
			_i.app.trigger('view:done', 'Details');
			return true;


		};

		self.activate = function(classname) {
			return _i.charajax.getJSON('classes/' + classname).done(function(response) {
				var classDetails = response.Class;
				classDetails.id = classname;
				var data = classDetails;
				classDetails.features[0].description = classDetails.features[0].description.replace(/\\n/g, "\n");
				self.data = classDetails;
				self.displayName(classname);
				self.primaryAbility(data.primaryability);
				self.hitPoints(data.hitpoints);
				self.proficiencies(data.proficiencies);
				self.armor(self.proficiencies().armor);
				self.weapons(self.proficiencies().weapons);
				self.tools(self.proficiencies().tools);
				self.savingThrows(self.proficiencies().saves);
				self.skills(self.proficiencies().skills);
				self.features(data.features);
				self.equipment(data.equipment);

				self.armorList = _i.ko.computed(function() {
					return buildList(self.armor());
				});

				self.weaponList = _i.ko.computed(function() {
					return buildList(self.weapons());
				});

				self.toolList = _i.ko.computed(function() {
					return buildList(self.tools());
				});

				self.savingthrowList = _i.ko.computed(function() {
					return buildList(self.savingThrows());
				});

				self.equipmentList = _i.ko.computed(function() {
					return buildListString(self.equipment());
				});

				self.featureList = _i.ko.computed(function() {
					var mappedList = _i.$.map(self.features(), function(obj, index) {
						var item = obj;
						item.id = "collapse" + index + 1;
						item.description = obj.description.replace(/\\n/g, "\n");
						return item;
					});
				});

				_i.charajax.getJSON('classdetailpanel/' + classname).done(function(data) {
					self.classDetails(data.levels);
				});

			});
		}


	};

	function buildList(listitem) {
		var result = "";
		_i.ko.utils.arrayForEach(listitem, function(item) {
			if (!result) {
				result = item.name;
			} else {
				result = result + ', ' + item.name;
			}
		});
		return result;
	};

	function buildListString(listitem) {
		var result = "";
		_i.ko.utils.arrayForEach(listitem, function(item) {
			if (!result) {
				result = item;
			} else {
				result = result + ', ' + item;
			}
		});
		return result;
	};

});
