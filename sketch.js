var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var cars,track;
var car1,car2,car3,car4;
var car1Image,car2Image,car3Image,car4Image;

function preload(){

  track=loadImage("images/track.jpg");
  
  car1Image=loadImage("images/car1.png");
  car2Image=loadImage("images/car2.png");
  car3Image=loadImage("images/car3.png");
  car4Image=loadImage("images/car4.png");
}

function setup() {
  // width and height-- canvas width and height
  // width= displayWidth-20, height = displayHeight-30
  canvas = createCanvas(displayWidth-50,displayHeight-100);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}
