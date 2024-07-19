function gradient(count) {
    if (count < 2 || count > 5) {
        alert("The number of colors should be between 2 and 5");
        return;
    }

    var steps = 100;
    var gradient = [];
    var hueStep = 360 / count;

    var hslToRgb = function(hsl) {
        var hslValues = hsl.match(/\d+/g).map(Number);
        var h = hslValues[0] / 360;
        var s = hslValues[1] / 100;
        var l = hslValues[2] / 100;
        var a = s * Math.min(l, 1 - l);
        var f = function(n) {
            var k = (n + h * 12) % 12;
            var color = l - a * Math.max(-1, Math.min(Math.cos(k * Math.PI / 6), 1));
            return Math.round(color * 255);
        };
        return [f(0), f(8), f(4)];
    };

    var rgbToHsl = function(r, g, b) {
        r /= 255;
        g /= 255;
        b /= 255;
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var l = (max + min) / 2;
        var d = max - min;
        var s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        var h = max === r ? (g - b) / d + (g < b ? 6 : 0) :
                max === g ? (b - r) / d + 2 : (r - g) / d + 4;
        h *= 60;
        s *= 100;
        l *= 100;
        return [Math.round(h), Math.round(s), Math.round(l)];
    };

    var interpolateColor = function(c1, c2, weight) {
        var rgb1 = hslToRgb(c1);
        var rgb2 = hslToRgb(c2);
        var r1 = rgb1[0];
        var g1 = rgb1[1];
        var b1 = rgb1[2];
        var r2 = rgb2[0];
        var g2 = rgb2[1];
        var b2 = rgb2[2];
        var r = Math.round(r1 + weight * (r2 - r1));
        var g = Math.round(g1 + weight * (g2 - g1));
        var b = Math.round(b1 + weight * (b2 - b1));
        return rgbToHsl(r, g, b);
    };

    var colors = Array.from({ length: count }, function(_, i) {
        return "hsl(" + (i * hueStep) + ", 100%, 50%)";
    });

    for (var i = 0; i < steps; i++) {
        var idx = Math.floor(i / (steps / (count - 1)));
        var weight = (i % (steps / (count - 1))) / (steps / (count - 1));
        gradient.push(interpolateColor(colors[idx], colors[idx + 1], weight));
    }

    var container = document.createElement('div');
    container.style.display = 'flex';
    container.style.width = '100%';
    container.style.height = '100px';

    gradient.forEach(function(color) {
        var block = document.createElement('div');
        block.style.height = '100%';
        block.style.flex = '1';
        block.style.backgroundColor = 'rgb(' + color.join(',') + ')';
        container.appendChild(block);
    });

    document.body.appendChild(container);
}

gradient(5);
