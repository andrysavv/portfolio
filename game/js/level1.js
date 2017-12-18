var Level1 = {
	start: null,
	text: null,
	preload: function () {
		game.load.image("start", "img/start.png");
	},
	create: function () {
		game.stage.backgroundColor = "#ccfbff";
		this.start = game.add.sprite(370, 450, "start");
		this.start.scale.setTo(1.5, 1.5);
		this.start.inputEnabled = true;
		this.start.events.onInputDown.add(this.nextFunc, this);
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.text = game.add.text(game.world.centerX, game.world.centerY, "Ты играешь за школьника\n- троешника,\n твоя цель - \nзаконичть четверть\n на хорошую оценку");
		this.text.anchor.setTo(0.5);
		this.text.align = 'center';
		this.text.font = 'Arial';
		this.text.fontSize = 50;
	},

	update: function () {

	},
	nextFunc: function () {
		game.state.start("lev2");
	}
};
