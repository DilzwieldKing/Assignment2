var canvas;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var w = 600;
var h = 600;
var shapeColors = ["red", "blue", "purple", "red", "blue", "purple", "red", "blue", "purple", "red", "blue", "purple"];

//Sets up the canvas and draws the unique shape in the first layer

setUpCanvas();
uniqueShape();
guideLine();
guideLineTwo();
guideLineThree();
guideLineFour();

function setUpCanvas(){
    //get the canvas html element
    canvas = document.querySelector("#myCanvas");
    //get the canvas context
    ctx = canvas.getContext("2d");
    //draw a border on the canvas
    canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto";
    canvas.style.border = "6px solid teal";
    //set the width and height
    canvas.width = w;
    canvas.height = h;
}

//Draws a Rectangle
function drawRectangle (squareColor){
    ctx.beginPath();
    ctx.rect(50, 5, 40, 40);
    ctx.fillStyle = squareColor;
    ctx.fill();
}

//Draws a Triangle
function drawTriangle(triangleColor){
    ctx.beginPath();
    ctx.moveTo(300, 5);
    ctx.lineTo(320, 40);
    ctx.lineTo(280, 40);
    ctx.fillStyle = triangleColor;
    ctx.fill();
}

//Draws a Circle
function drawCircle(circleColor){
    ctx.beginPath();
    ctx.arc(530, 25, 20, 0, 2 * Math.PI);
    ctx.fillStyle = circleColor;
    ctx.fill();
}

//Draws a unique shape (4 pointed star)
function uniqueShape(){
    ctx.beginPath();
    ctx.moveTo(300, 0);
    ctx.lineTo(400, 200);
    ctx.lineTo(600, 300);
    ctx.lineTo(400, 400);
    ctx.lineTo(300, 600);
    ctx.lineTo(200, 400);
    ctx.lineTo(0, 300);
    ctx.lineTo(200, 200);
    ctx.closePath();
    ctx.fillStyle = "teal";
    ctx.fill();
}

//Creates the gold filling for the star
function guideLine(){
    ctx.beginPath();
    ctx.moveTo(300, 300);
    ctx.lineTo(0, 300);
    ctx.lineTo(200, 200);
    ctx.closePath();
    ctx.fillStyle = "gold";
    ctx.fill();
}

function guideLineTwo(){
    ctx.beginPath();
    ctx.moveTo(300, 300);
    ctx.lineTo(600, 300);
    ctx.lineTo(400, 400);
    ctx.closePath();
    ctx.fillStyle = "gold";
    ctx.fill();
}

function guideLineThree(){
    ctx.beginPath();
    ctx.moveTo(300, 0);
    ctx.lineTo(300, 300);
    ctx.lineTo(400, 200);
    ctx.closePath();
    ctx.fillStyle = "gold";
    ctx.fill();
}

function guideLineFour(){
    ctx.beginPath();
    ctx.moveTo(300, 300);
    ctx.lineTo(300, 600);
    ctx.lineTo(200, 400);
    ctx.closePath();
    ctx.fillStyle = "gold";
    ctx.fill();
}


//Draws the three shapes in front of the unique shape starting from the top and translating downwards. Shape fill colors are being alternated through the var "i" within the for loop with a predefined array with three colors
for (i = 0; i < 14; i++) {
    drawRectangle(shapeColors[i]);
    drawTriangle(shapeColors[i]);
    drawCircle(shapeColors[i]);
    ctx.translate(0, 50);
}