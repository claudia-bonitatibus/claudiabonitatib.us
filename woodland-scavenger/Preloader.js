gameObj.Preloader = function (game) {};

gameObj.Preloader.prototype = {
  preload: function () {
    console.log("State - Preloader");
    this.stage.backgroundColor='#333';

    // Progres bar animation
    this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    this.preloadBg = this.add. sprite((960-297)/2, (720-145)/2, 'preloaderBg');
    this.preloadBar = this.add. sprite((960-158)/2, (720-50)/2, 'preloaderBar');
    this.load.setPreloadSprite(this.preloadBar);

    this.load.image('intro-background', 'assets/intro-background.png');
    this.load.spritesheet('playButton', 'assets/intro-play.png', 245, 235);
    this.load.spritesheet('helpButton', 'assets/help-button.png', 135, 42);
    
    this.load.image('game-background', 'assets/game-background.png');
    this.load.image('player', 'assets/player.png');
    this.load.image('beetle', 'assets/beetle.png');
    this.load.image('bird', 'assets/bird.png');
    this.load.image('snake', 'assets/snake.png');
    this.load.image('score-icon', 'assets/score-icon.png');
    this.load.image('health', 'assets/lifeline.png');
    this.load.image('grass', 'assets/grass.png');

    this.load.image('help-background', 'assets/help-background.png');
    this.load.spritesheet('help-playButton', 'assets/help-play.png',245, 235);

    this.load.spritesheet('winButton', 'assets/btn_win.png', 70, 70);
    this.load.spritesheet('loseButton', 'assets/btn_lose.png', 70, 70);
    this.load.spritesheet('pointsButton', 'assets/btn_points.png', 70, 70);

    this.load.image('win-background', 'assets/win-background.png');
    this.load.image('boncl', 'assets/win-mascot.png');
    this.load.spritesheet('win-playButton', 'assets/win-play.png', 250, 90);

    this.load.image('lose-background', 'assets/lose-background.png');
    this.load.spritesheet('lose-playButton', 'assets/lose-play.png', 245, 235);

    this.load.audio('beetlePoints', 'assets/collide-beetle.wav');

   this.load.audio('winEffect', 'assets/win-effect.wav');

   this.load.audio('loseHealth', 'assets/collide-predator.mp3');
   
   this.load.audio('loseEffect', 'assets/lose-effect.wav');
  },
  create: function () {
  	this.state.start('Main');
  }
};
