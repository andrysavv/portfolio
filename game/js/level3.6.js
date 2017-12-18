var Level36 = {
	text: null,
    bg:null,
	preload: function () {
        game.load.image("classroom","img/classroom.jpg")
    },
	create: function () {
		game.stage.backgroundColor = "#4f9ba2";
        this.bg=game.add.image(0, 0,"classroom")
        this.bg.scale.setTo(1.7,1.7);
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.text = game.add.text(250, 370, "Учитель тебе ничего не объяснил, сказал, что это твоя вина", {
			font: "50px Arial",
			fill: "rgba(255, 255, 255, 0.82)",
			align: "center",
			wordWrap: true,
			wordWrapWidth: 800,
		});
		game.time.events.add(Phaser.Timer.SECOND * 2, this.rest, this);
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.physics.arcade.enable([this.text]);


	},
	update: function () {},
	rest: function () {
		this.text.body.velocity.y = -800;
		game.time.events.add(Phaser.Timer.SECOND * 1, this.nextlev, this);
	},
	nextlev: function () {
		game.state.start("lev5")
	}
};
