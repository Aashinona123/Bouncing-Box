var canvas;
var music;
var surface1, surface2, surface3, surface4
var box

function preload() {
    music = loadSound("music.mp3");
}


function setup() {
    canvas = createCanvas(800, 600);

    surface1 = createSprite(51, 580, 250, 40)
    surface1.shapeColor = rgb(255, 0, 0);
    surface2 = createSprite(276, 580, 200, 40)
    surface2.shapeColor = rgb(0, 0, 255)
    surface3 = createSprite(500, 580, 250, 40)
    surface3.shapeColor = rgb(0, 204, 102);
    surface4 = createSprite(720, 580, 250, 40)
    surface4.shapeColor = rgb(255, 255, 77);

    box = createSprite(30, 30, 40, 40)
    box.x = random(20, 750)
    box.shapeColor = rgb(255, 255, 255);
    box.velocityX = 4
    box.velocityY = 9
}

function draw() {
    background(rgb(169, 169, 169));

    edges = createEdgeSprites();
    box.bounceOff(edges);

    if (surface1.isTouching(box) && box.bounceOff(surface1)) {
        box.shapeColor = rgb(255, 0, 0);
    }

    if (surface2.isTouching(box) && box.bounceOff(surface2)) {
        box.shapeColor = rgb(0, 0, 255);
        box.velocityX = 0
        box.velocityY = 0
    }

    if (surface3.isTouching(box) && box.bounceOff(surface3)) {
        box.shapeColor = rgb(0, 204, 102);
    }

    if (surface4.isTouching(box) && box.bounceOff(surface4)) {
        box.shapeColor = rgb(255, 255, 77);
    }


    //add condition to check if box touching surface and make it box
    drawSprites()
}
