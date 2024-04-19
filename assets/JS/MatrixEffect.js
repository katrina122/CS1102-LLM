var canvas = document.getElementById('matrixRain');
var context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = 600;

var katakana = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
var latin = 'abcdefghijklmnopqrstuvwxyz';
var nums = '0123456789';
var characters = katakana + latin + nums;
var fontSize = 16;
var columns = canvas.width / fontSize;


var rainDrops = [];
for (var x = 0; x < columns; x++) {
    rainDrops[x] = Math.floor(Math.random() * (canvas.height / fontSize));
}

var draw = () => {
    context.fillStyle = 'rgba(6, 6, 6, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = 'rgba(244,244,244,0.3)';
    context.font = fontSize + 'px "Arial", monospace';;

    for (var i = 0; i < rainDrops.length; i++) {
        var text = characters.charAt(Math.floor(Math.random() * characters.length));
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
};

setInterval(draw, 60);
