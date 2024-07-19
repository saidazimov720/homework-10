function gradient(count) {
    if (count < 2 || count > 5) return alert("The number of colors should be between 2 and 5");

    const steps = 100, hueStep = 360 / count;
    let gradient = [];

    const hslToRgb = (h, s, l) => {
        s /= 100; l /= 100;
        let c = (1 - Math.abs(2 * l - 1)) * s;
        let x = c * (1 - Math.abs((h / 60) % 2 - 1));
        let m = l - c / 2;
        let [r, g, b] = [0, 0, 0];
        if (0 <= h && h < 60) [r, g, b] = [c, x, 0];
        else if (60 <= h && h < 120) [r, g, b] = [x, c, 0];
        else if (120 <= h && h < 180) [r, g, b] = [0, c, x];
        else if (180 <= h && h < 240) [r, g, b] = [0, x, c];
        else if (240 <= h && h < 300) [r, g, b] = [x, 0, c];
        else if (300 <= h && h < 360) [r, g, b] = [c, 0, x];
        return [Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255)];
    };

    const interpolateColor = (c1, c2, w) => c1.map((c, i) => Math.round(c + w * (c2[i] - c)));

    const colors = Array.from({ length: count }, () => hslToRgb(Math.random() * 360, 100, 50));

    for (let i = 0; i < steps; i++) {
        let idx = Math.floor(i / (steps / (count - 1)));
        let weight = (i % (steps / (count - 1))) / (steps / (count - 1));
        gradient.push(interpolateColor(colors[idx], colors[idx + 1], weight));
    }

    const container = document.createElement('div');
    container.style.cssText = 'display: flex; width: 100%; height: 100px;';

    gradient.forEach(color => {
        const block = document.createElement('div');
        block.style.cssText = `height: 100%; flex: 1; background-color: rgb(${color.join(',')});`;
        container.appendChild(block);
    });

    document.body.appendChild(container);
}

gradient(5);
