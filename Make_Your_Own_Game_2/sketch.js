var gameState = 0;

var player;
var player_animation;

var alien;
var alien_image;

var invisible_ground;

var bg_img1;
var bg_img2;
var bg_img3;

var wasd;
var wasd_image;

var weapon;
var weapon_image;

var form1;

function preload(){
    player_animation = loadAnimation("images/player_1.png","images/player_1.png","images/player_2.png","images/player_2.png");

    alien_image = loadImage("images/enemy.png");

    bg_img1 = loadImage("images/start_bg.jpg");
    bg_img2 = loadImage("images/chase_bg.jpg");
    bg_img3 = loadImage("images/end_bg.jpg");

    wasd_image = loadImage("images/controls.png");
    weapon_image = loadImage("images/weapon.png");

}

function setup(){
    createCanvas(displayWidth,displayHeight);

    player = createSprite(625,630,10,10);
    player.addAnimation("test",player_animation);
    player.visible = false;
   
    alien = createSprite(1300,100,10,10);
    alien.addImage("test",alien_image);
    alien.scale = 0.6;
   
    wasd = createSprite(120,90,10,10);
    wasd.addImage("controls",wasd_image);

    weapon = createSprite(120,40,10,10);
    weapon.addImage("weapon",weapon_image);

    //create an invisible ground...for the spaceship to rest
    invisible_ground = createSprite(625,720,1000,10);

    form1 = new Form();

}

function draw(){
    background("cyan");

    if(gameState === 0){
        form1.display()
    }

    if(gameState === 1){
        background(bg_img1);
        form1.hide();
        
        alien.velocityY = 5;
        alien.velocityX = -5;
        //try commenting the line below : alien.collide(invisible_ground);
        alien.collide(invisible_ground);
        //feedback:
        //when its not commented it colllides and it's velocity remains 5 and -5 inspite of if command
        //- but when commented collide function it still collides and shakes up and down as if velocity
        //- is going and coming


        drawSprites();    
    }
    //this sometimes work depending on, if collide function is commented
    if(alien.collide(invisible_ground)){
        alien.velocityX = 0;
        alien.velocityY = 0;
        console.log("its working!");
    }
    
}