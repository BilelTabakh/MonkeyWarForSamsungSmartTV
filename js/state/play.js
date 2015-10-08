"use strict";
		var music;
		var life = 3;
		var nextFire = 0;
		var fireRate = 100;
		var score =0;
		var Gameover = false;
		var popup = false;
		var popupSprite;
		var flag;
		var scoreText;
		var j =0;
		
window.MonkeyWar.state.play = {
	preload: function(){
		
	this.game.load.image('water', 'assets/aawater3.png');
	this.game.load.image('water1', 'assets/aawater5.png');
	
	/*this.game.load.audio('jumpM', 'assets/audio/jump.mp3');
	this.game.load.audio('bananaM', 'assets/audio/banana.mp3');
	this.game.load.audio('africaM', 'assets/audio/africa.mp3');
	this.game.load.audio('punchM', 'assets/audio/punch.mp3');
	*/
	this.game.load.image('water', 'assets/water1.png');
	this.game.load.image('popup', 'assets/popup.png');
	
	this.game.load.spritesheet('flagWin', 'assets/Flag.png', 67, 70);
	this.game.load.image('Win', 'assets/winner.png');

	},
	
	create: function(){

		//console.log(life);
		//this.cursors = this.game.input.keyboard.createCursorKeys();
		//console.log("started pplay state");
		this.BackGround1 = mt.create('BackGround1');
		//this.water = mt.create('water');
		//this.water1 = mt.create('water1');
		//this.water2 = mt.create('water2');
		//this.water3 = mt.create('water3');
		//this.water4 = mt.create('water4');
		this.game.add.sprite(0, 630, 'water');
		this.game.add.sprite(0, 655, 'water');
		this.game.add.sprite(4036, 630, 'water');
		this.game.add.sprite(4036, 655, 'water');
		this.game.add.sprite(8072, 630, 'water');
		this.game.add.sprite(8072, 655, 'water');
		this.game.add.sprite(8072, 630, 'water');
		this.game.add.sprite(8072, 655, 'water');
		this.game.add.sprite(12108, 630, 'water1');
		this.game.add.sprite(12108, 655, 'water1');

		
		this.Grass = mt.create('Grass');
		this.character = mt.create('character');
		this.Plateforme3 = mt.create('Plateforme3');
		this.Plateforme31 = mt.create('Plateforme31');
		this.BPlateforme32 = mt.create('BPlateforme32');
		this.BPlateforme33 = mt.create('BPlateforme33');
		this.BPlateforme34 = mt.create('BPlateforme34');
		this.BPlateforme35 = mt.create('BPlateforme35');
		
		this.BPlateforme36 = mt.create('BPlateforme36');
		this.BPlateforme37 = mt.create('BPlateforme37');
		this.BPlateforme38 = mt.create('BPlateforme38');
		this.BPlateforme39 = mt.create('BPlateforme39');
		
		this.BPlateforme40 = mt.create('BPlateforme40');
		this.BPlateforme41 = mt.create('BPlateforme41');
		this.BPlateforme43 = mt.create('BPlateforme43');
		this.BPlateforme45 = mt.create('BPlateforme45');
		
		
		this.RedFire1 = mt.create('RedFire1');
		this.RedFire2 = mt.create('RedFire2');
		this.RedFire3 = mt.create('RedFire3');
		this.RedFire4 = mt.create('RedFire4');
		//this.RedFire5 = mt.create('RedFire5');
		this.RedFire6 = mt.create('RedFire6');
		this.RedFire7 = mt.create('RedFire7');
		this.RedFire8 = mt.create('RedFire8');
		this.RedFire9 = mt.create('RedFire9');
		this.RedFire10 = mt.create('RedFire10');
		this.RedFire11 = mt.create('RedFire11');
		this.RedFire12 = mt.create('RedFire12');
		this.RedFire13 = mt.create('RedFire13');
		this.RedFire14 = mt.create('RedFire14');
		this.RedFire15 = mt.create('RedFire15');
		
		//this.vie = mt.create('vie');
		this.heart = mt.create('heart');
		//this.heart1 = mt.create('heart1');
		//this.heart2 = mt.create('heart2');
		
		this.namoussa1 = mt.create('namoussa1');
		this.namoussa6 = mt.create('namoussa6');
		this.namoussa2 = mt.create('namoussa2');
		this.namoussa3 = mt.create('namoussa3');
		//this.namoussa4 = mt.create('namoussa4');
		this.namoussa5 = mt.create('namoussa5');
		//this.namoussa7 = mt.create('namoussa7');
		this.namoussa8 = mt.create('namoussa8');
		this.namoussa9 = mt.create('namoussa9');
		this.namoussa10 = mt.create('namoussa10');
		
		
		this.Coins = mt.create('Coins');
		this.Coins1 = mt.create('Coins1');
		this.Coins2 = mt.create('Coins2');
		this.Coins3 = mt.create('Coins3');
		this.Coins4 = mt.create('Coins4');
		this.Coins5 = mt.create('Coins5');
		this.Coins6 = mt.create('Coins6');
		this.Coins7 = mt.create('Coins7');
		this.Coins8 = mt.create('Coins8');
		this.Coins9 = mt.create('Coins9');
		this.Coins10 = mt.create('Coins10');
		this.Coins11 = mt.create('Coins11');
		this.Coins12 = mt.create('Coins12');
		this.Coins13 = mt.create('Coins13');
		this.Coins14 = mt.create('Coins14');
		
		
		
		this.Score = mt.create('Score');
		//this.Flag = mt.create('Flag');
		this.HelpBar = mt.create('HelpBar');
		
		this.Coins.animations.add('Coins', [0,5,7], 10, false);
		this.Coins1.animations.add('Coins1', [0,5,7], 10, false);
		this.Coins2.animations.add('Coins2', [0,5,7], 10, false);
		this.Coins3.animations.add('Coins3', [0,5,7], 10, false);
		this.Coins4.animations.add('Coins4', [0,5,7], 10, false);
		this.Coins5.animations.add('Coins5', [0,5,7], 10, false);
		this.Coins6.animations.add('Coins6', [0,5,7], 10, false);
		this.Coins7.animations.add('Coins7', [0,5,7], 10, false);
		this.Coins8.animations.add('Coins8', [0,5,7], 10, false);
		this.Coins9.animations.add('Coins9', [0,5,7], 10, false);
		this.Coins10.animations.add('Coins10', [0,5,7], 10, false);
		this.Coins11.animations.add('Coins11', [0,5,7], 10, false);
		this.Coins12.animations.add('Coins12', [0,5,7], 10, false);
		this.Coins13.animations.add('Coins13', [0,5,7], 10, false);
		this.Coins14.animations.add('Coins14', [0,5,7], 10, false);
		
		
		
		this.character.animations.add('rightRun', [1,0,2], 10, false);
		this.character.animations.add('leftRun', [5,4,3], 10, false);
		this.RedFire1.animations.add('burnRed1', [0,1,2], 10, false);
		this.RedFire2.animations.add('burnRed2', [0,1,2], 10, false);
		this.RedFire3.animations.add('burnRed3', [0,1,2], 10, false);
		this.RedFire4.animations.add('burnRed4', [0,1,2], 10, false);
		//this.RedFire5.animations.add('burnRed5', [0,1,2], 10, false);
		this.RedFire6.animations.add('burnRed6', [0,1,2], 10, false);
		this.RedFire7.animations.add('burnRed7', [0,1,2], 10, false);
		this.RedFire8.animations.add('burnRed8', [0,1,2], 10, false);
		this.RedFire9.animations.add('burnRed9', [0,1,2], 10, false);
		this.RedFire10.animations.add('burnRed10', [0,1,2], 10, false);
		this.RedFire11.animations.add('burnRed11', [0,1,2], 10, false);
		this.RedFire12.animations.add('burnRed12', [0,1,2], 10, false);
		this.RedFire13.animations.add('burnRed13', [0,1,2], 10, false);
		this.RedFire14.animations.add('burnRed14', [0,1,2], 10, false);
		this.RedFire15.animations.add('burnRed15', [0,1,2], 10, false);
		
		this.namoussa1.animations.add('namouss1', [0,1], 10, false);
		this.namoussa6.animations.add('namouss6', [0,1], 10, false);
		this.namoussa2.animations.add('namouss2', [0,1], 10, false);
		this.namoussa3.animations.add('namouss3', [0,1], 10, false);
		//this.namoussa4.animations.add('namouss4', [0,1], 10, false);
		this.namoussa5.animations.add('namouss5', [0,1], 10, false);
		//this.namoussa7.animations.add('namouss7', [0,1], 10, false);
		this.namoussa8.animations.add('namouss8', [0,1], 10, false);
		this.namoussa9.animations.add('namouss9', [0,1], 10, false);
		this.namoussa10.animations.add('namouss10', [0,1], 10, false);
		
		//this.Flag.animations.add('Flag', [0,1,2], 10, false);
		

		this.heart.fixedToCamera = true;
		//this.heart1.fixedToCamera = true;
		//this.heart2.fixedToCamera = true;
		this.Score.fixedToCamera = true;
		
		/*music = this.game.add.audio('africaM');
		music.play('',0,1,true);*/
		/*var africa = new Audio('africa.mp3');
		africa.loop = true;
		africa.play();
		*/
		flag = this.game.add.sprite(13289,419, 'flagWin');
		this.game.physics.arcade.enable(flag);
		
		scoreText = this.game.add.text(1080, 40, 'Life : 3', { fontSize: '32px', fill: '#000' });
		scoreText.fixedToCamera = true;
	},
	
	update: function(){
		
		this.game.camera.focusOnXY(this.character.x,this.character.y);
		
		this.game.physics.arcade.collide(this.character, this.Grass.self);
		this.game.physics.arcade.collide(this.character, this.Plateforme3, this.collisionHandler, null, this);
		this.game.physics.arcade.collide(this.character, this.Plateforme31, this.collisionHandler, null, this);
		this.game.physics.arcade.collide(this.character, this.BPlateforme32, this.collisionHandler, null, this);
		this.game.physics.arcade.collide(this.character, this.BPlateforme33, this.collisionHandler, null, this);
		this.game.physics.arcade.collide(this.character, this.BPlateforme34, this.collisionHandler, null, this);
		this.game.physics.arcade.collide(this.character, this.BPlateforme35, this.collisionHandler, null, this);
		
		this.game.physics.arcade.collide(this.character, this.BPlateforme36, this.collisionHandler, null, this);
		this.game.physics.arcade.collide(this.character, this.BPlateforme37, this.collisionHandler, null, this);
		this.game.physics.arcade.collide(this.character, this.BPlateforme38, this.collisionHandler, null, this);
		this.game.physics.arcade.collide(this.character, this.BPlateforme39, this.collisionHandler, null, this);
		
		this.game.physics.arcade.collide(this.character, this.BPlateforme40, this.collisionHandler, null, this);
		this.game.physics.arcade.collide(this.character, this.BPlateforme41, this.collisionHandler, null, this);
		this.game.physics.arcade.collide(this.character, this.BPlateforme43, this.collisionHandler, null, this);
		this.game.physics.arcade.collide(this.character, this.BPlateforme45, this.collisionHandler, null, this);
		
		this.game.physics.arcade.collide(this.character, this.RedFire1, this.collisionHandler1, null, this);
		this.game.physics.arcade.collide(this.character, this.RedFire2, this.collisionHandler1, null, this);
		this.game.physics.arcade.collide(this.character, this.RedFire3, this.collisionHandler1, null, this);
		this.game.physics.arcade.collide(this.character, this.RedFire4, this.collisionHandler1, null, this);
		this.game.physics.arcade.collide(this.character, this.RedFire5, this.collisionHandler1, null, this);
		this.game.physics.arcade.collide(this.character, this.RedFire6, this.collisionHandler1, null, this);
		this.game.physics.arcade.collide(this.character, this.RedFire7, this.collisionHandler1, null, this);
		this.game.physics.arcade.collide(this.character, this.RedFire8, this.collisionHandler1, null, this);
		this.game.physics.arcade.collide(this.character, this.RedFire9, this.collisionHandler1, null, this);
		this.game.physics.arcade.collide(this.character, this.RedFire10, this.collisionHandler1, null, this);
		this.game.physics.arcade.collide(this.character, this.RedFire11, this.collisionHandler1, null, this);
		this.game.physics.arcade.collide(this.character, this.RedFire12, this.collisionHandler1, null, this);
		this.game.physics.arcade.collide(this.character, this.RedFire13, this.collisionHandler1, null, this);
		this.game.physics.arcade.collide(this.character, this.RedFire14, this.collisionHandler1, null, this);
		this.game.physics.arcade.collide(this.character, this.RedFire15, this.collisionHandler1, null, this);
		
		this.game.physics.arcade.collide(this.character, this.namoussa1, this.collisionHandler1, null, this);
		this.game.physics.arcade.collide(this.character, this.namoussa2, this.collisionHandler1, null, this);
		this.game.physics.arcade.collide(this.character, this.namoussa3, this.collisionHandler1, null, this);
		//this.game.physics.arcade.collide(this.character, this.namoussa4, this.collisionHandler1, null, this);
		this.game.physics.arcade.collide(this.character, this.namoussa5, this.collisionHandler1, null, this);
		this.game.physics.arcade.collide(this.character, this.namoussa6, this.collisionHandler1, null, this);
		this.game.physics.arcade.collide(this.character, this.namoussa7, this.collisionHandler1, null, this);
		this.game.physics.arcade.collide(this.character, this.namoussa8, this.collisionHandler1, null, this);
		this.game.physics.arcade.collide(this.character, this.namoussa9, this.collisionHandler1, null, this);
		this.game.physics.arcade.collide(this.character, this.namoussa10, this.collisionHandler1, null, this);
		
		this.game.physics.arcade.overlap(this.character, this.Coins, this.collisionHandler2, null, this);
		this.game.physics.arcade.overlap(this.character, this.Coins1, this.collisionHandler2, null, this);
		this.game.physics.arcade.overlap(this.character, this.Coins2, this.collisionHandler2, null, this);
		this.game.physics.arcade.overlap(this.character, this.Coins3, this.collisionHandler2, null, this);
		this.game.physics.arcade.overlap(this.character, this.Coins4, this.collisionHandler2, null, this);
		this.game.physics.arcade.overlap(this.character, this.Coins5, this.collisionHandler2, null, this);
		this.game.physics.arcade.overlap(this.character, this.Coins6, this.collisionHandler2, null, this);
		this.game.physics.arcade.overlap(this.character, this.Coins7, this.collisionHandler2, null, this);
		this.game.physics.arcade.overlap(this.character, this.Coins8, this.collisionHandler2, null, this);
		this.game.physics.arcade.overlap(this.character, this.Coins9, this.collisionHandler2, null, this);
		this.game.physics.arcade.overlap(this.character, this.Coins10, this.collisionHandler2, null, this);
		this.game.physics.arcade.overlap(this.character, this.Coins11, this.collisionHandler2, null, this);
		this.game.physics.arcade.overlap(this.character, this.Coins12, this.collisionHandler2, null, this);
		this.game.physics.arcade.overlap(this.character, this.Coins13, this.collisionHandler2, null, this);
		this.game.physics.arcade.overlap(this.character, this.Coins14, this.collisionHandler2, null, this);
		
		this.game.physics.arcade.collide(this.character, flag, this.collisionHandler3, null, this);
		if( j==1 && popup == false){
			this.popupSprite = this.game.add.sprite(this.character.x, 320, 'popup');
			popup = true;
		}
		
		if( j == 2){
			this.popupSprite.destroy();
			popup = false;
		}
		if(i == 1){
			this.character.body.velocity.x = -180;

			this.character.animations.play('leftRun');
		}else if(i == 2){
			this.character.body.velocity.x = 180;

			this.character.animations.play('rightRun');
		}else{
			this.character.body.velocity.x = 0;

		}
		if(popup){
			this.character.body.velocity.x = 0;
			this.character.body.velocity.y = 0;
		}
		
		if(i == 3 && this.character.body.touching.down){	
			this.character.body.velocity.y = -580;
			/*music = this.game.add.audio('jumpM');
			music.play();*/
			var jump = new Audio('jump.mp3');
			jump.loop = false;
			jump.play();
		}
		
		if(this.Plateforme3.body.x >= 550){
		 this.Plateforme3.body.velocity.x = -150;
		}
		if(this.Plateforme3.body.x<=300){
		this.Plateforme3.body.velocity.x = 150;
		}
		
		if(this.Plateforme31.body.y >= 600){
		 this.Plateforme31.body.velocity.y = -150;
		}
		if(this.Plateforme31.body.y<=250){
		this.Plateforme31.body.velocity.y = 150;
		}
		
		if(this.BPlateforme32.body.y >= 600){
		 this.BPlateforme32.body.velocity.y = -150;
		}
		if(this.BPlateforme32.body.y<=120){
		this.BPlateforme32.body.velocity.y = 150;
		}
		
		if(this.BPlateforme33.body.y >= 600){
		 this.BPlateforme33.body.velocity.y = -250;
		}
		if(this.BPlateforme33.body.y<=120){
		this.BPlateforme33.body.velocity.y = 250;
		}
		
		if(this.BPlateforme34.body.y >= 600){
		 this.BPlateforme34.body.velocity.y = -200;
		}
		if(this.BPlateforme34.body.y<=120){
		this.BPlateforme34.body.velocity.y = 200;
		}
		
		if(this.BPlateforme35.body.x >= 5200){
		 this.BPlateforme35.body.velocity.x = -350;
		}
		if(this.BPlateforme35.body.x<=4360){
		this.BPlateforme35.body.velocity.x = 350;
		}
		if(this.BPlateforme36.body.y >= 550){
		 this.BPlateforme36.body.velocity.y = -350;
		}
		if(this.BPlateforme36.body.y<=150){
		this.BPlateforme36.body.velocity.y = 350;
		}
		if(this.BPlateforme37.body.y >=450){
		 this.BPlateforme37.body.velocity.y = -350;
		}
		if(this.BPlateforme37.body.y<=300){
		this.BPlateforme37.body.velocity.y = 350;
		}
				if(this.BPlateforme38.body.y >= 550){
		 this.BPlateforme38.body.velocity.y = -350;
		}
		if(this.BPlateforme38.body.y<=150){
		this.BPlateforme38.body.velocity.y = 350;
		}
		if(this.BPlateforme39.body.y >= 450){
		 this.BPlateforme39.body.velocity.y = -350;
		}
		if(this.BPlateforme39.body.y<=300){
		this.BPlateforme39.body.velocity.y = 350;
		}
		
		if(this.BPlateforme40.body.x >= 7850){
		 this.BPlateforme40.body.velocity.x = -350;
		}
		if(this.BPlateforme40.body.x<=7000){
		this.BPlateforme40.body.velocity.x = 350;
		}
		
		
		if(this.BPlateforme41.body.y >= 600){
		 this.BPlateforme41.body.velocity.y = -300;
		}
		if(this.BPlateforme41.body.y<=380){
		this.BPlateforme41.body.velocity.y = 300;
		}
		
		if(this.BPlateforme43.body.y >= 600){
		 this.BPlateforme43.body.velocity.y = -300;
		}
		if(this.BPlateforme43.body.y<=180){
		this.BPlateforme43.body.velocity.y = 300;
		}
		
		if(this.BPlateforme45.body.x >= 12900){
		 this.BPlateforme45.body.velocity.x = -100;
		}
		if(this.BPlateforme45.body.x<=12620){
		this.BPlateforme45.body.velocity.x = 100;
		}
		
		if(this.namoussa1.body.x >= 510){
		 this.namoussa1.body.velocity.x = -100;
		}
		if(this.namoussa1.body.x<=330){
		this.namoussa1.body.velocity.x = 100;
		}
		
		if(this.namoussa10.body.x >= 925){
		 this.namoussa10.body.velocity.x = -100;
		}
		if(this.namoussa10.body.x<=725){
		this.namoussa10.body.velocity.x = 100;
		}
		
				
		if(this.namoussa2.body.x >= 1400){
		 this.namoussa2.body.velocity.x = -100;
		}
		if(this.namoussa2.body.x<=1300){
		this.namoussa2.body.velocity.x = 100;
		}
		
		if(this.namoussa3.body.x >= 2250){
		 this.namoussa3.body.velocity.x = -100;
		}
		if(this.namoussa3.body.x<=2100){
		this.namoussa3.body.velocity.x = 100;
		}
		
		/*if(this.namoussa4.body.x >= 3200){
		 this.namoussa4.body.velocity.x = -100;
		}
		if(this.namoussa4.body.x<=3000){
		this.namoussa4.body.velocity.x = 100;
		}*/
		
		if(this.namoussa5.body.x >= 5400){
		 this.namoussa5.body.velocity.x = -100;
		}
		if(this.namoussa5.body.x<=5250){
		this.namoussa5.body.velocity.x = 100;
		}
		
		if(this.namoussa6.body.x >= 5700){
		 this.namoussa6.body.velocity.x = -100;
		}
		if(this.namoussa6.body.x<=5650){
		this.namoussa6.body.velocity.x = 100;
		}
		
				
		if(this.namoussa8.body.y >= 550){
		 this.namoussa8.body.velocity.y = -100;
		}
		if(this.namoussa8.body.y<=350){
		this.namoussa8.body.velocity.y = 100;
		}
		
		if(this.character.y>=635){
			this.GameOver = mt.create("GameOver");
			Gameover = true;
			this.GameOver.x = this.character.x;
			this.GameOver.y = 360;
			this.character.destroy();
		}
		
		this.HelpBar.body.x = this.character.body.x;
		this.HelpBar.body.y = 575;
		
		this.RedFire1.animations.play('burnRed1');
		this.RedFire2.animations.play('burnRed2');
		this.RedFire3.animations.play('burnRed3');
		this.RedFire4.animations.play('burnRed4');
		//this.RedFire5.animations.play('burnRed5');
		this.RedFire6.animations.play('burnRed6');
		this.RedFire7.animations.play('burnRed7');
		this.RedFire8.animations.play('burnRed8');
		this.RedFire9.animations.play('burnRed9');
		this.RedFire10.animations.play('burnRed10');
		this.RedFire11.animations.play('burnRed11');
		this.RedFire12.animations.play('burnRed12');
		this.RedFire13.animations.play('burnRed13');
		this.RedFire14.animations.play('burnRed14');
		this.RedFire15.animations.play('burnRed15');
		
		
		this.namoussa1.animations.play('namouss1');
		this.namoussa6.animations.play('namouss6');
		this.namoussa2.animations.play('namouss2');
		this.namoussa3.animations.play('namouss3');
		//this.namoussa4.animations.play('namouss4');
		this.namoussa5.animations.play('namouss5');
		//this.namoussa7.animations.play('namouss7');
		this.namoussa8.animations.play('namouss8');
		this.namoussa9.animations.play('namouss9');
		this.namoussa10.animations.play('namouss10');
		
		
		this.Coins.animations.play('Coins');
		this.Coins1.animations.play('Coins1');
		this.Coins2.animations.play('Coins2');
		this.Coins3.animations.play('Coins3');
		this.Coins4.animations.play('Coins4');
		this.Coins5.animations.play('Coins5');
		this.Coins6.animations.play('Coins6');
		this.Coins7.animations.play('Coins7');
		this.Coins8.animations.play('Coins8');
		this.Coins9.animations.play('Coins9');
		this.Coins10.animations.play('Coins10');
		this.Coins11.animations.play('Coins11');
		this.Coins12.animations.play('Coins12');
		this.Coins13.animations.play('Coins13');
		this.Coins14.animations.play('Coins14');
		
		//this.Flag.animations.play('Flag');
		
	},
	collisionHandler1: function(obj1, obj2) {

		life --;
		if(life == 3){
    	scoreText.text = 'Life : ' + life;
    	this.character.x -=5;
    	}
		if(life == 2){
    	scoreText.text = 'Life : ' + life;
    	this.character.x -=5;
    	}
		if(life == 1){
    	scoreText.text = 'Life : ' + life;
    	this.character.x -=5;
    	}
			if(life == 0){
			scoreText.text = 'Life : ' + life;
			this.GameOver = mt.create('GameOver');
			Gameover = true;
			this.GameOver.x = this.character.x;
			this.GameOver.y = 360;
			this.character.destroy();}
		},
		collisionHandler2: function(obj1, obj2) {
			score++;
			
			this.Score.setText("Score: "+score+" ");
			music = this.game.add.audio('bananaM');
			music.play();
			obj2.destroy();
			switch(life) {
        	case 2:
        	life++;
			scoreText.text = 'Life : ' + life;
        	break;
        	case 1:
        	life++;
        	scoreText.text = 'Life : ' + life;
        	break;
        	case 0:
        	life++;
        	scoreText.text = 'Life : ' + life;
        	break;
			} 
		},
		collisionHandler3: function(obj1, obj2) {
			this.game.add.sprite(12487, 164, 'Win');
			Gameover = true;
				obj2.destroy();
				obj1.destroy();
		}

};
var widgetAPI = new Common.API.Widget();
var tvKey = new Common.API.TVKeyValue();
var i =0;
var plugin;
var Main =
{

};

Main.onLoad = function()
{	plugin = document.getElementById("pluginObjectAudio");
	window.onShow();

	// Enable key event processing
	this.enableKeys();
	widgetAPI.sendReadyEvent();
};

Main.onUnload = function()
{

};

Main.enableKeys = function()
{
	document.getElementById("anchor").focus();
};

Main.keyDown = function()
{
	var keyCode = event.keyCode;
	alert("Key pressed: " + keyCode);

	switch(keyCode)
	{
		case tvKey.KEY_RETURN:
		case tvKey.KEY_PANEL_RETURN:
			alert("RETURN");
			//widgetAPI.sendReturnEvent();
			widgetAPI.blockNavigation(event);
			j=1;
			if(popup == true){
				j = 2;	
			}
			//i = 0;
			if(Gameover == true){
				parent.location="index.html";	
			}

			break;
		case tvKey.KEY_LEFT:
			alert("LEFT");
			i = 1;
			break;
		case tvKey.KEY_RIGHT:
			alert("RIGHT");
			i = 2;
			break;
		case tvKey.KEY_UP:
			alert("UP");
			i = 3;
			break;
		case tvKey.KEY_DOWN:
			alert("DOWN");
			break;
		case tvKey.KEY_ENTER:
		case tvKey.KEY_PANEL_ENTER:
			alert("ENTER");
			if(popup==true){
				alert("testtt");
				parent.location="index.html";
				popup=false;
			}
			i = 10;
			if(Gameover == true){
				location.reload();	
			}
			break;
		case tvKey.KEY_VOL_UP:
			volInc();
			alert(getVolume());
			break;
		case tvKey.KEY_VOL_DOWN:
			alert(plugin.GetVolume());
			volDec();
			alert(getVolume());
			break;
		case tvKey.KEY_MUTE:
			volMute();
			alert(getVolume());
			break;
		default:
			alert("Unhandled key");
			break;
	}
};
Main.keyUP = function()
{
	var keyCode = event.keyCode;
	alert("Key pressed: " + keyCode);

	switch(keyCode)
	{
		case tvKey.KEY_RETURN:
		case tvKey.KEY_PANEL_RETURN:
			alert("RETURN");
		//	widgetAPI.sendReturnEvent();
			widgetAPI.blockNavigation(event);
			break;
		case tvKey.KEY_LEFT:
			alert("LEFT");
			i = 0;
			break;
		case tvKey.KEY_RIGHT:
			alert("RIGHT");
			i = 0;
			break;
		case tvKey.KEY_UP:
			alert("UP");
			i = 0;
			break;
		case tvKey.KEY_DOWN:
			alert("DOWN");
			break;
		case tvKey.KEY_ENTER:
		case tvKey.KEY_PANEL_ENTER:
			alert("ENTER");
			i = 0;
			break;
		default:
			alert("Unhandled key");
		i = 0;
			break;
	}
};
function volInc() {
	plugin.SetVolumeWithKey(0);
	getVolume();
}
function volDec() {
	plugin.SetVolumeWithKey(1);
	getVolume();
}
function volMute() {
	if (plugin.GetUserMute() == 0) {
		plugin.SetUserMute(1);
		setVolumeZero();
	} else {
		plugin.SetUserMute(0);
		getVolume();
	}
}
function getVolume() {
	alert(plugin.GetVolume());
}
function setVolumeZero() {
}
window.onShow = function() {
	var nnaviPlugin = document.getElementById('pluginObjectNNavi');
	nnaviPlugin.SetBannerState(1);
	// For volume OSD
	var pluginAPI = new Common.API.Plugin();
	pluginAPI.SetBannerState(1);
	pluginAPI.unregistKey(tvKey.KEY_VOL_UP);
	pluginAPI.unregistKey(tvKey.KEY_VOL_DOWN);
	pluginAPI.unregistKey(tvKey.KEY_MUTE);
};