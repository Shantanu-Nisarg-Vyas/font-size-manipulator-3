leftwrist = 0;
rightwrist = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(1000, 900);
    canvas = createCanvas(1000, 1000);
    canvas.position(1234, 145);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw() {
    background("#C71585");
    textSize(difference);
    fill("#74B3CE")
    text("SHANTANU", 10, 990);
}

function modelLoaded() {
    console.log("PoseNet Initialized!")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftwrist = results[0].pose.leftWrist.x
        rightwrist = results[0].pose.rightWrist.x
        difference = round(leftwrist - rightwrist);
        document.getElementById("fontsize").innerHTML = "Font size = " + difference + " px";
    }
}