var Level5 = {
	text: null,
     bg:null,
	preload: function () {
         game.load.image("classroom","img/classroom.jpg")
    },
	create: function () {
		game.stage.backgroundColor = "#4f9ba2";
		this.bg=game.add.image(0, 0,"classroom")
        this.bg.scale.setTo(1.7,1.7);
		game.stage.backgroundColor = "#ccfbff";
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.text = game.add.text(300, 400, "Начать контрольную", {
			font: "60px Arial",
			fill: "rgba(255, 255, 255, 0.82)",
			align: "center",
			wordWrap: true,
			wordWrapWidth: 800,
		});
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.physics.arcade.enable([this.text]);
		this.text.inputEnabled = true;
		this.text.events.onInputDown.add(this.resf, this);
	},
	update: function () {},
	resf: function () {
		this.nextlev();
	},
	nextlev: function () {
		game.state.start("lev6");
	}
};
