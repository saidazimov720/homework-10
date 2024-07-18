function gradient(count) {
    if (count < 2 || count > 5) {
        alert("The numbers of colors should be between 2 and 5");
        return;
    }

    var steps = 100;
    var gradient = [];
    var hueStep = 360 / count;

    var hslToRgb = function(hsl) {
        var hslValues = hsl.match(/\d+/g).map(Number);
        var h = hslValues[0];
        var s = hslValues[1];
        var l = hslValues[2];
        var a = s * Math.min(l / 100, 1 - l / 100);
        var f = function(n) {
            return l - a * Math.max(-1, Math.min(Math.cos((h / 30 + n) * Math.PI / 6), 1, 1));
        };
        return [f(0) * 255, f(8) * 255, f(4) * 255];
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
        var h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
        return "hsl(" + Math.round(h * 60) + ", " + Math.round(s * 100) + "%, " + Math.round(l * 100) + "%)";
    };

    var interpolateColor = function(c1, c2, weight) {
        var r1 = hslToRgb(c1)[0];
        var g1 = hslToRgb(c1)[1];
        var b1 = hslToRgb(c1)[2];
        var r2 = hslToRgb(c2)[0];
        var g2 = hslToRgb(c2)[1];
        var b2 = hslToRgb(c2)[2];
        return rgbToHsl(
            Math.round(r1 + weight * (r2 - r1)),
            Math.round(g1 + weight * (g2 - g1)),
            Math.round(b1 + weight * (b2 - b1))
        );
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
        block.style.backgroundColor = color;
        container.appendChild(block);
    });

    document.body.appendChild(container);
}

gradient(5);
