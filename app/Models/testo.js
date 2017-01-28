{
	"Class": {
		_id: "Cleric",
		name: "Cleric",
		source: ["P", 56],
		primaryAbility: "Wisdom;",
		abilitySave: 5,
		prereqs: "Wisdom 13;",
		improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
		die: 8,
		saves: ["Wis", "Cha"],
		skills: ["Choose two from History, Insight, Medicine, Persuasion, and Religion."],
		armor: [[true, true, false, true],[true, true, false, true]],
		weapons: [[true, false]],
		equipment: "Cleric starting equipment: A mace -or- a warhammer (if proficient); Scale mail -or- leather armor -or- chain mail (if proficient); A light crossbow and 20 bolts -or- any simple weapon; A priest's pack -or- an explorer's pack; A shield and a holy symbol. Alternatively, choose 5d4 x 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
		subclasses: ["Divine Domain", ["arcana domain", "death domain", "knowledge domain", "life domain", "light domain", "nature domain", "tempest domain", "trickery domain", "war domain"]],
		attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		spellcastingKnown: {
			cantrips: [3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
			spells: "list",
			prepared: true,
		},
		features: [
			{
				name: "Spellcasting",
				source: ["P", 58],
				minlevel: 1,
				description: "You can cast prepared cleric cantrips/spells, using Wisdom as your spellcasting ability. You can use a holy symbol as a spellcasting focus. You can cast your prepared cleric spells as rituals if they have the ritual tag",
				additional: ["3 cantrips known", "3 cantrips known", "3 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known"],
			},
			{
				name: "Divine Domain",
				source: ["P", 58],
				minlevel: 1,
				description: "Choose a Domain related to your deity. Choose either Arcana, Death, Life, Light, Nature, Tempest, Trickery, or War Domain",
			},
			{
				name: "Channel Divinity",
				source: ["P", 58],
				minlevel: 2,
				description: "   " + "I can channel divine energy to cause an effect; the save for this is my cleric spell DC",
				usages: [0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3],
				recovery: "short rest"
			},
			{
				name: "Channel Divinity: Turn Undead",
				source: ["P", 59],
				minlevel: 2,
				description: "   " + "As an action, all undead within 30 ft that can see/hear me must make a Wisdom save" + "   " + "If an undead fails this save, it is turned for 1 minute or until it takes any damage" + "   " + "Turned: move away, never within 30 ft of me, no reactions or actions other than Dash" + "   " + "Turned: may Dodge instead of Dash when nowhere to move and unable to escape bonds",
				action: ["action", ""]
			},
			{
				name: "Destroy Undead",
				source: ["P", 59],
				minlevel: 5,
				additional: ["", "", "", "", "CR  or lower", "CR  or lower", "CR  or lower", "CR 1 or lower", "CR 1 or lower", "CR 1 or lower", "CR 2 or lower", "CR 2 or lower", "CR 2 or lower", "CR 3 or lower", "CR 3 or lower", "CR 3 or lower", "CR 4 or lower", "CR 4 or lower", "CR 4 or lower", "CR 4 or lower"],
				description: "   " + "An undead up to the CR above that fails its save when I use Turn Undead is destroyed"
			},
			{
				name: "Divine Intervention",
				source: ["P", 59],
				minlevel: 10,
				additional: ["", "", "", "", "", "", "", "", "", "10% chance", "11% chance", "12% chance", "13% chance", "14% chance", "15% chance", "16% chance", "17% chance", "18% chance", "19% chance", "100% chance"],
				usages: 1,
				recovery: "long rest",
				description: "   " + "As an action, I can implore my deity for help; the DM determines the form of help" + "   " + "Without intervention, I can retry after a long rest; otherwise, I have to wait a week",
				action: ["action", ""]
			}

	]
	}
}
