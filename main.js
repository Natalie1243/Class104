Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

cmaera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<image id="captured_image" src="'+data_uri+'"/>';
        });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/4gfJsGYy2/',modelLoaded);