define(function(require){
    var _i={

    };

    return [{
        _id: "Druid",
    	"Class":{
    			_id:"Druid",
    			name: "Druid",
    			source: ["P", 64],
    			primaryAbility: "  Druid: Wisdom;",
    			abilitySave: 5,
    			prereqs: "  Druid: Wisdom 13;",
    			improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    			die: 8,
    			saves: ["Wis", "Int"],
    			skills: ["" + ("Druid") + ": Choose two from Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, and Survival."],
    			tools: ["Herbalism kit"],
    			armor: [
    				[true, true, false, true],
    				[true, true, false, true]
    			],
    			weapons: [
    				[false, false, ["club", "dagger", "dart", "javelin", "mace", "quarterstaff", "scimitar", "sickle", "sling", "spear"]]
    			],
    			equipment: "Druid starting equipment:  A wooden shield -or- any simple weapon;  A scimitar -or- any simple melee weapon;  Leather armor, an explorer's pack, and a druidic focus.Alternatively, choose 2d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
    			subclasses: ["Druid Circle", ["circle of the land", "circle of the moon"]],
    			attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    			spellcastingFactor: 1,
    			spellcastingKnown: {
    				cantrips: [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    				spells: "list",
    				prepared: true,
    			},
    			features: {
    				"druidic": {
    					name: "Druidic",
    					source: ["P", 66],
    					minlevel: 1,
    					description: "   " + "I know Druidic; Hidden messages with it can only be understood by who know Druidic",
    					eval: "AddLanguage(\"Druidic\", \"being a Druid\");",
    					removeeval: "RemoveLanguage(\"Druidic\", \"being a Druid\");"
    				},
    				"spellcasting": {
    					name: "Spellcasting",
    					source: ["P", 66],
    					minlevel: 1,
    					description: "   " + "I can cast prepared druid cantrips/spells, using Wisdom as my spellcasting ability" + "   " + "I can use a druidic focus as a spellcasting focus" + "   " + "I can cast my prepared druid spells as rituals if they have the ritual tag",
    					additional: ["2 cantrips known", "2 cantrips known", "2 cantrips known", "3 cantrips known", "3 cantrips known", "3 cantrips known", "3 cantrips known", "3 cantrips known", "3 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known"],
    				},
    				"subclassfeature2": {
    					name: "Druid Circle",
    					source: ["P", 67],
    					minlevel: 2,
    					description: "   " + "Choose a Circle you can identify with and put it in the \"Class\" field on the first page" + "   " + "Choose either the Circle of the Land or the Circle of the Moon",
    				},
    				"wild shape": {
    					name: "Wild Shape",
    					source: ["P", 66],
    					minlevel: 2,
    					description: "   " + "As an action, I assume the shape of a beast I have seen before with the following rules:" + "    - " + "I gain all its game statistics except Intelligence, Wisdom, or Charisma" + "    - " + "I get its skill/saving throw prof. while keeping my own, using whichever is higher" + "    - " + "I assume the beast's HP and HD; I get mine back when I revert back" + "    - " + "I can't cast spells in beast form, but transforming doesn't break concentration" + "    - " + "I retain features from class, race, etc., but I don't retain special senses" + "    - " + "I can choose whether equipment falls to the ground, merges, or stays worn" + "    - " + "I revert if out of time or unconscious; if KOd by damage, excess damage carries over",
    					usages: [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, "\u221E\u00D7 per "],
    					recovery: "short rest",
    					additional: ["", "CR 1/4, no fly/swim; 1 hour", "CR 1/4, no fly/swim; 1 hour", "CR 1/2, no fly; 2 hours", "CR 1/2, no fly; 2 hours", "CR 1/2, no fly; 3 hours", "CR 1/2, no fly; 3 hours", "CR 1; 4 hours", "CR 1; 4 hours", "CR 1; 5 hours", "CR 1; 5 hours", "CR 1; 6 hours", "CR 1; 6 hours", "CR 1; 7 hours", "CR 1; 7 hours", "CR 1; 8 hours", "CR 1; 8 hours", "CR 1; 9 hours", "CR 1; 9 hours", "CR 1; 10 hours"],
    					action: ["action", " (start)"],
    					eval: "AddAction(\"bonus action\", \"Wild Shape (end)\", \"Druid\");",
    					removeeval: "RemoveAction(\"bonus action\", \"Wild Shape (end)\", \"Druid\");",
    				},
    				"timeless body": {
    					name: "Timeless Body",
    					source: ["P", 67],
    					minlevel: 18,
    					description: "   " + "I age more slowly, only 1 year for every 10 years that pass",
    				},
    				"beast spells": {
    					name: "Beast Spells",
    					source: ["P", 67],
    					minlevel: 18,
    					description: "   " + "I can perform the somatic and verbal components of druid spells while in a beast shape",
    				},
    				"archdruid": {
    					name: "Archdruid",
    					source: ["P", 67],
    					minlevel: 20,
    					description: "   " + "I can use Wild Shape an unlimited number of times" + "   " + "My druid spells don't require verbal, somatic, or free material components",
    				},
    			}
    	}
    },{
        _id: "Druid",
        "Class":{
                _id:"Druid",
                name: "Druid",
                source: ["P", 64],
                primaryAbility: "  Druid: Wisdom;",
                abilitySave: 5,
                prereqs: "  Druid: Wisdom 13;",
                improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
                die: 8,
                saves: ["Wis", "Int"],
                skills: ["" + ("Druid") + ": Choose two from Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, and Survival."],
                tools: ["Herbalism kit"],
                armor: [
                    [true, true, false, true],
                    [true, true, false, true]
                ],
                weapons: [
                    [false, false, ["club", "dagger", "dart", "javelin", "mace", "quarterstaff", "scimitar", "sickle", "sling", "spear"]]
                ],
                equipment: "Druid starting equipment:  A wooden shield -or- any simple weapon;  A scimitar -or- any simple melee weapon;  Leather armor, an explorer's pack, and a druidic focus.Alternatively, choose 2d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
                subclasses: ["Druid Circle", ["circle of the land", "circle of the moon"]],
                attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                spellcastingFactor: 1,
                spellcastingKnown: {
                    cantrips: [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                    spells: "list",
                    prepared: true,
                },
                features: {
                    "druidic": {
                        name: "Druidic",
                        source: ["P", 66],
                        minlevel: 1,
                        description: "   " + "I know Druidic; Hidden messages with it can only be understood by who know Druidic",
                        eval: "AddLanguage(\"Druidic\", \"being a Druid\");",
                        removeeval: "RemoveLanguage(\"Druidic\", \"being a Druid\");"
                    },
                    "spellcasting": {
                        name: "Spellcasting",
                        source: ["P", 66],
                        minlevel: 1,
                        description: "   " + "I can cast prepared druid cantrips/spells, using Wisdom as my spellcasting ability" + "   " + "I can use a druidic focus as a spellcasting focus" + "   " + "I can cast my prepared druid spells as rituals if they have the ritual tag",
                        additional: ["2 cantrips known", "2 cantrips known", "2 cantrips known", "3 cantrips known", "3 cantrips known", "3 cantrips known", "3 cantrips known", "3 cantrips known", "3 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known"],
                    },
                    "subclassfeature2": {
                        name: "Druid Circle",
                        source: ["P", 67],
                        minlevel: 2,
                        description: "   " + "Choose a Circle you can identify with and put it in the \"Class\" field on the first page" + "   " + "Choose either the Circle of the Land or the Circle of the Moon",
                    },
                    "wild shape": {
                        name: "Wild Shape",
                        source: ["P", 66],
                        minlevel: 2,
                        description: "   " + "As an action, I assume the shape of a beast I have seen before with the following rules:" + "    - " + "I gain all its game statistics except Intelligence, Wisdom, or Charisma" + "    - " + "I get its skill/saving throw prof. while keeping my own, using whichever is higher" + "    - " + "I assume the beast's HP and HD; I get mine back when I revert back" + "    - " + "I can't cast spells in beast form, but transforming doesn't break concentration" + "    - " + "I retain features from class, race, etc., but I don't retain special senses" + "    - " + "I can choose whether equipment falls to the ground, merges, or stays worn" + "    - " + "I revert if out of time or unconscious; if KOd by damage, excess damage carries over",
                        usages: [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, "\u221E\u00D7 per "],
                        recovery: "short rest",
                        additional: ["", "CR 1/4, no fly/swim; 1 hour", "CR 1/4, no fly/swim; 1 hour", "CR 1/2, no fly; 2 hours", "CR 1/2, no fly; 2 hours", "CR 1/2, no fly; 3 hours", "CR 1/2, no fly; 3 hours", "CR 1; 4 hours", "CR 1; 4 hours", "CR 1; 5 hours", "CR 1; 5 hours", "CR 1; 6 hours", "CR 1; 6 hours", "CR 1; 7 hours", "CR 1; 7 hours", "CR 1; 8 hours", "CR 1; 8 hours", "CR 1; 9 hours", "CR 1; 9 hours", "CR 1; 10 hours"],
                        action: ["action", " (start)"],
                        eval: "AddAction(\"bonus action\", \"Wild Shape (end)\", \"Druid\");",
                        removeeval: "RemoveAction(\"bonus action\", \"Wild Shape (end)\", \"Druid\");",
                    },
                    "timeless body": {
                        name: "Timeless Body",
                        source: ["P", 67],
                        minlevel: 18,
                        description: "   " + "I age more slowly, only 1 year for every 10 years that pass",
                    },
                    "beast spells": {
                        name: "Beast Spells",
                        source: ["P", 67],
                        minlevel: 18,
                        description: "   " + "I can perform the somatic and verbal components of druid spells while in a beast shape",
                    },
                    "archdruid": {
                        name: "Archdruid",
                        source: ["P", 67],
                        minlevel: 20,
                        description: "   " + "I can use Wild Shape an unlimited number of times" + "   " + "My druid spells don't require verbal, somatic, or free material components",
                    },
                }
        }
    }



];


});
