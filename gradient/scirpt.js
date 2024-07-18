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

var interpolateColor = function(c1, c2, weight){
    var r1 = hsltoRgb(c1)[0];
    var g1 = hsltoRgb(c1)[1];
    var b1 = hsltoRgb(c1)[2];
    var r2 = hsltoRgb(c2)[0];
    var g2 = hsltoRgb(c2)[1];
    var b2 = hsltoRgb(c2)[2];
}