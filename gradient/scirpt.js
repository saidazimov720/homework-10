function gradient(count) {
    if (count < 2 || count > 5) {
        alert("The numbers of colors should be between 2 and 5");
    }

    var steps = 100;
    var colors = [];
    var huesteps = 360 / count;

    var hsltoRgb = function (hsl) {
        var h = hsl.match(/\d+/g).map(Number)[0];
        var s = hsl.match(/\d+/g).map(Number)[1];
        var l = hsl.match(/\d+/g).map(Number)[2];
        var a = s * Math.min(l / 100, 1 - l / 100);
        var f = function (n) {
            return l - a * Math.max(-1, Math.min(Math.cos((h / 30 + n) * Math.PI / 6), 1, 1));
        };
        return [f(0) * 255, f(8) * 255, f(4) * 255];
    };

    var rgbToHsl = function (r, g, b) {
        r /= 255;
        g /= 255;
        b /= 255;
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var l = (max + min) / 2;
        var d = max - min;
        var s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        var h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
        return "hsl(" + Math.round(h * 60) + ", " + Math.round(s * 100) + "%, " + Math.round(l * 100) + "%)";

    }
}

function generateGradient(colors) {
    var steps1 = 100;
    var gradient = [];

    for (var i = 0; i < steps1; i++) {
        var colorIndex = Math.floor(i / (steps1 / (colors.length - 1)));
        var startColor = colors[colorIndex];
        var endColor = colors[colorIndex + 1];

        var weight = (i % (steps1 / (colors.length - 1))) / (steps1 / (colors.length - 1));
        var color = interpolateColor(startColor, endColor, weight);
        gradient.push(color);
    }
    return gradient;
}

function interpolateColor(color1, color2, weight) {
    var color1RGB = hsltoGRB(color1);
    var color2RGB = hsltoGRB(color2);

    var r = Math.round(color1RGB.r + weight * (color2RGB.r - color1RGB.r));
    var g = Math.round(color1RGB.g + weight * (color2RGB.g - color1RGB.g));
    var b = Math.round(color1RGB.b + weight * (color2RGB.b - color1RGB.b));

    return rgbToHsl(r, g, b);
}