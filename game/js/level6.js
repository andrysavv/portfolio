var Level6 = {
	text: null,
	answer1: null,
	answer2: null,
	wron:null,
	righ:null,
	time:null,
	a:null,
    bg:null,
	preload: function () {
		game.load.image("classroom","img/classroom.jpg");
    },
	create: function () {
		game.stage.backgroundColor = "#4f9ba2";
        this.bg=game.add.image(0, 0,"classroom");
        this.bg.scale.setTo(1.7,1.7);
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.text = game.add.text(300, 40, "89*3=?", {
			font: "60px Arial",
			fill: "rgba(255, 255, 255, 0.82)",
			align: "center",
			wordWrap: true,
			wordWrapWidth: 800,
		});
		this.answer1 = game.add.text(300, 450, "267", {
			font: "60px Arial",
			fill: "rgba(255, 255, 255, 0.82)",
			align: "center",
			wordWrap: true,
			wordWrapWidth: 800,
		});
		this.answer2 = game.add.text(300, 550, "263", {
			font: "60px Arial",
			fill: "rgba(255, 255, 255, 0.82)",
			align: "center",
			wordWrap: true,
			wordWrapWidth: 800,
		});
		this.a =game.time.events.add(Phaser.Timer.SECOND * 5, this.resf, this);
		console.log(this.a)
		this.time = game.add.text(900, 0, "error", {
			font: "60px Arial",
			fill: "rgb(0, 0, 0)",
			align: "center",
			wordWrap: true,
			wordWrapWidth: 800,
		});
		this.answer1.inputEnabled = true;
		this.answer2.inputEnabled = true;
		this.answer1.events.onInputDown.add(this.resf, this);
		this.answer2.events.onInputDown.add(this.rest, this);
		
	},
	update: function () {
		this.time.text = game.time.events.duration/1000;
	},
	nextlevel: function () {
		overslept++;
		game.state.start("lev7")
	},
	resf:function(){
		game.state.start("lev7");
	},
	rest:function(){
		overslept++;
		game.state.start("lev7");
	},

};
