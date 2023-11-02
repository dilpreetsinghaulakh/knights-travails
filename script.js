const Board = (position, path) => {
    if (position[0] < 0 || position[1] < 0 || position[0] > 7 || position[1] > 7) return null;
    return {position, path}
}

const possibleMoves = [[-1, -2], [-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2]];

const knightMoves = (start, finish) => {
    const queue = [Board(start, [start])];
    let current = queue.shift();
    if (current === null) return null;
    if (finish[0] < 0 || finish[1] < 0 || finish[0] > 7 || finish[1] > 7) return null;


    while (current.position[0] !== finish[0] || current.position[1] !== finish[1]) {
        for (let i = 0; i < possibleMoves.length; i++) {
            const newPosition =
                [current.position[0] + possibleMoves[i][0], current.position[1] + possibleMoves[i][1]];
            if (newPosition[0] < 0 || newPosition[1] < 0 || newPosition[0] > 7 || newPosition[1] > 7) continue;
            const newPath = [...current.path, newPosition];
            queue.push(Board(newPosition, newPath));
        }
        current = queue.shift();
    }
    return current.path;
}

const path = knightMoves([1, 1], [7, 0]);

if (path !== null) {
    console.log(
        `=> You made it in ${path.length - 1} moves!  Here's your path:`);

    path.forEach((position) => console.log(` [${position[0]}, ${position[1]}]`)
    );
} else {
    console.log("There is no path from the start position to the finish position.");
}