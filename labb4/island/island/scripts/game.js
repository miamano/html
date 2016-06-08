$(document).ready(function () {    
    drawCanvas();
    $('#checkboxOn').on('click', movingMoray);
    $('#checkboxOff').on('click', stopMoray);
});

function drawCanvas() {
    var canvas = document.getElementById('aquarium');
    var context = canvas.getContext('2d');
    var imageObj1 = new Image();
    imageObj1.onload = function () { context.drawImage(imageObj1, 20, 50, imageObj1.width * 0.10, imageObj1.height * 0.10) };
    imageObj1.src = '../images/aqua1.png';
    var imageObj2 = new Image();
    imageObj2.onload = function () { context.drawImage(imageObj2, 55, 75, imageObj2.width * 0.10, imageObj2.height * 0.10) };
    imageObj2.src = '../images/aqua2.png';
    var imageObj3 = new Image();
    imageObj3.onload = function () { context.drawImage(imageObj3, 180, 80, imageObj3.width * 0.15, imageObj3.height * 0.15) };
    imageObj3.src = '../images/aqua3.png';
    var imageObj4 = new Image();
    imageObj4.onload = function () { context.drawImage(imageObj4, 260, 40, imageObj4.width * 0.20, imageObj4.height * 0.20) };
    imageObj4.src = '../images/aqua4.png';
}

function movingMoray() {
    document.getElementById('moray').style.animation = 'cssAnimation 3.2484s infinite ease-in-out';
}

function stopMoray() {
    document.getElementById('moray').style.animation = 'cssAnimation 3.2484s 0 ease-in-out';
}
