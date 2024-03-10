gameObj.Lose = function (game) {};

gameObj.Lose.prototype = {
  create: function () {
    console.log('State - Lose');
    var spBackground = this.add.sprite(this.world.centerX, this.world.centerY, 'lose-background');
	spBackground.anchor.setTo(0.5, 0.5);
	var btPlay = this.add.button(180, 410, 'lose-playButton', this.actionOnClick, this, 1, 0, 2);

	var loseStr = 'OH NO! YOU’VE BEEN CAUGHT! ';
	var txLose = this.add.text(530, 305, loseStr);
	txLose.fill = '#323232';
	txLose.alpha = .80;
	txLose.anchor.setTo(0.5,0.5);
	txLose.fontSize = 36;
	txLose.font = 'Caveat Brush';
	txLose.rotation = .17;

	var scoreStr = '1200 POINTS';
	var txScore = this.add.text(530, 355, scoreStr);
	txScore.fill = '#323232';
	txScore.alpha = .80;
	txScore.anchor.setTo(0.5,0.5);
	txScore.fontSize = 44;
	txScore.font = 'Caveat Brush';
	txScore.rotation = .17;

	var timeStr = 'FINAL TIME 2:00';
	var txTime = this.add.text(530, 405, timeStr);
	txTime.fill = '#323232';
	txTime.alpha = .80;
	txTime.anchor.setTo(0.5,0.5);
	txTime.fontSize = 44;
	txTime.font = 'Caveat Brush';
	txTime.rotation = .17;
	},
	actionOnClick: function () {
		this.state.start('Play');
	}
};
