noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function preload() {

}

function setup () {
    video = createCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded () {
    console.log('PoseNet Is Initialized');
}

function gotPoses(result)
{
    if(result.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.x;
        console.log("noseX = " + noseX +" noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWrist);

        console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);
    }
}

function draw() {
background('#969A97');
fill('#F90093');
stroke('#F90093');
document.getElementById("font_size").innerHTML = " The font size of the text will be " + difference;
textSize(difference);
text('Asher', 50, 100);
}

