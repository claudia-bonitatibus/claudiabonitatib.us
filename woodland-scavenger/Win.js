gameObj.Win = function (game) {};

gameObj.Win.prototype = {
  create: function () {
    console.log('State - Win');
    var spBackground = this.add.sprite(this.world.centerX, this.world.centerY, 'win-background');
	spBackground.anchor.setTo(0.5, 0.5);
	var spBoncl = this.add.sprite(50, 400, 'boncl'); 
	var btPlay = this.add.button(370, 420, 'win-playButton', this.actionOnClick, this, 1, 0, 2);

	 var scoreStr = '1200 POINTS';
		        var txScore = this.add.text(480, 335, scoreStr);
		        txScore.fill = '#323232';
		        txScore.alpha = .80;
		        txScore.anchor.setTo(0.5,0.5);
		        txScore.fontSize = 44;
		        txScore.font = 'Caveat Brush';

		        var timeStr = 'FINAL TIME  2:00';
		        var txTime = this.add.text(480, 385, timeStr);
		        txTime.fill = '#323232';
		        txTime.alpha = .80;
		        txTime.anchor.setTo(0.5,0.5);
		        txTime.fontSize = 44;
		        txTime.font = 'Caveat Brush';
	},
	actionOnClick: function () {
		this.state.start('Play');
	}
};
