define(function(require) {
	var _i = {
		ko: require('ko'),
		$: require('jquery')
	};

	function ClassCls() {
		var self = this;

		self._id = _i.ko.observable('');
		self.name = _i.ko.observable('');
		self.powersource = _i.ko.observable('');
		self.source = _i.ko.observableArray([]);
		self.primaryAbility = _i.ko.observable('');
		self.abilitysave = _i.ko.observable('');
		self.prereqs = _i.ko.observable('');
		self.die = _i.ko.observable(0);
		self.improvements = _i.ko.observableArray([]);
		self.saves = _i.ko.observableArray([]);
		self.skills = _i.ko.observableArray([]);
		self.armor = _i.ko.observableArray([]);
		self.weapons = _i.ko.observableArray([]);
		self.equipment = _i.ko.observable('');
		self.subclasses = _i.ko.observableArray([]);
		self.attacks = _i.ko.observableArray([]);
		self.features = _i.ko.observableArray([]);
		self.spellcastingknown = _i.ko.observableArray([]);
	}

    return{
        class: CLassCls
    };

});
