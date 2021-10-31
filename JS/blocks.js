const BLOCKS = {
    tree: [
        [[2,1], [0,1], [1,0], [1,1]],
        [[1,2], [0,1], [1,0], [1,1]],
        [[2,1], [0,1], [1,2], [1,1]],
        [[2,1], [1,2], [1,0], [1,1]],
    ],
    square: [
        [[0,0],[1,0],[0,1],[1,1]],
        [[0,0],[1,0],[0,1],[1,1]],
        [[0,0],[1,0],[0,1],[1,1]],
        [[0,0],[1,0],[0,1],[1,1]],
    ],
    bar: [
        [[1,0],[2,0],[3,0],[4,0]],
        [[2,-1],[2,0],[2,1],[2,2]],
        [[3,0],[2,0],[1,0],[0,0]],
        [[2,-1],[2,0],[2,1],[2,2]],
    ],
    elLeft: [
        [[0,0],[2,1],[1,0],[2,0]],
        [[1,1],[2,-1],[1,0],[1,-1]],
        [[2,0],[0,-1],[1,0],[0,0]],
        [[1,-1],[0,1],[1,0],[1,1]],
    ],
    elRight: [
        [[0,0],[0,1],[1,0],[2,0]],
        [[2,1],[1,1],[1,0],[1,-1]],
        [[2,-1],[2,0],[1,0],[0,0]],
        [[0,-1],[1,-1],[1,0],[1,1]],
    ],
    zeeLeft: [
        [[0,0],[1,0],[1,1],[2,1]],
        [[0,2],[0,1],[1,1],[1,0]],
        [[2,2],[1,2],[1,1],[0,1]],
        [[2,0],[2,1],[1,1],[1,2]],
    ],
    zeeRight: [
        [[2,0],[1,0],[1,1],[0,1]],
        [[0,0],[0,1],[1,1],[1,2]],
        [[0,2],[1,2],[1,1],[2,1]],
        [[2,2],[2,1],[1,1],[1,0]],
    ]
};

export default BLOCKS;