gameObj.Help = function (game) {};

gameObj.Help.prototype = {
	create: function () {
	console.log('State - Help');
	var spBackground = this.add.sprite(this.world.centerX, this.world.centerY, 'help-background');
	spBackground.anchor.setTo(0.5, 0.5);
	var btPlay = this.add.button(680, 430, 'help-playButton', this.actionOnClick, this, 1, 0, 2);
	},
	actionOnClick: function () {
		this.state.start('Play');
	}
};
