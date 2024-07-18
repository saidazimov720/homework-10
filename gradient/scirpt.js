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

