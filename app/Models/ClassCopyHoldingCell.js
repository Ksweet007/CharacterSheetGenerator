"bard": {

  name: "Bard",
  source: ["P", 51],
  primaryAbility: "\n \u2022 Bard: Charisma;",
  abilitySave: 6,
  prereqs: "\n \u2022 Bard: Charisma 13;",
  improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
  die: 8,
  saves: ["Dex", "Cha"],
  skills: ["\n\n" + toUni("Bard") + ": Choose any three skills.", "\n\n" + toUni("Multiclass Bard") + ": Choose any one skill."],
  tools: ["Three musical instruments", "One musical instrument"],
  armor: [
    [true, false, false, false],
    [true, false, false, false]
  ],
  weapons: [
    [true, false, ["hand crossbow", "longsword", "rapier", "shortsword"]]
  ],
  equipment: "Bard starting equipment:\n \u2022 A rapier -or- a longsword -or- any simple weapon;\n \u2022 A diplomat's pack -or- an entertainer's pack;\n \u2022 A lute -or- any other musical instrument\n \u2022 Leather armor and a dagger.\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
  subclasses: ["Bard College", ["college of lore", "college of valor"]],
  attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  spellcastingFactor: 1,
  spellcastingKnown: {
    cantrips: [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    spells: [4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 13, 13, 14, 14, 15, 16, 16, 16],
  },
  features: {
    "spellcasting": {
      name: "Spellcasting",
      source: ["P", 52],
      minlevel: 1,
      description: "\n   " + "I can cast bard cantrips/spells that I know, using Charisma as my spellcasting ability" + "\n   " + "I can use a musical instrument as a spellcasting focus" + "\n   " + "I can cast my known bard spells as rituals if they have the ritual tag",
      additional: ["2 cantrips \u0026 4 spells known", "2 cantrips \u0026 5 spells known", "2 cantrips \u0026 6 spells known", "3 cantrips \u0026 7 spells known", "3 cantrips \u0026 8 spells known", "3 cantrips \u0026 9 spells known", "3 cantrips \u0026 10 spells known", "3 cantrips \u0026 11 spells known", "3 cantrips \u0026 12 spells known", "4 cantrips \u0026 14 spells known", "4 cantrips \u0026 15 spells known", "4 cantrips \u0026 15 spells known", "4 cantrips \u0026 16 spells known", "4 cantrips \u0026 18 spells known", "4 cantrips \u0026 19 spells known", "4 cantrips \u0026 19 spells known", "4 cantrips \u0026 20 spells known", "4 cantrips \u0026 22 spells known", "4 cantrips \u0026 22 spells known", "4 cantrips \u0026 22 spells known"],
    },
    "bardic inspiration": {
      name: "Bardic Inspiration",
      source: ["P", 53],
      minlevel: 1,
      description: "\n   " + "As a bonus action, a creature in 60 ft that can hear me gets an inspiration die (max 1)" + "\n   " + "For 10 min, the recipient can add it to one ability check, attack roll, or saving throw" + "\n   " + "This addition can be done after seeing the d20 roll, but before knowing the outcome",
      additional: ["d6", "d6", "d6", "d6", "d8", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10", "d10", "d12", "d12", "d12", "d12", "d12", "d12"],
      usages: "Charisma modifier per ",
      usagescalc: "event.value = Math.max(1, tDoc.getField(\"Cha Mod\").value);",
      recovery: "long rest",
      action: ["bonus action", ""],
      changeeval: "if(ClassLevelUp.bard[1]<5&&ClassLevelUp.bard[2]>=5){RemoveFeature(\"bardic inspiration\");var oldBIrest=newClassLvl.bard>=5?\"long\":\"short\";var newBIrest=newClassLvl.bard>=5?\"short\":\"long\";CurrentClasses.bard.features[\"bardic inspiration\"].recovery=newBIrest+\" rest\";var oldBIStr=\"Bardic Inspiration (Bard 1, PHB 53) [\"+propFea.additional[oldClassLvl.bard-1]+\", Charisma modifier per \"+oldBIrest+\" rest]\";if(oldClassLvl.bard!==0&&What(\"Class Features\").indexOf(oldBIStr)!==-1){ReplaceString(\"Class Features\",oldBIStr.replace(oldBIrest,newBIrest),false,oldBIStr);}}"
    },
    "jack of all trades": {
      name: "Jack of All Trades",
      source: ["P", 54],
      minlevel: 2,
      description: "\n   " + "I can add half my proficiency bonus to any ability check that doesn't already include it",
      eval: "Checkbox(\"Jack of All Trades\", true);",
      removeeval: "Checkbox(\"Jack of All Trades\", false);"
    },
    "song of rest": {
      name: "Song of Rest",
      source: ["P", 54],
      minlevel: 2,
      description: "\n   " + "Those that use HD and can hear my performance during a short rest get extra healing",
      additional: ["", "d6", "d6", "d6", "d6", "d6", "d6", "d6", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10", "d12", "d12", "d12", "d12"]
    },
    "subclassfeature3": {
      name: "Bard College",
      source: ["P", 54],
      minlevel: 3,
      description: "\n   " + "Choose a College that reflects your personality and put it in the \"Class\" field " + "\n   " + "Choose either the College of Lore or the College of Valor"
    },
    "expertise": {
      name: "Expertise",
      source: ["P", 54],
      minlevel: 3,
      description: "\n   " + "I gain expertise with two skills I am proficient with; two more at 10th level",
      skillstxt: "\n\n" + toUni("Expertise (Bard 3)") + ": Choose any two skill proficiencies, and two more at 10th level.",
      additional: ["", "", "with two skills", "with two skills", "with two skills", "with two skills", "with two skills", "with two skills", "with two skills", "with four skills", "with four skills", "with four skills", "with four skills", "with four skills", "with four skills", "with four skills", "with four skills", "with four skills", "with four skills", "with four skills"],
    },
    "font of inspiration": {
      name: "Font of Inspiration",
      source: ["P", 54],
      minlevel: 5,
      description: "\n   " + "I can now also recover my expended Bardic Inspiration uses after a short rest",
    },
    "countercharm": {
      name: "Countercharm",
      source: ["P", 54],
      minlevel: 6,
      description: "\n   " + "As an action, I can do a performance that lasts until the end of my next turn" + "\n   " + "While it lasts, any friend in earshot \u0026 30 ft has adv. on saves vs. frightened/charmed",
      action: ["action", ""]
    },
    "magical secrets": {
      name: "Magical Secrets",
      source: ["P", 54],
      minlevel: 10,
      description: "\n   " + "I can add two spells/cantrips from any class to my spells known; +2 at level 14 \u0026 18",
      additional: ["", "", "", "", "", "", "", "", "", "two spells/cantrips", "two spells/cantrips", "two spells/cantrips", "two spells/cantrips", "four spells/cantrips", "four spells/cantrips", "four spells/cantrips", "four spells/cantrips", "six spells/cantrips", "six spells/cantrips", "six spells/cantrips"],
      spellcastingBonus: {
        name: "Magical Secret",
        class: "any",
        times: [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 4, 4, 4, 4, 6, 6, 6],
      },
    },
    "superior inspiration": {
      name: "Superior Inspiration",
      source: ["P", 54],
      minlevel: 20,
      description: "\n   " + "I regain one use of Bardic Inspiration if I have no more remaining when I roll initiative",
    },
  }
},

"cleric": {

  name: "Cleric",
  source: ["P", 56],
  primaryAbility: "\n \u2022 Cleric: Wisdom;",
  abilitySave: 5,
  prereqs: "\n \u2022 Cleric: Wisdom 13;",
  improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
  die: 8,
  saves: ["Wis", "Cha"],
  skills: ["\n\n" + toUni("Cleric") + ": Choose two from History, Insight, Medicine, Persuasion, and Religion."],
  armor: [
    [true, true, false, true],
    [true, true, false, true]
  ],
  weapons: [
    [true, false]
  ],
  equipment: "Cleric starting equipment:\n \u2022 A mace -or- a warhammer (if proficient);\n \u2022 Scale mail -or- leather armor -or- chain mail (if proficient);\n \u2022 A light crossbow and 20 bolts -or- any simple weapon;\n \u2022 A priest's pack -or- an explorer's pack;\n \u2022 A shield and a holy symbol.\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
  subclasses: ["Divine Domain", ["arcana domain", "death domain", "knowledge domain", "life domain", "light domain", "nature domain", "tempest domain", "trickery domain", "war domain"]],
  attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  spellcastingFactor: 1,
  spellcastingKnown: {
    cantrips: [3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    spells: "list",
    prepared: true,
  },
  features: {
    "spellcasting": {
      name: "Spellcasting",
      source: ["P", 58],
      minlevel: 1,
      description: "\n   " + "I can cast prepared cleric cantrips/spells, using Wisdom as my spellcasting ability" + "\n   " + "I can use a holy symbol as a spellcasting focus" + "\n   " + "I can cast my prepared cleric spells as rituals if they have the ritual tag",
      additional: ["3 cantrips known", "3 cantrips known", "3 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known"],
    },
    "subclassfeature1": {
      name: "Divine Domain",
      source: ["P", 58],
      minlevel: 1,
      description: "\n   " + "Choose a Domain related to your deity and put it in the \"Class\" field on the first page" + "\n   " + "Choose either Arcana, Death, Life, Light, Nature, Tempest, Trickery, or War Domain",
    },
    "subclassfeature1.1": {
      name: "",
      minlevel: 1,
    },
    "subclassfeature1.2": {
      name: "",
      minlevel: 1,
    },
    "channel divinity": {
      name: "Channel Divinity",
      source: ["P", 58],
      minlevel: 2,
      description: "\n   " + "I can channel divine energy to cause an effect; the save for this is my cleric spell DC",
      usages: [0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3],
      recovery: "short rest"
    },
    "turn undead": {
      name: "Channel Divinity: Turn Undead",
      source: ["P", 59],
      minlevel: 2,
      description: "\n   " + "As an action, all undead within 30 ft that can see/hear me must make a Wisdom save" + "\n   " + "If an undead fails this save, it is turned for 1 minute or until it takes any damage" + "\n   " + "Turned: move away, never within 30 ft of me, no reactions or actions other than Dash" + "\n   " + "Turned: may Dodge instead of Dash when nowhere to move and unable to escape bonds",
      action: ["action", ""]
    },
    "destroy undead": {
      name: "Destroy Undead",
      source: ["P", 59],
      minlevel: 5,
      additional: ["", "", "", "", "CR \u00BD or lower", "CR \u00BD or lower", "CR \u00BD or lower", "CR 1 or lower", "CR 1 or lower", "CR 1 or lower", "CR 2 or lower", "CR 2 or lower", "CR 2 or lower", "CR 3 or lower", "CR 3 or lower", "CR 3 or lower", "CR 4 or lower", "CR 4 or lower", "CR 4 or lower", "CR 4 or lower"],
      description: "\n   " + "An undead up to the CR above that fails its save when I use Turn Undead is destroyed"
    },
    "divine intervention": {
      name: "Divine Intervention",
      source: ["P", 59],
      minlevel: 10,
      additional: ["", "", "", "", "", "", "", "", "", "10% chance", "11% chance", "12% chance", "13% chance", "14% chance", "15% chance", "16% chance", "17% chance", "18% chance", "19% chance", "100% chance"],
      usages: 1,
      recovery: "long rest",
      description: "\n   " + "As an action, I can implore my deity for help; the DM determines the form of help" + "\n   " + "Without intervention, I can retry after a long rest; otherwise, I have to wait a week",
      action: ["action", ""]
    },
    "subclassfeature17": {
      name: "",
      minlevel: 17
    }
  }
},

"druid": {

  name: "Druid",
  source: ["P", 64],
  primaryAbility: "\n \u2022 Druid: Wisdom;",
  abilitySave: 5,
  prereqs: "\n \u2022 Druid: Wisdom 13;",
  improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
  die: 8,
  saves: ["Wis", "Int"],
  skills: ["\n\n" + toUni("Druid") + ": Choose two from Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, and Survival."],
  tools: ["Herbalism kit"],
  armor: [
    [true, true, false, true],
    [true, true, false, true]
  ],
  weapons: [
    [false, false, ["club", "dagger", "dart", "javelin", "mace", "quarterstaff", "scimitar", "sickle", "sling", "spear"]]
  ],
  equipment: "Druid starting equipment:\n \u2022 A wooden shield -or- any simple weapon;\n \u2022 A scimitar -or- any simple melee weapon;\n \u2022 Leather armor, an explorer's pack, and a druidic focus.\n\nAlternatively, choose 2d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
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
      description: "\n   " + "I know Druidic; Hidden messages with it can only be understood by who know Druidic",
      eval: "AddLanguage(\"Druidic\", \"being a Druid\");",
      removeeval: "RemoveLanguage(\"Druidic\", \"being a Druid\");"
    },
    "spellcasting": {
      name: "Spellcasting",
      source: ["P", 66],
      minlevel: 1,
      description: "\n   " + "I can cast prepared druid cantrips/spells, using Wisdom as my spellcasting ability" + "\n   " + "I can use a druidic focus as a spellcasting focus" + "\n   " + "I can cast my prepared druid spells as rituals if they have the ritual tag",
      additional: ["2 cantrips known", "2 cantrips known", "2 cantrips known", "3 cantrips known", "3 cantrips known", "3 cantrips known", "3 cantrips known", "3 cantrips known", "3 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known"],
    },
    "subclassfeature2": {
      name: "Druid Circle",
      source: ["P", 67],
      minlevel: 2,
      description: "\n   " + "Choose a Circle you can identify with and put it in the \"Class\" field on the first page" + "\n   " + "Choose either the Circle of the Land or the Circle of the Moon",
    },
    "wild shape": {
      name: "Wild Shape",
      source: ["P", 66],
      minlevel: 2,
      description: "\n   " + "As an action, I assume the shape of a beast I have seen before with the following rules:" + "\n    - " + "I gain all its game statistics except Intelligence, Wisdom, or Charisma" + "\n    - " + "I get its skill/saving throw prof. while keeping my own, using whichever is higher" + "\n    - " + "I assume the beast's HP and HD; I get mine back when I revert back" + "\n    - " + "I can't cast spells in beast form, but transforming doesn't break concentration" + "\n    - " + "I retain features from class, race, etc., but I don't retain special senses" + "\n    - " + "I can choose whether equipment falls to the ground, merges, or stays worn" + "\n    - " + "I revert if out of time or unconscious; if KOd by damage, excess damage carries over",
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
      description: "\n   " + "I age more slowly, only 1 year for every 10 years that pass",
    },
    "beast spells": {
      name: "Beast Spells",
      source: ["P", 67],
      minlevel: 18,
      description: "\n   " + "I can perform the somatic and verbal components of druid spells while in a beast shape",
    },
    "archdruid": {
      name: "Archdruid",
      source: ["P", 67],
      minlevel: 20,
      description: "\n   " + "I can use Wild Shape an unlimited number of times" + "\n   " + "My druid spells don't require verbal, somatic, or free material components",
    },
  }
},

"fighter": {

  name: "Fighter",
  source: ["P", 70],
  primaryAbility: "\n \u2022 Fighter: Strength or Dexterity;",
  prereqs: "\n \u2022 Fighter: Strength 13 or Dexterity 13;",
  die: 10,
  improvements: [0, 0, 0, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 6, 6, 6, 7, 7],
  saves: ["Str", "Con"],
  skills: ["\n\n" + toUni("Fighter") + ": Choose two from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival."],
  armor: [
    [true, true, true, true],
    [true, true, false, true]
  ],
  weapons: [
    [true, true],
    [true, true]
  ],
  equipment: "Fighter starting equipment:\n \u2022 Chain mail -or- leather armor, a longbow, and 20 arrows;\n \u2022 A martial weapon and a shield -or- two martial weapons;\n \u2022 A light crossbow and 20 bolts -or- two handaxes;\n \u2022 A dungeoneer's pack -or- an explorer's pack.\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
  subclasses: ["Martial Archetype", ["champion", "battle master", "eldritch knight", "purple dragon knight"]],
  attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4],
  features: {
    "fighting style": {
      name: "Fighting Style",
      source: ["P", 72],
      minlevel: 1,
      description: "\n   " + "Choose a Fighting Style for the fighter using the \"Choose Feature\" button above",
      choices: ["Archery", "Defense", "Dueling", "Great Weapon Fighting", "Protection", "Two-Weapon Fighting"],
      "archery": {
        name: "Archery Fighting Style",
        description: "\n   " + "+2 bonus to attack rolls I make with ranged weapons",
        eval: "tDoc.getField(\"Attack To Hit Bonus Global\").value += 2",
        removeeval: "tDoc.getField(\"Attack To Hit Bonus Global\").value -= 2"
      },
      "defense": {
        name: "Defense Fighting Style",
        description: "\n   " + "+1 bonus to AC when I'm wearing armor",
        eval: "AddACMisc(1, \"Defense Fighting Style\", \"When wearing armor, the class feature Defense Fighting Style gives a +1 bonus to AC\")",
        removeeval: "AddACMisc(0, \"Defense Fighting Style\", \"When wearing armor, the class feature Defense Fighting Style gives a +1 bonus to AC\")"
      },
      "dueling": {
        name: "Dueling Fighting Style",
        description: "\n   " + "+2 to damage rolls when wielding a melee weapon in one hand and no other weapons",
        eval: "tDoc.getField(\"Attack Damage Bonus Global\").value += 2",
        removeeval: "tDoc.getField(\"Attack Damage Bonus Global\").value -= 2"
      },
      "great weapon fighting": {
        name: "Great Weapon Fighting Style",
        description: "\n   " + "Reroll 1 or 2 on damage if wielding two-handed/versatile melee weapon in both hands"
      },
      "protection": {
        name: "Protection Fighting Style",
        description: "\n   " + "As a reaction, I can give disadv. on an attack made vs. someone within 5 ft of me" + "\n   " + "I need to be wielding a shield and be able to see the attacker to do this",
        action: ["reaction", ""]
      },
      "two-weapon fighting": {
        name: "Two-Weapon Fighting Style",
        description: "\n   " + "I can add my ability modifier to the damage of my off-hand attacks"
      }
    },
    "second wind": {
      name: "Second Wind",
      source: ["P", 72],
      minlevel: 1,
      description: "\n   " + "As a bonus action, I regain 1d10 + fighter level HP; I can use this once per short rest",
      additional: ["1d10+1", "1d10+2", "1d10+3", "1d10+4", "1d10+5", "1d10+6", "1d10+7", "1d10+8", "1d10+9", "1d10+10", "1d10+11", "1d10+12", "1d10+13", "1d10+14", "1d10+15", "1d10+16", "1d10+17", "1d10+18", "1d10+19", "1d10+20"],
      usages: 1,
      recovery: "short rest",
      action: ["bonus action", ""]
    },
    "action surge": {
      name: "Action Surge",
      source: ["P", 72],
      minlevel: 2,
      description: "\n   " + "I can take one additional action on my turn on top of my normally allowed actions",
      usages: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2],
      recovery: "short rest"
    },
    "subclassfeature3": {
      name: "Martial Archetype",
      source: ["P", 72],
      minlevel: 3,
      description: "\n   " + "Choose a Martial Archetype you strive to emulate and put it in the \"Class\" field" + "\n   " + "Choose either Champion, Battle Master, Eldritch Knight, or Purple Dragon Knight",
    },
    "subclassfeature3.1": {
      name: "",
      minlevel: 3,
    },
    "subclassfeature3.2": {
      name: "",
      minlevel: 3,
    },
    "indomitable": {
      name: "Indomitable",
      source: ["P", 72],
      minlevel: 9,
      description: "\n   " + "I can reroll a failed saving throw, but must keep the new result",
      usages: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3],
      recovery: "long rest"
    },
  }
},

"monk": {

  name: "Monk",
  source: ["P", 76],
  primaryAbility: "\n \u2022 Monk: Dexterity and Wisdom;",
  abilitySave: 5,
  prereqs: "\n \u2022 Monk: Dexterity 13 and Wisdom 13;",
  die: 8,
  improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
  saves: ["Str", "Dex"],
  tools: ["One artisan's tool or musical instrument"],
  skills: ["\n\n" + toUni("Monk") + ": Choose two from Acrobatics, Athletics, History, Insight, Religion, and Stealth."],
  armor: [
    [false, false, false, false]
  ],
  weapons: [
    [true, false, ["shortsword"]],
    [true, false, ["shortsword"]]
  ],
  equipment: "Monk starting equipment:\n \u2022 A shortsword -or- any simple weapon;\n \u2022 A dungeoneer's pack -or- an explorer's pack;\n \u2022 10 darts.\n\nAlternatively, choose 5d4 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
  subclasses: ["Monastic Tradition", ["way of the four elements", "way of the long death", "way of the open hand", "way of shadow", "way of the sun soul"]],
  attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  features: {
    "unarmored defense": {
      name: "Unarmored Defense",
      source: ["P", 48],
      minlevel: 1,
      description: "\n   " + "Without armor and no shield, my AC is 10 + Dexterity modifier + Wisdom modifier"
    },
    "martial arts": {
      name: "Martial Arts",
      source: ["P", 78],
      minlevel: 1,
      description: "\n   " + "Monk weapons: shortsword, simple weapon (not two-handed/heavy), unarmed strike" + "\n   " + "With these, I can use Dex instead of Str and use the Martial Arts damage die" + "\n   " + "When taking an Attack action with these, I get one unarmed strike as a bonus action",
      additional: ["1d4", "1d4", "1d4", "1d4", "1d6", "1d6", "1d6", "1d6", "1d6", "1d6", "1d8", "1d8", "1d8", "1d8", "1d8", "1d8", "1d10", "1d10", "1d10", "1d10"],
      action: ["bonus action", " (with Attack action)"],
      eval: "AddString(\"Extra.Notes\", \"Monk features:\\n\\u25C6 Lose Unarmored Defense, Martial Arts, and Unarmored Movement with armor\/shields\", true);",
      removeeval: "RemoveString(\"Extra.Notes\", \"Monk features:\\n\\u25C6 Lose Unarmored Defense, Martial Arts, and Unarmored Movement with armor\/shields\", true);"
    },
    "ki": {
      name: "Ki",
      source: ["P", 78],
      minlevel: 2,
      description: "\n   " + "I can spend ki to fuel special actions (see third page)" + "\n   " + "I need to meditate for at least 30 min of a short rest for that short rest to restore ki",
      usages: ["", 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      recovery: "short rest",
      extraname: "Ki Feature",
      "flurry of blows": {
        name: "Flurry of Blows",
        source: ["P", 78],
        description: " [1 ki point]" + "\n   " + "After taking the Attack action, I can make 2 unarmed attacks as a bonus action",
        action: ["bonus action", " (after Attack action)"]
      },
      "patient defense": {
        name: "Patient Defense",
        source: ["P", 78],
        description: " [1 ki point]" + "\n   " + "As a bonus action, I can take the Dodge action",
        action: ["bonus action", ""]
      },
      "step of the wind": {
        name: "Step of the Wind",
        source: ["P", 78],
        description: " [1 ki point]" + "\n   " + "As a bonus action, I can either Dash or Disengage; My jump distance doubles when I do so",
        action: ["bonus action", ""]
      },
      "stunning strike": {
        name: "Stunning Strike",
        source: ["P", 79],
        description: " [1 ki point]" + "\n   " + "Creature hit by my melee attack Con saves or it is stunned until the end of my next turn"
      },
      eval: "ClassFeatureOptions([\"monk\", \"ki\", \"flurry of blows\", \"extra\"]); ClassFeatureOptions([\"monk\", \"ki\", \"patient defense\", \"extra\"]); ClassFeatureOptions([\"monk\", \"ki\", \"step of the wind\", \"extra\"]);",
      removeeval: "ClassFeatureOptions([\"monk\", \"ki\", \"flurry of blows\", \"extra\"], \"remove\"); ClassFeatureOptions([\"monk\", \"ki\", \"patient defense\", \"extra\"], \"remove\"); ClassFeatureOptions([\"monk\", \"ki\", \"step of the wind\", \"extra\"], \"remove\");",
      changeeval: "if (newClassLvl.monk >= 5 && (What(\"Extra.Notes\") + What(\"Class Features\")).toLowerCase().indexOf(\"stunning strike\") === -1) {ClassFeatureOptions([\"monk\", \"ki\", \"stunning strike\", \"extra\"])} else if (newClassLvl.monk < 5 && oldClassLvl.monk >= 5) {ClassFeatureOptions([\"monk\", \"ki\", \"stunning strike\", \"extra\"], \"remove\")}"
    },
    "unarmored movement": {
      name: "Unarmored Movement",
      source: ["P", 78],
      minlevel: 2,
      description: "\n   " + "Speed increases and eventually lets me traverse some surfaces without falling as I move",
      additional: ["", "+10 ft", "+10 ft", "+10 ft", "+10 ft", "+15 ft", "+15 ft", "+15 ft", "+15 ft; Vertical surfaces and liquids", "+20 ft; Vertical surfaces and liquids", "+20 ft; Vertical surfaces and liquids", "+20 ft; Vertical surfaces and liquids", "+20 ft; Vertical surfaces and liquids", "+25 ft; Vertical surfaces and liquids", "+25 ft; Vertical surfaces and liquids", "+25 ft; Vertical surfaces and liquids", "+25 ft; Vertical surfaces and liquids", "+30 ft; Vertical surfaces and liquids", "+30 ft; Vertical surfaces and liquids", "+30 ft; Vertical surfaces and liquids"],
      changeeval: "if(oldClassLvl.monk) {ChangeSpeed(-1 * Number(CurrentClasses.monk.features[\"unarmored movement\"].additional[oldClassLvl.monk - 1].substring(1,3)))}; try {ChangeSpeed(CurrentClasses.monk.features[\"unarmored movement\"].additional[newClassLvl.monk - 1].substring(1,3));} catch (err) {};"
    },
    "subclassfeature3": {
      name: "Monastic Tradition",
      source: ["P", 78],
      minlevel: 3,
      description: "\n   " + "Choose a Monastic Tradition to commit to and put it in the \"Class\" field on page 1" + "\n   " + "Choose either Way of the Four Elements, Long Death, Open Hand, Shadow, or Sun Soul",
    },
    "deflect missiles": {
      name: "Deflect Missiles",
      source: ["P", 78],
      minlevel: 3,
      description: "\n   " + "As a reaction, I can reduce ranged weapon attack damage done to me" + "\n   " + "If the damage is negated, I catch and may throw it back (20/60 ft) as a monk weapon",
      action: ["reaction", ""],
      additional: ["", "", "1d10 + 3 + Dexterity modifier; 1 ki to throw", "1d10 + 4 + Dexterity modifier; 1 ki to throw", "1d10 + 5 + Dexterity modifier; 1 ki to throw", "1d10 + 6 + Dexterity modifier; 1 ki to throw", "1d10 + 7 + Dexterity modifier; 1 ki to throw", "1d10 + 8 + Dexterity modifier; 1 ki to throw", "1d10 + 9 + Dexterity modifier; 1 ki to throw", "1d10 + 10 + Dexterity modifier; 1 ki to throw", "1d10 + 11 + Dexterity modifier; 1 ki to throw", "1d10 + 12 + Dexterity modifier; 1 ki to throw", "1d10 + 13 + Dexterity modifier; 1 ki to throw", "1d10 + 14 + Dexterity modifier; 1 ki to throw", "1d10 + 15 + Dexterity modifier; 1 ki to throw", "1d10 + 16 + Dexterity modifier; 1 ki to throw", "1d10 + 17 + Dexterity modifier; 1 ki to throw", "1d10 + 18 + Dexterity modifier; 1 ki to throw", "1d10 + 19 + Dexterity modifier; 1 ki to throw", "1d10 + 20 + Dexterity modifier; 1 ki to throw"]
    },
    "slow fall": {
      name: "Slow Fall",
      source: ["P", 78],
      minlevel: 4,
      description: "\n   " + "As a reaction, I can reduce any falling damage I take by five times my monk level",
      additional: ["", "", "", "20 less falling damage", "25 less falling damage", "30 less falling damage", "35 less falling damage", "40 less falling damage", "45 less falling damage", "50 less falling damage", "55 less falling damage", "60 less falling damage", "65 less falling damage", "70 less falling damage", "75 less falling damage", "80 less falling damage", "85 less falling damage", "90 less falling damage", "95 less falling damage", "100 less falling damage"],
      action: ["reaction", ""]
    },
    "ki-empowered strikes": {
      name: "Ki-Empowered Strikes",
      source: ["P", 79],
      minlevel: 6,
      description: "\n   " + "My unarmed strikes count as magical for overcoming resistances and immunities"
    },
    "evasion": {
      name: "Evasion",
      source: ["P", 79],
      minlevel: 7,
      description: "\n   " + "My Dexterity saves vs. areas of effect negate damage on success and halve it on failure",
      save: "Dex save vs. area effects: fail \u2015 half dmg, success \u2015 no dmg"
    },
    "stillness of mind": {
      name: "Stillness of Mind",
      source: ["P", 79],
      minlevel: 7,
      description: "\n   " + "As an action, I can end one effect on me that causes me to be charmed or frightened",
      action: ["action", ""]
    },
    "purity of body": {
      name: "Purity of Body",
      source: ["P", 79],
      minlevel: 10,
      description: typeA4 ? "\n   " + "My mastery of the ki flowing through me makes me immune to poison and disease" : " [" + "I am immune to poison and disease" + "]",
      save: "Immune to poison and disease"
    },
    "tongue of the sun and moon": {
      name: "Tongue of the Sun and Moon",
      source: ["P", 79],
      minlevel: 13,
      description: "\n   " + "I can understand all spoken languages and all creatures with a language understand me"
    },
    "diamond soul": {
      name: "Diamond Soul",
      source: ["P", 79],
      minlevel: 14,
      description: "\n   " + "I am proficient with all saves; I can reroll a failed save once by spending 1 ki point",
      additional: "1 ki point to reroll failed saving throw",
      eval: "for (var Sc = 0; Sc < AbilityScores.abbreviations.length; Sc++) {var saveProf = AbilityScores.abbreviations[Sc] + \" ST Prof\"; var saveTxt = \"Proficiency with \" + AbilityScores.names[Sc] + \" saving throws was gained from Monk (Diamond Soul)\"; if (tDoc.getField(saveProf).userName === \"\") {Checkbox(saveProf, true, saveTxt)}}",
      removeeval: "for (var Sc = 0; Sc < AbilityScores.abbreviations.length; Sc++) {var saveProf = AbilityScores.abbreviations[Sc] + \" ST Prof\"; var saveTxt = \"Proficiency with \" + AbilityScores.names[Sc] + \" saving throws was gained from Monk (Diamond Soul)\"; if (tDoc.getField(saveProf).userName === saveTxt) {Checkbox(saveProf, false, \"\")}}"
    },
    "timeless body": {
      name: "Timeless Body",
      source: ["P", 79],
      minlevel: 15,
      description: "\n   " + "I don't require food or water; I don't suffer age penalties and can't be aged magically"
    },
    "empty body": {
      name: "Empty Body",
      source: ["P", 79],
      minlevel: 18,
      description: "\n   " + "Be invisible and resist non-force damage for 1 min or cast Astral Projection on self",
      additional: "Invisible: 4 ki point; Astral Projection: 8 ki points",
      action: ["action", ""],
      eval: "AddResistance(\"All -Force (invis.)\", \"Empty Body\");",
      removeeval: "RemoveResistance(\"All -Force (invis.)\");"
    },
    "perfect self": {
      name: "Perfect Self",
      source: ["P", 79],
      minlevel: 20,
      description: "\n   " + "I regain 4 ki points if I have no more remaining when I roll initiative"
    },
  }
},

"paladin": {

  name: "Paladin",
  source: ["P", 82],
  primaryAbility: "\n \u2022 Paladin: Strength and Charisma;",
  abilitySave: 6,
  prereqs: "\n \u2022 Paladin: Strength 13 and Charisma 13;",
  improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
  die: 10,
  saves: ["Wis", "Cha"],
  skills: ["\n\n" + toUni("Paladin") + ": Choose two from Athletics, Insight, Intimidation, Medicine, Persuasion, and Religion."],
  armor: [
    [true, true, true, true],
    [true, true, false, true]
  ],
  weapons: [
    [true, true],
    [true, true]
  ],
  equipment: "Paladin starting equipment:\n \u2022 A martial weapon and a shield -or- two martial weapons;\n \u2022 Five javelins -or- any simple melee weapon;\n \u2022 A priest's pack -or- an explorer's pack;\n \u2022 Chain mail and a holy symbol.\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
  subclasses: ["Sacred Oath", ["oath of the ancients", "oath of the crown", "oath of devotion", "oathbreaker", "oath of vengeance"]],
  attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  spellcastingFactor: 2,
  spellcastingKnown: {
    spells: "list",
    prepared: true,
  },
  features: {
    "divine sense": {
      name: "Divine Sense",
      source: ["P", 84],
      minlevel: 1,
      description: "\n   " + "As an action, I sense celestials/fiends/undead/consecrated/desecrated within 60 ft" + "\n   " + "Until the end of my next turn, I sense the type/location if it is not behind total cover",
      usages: "1 + Charisma modifier per ",
      usagescalc: "event.value = 1 + tDoc.getField(\"Cha Mod\").value;",
      recovery: "long rest",
      action: ["action", ""]
    },
    "lay on hands": {
      name: "Lay on Hands",
      source: ["P", 84],
      minlevel: 1,
      description: "\n   " + "As an action, I can use points in my pool to heal a touched, living creature's hit points" + "\n   " + "I can neutralize poisons/diseases instead at a cost of 5 points per affliction",
      usages: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
      recovery: "long rest",
      action: ["action", ""]
    },
    "fighting style": {
      name: "Fighting Style",
      source: ["P", 84],
      minlevel: 2,
      description: "\n   " + "Choose a Fighting Style for the paladin using the \"Choose Feature\" button above",
      choices: ["Defense", "Dueling", "Great Weapon Fighting", "Protection"],
      "defense": {
        name: "Defense Fighting Style",
        description: "\n   " + "+1 bonus to AC when I'm wearing armor",
        eval: "AddACMisc(1, \"Defense Fighting Style\", \"When wearing armor, the class feature Defense Fighting Style gives a +1 bonus to AC\")",
        removeeval: "AddACMisc(0, \"Defense Fighting Style\", \"When wearing armor, the class feature Defense Fighting Style gives a +1 bonus to AC\")"
      },
      "dueling": {
        name: "Dueling Fighting Style",
        description: "\n   " + "+2 to damage rolls when wielding a melee weapon in one hand and no other weapons",
        eval: "tDoc.getField(\"Attack Damage Bonus Global\").value += 2",
        removeeval: "tDoc.getField(\"Attack Damage Bonus Global\").value -= 2"
      },
      "great weapon fighting": {
        name: "Great Weapon Fighting Style",
        description: "\n   " + "Reroll 1 or 2 on damage if wielding two-handed/versatile melee weapon in both hands"
      },
      "protection": {
        name: "Protection Fighting Style",
        description: "\n   " + "As a reaction, I can give disadv. on an attack made vs. someone within 5 ft of me" + "\n   " + "I need to be wielding a shield and be able to see the attacker to do this",
        action: ["reaction", ""]
      }
    },
    "spellcasting": {
      name: "Spellcasting",
      source: ["P", 84],
      minlevel: 2,
      description: "\n   " + "I can cast prepared paladin spells, using Charisma as my spellcasting ability" + "\n   " + "I can use a holy symbol as a spellcasting focus"
    },
    "divine smite": {
      name: "Divine Smite",
      source: ["P", 84],
      minlevel: 2,
      description: "\n   " + "When I hit someone in melee, I can expend spell slots to do 2d8 extra radiant damage" + "\n   " + "This increases by 1d8 for each spell slot level above 1st and 1d8 against undead/fiends"
    },
    "channel divinity": {
      name: "Channel Divinity",
      source: ["P", 85],
      minlevel: 3,
      description: "",
      usages: 1,
      recovery: "short rest"
    },
    "subclassfeature3": {
      name: "Sacred Oath",
      source: ["P", 84],
      minlevel: 3,
      description: "\n   " + "Choose a Sacred Oath you swear to and put it in the \"Class\" field on the first page" + "\n   " + "Choose Oath of the Ancients, Crown, Devotion, Vengeance, or become an Oathbreaker",
    },
    "divine health": {
      name: "Divine Health",
      source: ["P", 85],
      minlevel: 3,
      description: "\n   " + "I am immune to disease, thanks to the power of my faith",
      save: "Immune to disease"
    },
    "aura of protection": {
      name: "Aura of Protection",
      source: ["P", 85],
      minlevel: 6,
      description: "\n   " + "While I'm conscious, allies within range and I can add my Cha mod (min 1) to saves",
      additional: ["", "", "", "", "", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "30-foot aura", "30-foot aura", "30-foot aura"],
      eval: "tDoc.getField(\"All ST Bonus\").setAction(\"Calculate\", \"event.value = Math.max(1, tDoc.getField(\'Cha Mod\').value);\");",
      removeeval: "tDoc.getField(\"All ST Bonus\").setAction(\"Calculate\", \"var placeholder = 1;\");"
    },
    "aura of courage": {
      name: "Aura of Courage",
      source: ["P", 85],
      minlevel: 10,
      description: "\n   " + "While I'm conscious, allies within range and I can't be frightened",
      additional: ["", "", "", "", "", "", "", "", "", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "30-foot aura", "30-foot aura", "30-foot aura"],
      save: "Immune to being frightened"
    },
    "improved divine smite": {
      name: "Improved Divine Smite",
      source: ["P", 85],
      minlevel: 11,
      description: "\n   " + "Whenever I hit a creature with a melee weapon, I do an extra 1d8 radiant damage"
    },
    "cleansing touch": {
      name: "Cleansing Touch",
      source: ["P", 85],
      minlevel: 14,
      description: "\n   " + "As an action, I can end one spell on me or another willing creature by touch",
      usages: "Charisma modifier per ",
      usagescalc: "event.value = Math.max(1, tDoc.getField(\"Cha Mod\").value);",
      recovery: "long rest",
      action: ["action", ""]
    },
    "subclassfeature20": {
      name: "",
      minlevel: 20
    }
  }
},

"ranger": {

  name: "Ranger",
  source: ["P", 89],
  primaryAbility: "\n \u2022 Ranger: Dexterity and Wisdom;",
  abilitySave: 5,
  prereqs: "\n \u2022 Ranger: Dexterity 13 and Wisdom 13;",
  improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
  die: 10,
  saves: ["Str", "Dex"],
  skills: ["\n\n" + toUni("Ranger") + ": Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival", "\n\n" + toUni("Multiclass Ranger") + ": Choose one from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival"],
  armor: [
    [true, true, false, true],
    [true, true, false, true]
  ],
  weapons: [
    [true, true],
    [true, true]
  ],
  equipment: "Ranger starting equipment:\n \u2022 Scale mail -or- leather armor;\n \u2022 Two shortswords -or- two simple melee weapons;\n \u2022 A dungeoneer's pack -or- an explorer's pack;\n \u2022 A longbow and a quiver of 20 arrows.\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
  subclasses: ["Ranger Archetype", ["beast master", "hunter"]],
  attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  spellcastingFactor: 2,
  spellcastingKnown: {
    spells: [0, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11],
  },
  features: {
    "favored enemy": {
      name: "Favored Enemy",
      source: ["P", 91],
      minlevel: 1,
      description: "\n   " + "Use the \"Choose Features\" button above to add a favored enemy to the third page" + "\n   " + "When selecting a favored enemy, I also learn one of the languages it speaks" + "\n   " + "I have adv. on Wis (Survival) checks to track and Int checks to recall info about them",
      additional: ["1 favored enemy", "1 favored enemy", "1 favored enemy", "1 favored enemy", "1 favored enemy", "2 favored enemies", "2 favored enemies", "2 favored enemies", "2 favored enemies", "2 favored enemies", "2 favored enemies", "2 favored enemies", "2 favored enemies", "3 favored enemies", "3 favored enemies", "3 favored enemies", "3 favored enemies", "3 favored enemies", "3 favored enemies", "3 favored enemies"],
      extraname: "Favored Enemy",
      extrachoices: ["Aberrations", "Beasts", "Celestials", "Constructs", "Dragons", "Elementals", "Fey", "Fiends", "Giants", "Monstrosities", "Oozes", "Plants", "Undead", "Two Races of Humanoids"],
      "aberrations": {
        name: "Aberrations",
        description: "",
        source: ["P", 91],
      },
      "beasts": {
        name: "Beasts",
        description: "",
        source: ["P", 91],
      },
      "celestials": {
        name: "Celestials",
        description: "",
        source: ["P", 91],
      },
      "constructs": {
        name: "Constructs",
        description: "",
        source: ["P", 91],
      },
      "dragons": {
        name: "Dragons",
        description: "",
        source: ["P", 91],
      },
      "elementals": {
        name: "Elementals",
        description: "",
        source: ["P", 91],
      },
      "fey": {
        name: "Fey",
        description: "",
        source: ["P", 91],
      },
      "fiends": {
        name: "Fiends",
        description: "",
        source: ["P", 91],
      },
      "giants": {
        name: "Giants",
        description: "",
        source: ["P", 91],
      },
      "monstrosities": {
        name: "Monstrosities",
        description: "",
        source: ["P", 91],
      },
      "oozes": {
        name: "Oozes",
        description: "",
        source: ["P", 91],
      },
      "plants": {
        name: "Plants",
        description: "",
        source: ["P", 91],
      },
      "undead": {
        name: "Undead",
        description: "",
        source: ["P", 91],
      },
      "two races of humanoids": {
        name: "Two Races of Humanoids",
        description: "",
        source: ["P", 91],
      },
    },
    "natural explorer": {
      name: "Natural Explorer",
      source: ["P", 91],
      minlevel: 1,
      description: "\n   " + "Use the \"Choose Features\" button above to add a favored terrain to the third page",
      additional: ["1 favored terrain", "1 favored terrain", "1 favored terrain", "1 favored terrain", "1 favored terrain", "2 favored terrains", "2 favored terrains", "2 favored terrains", "2 favored terrains", "3 favored terrains", "3 favored terrains", "3 favored terrains", "3 favored terrains", "3 favored terrains", "3 favored terrains", "3 favored terrains", "3 favored terrains", "3 favored terrains", "3 favored terrains", "3 favored terrains"],
      extraname: "Favored Terrain",
      extrachoices: ["Arctic", "Coast", "Desert", "Forest", "Grassland", "Mountain", "Swamp", "Underdark"],
      "arctic": {
        name: "Arctic",
        source: ["P", 91],
        description: "\n   " + "I can double my proficiency bonus for Int/Wis checks concerning arctic terrain" + "\n   " + "While traveling for an hour or more in arctic terrain I gain the following benefits:" + "\n    - " + "My allies and I are not slowed by difficult terrain and can't get lost except by magic" + "\n    - " + "I am alert to danger even when doing something else; I forage twice as much food" + "\n    - " + "If alone (or alone with beast companion), I can move stealthily at my normal pace" + "\n    - " + "When tracking, I also learn the exact number, size, and time since passing",
      },
      "coast": {
        name: "Coast",
        source: ["P", 91],
        description: "\n   " + "I can double my proficiency bonus for Int/Wis checks concerning coast terrain" + "\n   " + "While traveling for an hour or more in coast terrain I gain the following benefits:" + "\n    - " + "My allies and I are not slowed by difficult terrain and can't get lost except by magic" + "\n    - " + "I am alert to danger even when doing something else; I forage twice as much food" + "\n    - " + "If alone (or alone with beast companion), I can move stealthily at my normal pace" + "\n    - " + "When tracking, I also learn the exact number, size, and time since passing",
      },
      "desert": {
        name: "Desert",
        source: ["P", 91],
        description: "\n   " + "I can double my proficiency bonus for Int/Wis checks concerning desert terrain" + "\n   " + "While traveling for an hour or more in desert terrain I gain the following benefits:" + "\n    - " + "My allies and I are not slowed by difficult terrain and can't get lost except by magic" + "\n    - " + "I am alert to danger even when doing something else; I forage twice as much food" + "\n    - " + "If alone (or alone with beast companion), I can move stealthily at my normal pace" + "\n    - " + "When tracking, I also learn the exact number, size, and time since passing",
      },
      "forest": {
        name: "Forest",
        source: ["P", 91],
        description: "\n   " + "I can double my proficiency bonus for Int/Wis checks concerning forest terrain" + "\n   " + "While traveling for an hour or more in forest terrain I gain the following benefits:" + "\n    - " + "My allies and I are not slowed by difficult terrain and can't get lost except by magic" + "\n    - " + "I am alert to danger even when doing something else; I forage twice as much food" + "\n    - " + "If alone (or alone with beast companion), I can move stealthily at my normal pace" + "\n    - " + "When tracking, I also learn the exact number, size, and time since passing",
      },
      "grassland": {
        name: "Grassland",
        source: ["P", 91],
        description: "\n   " + "I can double my proficiency bonus for Int/Wis checks concerning grassland terrain" + "\n   " + "While traveling for an hour or more in grassland terrain I gain the following benefits:" + "\n    - " + "My allies and I are not slowed by difficult terrain and can't get lost except by magic" + "\n    - " + "I am alert to danger even when doing something else; I forage twice as much food" + "\n    - " + "If alone (or alone with beast companion), I can move stealthily at my normal pace" + "\n    - " + "When tracking, I also learn the exact number, size, and time since passing",
      },
      "mountain": {
        name: "Mountain",
        source: ["P", 91],
        description: "\n   " + "I can double my proficiency bonus for Int/Wis checks concerning mountain terrain" + "\n   " + "While traveling for an hour or more in mountain terrain I gain the following benefits:" + "\n    - " + "My allies and I are not slowed by difficult terrain and can't get lost except by magic" + "\n    - " + "I am alert to danger even when doing something else; I forage twice as much food" + "\n    - " + "If alone (or alone with beast companion), I can move stealthily at my normal pace" + "\n    - " + "When tracking, I also learn the exact number, size, and time since passing",
      },
      "swamp": {
        name: "Swamp",
        source: ["P", 91],
        description: "\n   " + "I can double my proficiency bonus for Int/Wis checks concerning swamp terrain" + "\n   " + "While traveling for an hour or more in swamp terrain I gain the following benefits:" + "\n    - " + "My allies and I are not slowed by difficult terrain and can't get lost except by magic" + "\n    - " + "I am alert to danger even when doing something else; I forage twice as much food" + "\n    - " + "If alone (or alone with beast companion), I can move stealthily at my normal pace" + "\n    - " + "When tracking, I also learn the exact number, size, and time since passing",
      },
      "underdark": {
        name: "Underdark",
        source: ["P", 91],
        description: "\n   " + "I can double my proficiency bonus for Int/Wis checks concerning underdark terrain" + "\n   " + "While traveling for an hour or more in underdark terrain I gain the following benefits:" + "\n    - " + "My allies and I are not slowed by difficult terrain and can't get lost except by magic" + "\n    - " + "I am alert to danger even when doing something else; I forage twice as much food" + "\n    - " + "If alone (or alone with beast companion), I can move stealthily at my normal pace" + "\n    - " + "When tracking, I also learn the exact number, size, and time since passing",
      },
    },
    "fighting style": {
      name: "Fighting Style",
      source: ["P", 91],
      minlevel: 2,
      description: "\n   " + "Choose a Fighting Style for the ranger using the \"Choose Feature\" button above",
      choices: ["Archery", "Defense", "Dueling", "Two-Weapon Fighting"],
      "archery": {
        name: "Archery Fighting Style",
        description: "\n   " + "+2 bonus to attack rolls I make with ranged weapons",
        eval: "tDoc.getField(\"Attack To Hit Bonus Global\").value += 2",
        removeeval: "tDoc.getField(\"Attack To Hit Bonus Global\").value -= 2"
      },
      "defense": {
        name: "Defense Fighting Style",
        description: "\n   " + "+1 bonus to AC when I'm wearing armor",
        eval: "AddACMisc(1, \"Defense Fighting Style\", \"When wearing armor, the class feature Defense Fighting Style gives a +1 bonus to AC\")",
        removeeval: "AddACMisc(0, \"Defense Fighting Style\", \"When wearing armor, the class feature Defense Fighting Style gives a +1 bonus to AC\")"
      },
      "dueling": {
        name: "Dueling Fighting Style",
        description: "\n   " + "+2 to damage rolls when wielding a melee weapon in one hand and no other weapons",
        eval: "tDoc.getField(\"Attack Damage Bonus Global\").value += 2",
        removeeval: "tDoc.getField(\"Attack Damage Bonus Global\").value -= 2"
      },
      "two-weapon fighting": {
        name: "Two-Weapon Fighting Style",
        description: "\n   " + "I can add my ability modifier to the damage of my off-hand attacks"
      }
    },
    "spellcasting": {
      name: "Spellcasting",
      source: ["P", 91],
      minlevel: 2,
      description: "\n   " + "I can cast ranger spells that I know, using Wisdom as my spellcasting ability",
      additional: ["", "2 spells known", "3 spells known", "3 spells known", "4 spells known", "4 spells known", "5 spells known", "5 spells known", "6 spells known", "6 spells known", "7 spells known", "7 spells known", "8 spells known", "8 spells known", "9 spells known", "9 spells known", "10 spells known", "10 spells known", "11 spells known", "11 spells known"],
    },
    "subclassfeature3": {
      name: "Ranger Archetype",
      source: ["P", 92],
      minlevel: 3,
      description: "\n   " + "Choose a Ranger Archetype you strive to emulate and put it in the \"Class\" field" + "\n   " + "Choose either Beast Master or Hunter",
    },
    "primeval awareness": {
      name: "Primeval Awareness",
      source: ["P", 92],
      minlevel: 3,
      description: "\n   " + "As an action, I can use a spell slot to focus my awareness for 1 min per spell slot level" + "\n   " + "Out to 1 mile (6 in favored terrain), I sense if certain types of creatures are present",
      additional: "aber./celest./dragon/elem./fey/fiend/undead",
      action: ["action", ""]
    },
    "land's stride": {
      name: "Land's Stride",
      source: ["P", 92],
      minlevel: 8,
      description: "\n   " + "I can travel through nonmagical, difficult terrain without penalty" + "\n   " + "I have advantage on saves vs. plants that impede movement by magical influence",
      save: "Adv. vs. magical plants that impede movement"
    },
    "hide in plain sight": {
      name: "Hide in Plain Sight",
      source: ["P", 92],
      minlevel: 10,
      description: "\n   " + "I can hide with +10 to Dex (Stealth) after spending 1 minute creating camouflage" + "\n   " + "Once I move or take an action or a reaction, the benefit is lost",
    },
    "vanish": {
      name: "Vanish",
      source: ["P", 92],
      minlevel: 14,
      description: "\n   " + "I can't be nonmagically tracked if I don't want to be and can Hide as a bonus action",
      action: ["bonus action", ""],
    },
    "feral senses": {
      name: "Feral Senses",
      source: ["P", 92],
      minlevel: 18,
      description: "\n   " + "When not blinded or deafened, I'm aware of invisible, non-hidden creatures in 30 ft" + "\n   " + "I don't have disadvantage when attacking creatures I am aware of but can't see"
    },
    "foe slayer": {
      name: "Foe Slayer",
      source: ["P", 92],
      minlevel: 20,
      description: "\n   " + "Once per turn, I can add Wis mod to the attack or damage roll vs. favored enemy"
    },
  }
},

"rogue": {

  name: "Rogue",
  source: ["P", 94],
  primaryAbility: "\n \u2022 Rogue: Dexterity;",
  prereqs: "\n \u2022 Rogue: Dexterity 13;",
  improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6],
  die: 8,
  saves: ["Int", "Dex"],
  skills: ["\n\n" + toUni("Rogue") + ": Choose four from Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, and Stealth.", "\n\n" + toUni("Multiclass Rogue") + ": Choose one from Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, and Stealth."],
  tools: ["Thieves' tools"],
  armor: [
    [true, false, false, false],
    [true, false, false, false]
  ],
  weapons: [
    [true, false, ["hand crossbow", "longsword", "rapier", "shortsword"]]
  ],
  equipment: "Rogue starting equipment:\n \u2022 A rapier -or- a shortsword;\n \u2022 A shortbow and a quiver of 20 arrows -or- a shortswords;\n \u2022 A burglar's pack -or- dungeoneer's pack -or- an explorer's pack;\n \u2022 Leather armor, two daggers, and thieves' tools.\n\nAlternatively, choose 4d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
  subclasses: ["Roguish Archetype", ["arcane trickster", "assassin", "mastermind", "swashbuckler", "thief"]],
  attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  features: {
    "expertise": {
      name: "Expertise",
      source: ["P", 96],
      minlevel: 1,
      description: "\n   " + "I gain expertise with two skills/thieves' tools I am proficient with; two more at 6th level",
      skillstxt: "\n\n" + toUni("Expertise (Rogue 1)") + ": Choose any two skill proficiencies and/or thieves' tools, and two more at 6th level.",
      additional: ["with two skills", "with two skills", "with two skills", "with two skills", "with two skills", "with four skills", "with four skills", "with four skills", "with four skills", "with four skills", "with four skills", "with four skills", "with four skills", "with four skills", "with four skills", "with four skills", "with four skills", "with four skills", "with four skills", "with four skills"],
    },
    "sneak attack": {
      name: "Sneak Attack",
      source: ["P", 96],
      minlevel: 1,
      description: "\n   " + "Once per turn, I can add damage to finesse/ranged attack if I have adv." + "\n   " + "I don't need adv. if a conscious ally is within 5 ft of the target and I don't have disadv.",
      additional: ["1d6", "1d6", "2d6", "2d6", "3d6", "3d6", "4d6", "4d6", "5d6", "5d6", "6d6", "6d6", "7d6", "7d6", "8d6", "8d6", "9d6", "9d6", "10d6", "10d6"]
    },
    "thieves cant": {
      name: "Thieves' Cant",
      source: ["P", 96],
      minlevel: 1,
      description: "\n   " + "I know the secret rogue language that I can use to convey messages inconspicuously",
      eval: "AddLanguage(\"Thieves' Cant\", \"being a Rogue\");",
      removeeval: "RemoveLanguage(\"Thieves' Cant\", \"being a Rogue\");"
    },
    "cunning action": {
      name: "Cunning Action",
      source: ["P", 96],
      minlevel: 2,
      description: "\n   " + "I can use a bonus action to take the Dash, Disengage, or Hide action",
      action: ["bonus action", ""]
    },
    "subclassfeature3": {
      name: "Roguish Archetype",
      source: ["P", 96],
      minlevel: 3,
      description: "\n   " + "Choose a Roguish Archetype you strive to emulate and put it in the \"Class\" field" + "\n   " + "Choose either Arcane Trickster, Assassin, Mastermind, Swashbuckler, or Thief",
    },
    "uncanny dodge": {
      name: "Uncanny Dodge",
      source: ["P", 96],
      minlevel: 5,
      description: "\n   " + "As a reaction, I halve the damage of an attack from an attacker that I can see",
      action: ["reaction", ""]
    },
    "evasion": {
      name: "Evasion",
      source: ["P", 96],
      minlevel: 7,
      description: "\n   " + "My Dexterity saves vs. areas of effect negate damage on success and halve it on failure",
      save: "Dex save vs. area effects: fail \u2015 half dmg, success \u2015 no dmg"
    },
    "reliable talent": {
      name: "Reliable Talent",
      source: ["P", 96],
      minlevel: 11,
      description: "\n   " + "If I make an ability check where I add my proficiency bonus, rolls of 9 or lower are 10"
    },
    "blindsense": {
      name: "Blindsense",
      source: ["P", 96],
      minlevel: 14,
      description: "\n   " + "With my hearing, I can locate hidden or invisible creatures that are within 10 ft of me",
      eval: "AddString(\"Vision\",\"Blindsense 10 ft\", \"; \");",
      removeeval: "RemoveString(\"Vision\", \"Blindsense 10 ft\");"
    },
    "slippery mind": {
      name: "Slippery Mind",
      source: ["P", 96],
      minlevel: 15,
      description: "\n   " + "I am proficient with Wisdom saving throws",
      eval: "Checkbox(\"Wis ST Prof\", true, \"Proficiency with Wisdom saving throws was gained from Rogue (Slippery Mind)\");",
      removeeval: "Checkbox(\"Wis ST Prof\", false, \"\");"
    },
    "elusive": {
      name: "Elusive",
      source: ["P", 96],
      minlevel: 18,
      description: "\n   " + "Attackers do not gain advantage on attacks vs. me, unless I am incapacitated"
    },
    "stroke of luck": {
      name: "Stroke of Luck",
      source: ["P", 97],
      minlevel: 20,
      description: "\n   " + "I can turn a missed attack into a hit or a failed ability check into a natural 20",
      recovery: "short rest",
      usages: 1
    }
  }
},

"sorcerer": {

  name: "Sorcerer",
  source: ["P", 99],
  primaryAbility: "\n \u2022 Sorcerer: Charisma;",
  abilitySave: 6,
  prereqs: "\n \u2022 Sorcerer: Charisma 13;",
  improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
  die: 6,
  saves: ["Con", "Cha"],
  skills: ["\n\n" + toUni("Sorcerer") + ": Choose two from Arcana, Deception, Insight, Intimidation, Persuasion, and Religion."],
  armor: [
    [false, false, false, false]
  ],
  weapons: [
    [false, false, ["dagger", "dart", "light crossbow", "quarterstaff", "sling"]]
  ],
  equipment: "Sorcerer starting equipment:\n \u2022 A light crossbow and 20 bolts -or- any simple weapon;\n \u2022 A component pouch -or- an arcane focus;\n \u2022 A dungeoneer's pack -or- an explorer's pack;\n \u2022 Two daggers.\n\nAlternatively, choose 3d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
  subclasses: ["Sorcerous Origin", ["draconic bloodline", "storm sorcery", "wild magic"]],
  attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  spellcastingFactor: 1,
  spellcastingKnown: {
    cantrips: [4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
    spells: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15, 15],
  },
  features: {
    "spellcasting": {
      name: "Spellcasting",
      source: ["P", 101],
      minlevel: 1,
      description: "\n   " + "I can cast sorcerer cantrips/spells that I know, using Charisma as my spellcasting ability" + "\n   " + "I can use an arcane focus as a spellcasting focus ",
      additional: ["4 cantrips \u0026 2 spells known", "4 cantrips \u0026 3 spells known", "4 cantrips \u0026 4 spells known", "5 cantrips \u0026 5 spells known", "5 cantrips \u0026 6 spells known", "5 cantrips \u0026 7 spells known", "5 cantrips \u0026 8 spells known", "5 cantrips \u0026 9 spells known", "5 cantrips \u0026 10 spells known", "6 cantrips \u0026 11 spells known", "6 cantrips \u0026 12 spells known", "6 cantrips \u0026 12 spells known", "6 cantrips \u0026 13 spells known", "6 cantrips \u0026 13 spells known", "6 cantrips \u0026 14 spells known", "6 cantrips \u0026 14 spells known", "6 cantrips \u0026 15 spells known", "6 cantrips \u0026 15 spells known", "6 cantrips \u0026 15 spells known", "6 cantrips \u0026 15 spells known"],
    },
    "subclassfeature1": {
      name: "Sorcerous Origin",
      source: ["P", 101],
      minlevel: 1,
      description: "\n   " + "Choose the Sorcerous Origin for your innate powers and put it in the \"Class\" field" + "\n   " + "Choose either Draconic Bloodline, Storm Sorcery, or Wild Magic",
    },
    "font of magic": {
      name: "Font of Magic",
      source: ["P", 101],
      minlevel: 2,
      description: "\n   " + "As a bonus action, I can use sorcery points to create spell slots and vice versa" + "\n   " + "I can convert spell slots to sorcery point at a rate of 1 point per spell slot level" + "\n   " + "I can convert sorcery point to spell slots at the following rate:" + "\n   " + "Level 1 for 2 sorcery points;   level 2 for 3 sorcery points;   level 3 for 5 sorcery points" + "\n   " + "Level 4 for 6 sorcery points;   level 5 for 7 sorcery points",
      usages: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      recovery: "long rest",
      action: ["bonus action", ""],
      additional: "Sorcery points"
    },
    "metamagic": {
      name: "Metamagic",
      source: ["P", 101],
      minlevel: 3,
      description: "\n   " + "Use the \"Choose Features\" button above to add a Metamagic option to the third page" + "\n   " + "I can use only 1 Metamagic option on a spell unless otherwise written",
      additional: ["", "", "2 known", "2 known", "2 known", "2 known", "2 known", "2 known", "2 known", "3 known", "3 known", "3 known", "3 known", "3 known", "3 known", "3 known", "4 known", "4 known", "4 known", "4 known"],
      extraname: "Metamagic Option",
      extrachoices: ["Careful Spell", "Distant Spell", "Empowered Spell", "Extended Spell", "Heightened Spell", "Quickened Spell", "Subtle Spell", "Twinned Spell"],
      "careful spell": {
        name: "Careful Spell",
        source: ["P", 102],
        description: " [1 sorcery point]" + "\n   " + "If the spell allows a saving throw, I can protect Cha modifier number of creatures" + "\n   " + "The selected creatures automatically succeed on their saving throws vs. the spell"
      },
      "distant spell": {
        name: "Distant Spell",
        source: ["P", 102],
        description: " [1 sorcery point]" + "\n   " + "I double the range of the spell or make the range 30 ft if the range was touch"
      },
      "empowered spell": {
        name: "Empowered Spell",
        source: ["P", 102],
        description: " [1 sorcery point]" + "\n   " + "If the spell uses damage dice, I can reroll my Charisma modifier number of damage dice" + "\n   " + "I can Empower a spell even if I use another Metamagic option on it"
      },
      "extended spell": {
        name: "Extended Spell",
        source: ["P", 102],
        description: " [1 sorcery point]" + "\n   " + "If the spell has a duration of at least 1 min, I can double it, up to 24 hours"
      },
      "heightened spell": {
        name: "Heightened Spell",
        source: ["P", 102],
        description: " [3 sorcery points]" + "\n   " + "If the spell allows a saving throw, I can have one target get disadv. on their first save"
      },
      "quickened spell": {
        name: "Quickened Spell",
        source: ["P", 102],
        description: " [2 sorcery points]" + "\n   " + "If the spell has a casting time of 1 action, I can cast it as a bonus action",
        action: ["bonus action", ""]
      },
      "subtle spell": {
        name: "Subtle Spell",
        source: ["P", 102],
        description: " [1 sorcery point]" + "\n   " + "I can cast the spell without the need to use somatic or verbal components"
      },
      "twinned spell": {
        name: "Twinned Spell",
        source: ["P", 102],
        description: " [1 sorcery point per spell level, minimum 1]" + "\n   " + "If spell/cantrip has a target of one and not self, I can aim it at second target within range"
      },
    },
    "sorcerous restoration": {
      name: "Sorcerous Restoration",
      source: ["P", 102],
      minlevel: 20,
      description: "\n   " + "I regain 4 expended sorcery points whenever I finish a short rest",
    },
  }
},

"warlock": {

  name: "Warlock",
  source: ["P", 105],
  primaryAbility: "\n \u2022 Warlock: Charisma;",
  abilitySave: 6,
  prereqs: "\n \u2022 Warlock: Charisma 13;",
  improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
  die: 8,
  saves: ["Wis", "Cha"],
  skills: ["\n\n" + toUni("Warlock") + ": Choose two from Arcana, Deception, History, Intimidation, Investigation, Nature, and Religion."],
  armor: [
    [true, false, false, false],
    [true, false, false, false]
  ],
  weapons: [
    [true, false],
    [true, false]
  ],
  equipment: "Warlock starting equipment:\n \u2022 A light crossbow and 20 bolts -or- any simple weapon;\n \u2022 A component pouch -or- an arcane focus;\n \u2022 A scholar's pack -or- a dungeoneer's pack\n \u2022 Leather armor, any simple weapon, and two daggers.\n\nAlternatively, choose 4d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
  subclasses: ["Otherworldly Patron", ["the archfey", "the fiend", "the great old one", "the undying"]],
  attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  spellcastingFactor: "warlock1",
  spellcastingKnown: {
    cantrips: [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    spells: [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15],
  },
  spellcastingList: {
    class: "warlock",
    level: [0, 5], //lower and higher limit
  },
  features: {
    "pact magic": {
      name: "Pact Magic",
      source: ["P", 107],
      minlevel: 1,
      description: "\n   " + "I can cast warlock cantrips/spells that I know, using Charisma as my spellcasting ability" + "\n   " + "I can use an arcane focus as a spellcasting focus" + "\n   " + "I regain these spell slots on a short rest",
      additional: ["2 cantrips \u0026 2 spells known", "2 cantrips \u0026 3 spells known", "2 cantrips \u0026 4 spells known", "3 cantrips \u0026 5 spells known", "3 cantrips \u0026 6 spells known", "3 cantrips \u0026 7 spells known", "3 cantrips \u0026 8 spells known", "3 cantrips \u0026 9 spells known", "3 cantrips \u0026 10 spells known", "4 cantrips \u0026 10 spells known", "4 cantrips \u0026 11 spells known", "4 cantrips \u0026 11 spells known", "4 cantrips \u0026 12 spells known", "4 cantrips \u0026 12 spells known", "4 cantrips \u0026 13 spells known", "4 cantrips \u0026 13 spells known", "4 cantrips \u0026 14 spells known", "4 cantrips \u0026 14 spells known", "4 cantrips \u0026 15 spells known", "4 cantrips \u0026 15 spells known"],
    },
    "subclassfeature1": {
      name: "Otherworldly Patron",
      source: ["P", 107],
      minlevel: 1,
      description: "\n   " + "Choose the Otherworldly Patron you have a bargain with and put it in the \"Class\" field" + "\n   " + "Choose either the Archfey, the Fiend, the Great Old One, or the Undying",
    },
    "eldritch invocations": {
      name: "Eldritch Invocations",
      source: ["P", 107],
      minlevel: 2,
      description: "\n   " + "Use the \"Choose Features\" button above to add Eldritch Invocations to the third page",
      additional: ["", "2 invocations known", "2 invocations known", "2 invocations known", "3 invocations known", "3 invocations known", "4 invocations known", "4 invocations known", "5 invocations known", "5 invocations known", "5 invocations known", "6 invocations known", "6 invocations known", "6 invocations known", "7 invocations known", "7 invocations known", "7 invocations known", "8 invocations known", "8 invocations known", "8 invocations known"],
      extraname: "Eldritch Invocation",
      extrachoices: ["Agonizing Blast (prereq: Eldritch Blast cantrip)", "Armor of Shadows", "Ascendant Step (prereq: level 9 warlock)", "Beast Speech", "Beguiling Influence", "Bewitching Whispers (prereq: level 7 warlock)", "Book of Ancient Secrets (prereq: Pact of the Tome)", "Chains of Carceri (prereq: level 15 warlock, Pact of the Chain)", "Devil's Sight", "Dreadful Word (prereq: level 7 warlock)", "Eldritch Sight", "Eldritch Spear (prereq: Eldritch Blast cantrip)", "Eyes of the Rune Keeper", "Fiendish Vigor", "Gaze of Two Minds", "Lifedrinker (prereq: level 12 warlock, Pact of the Blade)", "Mask of Many Faces", "Master of Myriad Forms (prereq: level 15 warlock)", "Minions of Chaos (prereq: level 9 warlock)", "Mire the Mind (prereq: level 5 warlock)", "Misty Visions", "One with Shadows (prereq: level 5 warlock)", "Otherworldly Leap (prereq: level 9 warlock)", "Repelling Blast (prereq: Eldritch Blast cantrip)", "Sculptor of Flesh (prereq: level 7 warlock)", "Sign of Ill Omen (prereq: level 5 warlock)", "Thief of Five Fates", "Thirsting Blade (prereq: level 5 warlock, Pact of the Blade)", "Visions of Distant Realms (prereq: level 15 warlock)", "Voice of the Chain Master (prereq: Pact of the Chain)", "Whispers of the Grave (prereq: level 9 warlock)", "Witch Sight (prereq: level 15 warlock)"],
      "agonizing blast (prereq: eldritch blast cantrip)": {
        name: "Agonizing Blast",
        description: "\n   " + "I can add my Charisma modifier to the damage of my Eldritch Blast cantrip",
        source: ["P", 110],
        eval: "var ES = (What(\"Extra.Notes\").search(/eldritch spear/i) !== -1); RemoveWeapon(\"eldritch blast\"); RemoveWeapon(\"eldritch spear\"); RemoveWeapon(\"agonizing blast\"); if (ES) {AddWeapon(\"Agonizing Spear\")} else {AddWeapon(\"Agonizing Blast\")}",
        removeeval: "RemoveWeapon(\"agonizing blast\"); RemoveWeapon(\"agonizing spear\"); var ES = (What(\"Extra.Notes\").search(/eldritch spear/i) !== -1); if (ES) {AddWeapon(\"Eldritch Spear\")} else {AddWeapon(\"Eldritch Blast\")}",
      },
      "armor of shadows": {
        name: "Armor of Shadows",
        description: "\n   " + "I can cast Mage Armor on myself at will, without spell slots or material comp. (PHB 256)",
        source: ["P", 110],
        spellcastingBonus: {
          name: "Armor of Shadows",
          spells: ["mage armor"],
          selection: ["mage armor"],
          atwill: true,
        },
      },
      "ascendant step (prereq: level 9 warlock)": {
        name: "Ascendant Step",
        description: "\n   " + "I can cast Levitate on myself at will, without spell slots or material comp. (PHB 255)",
        source: ["P", 110],
        spellcastingBonus: {
          name: "Ascendant Step",
          spells: ["levitate"],
          selection: ["levitate"],
          atwill: true,
        },
      },
      "beast speech": {
        name: "Beast Speech",
        description: "\n   " + "I can cast Speak with Animals at will, without using spell slots (PHB 277)",
        source: ["P", 110],
        spellcastingBonus: {
          name: "Beast Speech",
          spells: ["speak with animals"],
          selection: ["speak with animals"],
          atwill: true,
        },
      },
      "beguiling influence": {
        name: "Beguiling Influence",
        description: "\n   " + "I gain proficiencies with the Deception and Persuasion skills",
        source: ["P", 110],
        skills: ["Deception", "Persuasion"],
        skillstxt: "\n\n" + toUni("Warlock (Beguiling Influence)") + ": Deception and Persuasion.",
      },
      "bewitching whispers (prereq: level 7 warlock)": {
        name: "Bewitching Whispers",
        description: "\n   " + "Once per long rest, I can cast Compulsion using a warlock spell slot (PHB 224)",
        source: ["P", 110],
        usages: 1,
        recovery: "long rest",
        spellcastingBonus: {
          name: "Bewitching Whispers",
          spells: ["compulsion"],
          selection: ["compulsion"],
          oncelr: true,
        },
      },
      "book of ancient secrets (prereq: pact of the tome)": {
        name: "Book of Ancient Secrets",
        description: "\n   " + "I can add any two 1st-level spells that have the ritual tag to my Book of Shadows" + "\n   " + "If I come across spells with the ritual tag, I can transcribe them into my book, as well" + "\n   " + "I can cast any of these spells in my Book of Shadows as rituals, but not as normal spells" + "\n   " + "I can cast my known warlock spells as rituals if they have the ritual tag",
        source: ["P", 110],
        eval: "CurrentSpells[\"book of ancient secrets\"] = {name : \"Book of Ancient Secrets\", ability : 6, list : {class : \"any\", ritual : true}, known : {spells : \"book\"}}; SetStringifieds();",
        removeeval: "delete CurrentSpells[\"book of ancient secrets\"]; SetStringifieds();",
      },
      "chains of carceri (prereq: level 15 warlock, pact of the chain)": {
        name: "Chains of Carceri",
        description: "\n   " + "I can cast Hold Monster at will if the target is a celestial, fiend, or elemental (PHB 251)" + "\n   " + "This uses no spell slots/material comp.; I can only target an individual once per long rest",
        source: ["P", 110],
        spellcastingBonus: {
          name: "Chains of Carceri",
          spells: ["hold monster"],
          selection: ["hold monster"],
          oncelr: true,
        },
      },
      "devil's sight": {
        name: "Devil's Sight",
        description: "\n   " + "I can see in magical and nonmagical darkness out to 120 ft",
        source: ["P", 110],
        eval: "AddString(\"Vision\", \"Devil's Sight 120 ft\", \"; \");",
        removeeval: "RemoveString(\"Vision\", \"Devil's Sight 120 ft\", \"; \");",
      },
      "dreadful word (prereq: level 7 warlock)": {
        name: "Dreadful Word",
        description: "\n   " + "Once per long rest, I can cast Confusion using a warlock spell slot (PHB 224)",
        source: ["P", 110],
        usages: 1,
        recovery: "long rest",
        spellcastingBonus: {
          name: "Dreadful Word",
          spells: ["confusion"],
          selection: ["confusion"],
          oncelr: true,
        },
      },
      "eldritch sight": {
        name: "Eldritch Sight",
        description: "\n   " + "I can cast Detect Magic at will, without using spell slots (PHB 231)",
        source: ["P", 110],
        spellcastingBonus: {
          name: "Eldritch Sight",
          spells: ["detect magic"],
          selection: ["detect magic"],
          atwill: true,
        },
      },
      "eldritch spear (prereq: eldritch blast cantrip)": {
        name: "Eldritch Spear",
        description: "\n   " + "My Eldritch Blast cantrip has a range of 300 ft",
        source: ["P", 111],
        eval: "var AB = (What(\"Extra.Notes\").search(/agonizing blast/i) !== -1); RemoveWeapon(\"eldritch blast\"); RemoveWeapon(\"eldritch spear\"); RemoveWeapon(\"agonizing blast\"); if (AB) {AddWeapon(\"Agonizing Spear\")} else {AddWeapon(\"Eldritch Spear\")}",
        removeeval: "RemoveWeapon(\"eldritch spear\"); RemoveWeapon(\"agonizing spear\"); var AB = (What(\"Extra.Notes\").search(/agonizing blast/i) !== -1); if (AB) {AddWeapon(\"Agonizing Blast\")} else {AddWeapon(\"Eldritch Blast\")}",
      },
      "eyes of the rune keeper": {
        name: "Eyes of the Rune Keeper",
        description: "\n   " + "I can read all writing",
        source: ["P", 111],
      },
      "fiendish vigor": {
        name: "Fiendish Vigor",
        description: "\n   " + "I can cast False Life on myself at will, without spell slots or material comp. (PHB 239)",
        source: ["P", 111],
        spellcastingBonus: {
          name: "Fiendish Vigor",
          spells: ["false life"],
          selection: ["false life"],
          atwill: true,
        },
      },
      "gaze of two minds": {
        name: "Gaze of Two Minds",
        description: "\n   " + "As an action, I can touch a willing creature and perceive through its senses (not my own)" + "\n   " + "This lasts until the end of my next turn, but I can use an action to extend the duration",
        source: ["P", 111],
      },
      "lifedrinker (prereq: level 12 warlock, pact of the blade)": {
        name: "Lifedrinker",
        description: "\n   " + "My pact weapon does extra necrotic damage equal to my Charisma modifier",
        source: ["P", 111],
      },
      "mask of many faces": {
        name: "Mask of Many Faces",
        description: "\n   " + "I can cast Disguise Self on myself at will, without using spell slots (PHB 233)",
        source: ["P", 111],
        spellcastingBonus: {
          name: "Mask of Many Faces",
          spells: ["disguise self"],
          selection: ["disguise self"],
          atwill: true,
        },
      },
      "master of myriad forms (prereq: level 15 warlock)": {
        name: "Master of Myriad Forms",
        description: "\n   " + "I can cast Alter Self on myself at will, without using spell slots (PHB 211)",
        source: ["P", 111],
        spellcastingBonus: {
          name: "Mask of Myriad Forms",
          spells: ["alter self"],
          selection: ["alter self"],
          atwill: true,
        },
      },
      "minions of chaos (prereq: level 9 warlock)": {
        name: "Minions of Chaos",
        description: "\n   " + "Once per long rest, I can cast Conjure Elemental using a warlock spell slot (PHB 225)",
        source: ["P", 111],
        usages: 1,
        recovery: "long rest",
        spellcastingBonus: {
          name: "Minions of Chaos",
          spells: ["conjure elemental"],
          selection: ["conjure elemental"],
          oncelr: true,
        },
      },
      "mire the mind (prereq: level 5 warlock)": {
        name: "Mire the Mind",
        description: "\n   " + "Once per long rest, I can cast Slow using a warlock spell slot (PHB 277)",
        source: ["P", 111],
        usages: 1,
        recovery: "long rest",
        spellcastingBonus: {
          name: "Mire the Mind",
          spells: ["slow"],
          selection: ["slow"],
          oncelr: true,
        },
      },
      "misty visions": {
        name: "Misty Visions",
        description: "\n   " + "I can cast Silent Image at will, without using spell slots or material comp. (PHB 276)",
        source: ["P", 111],
        spellcastingBonus: {
          name: "Misty Visions",
          spells: ["silent image"],
          selection: ["silent image"],
          atwill: true,
        },
      },
      "one with shadows (prereq: level 5 warlock)": {
        name: "One with Shadows",
        description: "\n   " + "As an action, when I'm in an area of dim light or darkness, I can become invisible" + "\n   " + "I become visible again when I move or take an action or reaction",
        source: ["P", 111],
        action: ["action", ""]
      },
      "otherworldly leap (prereq: level 9 warlock)": {
        name: "Otherworldly Leap",
        description: "\n   " + "I can cast Jump on myself at will, without using spell slots or material comp. (PHB 254)",
        source: ["P", 111],
        spellcastingBonus: {
          name: "Otherworldly Leap",
          spells: ["jump"],
          selection: ["jump"],
          atwill: true,
        },
      },
      "repelling blast (prereq: eldritch blast cantrip)": {
        name: "Repelling Blast",
        description: "\n   " + "I can have creatures hit by my Eldritch Blast cantrip be pushed 10 ft away from me",
        source: ["P", 111],
      },
      "sculptor of flesh (prereq: level 7 warlock)": {
        name: "Sculptor of Flesh",
        description: "\n   " + "Once per long rest, I can cast Polymorph using a warlock spell slot (PHB 266)",
        source: ["P", 111],
        usages: 1,
        recovery: "long rest",
        spellcastingBonus: {
          name: "Sculptor of Flesh",
          spells: ["polymorph"],
          selection: ["polymorph"],
          oncelr: true,
        },
      },
      "sign of ill omen (prereq: level 5 warlock)": {
        name: "Sign of Ill Omen",
        description: "\n   " + "Once per long rest, I can cast Bestow Curse using a warlock spell slot (PHB 218)",
        source: ["P", 111],
        usages: 1,
        recovery: "long rest",
        spellcastingBonus: {
          name: "Sign of Ill Omen",
          spells: ["bestow curse"],
          selection: ["bestow curse"],
          oncelr: true,
        },
      },
      "thief of five fates": {
        name: "Thief of Five Fates",
        description: "\n   " + "Once per long rest, I can cast Bane using a warlock spell slot (PHB 216)",
        source: ["P", 111],
        usages: 1,
        recovery: "long rest",
        spellcastingBonus: {
          name: "Thief of Five Fates",
          spells: ["bane"],
          selection: ["bane"],
          oncelr: true,
        },
      },
      "thirsting blade (prereq: level 5 warlock, pact of the blade)": {
        name: "Thirsting Blade",
        description: "\n   " + "When taking the attack action, I can attack twice with my pact weapon",
        source: ["P", 111],
      },
      "visions of distant realms (prereq: level 15 warlock)": {
        name: "Visions of Distant Realms",
        description: "\n   " + "I can cast Arcane Eye at will, without using spell slots (PHB 214)",
        source: ["P", 111],
        spellcastingBonus: {
          name: "Visions of Distant Realms",
          spells: ["arcane eye"],
          selection: ["arcane eye"],
          atwill: true,
        },
      },
      "voice of the chain master (prereq: pact of the chain)": {
        name: "Voice of the Chain Master",
        description: "\n   " + "While on the same plane as my familiar, I can communicate telepathically with it" + "\n   " + "Also, I can perceive through its senses and have it speak with my voice while doing so",
        source: ["P", 111],
      },
      "whispers of the grave (prereq: level 9 warlock)": {
        name: "Whispers of the Grave",
        description: "\n   " + "I can cast Speak with Dead at will, without using spell slots (PHB 277)",
        source: ["P", 111],
        spellcastingBonus: {
          name: "Whispers of the Grave",
          spells: ["speak with dead"],
          selection: ["speak with dead"],
          atwill: true,
        },
      },
      "witch sight (prereq: level 15 warlock)": {
        name: "Witch Sight",
        description: "\n   " + "I can see the true form of creatures (shapechangers/illusions/transmutations) within 30 ft",
        source: ["P", 111],
        eval: "AddString(\"Vision\", \"Witch Sight 30 ft\", \"; \");",
        removeeval: "RemoveString(\"Vision\", \"Witch Sight 30 ft\", \"; \");",
      },
    },
    "pact boon": {
      name: "Pact Boon",
      source: ["P", 107],
      minlevel: 3,
      description: "\n   " + "Choose a Pact Boon (Blade, Chain, or Tome) using the \"Choose Feature\" button above",
      choices: ["Pact of the Blade", "Pact of the Chain", "Pact of the Tome"],
      "pact of the blade": {
        name: "Pact of the Blade",
        description: "\n   " + "As an action, I can create a pact weapon in my empty hand; I'm proficient in its use" + "\n   " + "I can choose the type of melee weapon every time I create it, and it has those statistics" + "\n   " + "The weapon disappears if it is more than 5 ft away from me for 1 minute" + "\n   " + "The weapon counts as magical; I can transform a magic weapon into my pact weapon" + "\n   " + "This occurs over an hour-long ritual that I can perform during a short rest" + "\n   " + "I can use an action to re-summon it in any form and can dismiss it as no action",
        action: ["action", ""]
      },
      "pact of the chain": {
        name: "Pact of the Chain",
        description: "\n   " + "I can cast Find Familiar as a ritual (PHB 240); Also Imp/Pseudodragon/Quasit/Sprite" + "\n   " + "When taking the attack action, I can forgo 1 attack to have my familiar attack instead" + "\n   " + "It makes this 1 attack by using its reaction",
      },
      "pact of the tome": {
        name: "Pact of the Tome",
        source: ["P", 108],
        description: "\n   " + "I have a Book of Shadows with any three cantrips of my choosing" + "\n   " + "I can cast these cantrips as long as I have the book on my person" + "\n   " + "Regardless of the lists they come from, these count as warlock cantrips to me" + "\n   " + "I can get a replacement book with a 1-hour ceremony during a short or long rest",
        spellcastingBonus: {
          name: "Pact of the Tome",
          class: "any",
          level: [0, 0],
          times: 3,
        },
      }
    },
    "subclassfeature6": {
      name: "",
      minlevel: 6,
    },
    "subclassfeature10": {
      name: "",
      minlevel: 10,
    },
    "mystic arcanum": {
      name: "Mystic Arcanum",
      source: ["P", 108],
      minlevel: 11,
      description: "\n   " + "I can choose one spell from the warlock spell list of each level mentioned above" + "\n   " + "I can cast these spells each once per long rest without needing to use a spell slot",
      additional: ["", "", "", "", "", "", "", "", "", "", "6th level", "6th level", "6th and 7th level", "6th and 7th level", "6th, 7th, and 8th level", "6th, 7th, and 8th level", "6th, 7th, 8th, and 9th level", "6th, 7th, 8th, and 9th level", "6th, 7th, 8th, and 9th level", "6th, 7th, 8th, and 9th level"],
      spellcastingBonus: {
        name: "Mystic Arcanum (6)",
        class: "warlock",
        level: [6, 6],
        oncelr: true,
      },
      changeeval: "if (classes.known.warlock.level < 13) {delete CurrentSpells.warlock.bonus[\"mystic arcanum (7)\"]} else {if (!CurrentSpells.warlock.bonus[\"mystic arcanum (7)\"]) {CurrentSpells.warlock.bonus[\"mystic arcanum (7)\"] = {name : \"Mystic Arcanum (7)\", class : \"warlock\", level : [7, 7], oncelr : true}}}; if (classes.known.warlock.level < 15) {delete CurrentSpells.warlock.bonus[\"mystic arcanum (8)\"]} else {if (!CurrentSpells.warlock.bonus[\"mystic arcanum (8)\"]) {CurrentSpells.warlock.bonus[\"mystic arcanum (8)\"] = {name : \"Mystic Arcanum (8)\", class : \"warlock\", level : [8, 8], oncelr : true}}}; if (classes.known.warlock.level < 17) {delete CurrentSpells.warlock.bonus[\"mystic arcanum (9)\"]} else {if (!CurrentSpells.warlock.bonus[\"mystic arcanum (9)\"]) {CurrentSpells.warlock.bonus[\"mystic arcanum (9)\"] = {name : \"Mystic Arcanum (9)\", class : \"warlock\", level : [9, 9], oncelr : true}}}",
    },
    "subclassfeature14": {
      name: "",
      minlevel: 14,
    },
    "eldritch master": {
      name: "Eldritch Master",
      source: ["P", 108],
      minlevel: 20,
      description: "\n   " + "I can regain all used pact magic spells slots by spending 1 minute entreating my patron",
      recovery: "long rest",
      usages: 1
    }
  }
},

"wizard": {

  name: "Wizard",
  source: ["P", 112],
  primaryAbility: "\n \u2022 Wizard: Intelligence;",
  abilitySave: 4,
  prereqs: "\n \u2022 Wizard: Intelligence 13;",
  improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
  die: 6,
  saves: ["Int", "Wis"],
  skills: ["\n\n" + toUni("Wizard") + ": Choose two from Arcana, History, Insight, Investigation, Medicine, and Religion."],
  armor: [
    [false, false, false, false]
  ],
  weapons: [
    [false, false, ["dagger", "dart", "light crossbow", "quarterstaff", "sling"]]
  ],
  equipment: "Wizard starting equipment:\n \u2022 A quarterstaff -or- a dagger;\n \u2022 A component pouch -or- an arcane focus;\n \u2022 A scholar's pack -or- an explorer's pack;\n \u2022 A spellbook.\n\nAlternatively, choose 4d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
  subclasses: ["Arcane Tradition", ["abjuration", "conjuration", "divination", "enchantment", "evocation", "illusion", "necromancy", "transmutation", "bladesinging"]],
  attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  spellcastingFactor: 1,
  spellcastingKnown: {
    cantrips: [3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    spells: "book",
    prepared: true,
  },
  features: {
    "spellcasting": {
      name: "Spellcasting",
      source: ["P", 114],
      minlevel: 1,
      description: "\n   " + "I can cast prepared wizard cantrips/spells, using Intelligence as my spellcasting ability" + "\n   " + "I can use an arcane focus as a spellcasting focus" + "\n   " + "I can cast all wizard spells in my spellbook as rituals if they have the ritual tag",
      additional: ["3 cantrips known", "3 cantrips known", "3 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known"],
    },
    "arcane recovery": {
      name: "Arcane Recovery",
      source: ["P", 115],
      minlevel: 1,
      description: "\n   " + "Once per day after a short rest, I can recover a number of 5th-level or lower spell slots",
      additional: ["1 level of spell slots", "1 level of spell slots", "2 levels of spell slots", "2 levels of spell slots", "3 levels of spell slots", "3 levels of spell slots", "4 levels of spell slots", "4 levels of spell slots", "5 levels of spell slots", "5 levels of spell slots", "6 levels of spell slots", "6 levels of spell slots", "7 levels of spell slots", "7 levels of spell slots", "8 levels of spell slots", "8 levels of spell slots", "9 levels of spell slots", "9 levels of spell slots", "10 levels of spell slots", "10 levels of spell slots"],
      usages: 1,
      recovery: "long rest"
    },
    "subclassfeature2": {
      name: "Arcane Tradition",
      source: ["P", 115],
      minlevel: 2,
      description: "\n   " + "Choose the Arcane Tradition you studied and put it in the \"Class\" field" + "\n   " + "Choose either the School of Abjuration, Conjuration, Divination, Enchantment," + "\n   " + "Evocation, Illusion, Necromancy, or Transmutation, or become a Bladesinger"
    },
    "spell mastery": {
      name: "Spell Mastery",
      source: ["P", 115],
      minlevel: 18,
      description: "\n   " + "By spending 8 hours in study, I can pick a 1st and 2nd-level spell in my spellbook" + "\n   " + "While prepared, I can cast them at their lowest levels without expending spell slots"
    },
    "signature spell": {
      name: "Signature Spell",
      source: ["P", 115],
      minlevel: 20,
      description: "\n   " + "Two 3rd-level spells of my choice in my spellbook will always count as prepared" + "\n   " + "I can cast both at third level once per short rest without expending spell slots",
      recovery: "short rest",
      usages: 2
    },
  }
}
