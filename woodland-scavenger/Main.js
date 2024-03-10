gameObj.Main = function (game) {};

gameObj.Main.prototype = {
    create: function () {
        console.log('State - Main');

        var spBackground = this.add.sprite(this.world.centerX, this.world.centerY, 'intro-background');
        spBackground.anchor.setTo(0.5, 0.5);
        var btPlay = this.add.button(180, 410, 'playButton', this.actionOnClick, this, 1, 0, 2);
        var bthelp = this.add.button(800, 650, 'helpButton', this.helpOnClick, this, 1, 0, 2);
    },

    actionOnClick: function () {
    	this.state.start('Play');
    },
    helpOnClick: function () {
        this.state.start('Help');
    }
};
