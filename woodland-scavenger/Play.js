gameObj.Play = function (game) {};

gameObj.Play.prototype = {
  create: function () {
    console.log('State - Play');
	var spBackground = this.add.sprite(this.world.centerX, this.world.centerY, 'game-background');
	{ spBackground.anchor.setTo(0.5, 0.5);

    var spHealth = this.add.sprite(25, 20, 'health');
    var spHealth = this.add.sprite(25, 65, 'score-icon');

    var spPlayer = this.add.sprite(50, 450, 'player');
    var spBeetle = this.add.sprite(600, 480, 'beetle');
    var spSnake = this.add.sprite(800, 550, 'snake');
    var spBird = this.add.sprite(780, 20, 'bird');

    var spGrass1 = this.add.sprite(300, 550, 'grass');
    var spGrass2 = this.add.sprite(770, 580, 'grass');
    var spGrass3 = this.add.sprite(600, 400, 'grass');

	var btWin = this.add.button(10, 600, 'winButton', this.winnerFun, this, 1, 0, 2);
	var btLose = this.add.button(90, 600, 'loseButton', this.loserFun, this, 1, 0, 2);}
	
	var scoreStr = '1200';
    var timeStr = '2:00';

    var txScore = this.add.text(67, 64, scoreStr);
    var txTime = this.add.text(875, 20, timeStr);

    txScore.fill = 'white';
    txScore.font = 'Lato';
    txScore.fontSize = 26;

    txTime.fill = 'white';
    txTime.font = 'Lato';
    txTime.fontSize = 26;
	},

	winnerFun: function () {
		this.state.start('Win');
	},

	loserFun: function () {
		this.state.start('Lose');
	}
};
