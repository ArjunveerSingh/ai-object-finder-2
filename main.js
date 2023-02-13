s="";
function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(600,400)
    video.hide();
}
function start(){
    od= ml5.objectDetector('cocossd',ml);
document.getElementById("status").innerHTML="Status: Detecting Objects";
input=document.getElementById("input").value;
}

function ml(){
    console.log("Model Loaded!!")
    s=true;
}

function draw(){
  image(video,0,0,600,400);
}