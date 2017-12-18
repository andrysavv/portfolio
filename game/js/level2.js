var Level2 = {
	text: null,
	otmazka: null,
	run: null,
	res:undefined,
	timer:null,
	bg:null,
	preload: function () {
		game.load.image("bedroom", "img/bedroom.jpg")
	},
	create: function () {
		this.bg=game.add.image(0, 0,"bedroom")
		this.bg.scale.setTo(0.7,0.9)
		this.text = game.add.text(250, 40, "Ты проснулся, опоздал в школу. Что будешь делать?", {
			font: "50px Arial",
			fill: "rgba(255, 255, 255, 0.82)",
			align: "center",
			wordWrap: true,
			wordWrapWidth: 800,
		});
		this.otmazka = game.add.text(50, 450, "Придумаешь отмазку.", {
			font: "50px Arial",
			fill: "rgba(255, 255, 255, 0.82)",
			align: "center",
			wordWrap: true,
			wordWrapWidth: 800,
		});
		this.run = game.add.text(50, 550, "Будешь бежать в школу.", {
			font: "50px Arial",
			fill: "rgba(255, 255, 255, 0.82)",
			align: "center",
			wordWrap: true,
			wordWrapWidth: 800,
		});
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.physics.arcade.enable([this.otmazka, this.run, this.text]);
		this.run.inputEnabled =true;
		this.otmazka.inputEnabled=true;
		
		this.otmazka.events.onInputDown.add(this.resf, this);
		this.run.events.onInputDown.add(this.rest, this);
		
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	},
	update: function () {
	},
	resf: function () {
		this.text.body.velocity.y = -800;
		this.otmazka.body.velocity.y = -800;
		this.run.body.velocity.y = -800;
		game.time.events.add(Phaser.Timer.SECOND * 1, this.nextlev, this);
	},
	rest: function () {
		overslept++;
		this.text.body.velocity.y = -800;
		this.otmazka.body.velocity.y = -800;
		this.run.body.velocity.y = -800;
		game.time.events.add(Phaser.Timer.SECOND * 1, this.nextlev1, this);
	},
	nextlev: function(){game.state.start("lev3")},
	nextlev1: function(){game.state.start("lev4")}
};
