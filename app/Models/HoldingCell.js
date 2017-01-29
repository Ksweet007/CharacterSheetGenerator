{
    _id:"Barbarian",
    "Class":{
        _id:"Barbarian",
        name : "Barbarian",
        source : ["P", 46],
        primaryAbility : "  Barbarian: Strength;",
        prereqs : "  Barbarian: Strength 13;",
        improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
        die : 12,
        saves : ["Str", "Con"],
        skills : ["Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival."],
        armor : [
            [true, true, false, true],
            [false, false, false, true]
        ],
        weapons : [
            [true, true],
            [true, true]
        ],
        equipment : "Barbarian starting equipment:  A greataxe -or- any martial melee weapon;  Two handaxes -or- any simple weapon;  An explorer's pack and four javelins.Alternatively, choose 2d4 x7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
        subclasses : ["Primal Path", ["battlerager", "berserker", "totem warrior"]],
        attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        features : [
            {
                name : "Rage",
                source : ["P", 48],
                minlevel : 1,
                description : "   " + "Start/end as bonus action; add damage to melee weapons that use Str; lasts 1 min" + "   " + "Adv. on Strength checks/saves (not attacks); resistance to bludgeoning/piercing/slashing" + "   " + "Stops if I end turn without attacking or taking damage since last turn, or unconscious",
                additional : ["+2 melee damage", "+2 melee damage", "+2 melee damage", "+2 melee damage", "+2 melee damage", "+2 melee damage", "+2 melee damage", "+2 melee damage", "+3 melee damage", "+3 melee damage", "+3 melee damage", "+3 melee damage", "+3 melee damage", "+3 melee damage", "+3 melee damage", "+4 melee damage", "+4 melee damage", "+4 melee damage", "+4 melee damage", "+4 melee damage"],
                usages : [2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6],
                recovery : "long rest",
                action : ["bonus action", " (start/stop)"],
                eval : "AddResistance(\"Bludgeon. (in rage)\", \"Barbarian (Rage)\"); AddResistance(\"Piercing (in rage)\", \"Barbarian (Rage)\"); AddResistance(\"Slashing (in rage)\", \"Barbarian (Rage)\");",
                removeeval : "RemoveResistance(\"Bludgeon. (in rage)\"); RemoveResistance(\"Piercing (in rage)\"); RemoveResistance(\"Slashing (in rage)\");",
                save : "Adv. on Strength saves in rage"
            },
            {
                name : "Unarmored Defense",
                source : ["P", 48],
                minlevel : 1,
                description : "   " + "Without armor, my AC is 10 + Dexterity modifier + Constitution modifier + shield"
            },
            {
                name : "Reckless Attack",
                source : ["P", 48],
                minlevel : 2,
                description : "   " + "Adv. on melee weapon attacks during my turn, but attacks vs. me adv. until next turn"
            },
            {
                name : "Danger Sense",
                source : ["P", 48],
                minlevel : 2,
                description : "   " + "Adv. on Dexterity saves against seen effects (not blinded/deafened/incapacitated)",
                save : "Adv. on Dex saves vs. seen effects"
            },
            {
                name : "Primal Path",
                source : ["P", 48],
                minlevel : 3,
                description : "   " + "Choose a Primal Path that shapes the nature of your rage and put it in the \"Class\" field" + "   " + "Choose either the Path of the Battlerager, Berserker, or Totem Warrior"
            },
            {
                name : "Fast Movement",
                source : ["P", 49],
                minlevel : 5,
                description : "   " + "+10 ft speed when I'm not wearing heavy armor",
                eval : "ChangeSpeed(10);",
                removeeval : "ChangeSpeed(-10);"
            },
            {
                name : "Feral Instinct",
                source : ["P", 49],
                minlevel : 7,
                description : "   " + "Adv. on Initiative; I can enter rage to act normally on the first turn when surprised",
                eval : "Checkbox(\"Init Adv\", true, \"Advantage to Initiative checks was gained from Barbarian (Feral Instinct)\");",
                removeeval : "Checkbox(\"Init Adv\", false, \"\");"
            },
            {
                name : "Brutal Critical",
                source : ["P", 49],
                minlevel : 9,
                description : "   " + "I can roll additional dice for the extra damage on a critical hit with a melee attack",
                additional : ["", "", "", "", "", "", "", "", "1 additional die", "1 additional die", "1 additional die", "1 additional die", "2 additional dice", "2 additional dice", "2 additional dice", "2 additional dice", "3 additional dice", "3 additional dice", "3 additional dice", "3 additional dice"]
            },
            {
                name : "Relentless Rage",
                source : ["P", 49],
                minlevel : 11,
                description : " [DC 10 + 5 per try, per short rest]" + "   " + "If I drop to 0 HP while raging, I can make a DC 10 Constitution save to stay at 1 HP" + "   " + "The DC increases by 5 for every attempt until I finish a short or long rest",
                recovery : "short rest",
                usages : "",
                usagescalc : "var FieldNmbr = parseFloat(event.target.name.slice(-2)); var usages = What(\"Limited Feature Used \" + FieldNmbr); var DCmod = Number(usages) * 5; event.value = (isNaN(Number(usages)) || usages === \"\") ? \"DC\u2003\u2003\" : \"DC \" + Number(10 + DCmod);",
            },
            {
                name : "Persistent Rage",
                source : ["P", 49],
                minlevel : 15,
                description : "   " + "My rage only lasts less than 1 minute if I fall unconscious or I choose to end it"
            },
            {
                name : "Indomitable Might",
                source : ["P", 49],
                minlevel : 18,
                description : "   " + "If a Strength check is lower than my Strength score, use Strength score instead"
            },
            {
                name : "Primal Champion",
                source : ["P", 49],
                minlevel : 20,
                description : "   " + "+4 to Strength and Constitution; Their maximums increase to 24"
            }
        ]
    }
},

{
    _id:"Bard",
    "Class":{
        _id:"Bard"
        name : "Bard",
        source : ["P", 51],
        primaryAbility : "Charisma",
        abilitySave : 6,
        prereqs : "Charisma 13",
        improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
        die : 8,
        saves : ["Dex", "Cha"],
        skills : ["" + ("Bard") + ": Choose any three skills.", "" + ("Multiclass Bard") + ": Choose any one skill."],
        tools : ["Three musical instruments", "One musical instrument"],
        armor : [
            [true, false, false, false],
            [true, false, false, false]
        ],
        weapons : [
            [true, false, ["hand crossbow", "longsword", "rapier", "shortsword"]]
        ],
        equipment : "Bard starting equipment:  A rapier -or- a longsword -or- any simple weapon;  A diplomat's pack -or- an entertainer's pack;  A lute -or- any other musical instrument  Leather armor and a dagger.Alternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
        subclasses : ["Bard College", ["college of lore", "college of valor"]],
        attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        spellcastingFactor : 1,
        spellcastingKnown : {
            cantrips : [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            spells : [4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 13, 13, 14, 14, 15, 16, 16, 16],
        },
        features : [
            {
                name : "Spellcasting",
                source : ["P", 52],
                minlevel : 1,
                description : "   " + "I can cast bard cantrips/spells that I know, using Charisma as my spellcasting ability" + "   " + "I can use a musical instrument as a spellcasting focus" + "   " + "I can cast my known bard spells as rituals if they have the ritual tag",
                additional : ["2 cantrips  4 spells known", "2 cantrips  5 spells known", "2 cantrips  6 spells known", "3 cantrips  7 spells known", "3 cantrips  8 spells known", "3 cantrips  9 spells known", "3 cantrips  10 spells known", "3 cantrips  11 spells known", "3 cantrips  12 spells known", "4 cantrips  14 spells known", "4 cantrips  15 spells known", "4 cantrips  15 spells known", "4 cantrips  16 spells known", "4 cantrips  18 spells known", "4 cantrips  19 spells known", "4 cantrips  19 spells known", "4 cantrips  20 spells known", "4 cantrips  22 spells known", "4 cantrips  22 spells known", "4 cantrips  22 spells known"],
            },
            {
                name : "Bardic Inspiration",
                source : ["P", 53],
                minlevel : 1,
                description : "   " + "As a bonus action, a creature in 60 ft that can hear me gets an inspiration die (max 1)" + "   " + "For 10 min, the recipient can add it to one ability check, attack roll, or saving throw" + "   " + "This addition can be done after seeing the d20 roll, but before knowing the outcome",
                additional : ["d6", "d6", "d6", "d6", "d8", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10", "d10", "d12", "d12", "d12", "d12", "d12", "d12"],
                usages : "Charisma modifier per ",
                usagescalc : "event.value = Math.max(1, tDoc.getField(\"Cha Mod\").value);",
                recovery : "long rest",
                action : ["bonus action", ""],
                changeeval : "if(ClassLevelUp.bard[1]<5&&ClassLevelUp.bard[2]>=5){RemoveFeature(\"bardic inspiration\");var oldBIrest=newClassLvl.bard>=5?\"long\":\"short\";var newBIrest=newClassLvl.bard>=5?\"short\":\"long\";CurrentClasses.bard.features[\"bardic inspiration\"].recovery=newBIrest+\" rest\";var oldBIStr=\"Bardic Inspiration (Bard 1, PHB 53) [\"+propFea.additional[oldClassLvl.bard-1]+\", Charisma modifier per \"+oldBIrest+\" rest]\";if(oldClassLvl.bard!==0&&What(\"Class Features\").indexOf(oldBIStr)!==-1){ReplaceString(\"Class Features\",oldBIStr.replace(oldBIrest,newBIrest),false,oldBIStr);}}"
            },
            {
                name : "Jack of All Trades",
                source : ["P", 54],
                minlevel : 2,
                description : "   " + "I can add half my proficiency bonus to any ability check that doesn't already include it",
                eval : "Checkbox(\"Jack of All Trades\", true);",
                removeeval : "Checkbox(\"Jack of All Trades\", false);"
            },
            {
                name : "Song of Rest",
                source : ["P", 54],
                minlevel : 2,
                description : "   " + "Those that use HD and can hear my performance during a short rest get extra healing",
                additional : ["", "d6", "d6", "d6", "d6", "d6", "d6", "d6", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10", "d12", "d12", "d12", "d12"]
            },
            {
                name : "Bard College",
                source : ["P", 54],
                minlevel : 3,
                description : "   " + "Choose a College that reflects your personality and put it in the \"Class\" field " + "   " + "Choose either the College of Lore or the College of Valor"
            },
            {
                name : "Expertise",
                source : ["P", 54],
                minlevel : 3,
                description : "   " + "I gain expertise with two skills I am proficient with; two more at 10th level",
                skillstxt : "" + ("Expertise (Bard 3)") + ": Choose any two skill proficiencies, and two more at 10th level.",
                additional : ["", "", "with two skills", "with two skills", "with two skills", "with two skills", "with two skills", "with two skills", "with two skills", "with four skills", "with four skills", "with four skills", "with four skills", "with four skills", "with four skills", "with four skills", "with four skills", "with four skills", "with four skills", "with four skills"],
            },
            {
                name : "Font of Inspiration",
                source : ["P", 54],
                minlevel : 5,
                description : "   " + "I can now also recover my expended Bardic Inspiration uses after a short rest",
            },
            {
                name : "Countercharm",
                source : ["P", 54],
                minlevel : 6,
                description : "   " + "As an action, I can do a performance that lasts until the end of my next turn" + "   " + "While it lasts, any friend in earshot  30 ft has adv. on saves vs. frightened/charmed",
                action : ["action", ""]
            },
            {
                name : "Magical Secrets",
                source : ["P", 54],
                minlevel : 10,
                description : "   " + "I can add two spells/cantrips from any class to my spells known; +2 at level 14  18",
                additional : ["", "", "", "", "", "", "", "", "", "two spells/cantrips", "two spells/cantrips", "two spells/cantrips", "two spells/cantrips", "four spells/cantrips", "four spells/cantrips", "four spells/cantrips", "four spells/cantrips", "six spells/cantrips", "six spells/cantrips", "six spells/cantrips"],
                spellcastingBonus : {
                    name : "Magical Secret",
                    class : "any",
                    times : [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 4, 4, 4, 4, 6, 6, 6],
                },
            },
            {
                name : "Superior Inspiration",
                source : ["P", 54],
                minlevel : 20,
                description : "   " + "I regain one use of Bardic Inspiration if I have no more remaining when I roll initiative",
            },
        ]
    }
},

{
    _id:"Cleric",
    "Class":{
        name : "Cleric",
        source : ["P", 56],
        primaryAbility : "Wisdom;",
        abilitySave : 5,
        prereqs : "Wisdom 13;",
        improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
        die : 8,
        saves : ["Wis", "Cha"],
        skills : ["" + ("Cleric") + ": Choose two from History, Insight, Medicine, Persuasion, and Religion."],
        armor : [
            [true, true, false, true],
            [true, true, false, true]
        ],
        weapons : [
            [true, false]
        ],
        equipment : "Cleric starting equipment:  A mace -or- a warhammer (if proficient);  Scale mail -or- leather armor -or- chain mail (if proficient);  A light crossbow and 20 bolts -or- any simple weapon;  A priest's pack -or- an explorer's pack;  A shield and a holy symbol.Alternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
        subclasses : ["Divine Domain", ["arcana domain", "death domain", "knowledge domain", "life domain", "light domain", "nature domain", "tempest domain", "trickery domain", "war domain"]],
        attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        spellcastingFactor : 1,
        spellcastingKnown : {
            cantrips : [3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            spells : "list",
            prepared : true,
        },
        features : [
            {
                name : "Spellcasting",
                source : ["P", 58],
                minlevel : 1,
                description : "   " + "I can cast prepared cleric cantrips/spells, using Wisdom as my spellcasting ability" + "   " + "I can use a holy symbol as a spellcasting focus" + "   " + "I can cast my prepared cleric spells as rituals if they have the ritual tag",
                additional : ["3 cantrips known", "3 cantrips known", "3 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known"],
            },
            {
                name : "Divine Domain",
                source : ["P", 58],
                minlevel : 1,
                description : "   " + "Choose a Domain related to your deity and put it in the \"Class\" field on the first page" + "   " + "Choose either Arcana, Death, Life, Light, Nature, Tempest, Trickery, or War Domain",
            },
            {
                name : "",
                minlevel : 1,
            },
            {
                name : "",
                minlevel : 1,
            },
            {
                name : "Channel Divinity",
                source : ["P", 58],
                minlevel : 2,
                description : "   " + "I can channel divine energy to cause an effect; the save for this is my cleric spell DC",
                usages : [0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3],
                recovery : "short rest"
            },
            {
                name : "Channel Divinity: Turn Undead",
                source : ["P", 59],
                minlevel : 2,
                description : "   " + "As an action, all undead within 30 ft that can see/hear me must make a Wisdom save" + "   " + "If an undead fails this save, it is turned for 1 minute or until it takes any damage" + "   " + "Turned: move away, never within 30 ft of me, no reactions or actions other than Dash" + "   " + "Turned: may Dodge instead of Dash when nowhere to move and unable to escape bonds",
                action : ["action", ""]
            },
            {
                name : "Destroy Undead",
                source : ["P", 59],
                minlevel : 5,
                additional : ["", "", "", "", "CR \u00BD or lower", "CR \u00BD or lower", "CR \u00BD or lower", "CR 1 or lower", "CR 1 or lower", "CR 1 or lower", "CR 2 or lower", "CR 2 or lower", "CR 2 or lower", "CR 3 or lower", "CR 3 or lower", "CR 3 or lower", "CR 4 or lower", "CR 4 or lower", "CR 4 or lower", "CR 4 or lower"],
                description : "   " + "An undead up to the CR above that fails its save when I use Turn Undead is destroyed"
            },
            {
                name : "Divine Intervention",
                source : ["P", 59],
                minlevel : 10,
                additional : ["", "", "", "", "", "", "", "", "", "10% chance", "11% chance", "12% chance", "13% chance", "14% chance", "15% chance", "16% chance", "17% chance", "18% chance", "19% chance", "100% chance"],
                usages : 1,
                recovery : "long rest",
                description : "   " + "As an action, I can implore my deity for help; the DM determines the form of help" + "   " + "Without intervention, I can retry after a long rest; otherwise, I have to wait a week",
                action : ["action", ""]
            }

        ]
    }
},
