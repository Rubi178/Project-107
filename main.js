prediction_1="";
prediction_2="";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image"src="'+data_uri+'"/>';
    });
}

console.log("ml5.version:", ml5.version);

classifer = ml5.imageClassifer('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded');
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The First Prediction is" + prediction_1;
    speak_data_2 = "The Second Prediction is" + prediction_2;
    var utterthis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterthis);
}