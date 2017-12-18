var Level3 = {
	text: null,
	question1: null,
	question2: null,
	res: undefined,
	timer: null,
    bg:null,
	preload: function () {
        game.load.image("classroom","img/classroom.jpg")
    },
	create: function () {
		game.stage.backgroundColor = "#4f9ba2";
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.bg=game.add.image(0, 0,"classroom")
		this.bg.scale.setTo(1.7,1.7);
		this.text = game.add.text(250, 40, "Твоей отмазке поверили,но ты  опоздал, пока тебя не было учитель проводил подготовку к контрольной. Ты не знаешь что делать.", {
			font: "50px Arial",
			fill: "rgba(255, 255, 255, 0.82)",
			align: "center",
			wordWrap: true,
			wordWrapWidth: 800,
		});
		this.question1 = game.add.text(50, 450, "Спросить у одноклассника", {
			font: "50px Arial",
			fill: "rgba(255, 255, 255, 0.82)",
			align: "center",
			wordWrap: true,
			wordWrapWidth: 800,
		});
		this.question2 = game.add.text(50, 550, "Спросить у учителя", {
			font: "50px Arial",
			fill: "rgba(255, 255, 255, 0.82)",
			align: "center",
			wordWrap: true,
			wordWrapWidth: 800,
		});
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.physics.arcade.enable([this.question1, this.question2, this.text]);
		this.question1.inputEnabled =true;
		this.question2.inputEnabled=true;
		
		this.question1.events.onInputDown.add(this.resf, this);
		this.question2.events.onInputDown.add(this.rest, this);
	},
	update: function () {},
	resf: function () {
		this.text.body.velocity.y = -800;
		this.question1.body.velocity.y = -800;
		this.question2.body.velocity.y = -800;
		game.time.events.add(Phaser.Timer.SECOND * 1, this.nextlev, this);
	},
	rest: function () {
		overslept++;
		this.text.body.velocity.y = -800;
		this.question1.body.velocity.y = -800;
		this.question2.body.velocity.y = -800;
		game.time.events.add(Phaser.Timer.SECOND * 1, this.nextlev1, this);
	},
	nextlev: function(){game.state.start("lev3.5")},
	nextlev1: function(){game.state.start("lev3.6")}
};
