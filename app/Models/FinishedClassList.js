[
	{
		"name": "Bard",
		"abilitysave": "Charisma",
		"armor": [true, false, false, false],
		"attacks": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		"die": 8,
		"startingequipment": ["A rapier -or- a longsword -or- any simple weapon", "A diplomat's pack -or- an entertainer's pack", "A lute -or- any other musical instrument", "Leather armor and a dagger.", "Alternatively, choose 5d4 x 10 gp worth of starting equipment instead of both the class' and the background's starting equipment."],
		"subclasses": ["Bard College", ["college of lore", "college of valor"]],
		"tools": ["Three musical instruments"],
		"weapons": [true, false, ["hand crossbow", "longsword", "rapier", "shortsword"]],
		"improvements": [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
		"multiclassArmor": [true, false, false, false],
		"multiclassTools": ["One musical instrument"],
		"multiclassskills": ["Choose any one skill"],
		"prereqs": "Charisma 13",
		"primaryability": "Charisma",
		"saves": ["Dex", "Cha"],
		"skills": ["Choose any three skills"],
		"source": ["P", 51],
		"spellcastingKnown": {
			"cantrips": [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
			"spells": [4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 13, 13, 14, 14, 15, 16, 16, 16]
		},
		"features": [{
			"additional": ["2 cantrips 4 spells known", "2 cantrips 5 spells known", "2 cantrips 6 spells known", "3 cantrips 7 spells known", "3 cantrips 8 spells known", "3 cantrips  9 spells known", "3 cantrips  10 spells known", "3 cantrips  11 spells known", "3 cantrips  12 spells known", "4 cantrips  14 spells known", "4 cantrips  15 spells known", "4 cantrips  15 spells known", "4 cantrips  16 spells known", "4 cantrips  18 spells known", "4 cantrips  19 spells known", "4 cantrips  19 spells known", "4 cantrips  20 spells known", "4 cantrips  22 spells known", "4 cantrips  22 spells known", "4 cantrips  22 spells known"],
			"description": "Cast bard cantrips/spells using Charisma as spellcasting ability. Use a musical instrument as a spellcasting focus. Cast known bard spells as rituals if they have the ritual tag",
			"minlevel": 1,
			"name": "Spellcasting",
			"source": ["P", 52]
		}, {
			"action": ["bonus action", ""],
			"additional": ["d6", "d6", "d6", "d6", "d8", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10", "d10", "d12", "d12", "d12", "d12", "d12", "d12"],
			"description": "As a bonus action, a creature in 60 ft that can hear you gets an inspiration die (max 1). For 10 min, the recipient can add it to one ability check, attack roll, or saving throw. This addition can be done after seeing the d20 roll, but before knowing the outcome",
			"minlevel": 1,
			"name": "Bardic Inspiration",
			"recovery": "long rest",
			"source": ["P", 53],
			"usages": "Charisma modifier per"
		}, {
			"description": "You can add half your proficiency bonus to any ability check that doesn't already include it",
			"minlevel": 2,
			"name": "Jack of All Trades",
			"source": ["P", 54]
		}, {
			"additional": ["", "d6", "d6", "d6", "d6", "d6", "d6", "d6", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10", "d12", "d12", "d12", "d12"],
			"description": "Those that use HD and can hear your performance during a short rest get extra healing",
			"minlevel": 2,
			"name": "Song of Rest",
			"source": ["P", 54]
		}, {
			"description": "Choose a College that reflects your personality. Choose either the College of Lore or the College of Valor",
			"minlevel": 3,
			"name": "Bard College",
			"source": ["P", 54]
		}, {
			"additional": ["", "", "with two skills", "with two skills", "with two skills", "with two skills", "with two skills", "with two skills", "with two skills", "with four skills", "with four skills", "with four skills", "with four skills", "with four skills", "with four skills", "with four skills", "with four skills", "with four skills", "with four skills", "with four skills"],
			"description": "You gain expertise with two skills you are proficient with; two more at 10th level",
			"minlevel": 3,
			"name": "Expertise",
			"source": ["P", 54]
		}, {
			"description": "You can now also recover your expended Bardic Inspiration uses after a short rest",
			"minlevel": 5,
			"name": "Font of Inspiration",
			"source": ["P", 54]
		}, {
			"action": ["action", ""],
			"description": "As an action, you can do a performance that lasts until the end of your next turn. While it lasts, any friend in earshot (30 ft) has adv. on saves vs. frightened/charmed",
			"minlevel": 6,
			"name": "Countercharm",
			"source": ["P", 54]
		}, {
			"additional": ["", "", "", "", "", "", "", "", "", "two spells/cantrips", "two spells/cantrips", "two spells/cantrips", "two spells/cantrips", "four spells/cantrips", "four spells/cantrips", "four spells/cantrips", "four spells/cantrips", "six spells/cantrips", "six spells/cantrips", "six spells/cantrips"],
			"description": "You can add two spells/cantrips from any class to your spells known; +2 at level 14 and level 18",
			"minlevel": 10,
			"name": "Magical Secrets",
			"source": ["P", 54],
			"spellcastingBonus": {
				"class": "any",
				"name": "Magical Secret",
				"times": [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 4, 4, 4, 4, 6, 6, 6]
			}
		}, {
			"description": "You regain one use of Bardic Inspiration if you have no more remaining when you roll initiative",
			"minlevel": 20,
			"name": "Superior Inspiration",
			"source": ["P", 54]
		}]
	}




]
