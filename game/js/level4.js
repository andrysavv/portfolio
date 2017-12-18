var Level4 = {
	text: null,
	ok: null,
	res: undefined,
	timer: null,
    bg:null,
	preload: function () {
 game.load.image("classroom","img/classroom.jpg")
    },
	create: function () {
		game.stage.backgroundColor = "#4f9ba2";
        this.bg=game.add.image(0, 0,"classroom")
        this.bg.scale.setTo(1.7,1.7);
		game.stage.backgroundColor = "#ccfbff";
		this.text = game.add.text(250, 40, "Ты совсем немного опоздал, но зато ты успел на объяснение контрольной, все не так плохо", {
			font: "50px Arial",
			fill: "rgba(255, 255, 255, 0.82)",
			align: "center",
			wordWrap: true,
			wordWrapWidth: 800,
		});
		this.ok = game.add.text(50, 450, "ок", {
			font: "50px Arial",
			fill: "rgba(255, 255, 255, 0.82)",
			align: "center",
			wordWrap: true,
			wordWrapWidth: 800,
		});
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.physics.arcade.enable([this.ok, this.text]);
		this.ok.inputEnabled = true;
		this.ok.events.onInputDown.add(this.resf, this);
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	},
	update: function () {},
	resf: function () {
		this.text.body.velocity.y = -800;
		this.ok.body.velocity.y = -800;
		game.time.events.add(Phaser.Timer.SECOND * 1, this.nextlev, this);
	},
	nextlev: function () {
		game.state.start("lev5");
	}
};