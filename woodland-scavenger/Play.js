gameObj.Play = function (game) {
    // make local vars for all functions in this file
    var txScore; // Display text score
    var txTime;
    var txHealth;
    var timerObj; // Timer object
    var timerSeconds; // Timer count down

    var spPlayer;
    var speedNum;
    var spBeetle;

    var timerBirdObj; // Bird object
    var timerSnakeObj; // Snake object
    var timerBeetleObj; // Beetle object
    var spBird;
    var spSnake;

    var pointsMusic;
    var loseHealthMusic;
    var loseEffectMusic;
    var winEffectMusic;
};

gameObj.Play.prototype = {
  create: function () {
    this.physics.startSystem(Phaser.Physics.ARCADE);

    console.log('State - Play');
	var spBackground = this.add.sprite(this.world.centerX, this.world.centerY, 'game-background');
	{ spBackground.anchor.setTo(0.5, 0.5);

    var spHealth = this.add.sprite(25, 20, 'health');
    var spHealth = this.add.sprite(25, 65, 'score-icon');

    
    
    var spGrass1 = this.add.sprite(300, 550, 'grass');
    var spGrass2 = this.add.sprite(770, 580, 'grass');
    var spGrass3 = this.add.sprite(600, 400, 'grass');

    spPlayer = this.add.sprite(50, 450, 'player');

    ////////////////////////////
    /////// SHOOT BIRDS ////////
    ////////////////////////////
    this.SHOT_DELAY = 100; // milliseconds (10 bullets/second)
    this.BULLET_SPEED = 100; // pixels/second
    this.NUMBER_OF_BULLETS = 1;

    // Create an object representing our gun
    this.gun = this.game.add.sprite(1020, this.rnd.integerInRange(0, 100), 'bird');

    // Set the pivot point to the center of the gun
    this.gun.anchor.setTo(0.5, 0.5);

    // Create an object pool of bullets
    this.birdPool = this.game.add.group();
    for(var i = 0; i < this.NUMBER_OF_BULLETS; i++) {
        // Create each bullet and add it to the group.
        spBird = this.game.add.sprite(0, 0, 'bird');
        this.birdPool.add(spBird);

        // Set its pivot point to the center of the bullet
        spBird.anchor.setTo(0.5, 0.5);

        // Enable physics on the bullet
        this.game.physics.enable(spBird, Phaser.Physics.ARCADE);

        // Set its initial state to "dead".
        spBird.kill();

        timerBirdObj = this.game.time.create(false);
        // Set timer to occur every one second
        timerBirdObj.loop(9000, this.enterBird, this);
        // Start timer
        timerBirdObj.start();
    }
    

    ////////////////////////////
    /////// SHOOT SNAKES ///////
    ////////////////////////////
    this.SHOT_DELAY = 100; // milliseconds (10 bullets/second)
    this.BULLET_SPEED = 100; // pixels/second
    this.NUMBER_OF_BULLETS = 1;

    // Create an object representing our gun
    this.snakeGun = this.game.add.sprite(1020, this.rnd.integerInRange(500, 700), 'snake');

    // Set the pivot point to the center of the gun
    this.snakeGun.anchor.setTo(0.5, 0.5);

    // Create an object pool of bullets
    this.snakePool = this.game.add.group();
    for(var i = 0; i < this.NUMBER_OF_BULLETS; i++) {
        // Create each bullet and add it to the group.
        spSnake = this.game.add.sprite(0, 0, 'snake');
        this.snakePool.add(spSnake);

        // Set its pivot point to the center of the bullet
        spSnake.anchor.setTo(0.5, 0.5);

        // Enable physics on the bullet
        this.game.physics.enable(spSnake, Phaser.Physics.ARCADE);

        // Set its initial state to "dead".
        spSnake.kill();

        timerSnakeObj = this.game.time.create(false);
        // Set timer to occur every one second
        timerSnakeObj.loop(14000, this.enterSnake, this);
        // Start timer
        timerSnakeObj.start();
    }

    ////////////////////////////
    ////// CREATE BEETLES //////
    ////////////////////////////

    // Create an object representing our gun
    this.beetleCreator = this.game.add.sprite(1000, this.rnd.integerInRange(400, 700), 'beetle');

    // Set the pivot point to the center of the gun
    this.beetleCreator.anchor.setTo(0.5, 0.5);

    // Create an object pool of bullets
    this.beetlePool = this.game.add.group();
    for(var i = 0; i < this.NUMBER_OF_BULLETS; i++) {
        // Create each bullet and add it to the group.
        spBeetle = this.game.add.sprite(0, 0, 'beetle');
        this.beetlePool.add(spBeetle);

        // Set its pivot point to the center of the bullet
        spBeetle.anchor.setTo(0.5, 0.5);



        timerBeetleObj = this.game.time.create(false);
        // Set timer to occur every one second
        timerBeetleObj.loop(7000, this.spawnBeetle, this);
        // Start timer
        timerBeetleObj.start();
    }

    ////////////////////////////
    ////// CREATE GRAVITY //////
    ////////////////////////////
    this.physics.arcade.enable(spPlayer, Phaser.Physics.ARCADE);

    this.physics.arcade.gravity.y = 50;
    spPlayer.body.bounce.y = 0.5;
    spPlayer.body.collideWorldBounds = true;

    //  Here we add a new animation called 'walk'
    //  Because we didn't give any other parameters it's going to make an animation from all available frames in the 'mummy' sprite sheet
    var walk = spPlayer.animations.add('walk');
    //  And this starts the animation playing by using its key ("walk")
    //  30 is the frame rate (30fps)
    //  true means it will loop when it finishes
    spPlayer.animations.play('walk', 30, true);

    speedNum = 4;
	var btWin = this.add.button(10, 600, 'winButton', this.winnerFun, this, 1, 0, 2);
	var btLose = this.add.button(90, 600, 'loseButton', this.loserFun, this, 1, 0, 2);}
	
	var pointsButton = this.add.button(170, 600, 'pointsButton', this.pointsFun, this, 1, 0, 2);

    gameObj.gScore = 0;// Reset to beginning score
    gameObj.gTime = '02:00';
    gameObj.gHealth = 5;

    var scoreStr = '0';
    var timeStr = '02:00';
    var healthStr= '5';

    txScore = this.add.text(67, 64, scoreStr);
    txTime = this.add.text(875, 20, timeStr);
    txHealth = this.add.text(67, 20, healthStr);

    txScore.fill = 'white';
    txScore.font = 'Lato';
    txScore.fontSize = 26;

    txTime.fill = 'white';
    txTime.font = 'Lato';
    txTime.fontSize = 26;

    txHealth.fill = 'white';
    txHealth.font = 'Lato';
    txHealth.fontSize = 26;
	
    ////////////////////////////
    /////// COUNTDOWN //////////
    ////////////////////////////
    timerSeconds = 120;
    timerObj = this.game.time.create(false);
    // Set timer to occur every one second
    timerObj.loop(1000, this.updateTimerFun, this);
    // Start timer
    timerObj.start();
    

},

    enterBird: function() {
        // Enforce a short delay between shots by recording
        // the time that each bullet is shot and testing if
        // the amount of time since the last shot is more than
        // the required delay.
        if (this.lastBulletShotAt === undefined) this.lastBulletShotAt = 0;
        if (this.game.time.now - this.lastBulletShotAt < this.SHOT_DELAY) return;
        this.lastBulletShotAt = this.game.time.now;

        // Get a dead bullet from the pool
        spBird = this.birdPool.getFirstDead();

        // If there aren't any bullets available then don't shoot
        if (spBird === null || spBird === undefined) return;

        // Revive the bullet
        // This makes the bullet "alive"
        spBird.revive();

        // Bullets should kill themselves when they leave the world.
        // Phaser takes care of this for me by setting this flag
        // but you can do it yourself by killing the bullet if
        // its x,y coordinates are outside of the world.
        spBird.checkWorldBounds = true;
        spBird.outOfBoundsKill = true;

        // Set the bullet position to the gun position.
        spBird.reset(this.gun.x, this.gun.y);

        // Shoot it
        spBird.body.velocity.x = -this.BULLET_SPEED*4;
        spBird.body.velocity.y = this.BULLET_SPEED*.5;
    },

    enterSnake: function() {
        // Enforce a short delay between shots by recording
        // the time that each bullet is shot and testing if
        // the amount of time since the last shot is more than
        // the required delay.
        if (this.lastBulletShotAt === undefined) this.lastBulletShotAt = 0;
        if (this.game.time.now - this.lastBulletShotAt < this.SHOT_DELAY) return;
        this.lastBulletShotAt = this.game.time.now;

        // Get a dead bullet from the pool
        spSnake = this.snakePool.getFirstDead();

        // If there aren't any bullets available then don't shoot
        if (spSnake === null || spSnake === undefined) return;

        // Revive the bullet
        // This makes the bullet "alive"
        spSnake.revive();

        // Bullets should kill themselves when they leave the world.
        // Phaser takes care of this for me by setting this flag
        // but you can do it yourself by killing the bullet if
        // its x,y coordinates are outside of the world.
        spSnake.checkWorldBounds = true;
        spSnake.outOfBoundsKill = true;

        // Set the bullet position to the gun position.
        spSnake.reset(this.snakeGun.x, this.snakeGun.y);

        // Shoot it
        spSnake.body.velocity.x = -this.BULLET_SPEED*2;
        spSnake.body.velocity.y = -this.BULLET_SPEED;
    },

    spawnBeetle: function(){
        
        if (this.lastBulletShotAt === undefined) this.lastBulletShotAt = 0;
        if (this.game.time.now - this.lastBulletShotAt < this.SHOT_DELAY) return;
        this.lastBulletShotAt = this.game.time.now;

        // If there aren't any bullets available then don't shoot
        if (spBeetle === null || spBeetle === undefined) return;

        // Revive the bullet
        // This makes the bullet "alive"
        spBeetle.revive();

        // Set the bullet position to the gun position.
        spBeetle.reset(this.rnd.integerInRange(200, 900), this.rnd.integerInRange(100, 700));
    },

	winnerFun: function () {
		this.state.start('Win');
	},

	loserFun: function () {
    gameObj.gHealth -= 1; // THIS IS HOW TO REFERENCE A GLOBAL VARIABLE OUTSIDE OF BOOT.JS
    txHealth.text = gameObj.gHealth;
    var loseHealthMusic = this.add.audio('loseHealth');
    loseHealthMusic.play();
	},

    pointsFun: function() {
    console.log('pointsFun called');
    gameObj.gScore += 10; // THIS IS HOW TO REFERENCE A GLOBAL VARIABLE OUTSIDE OF BOOT.JS
    txScore.text = gameObj.gScore;
    pointsMusic = this.add.audio('beetlePoints');
    pointsMusic.play();
    },

    updateTimerFun: function(){
        console.log('update timer called');
        timerSeconds --;
        
        if(timerSeconds >= 0){
            var displayMin = Math.floor(timerSeconds/60);
        
            if (displayMin < 10){
                displayMin = '0'+ displayMin;
            }

            var displaySec = timerSeconds % 60;
            if (displaySec < 10){
                displaySec = '0'+ displaySec;
            }
            txTime.text = displayMin + ':' + displaySec;

            gameObj.gTime = txTime.text;
            }

            else { 
                if (gameObj.gScore > 99){
                    this.winnerFun();
                }
                else{
                    this.loserFun();
                }
            }
        },

        update: function(){
        //CORE GAME LOOP (CONSTANTLY BEING CALLED)
        if(this.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            if(spPlayer.x > 2){
                spPlayer.x -= speedNum;
                spPlayer.angle = -5;
            }
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            if(spPlayer.x < 870){
                spPlayer.x += speedNum;
                spPlayer.angle = 15;
            }
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.UP)){
            if(spPlayer.y > 2){
                spPlayer.y -= (speedNum);
                spPlayer.angle = 0;
            }
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            if(spPlayer.y <556){
                spPlayer.y += (speedNum-2);
                spPlayer.angle = 0;
            }
        }
        else{
          spPlayer.angle = 0;
        }

        this.physics.arcade.collide(spPlayer, spBird);
        this.physics.arcade.collide(spPlayer, spSnake);

        if(gameObj.gHealth <= 0 && gameObj.gScore < 100){
            this.state.start('Lose');
            loseEffectMusic = this.add.audio('loseEffect');
            loseEffectMusic.play();
        }
        else if(gameObj.gHealth <= 0 && gameObj.gScore > 100){
            this.state.start('Win');
            winEffectMusic = this.add.audio('winEffect');
            winEffectMusic.play();
        }
        },

      render: function(){
        //CALLED AFTER 'update' APPLY POST-RENDER EFFECTS OR EXTRA DEBUG OVERLAYS 
      }
};
