var tom,tom1,tom2,tom3;
var bg;
var jerry,jerry1,jerry2,jerry3;
function preload() {
    //load the images here
    bg=loadImage("images/garden.png");
    tom1=loadAnimation("images/cat1.png");
    tom2=loadAnimation("images/cat2.png","images/cat3.png");
    tom3=loadAnimation("images/cat4.png");
    jerry1=loadAnimation("images/mouse1.png");
    jerry2=loadAnimation("images/mouse2.png","images/mouse3.png");
    jerry3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(870,600);
    tom.addAnimation("tomsleeping",tom1);
    tom.addAnimation("tomrunning",tom2,);
    tom.addAnimation("tomlast",tom3);
    jerry.addAnimation("jerrystanding",jerry1);
    jerry.addAnimation("jerryteasing",jerry2);
    jerry.addAnimation("jerrylast",jerry3);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x < (tom.width -jerry.width)/2) {

    }
        
    

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

    if (KeyCode === LEFTARROW) {
    jerry.addAnimation("jerryteasing",jerry2);   
    jerry.changeAnimation("jerryteasing") ;
    jerry.frameDelay=25;
    }
    if (KeyCode === RIGHTARROW) {
     tom.addAnimation("tomrunning",tom2); 
     tom.changeAnimation("tomrunning")  ;
     tom.frameDelay=25'
    }
}


