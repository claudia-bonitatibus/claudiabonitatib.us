var gameObj = {
  // Global variables are decleared here!
  gScore: 0,
  gTime: "02:00",
  gHealth: 5
};

gameObj.Boot = function (game) {};

gameObj.Boot.prototype = {
  preload: function () {
    console.log("State - Boot");
    this.load.image('preloaderBg', 'assets/loading-bg.png'); // Replace game. with this.
    this.load.image('preloaderBar', 'assets/loading-bar.png');
  },
  create: function () {
    this.state.start('Preloader');
  }
};
