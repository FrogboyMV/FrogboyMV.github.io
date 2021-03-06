function init () {
	var data = [
        {
			name: "Frog Core",
			link: "https://github.com/FrogboyMV/FROG_Core",
			blurb: `
                Core library for FROG plugins.  You'll need this for pretty much all future
                plugins and updates to existing ones.  This doesn't add any functionality
                for your game.  It's just a library that I need so that I don't have to
                duplicate code in every plugin.  Place this above all of your FROG plugins
                and you should be good to go.
			`,
			image: "img/core.png"
		},
        {
			name: "Magic",
			link: "https://github.com/FrogboyMV/Magic",
			blurb: `
				This plugin expands on the core skill mechanics to allow you to create your own
                skill/magic systems.  Actors can use Vancian spell slots, magic points or powers.
                Adds prepared, spontaneous and hybrid spell casters.  Blue Mages have been
                integrated in here too as well as learning skills from equipped items ala Espers
                in Final Fantasy 6.  Create spell lists with leveled spells.  Mix and match options
                to create totally unique skill mechanics for each of your playable characters.
			`,
			image: "img/magic.png"
		},
        {
			name: "Health",
			link: "https://github.com/FrogboyMV/Health",
			blurb: `
				Have you ever thought, "Gee, these HP, MP and TP are nice but it would be really
                cool if I could add my own custom HP too"?  Well, your in luck!  After two months
                of effort (somebody shoot me now), I've finally, mostly completed my latest plugin:
                FROG Health.  Add your own custom HP stats like Food, Water, Rest, Oxygen, Psyche,
                Body Temperature or whatever else you can dream of.  Configure Skills and Items to
                harm or heal multiple Health HP.  You won't believe how much customization is
                offered in this plugin.
			`,
			image: "img/health.jpg"
		},
        {
			name: "Talent Core",
			link: "https://github.com/FrogboyMV/TalentCore",
			blurb: `
				Have you ever wanted to make system of non-combat abilities like picking locks,
                jumping, climbing, spotting hidden enemies and such, and then realize that it's
                a real pain in the neck to set up because RPG Maker MV makes you implement each
                one of these painstakingly by hand?  Well, now you don't have to.  My Talent Core
                plugin does most of the work for you and even gives you a nice inteface to work
                with.  This was designed to replicate the d20 Skill system but can be used for
                a lot more than that.
			`,
			image: "img/talent.jpg"
		},
        {
			name: "Talent-based Traits",
			link: "https://github.com/FrogboyMV/TalentBasedTraits",
			blurb: `
				This plugin allows you to grant your actors talent-based traits. You will need
                to also install the FROG_TalentCore plugin to utilize this functionality. What
                this means is that as your players build up their actor’s Traits, your game can
                add new abilities and bonuses to said actors based on their talent level. This is
                useful for creating RPG systems that allow the player to customize their characters
                however they want as opposed to everything being determined by the character’s class.
			`,
			image: "img/taltraits.jpg"
		},
		{
			name: "Race Core",
			link: "https://github.com/FrogboyMV/RaceCore",
			blurb: `
				RPG Maker MV doesn’t have official support for races like other games such as
				Dungeons & Dragons and Pathfinder RPG. Well, I’m here to fix that. Races have
				been a part of RPGs since the beginning and a good solid core is needed to not
				only create this feature but to extend its capabilities in the future.
			`,
			image: "img/races.jpg"
		},
		{
			name: "Level-based Traits",
			link: "https://github.com/FrogboyMV/LevelBasedTraits",
			blurb: `
				Anything you can do with Traits, you can do with these plugins except that now you
				can have those traits kick in and/or expire based on the level of the actor.  This
				includes things like elemental resistance, additional weapon and armor proficiency,
				skills/spells, double gold, resist status ailments, poison attack etc.  The Race
				version of this plugin extends the functionality of Race Core and allows you to grant
				your races Traits based on their character's level.
			`,
			image: "img/party.png"
		},
		{
			name: "Signature Skills",
			link: "https://github.com/FrogboyMV/SignatureSkill",
			blurb: `
				Locke had Steal. Edgar had those cool Tools. Setzer had the very memorable random Slot
				Machine thing. Signature Skills is where it's at. This plugin will give you that classic Final
				Fantasy battle menu by allowing you to assign Signature Skills, replace Attack, Gaurd or
				Items, add in extra commands and even adds in support for a TP-based Limit Break system
				and a way for you to upgrade Signature Skills through equipment and items.
			`,
			image: "img/witch.jpg"
		},
		{
			name: "Trigger Distance",
			link: "https://github.com/FrogboyMV/TriggerDistance",
			blurb: `
				This plugin allows you to set up Player Touch activation that covers an area or line of
				tiles around it. It is mainly used to avoid duplicating the same Event multiple times in
				order to cover more than one square. By specifying your parameters in a comment on an Event
				page, the Player Touch Trigger can be fired when your Player is at a specified distance from
			 	the Event and/or on a certain axis. I've also added functionality to list specific modes of
				travel that will trigger an event. Now you can fly your airship to a floating island.
			`,
			image: "img/airship.jpg"
		},
		/*{
			name: "Blue Magic",
			link: "https://github.com/FrogboyMV/BlueMagic",
			blurb: `
				This plugin enables a Blue Mage type ability where certain classes can learn
				skills from the monsters they fight. Unlike the normal implementation of Blue
				Magic, this version doesn't require that the learner be targeted with the skill
				in question. All they have to do is be present when the skill is used in battle
				and they will learn it. This allows your Blue Mage to learn passive skills like
				heals and buffs.
			`,
			image: "img/blue_magic.jpg"
		},*/
		{
			name: "Miscellaneous Plugins",
			link: "https://github.com/FrogboyMV/MiscPlugins",
			blurb: `
				A series of small, miscellaneous plugins for RPG Maker MV. These plugins are typically
				just installed and change a single aspect of a game.  Because they just make minor
				changes and don't require any explanation on how to use them, they don't really need
				to have their own spotlight and lumped into the miscellaneous section.
			`,
			image: "img/cat.png"
		}
	];

	// Build Page
	var main = document.getElementById("main");

	for (var i in data) {
		var d = data[i];
		var html = `
			<div class="plugin">
				<div class="plugin__image" style="background: url('${d.image}') no-repeat; background-size: cover; background-position: center;">

				</div>
				<div class="plugin__content">
					<a href="${d.link}">${d.name}</a>
					<div class="plugin__blurb">
						${d.blurb}
					</div>
				</div>
			</plugin>
		`;

		main.innerHTML += html;
	}

    // Load background image
    //document.getElementsByTagName("body")[0].style.background = "black url('./img/planet.jpg') no-repeat center center fixed";
}

function openCredits() {
    window.download.style.display = "none";
    window.overlay.style.display = "block";
    window.credits.style.display = "block";
}

function openDownload() {
    window.credits.style.display = "none";
    window.overlay.style.display = "block";
    window.download.style.display = "block";
}
