function gradient(count) {
    if (count < 2 || count > 5) {
        alert("The numbers of colors should be between 2 and 5");
    }

    var colors = [];
    var steps = 360 / count;

    for (let i = 0; i < count; i++) {
        var hue = i * huesStep;
        var color = `hsl(${hue}, 100%, 50%)`; 
        colors.push(color);
        
    }
    return colors;
}

function generateGradient(colors) {
    var steps1 = 100;
    var gradient = [];

    for (var i = 0; i < steps1; i++) {
        var colorIndex = Math.floor(i / (steps1 / (colors.length - 1)));
        var startColor = colors[colorIndex];
        var endColor = colors[colorIndex + 1];

        var weight = (i % (steps1/ (colors.length - 1))) / (steps1 / (colors.length - 1));
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