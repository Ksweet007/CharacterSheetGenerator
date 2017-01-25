define(function(require) {

	function CharCopCls() {}

	CharCopCls.prototype.getClass = function() {

		return {
			"Barbarian": {
				"skills": [": Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival."],
				"armor": [
					[true, true, false, true],
					[false, false, false, true]
				],
				"weapons": [
					[true, true],
					[true, true]
				],
				"equipment": "Barbarian starting equipment:\n • A greataxe -or- any martial melee weapon;\n • Two handaxes -or- any simple weapon;\n • An explorer's pack and four javelins.\n\nAlternatively, choose 2d4 × 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
				"subclasses": ["Primal Path", ["battlerager", "berserker", "totem warrior"]],
				"attacks": [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
				"features": {
					"rage": {
						"name": "Rage",
						"source": ["P", 48],
						"minlevel": 1,
						"description": "\n   Start/end as bonus action; add damage to melee weapons that use Str; lasts 1 min\n   Adv. on Strength checks/saves (not attacks); resistance to bludgeoning/piercing/slashing\n   Stops if I end turn without attacking or taking damage since last turn, or unconscious",
						"additional": ["+2 melee damage", "+2 melee damage", "+2 melee damage", "+2 melee damage", "+2 melee damage", "+2 melee damage", "+2 melee damage", "+2 melee damage", "+3 melee damage", "+3 melee damage", "+3 melee damage", "+3 melee damage", "+3 melee damage", "+3 melee damage", "+3 melee damage", "+4 melee damage", "+4 melee damage", "+4 melee damage", "+4 melee damage", "+4 melee damage"],
						"usages": [2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, "∞× per "],
						"recovery": "long rest",
						"action": ["bonus action", " (start/stop)"],
						"eval": "AddResistance(\"Bludgeon. (in rage)\", \"Barbarian (Rage)\"); AddResistance(\"Piercing (in rage)\", \"Barbarian (Rage)\"); AddResistance(\"Slashing (in rage)\", \"Barbarian (Rage)\");",
						"removeeval": "RemoveResistance(\"Bludgeon. (in rage)\"); RemoveResistance(\"Piercing (in rage)\"); RemoveResistance(\"Slashing (in rage)\");",
						"save": "Adv. on Strength saves in rage"
					},
					"unarmored defense": {
						"name": "Unarmored Defense",
						"source": ["P", 48],
						"minlevel": 1,
						"description": "\n   Without armor, my AC is 10 + Dexterity modifier + Constitution modifier + shield"
					},
					"reckless attack": {
						"name": "Reckless Attack",
						"source": ["P", 48],
						"minlevel": 2,
						"description": "\n   Adv. on melee weapon attacks during my turn, but attacks vs. me adv. until next turn"
					},
					"danger sense": {
						"name": "Danger Sense",
						"source": ["P", 48],
						"minlevel": 2,
						"description": "\n   Adv. on Dexterity saves against seen effects (not blinded/deafened/incapacitated)",
						"save": "Adv. on Dex saves vs. seen effects"
					},
					"subclassfeature3": {
						"name": "Primal Path",
						"source": ["P", 48],
						"minlevel": 3,
						"description": "\n   Choose a Primal Path that shapes the nature of your rage and put it in the \"Class\" field\n   Choose either the Path of the Battlerager, Berserker, or Totem Warrior"
					},
					"fast movement": {
						"name": "Fast Movement",
						"source": ["P", 49],
						"minlevel": 5,
						"description": "\n   +10 ft speed when I'm not wearing heavy armor",
						"eval": "ChangeSpeed(10);",
						"removeeval": "ChangeSpeed(-10);"
					},
					"feral instinct": {
						"name": "Feral Instinct",
						"source": ["P", 49],
						"minlevel": 7,
						"description": "\n   Adv. on Initiative; I can enter rage to act normally on the first turn when surprised",
						"eval": "Checkbox(\"Init Adv\", true, \"Advantage to Initiative checks was gained from Barbarian (Feral Instinct)\");",
						"removeeval": "Checkbox(\"Init Adv\", false, \"\");"
					},
					"brutal critical": {
						"name": "Brutal Critical",
						"source": ["P", 49],
						"minlevel": 9,
						"description": "\n   I can roll additional dice for the extra damage on a critical hit with a melee attack",
						"additional": ["", "", "", "", "", "", "", "", "1 additional die", "1 additional die", "1 additional die", "1 additional die", "2 additional dice", "2 additional dice", "2 additional dice", "2 additional dice", "3 additional dice", "3 additional dice", "3 additional dice", "3 additional dice"]
					},
					"relentless rage": {
						"name": "Relentless Rage",
						"source": ["P", 49],
						"minlevel": 11,
						"description": " [DC 10 + 5 per try, per short rest]\n   If I drop to 0 HP while raging, I can make a DC 10 Constitution save to stay at 1 HP\n   The DC increases by 5 for every attempt until I finish a short or long rest",
						"recovery": "short rest",
						"usages": "",
						"usagescalc": "var FieldNmbr = parseFloat(event.target.name.slice(-2)); var usages = What(\"Limited Feature Used \" + FieldNmbr); var DCmod = Number(usages) * 5; event.value = (isNaN(Number(usages)) || usages === \"\") ? \"DC  \" : \"DC \" + Number(10 + DCmod);"
					},
					"persistent rage": {
						"name": "Persistent Rage",
						"source": ["P", 49],
						"minlevel": 15,
						"description": "\n   My rage only lasts less than 1 minute if I fall unconscious or I choose to end it"
					},
					"indomitable might": {
						"name": "Indomitable Might",
						"source": ["P", 49],
						"minlevel": 18,
						"description": "\n   If a Strength check is lower than my Strength score, use Strength score instead"
					},
					"primal champion": {
						"name": "Primal Champion",
						"source": ["P", 49],
						"minlevel": 20,
						"description": "\n   +4 to Strength and Constitution; Their maximums increase to 24"
					}
				}
			}
		}



	}
	return new CharCopCls();
});
