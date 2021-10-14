status = "";
objects = [];

function preload(){
    baby = loadImage("baby.jpeg")
}

function setup(){
    canvas = createCanvas(500, 300);
    canvas.center();
    ObjectDetector = ml5.objectDetector('cocossd', ModelLoaded);
}

function draw(){
    image(baby, 0, 0, 500, 300);

    if(status!=""){
        for(var i=0; i<objects.length; i++) {
            document.getElementById("2").innerHTML="Status : Objects Detected";
            fill("#8B0000");
            percent = floor(objects[i].confidence*100);
            text(objects[i].label+""+percent+"%", objects[i].x, objects[i].y);
            noFill();
            stroke("#8B0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            console.log("Hello this is a test");
        }
    }
}

function ModelLoaded(){
    console.log("Model is loaded…");
    status = true;
    ObjectDetector.detect(baby, gotResult);
}

function gotResult(error, results) {
    if(error){
        console.error(error);
    }

    else {
        console.log(results);
        objects = results;
    }
}

function HOME() {
    window.location = "index.html";
}