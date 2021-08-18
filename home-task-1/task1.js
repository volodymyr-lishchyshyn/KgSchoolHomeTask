function drawTriangle(height) {
    let repeats = 0;
    while (repeats < height) {
        console.log("#".repeat(++repeats));
    }
}

drawTriangle(3);
