function TicTacToe(input) {

    let dashboard = [[false, false, false],
        [false, false, false],
        [false, false, false]];


    let win = false;

    let player = 'X';
    for (const line of input) {

        let [row, col] = line.split(' ').map(num => Number(num));

        if (!dashboard[row][col] && dashboard[row][col] != 'O' && dashboard[row][col] != 'X') {
            dashboard[row][col] = player;

            if (checkCols(dashboard, player) ||
                checkRows(dashboard, player) ||
                checkDiagonals(dashboard, player)) {

                console.log(`Player ${player} wins!`)
                win = true;

                printDashboard(dashboard);
            }
            if (win == true) {

                return;
            }

            player = player === 'X' ? 'O' : 'X';
        } else {
            console.log("This place is already taken. Please choose another!");
        }

    }

    if (win == false) {
        console.log("The game ended! Nobody wins :(")
        printDashboard(dashboard);
    }

    function printDashboard(dashboard) {
        let output = '';
        for (let row = 0; row < dashboard.length; row++) {
            for (let col = 0; col < dashboard[row].length; col++) {

                output += dashboard[row][col];
                output += "\t"
                // output += "";
            }

            // output += '\n'
            // output += " --- --- --- "
            output += '\n'


        }
        console.log(output);
    }


    function checkCols(dashboard, player) {

        let col = 0;
        for (let row = 0; row < 3; row++) {
            if (dashboard[row][col] == player &&
                dashboard[row][col + 1] == player &&
                dashboard[row][col + 2] == player) {
                return true;
            }

            return false;
        }
    }

    function checkRows(dashboard, player) {

        let row = 0;
        for (let col = 0; col < 3; col++) {
            if (dashboard[row][col] == player &&
                dashboard[row + 1][col] == player &&
                dashboard[row + 2][col] == player) {
                return true;
            }
            return false;

        }
    }

    function checkDiagonals(dashboard, player) {

        if (dashboard[0][0] == player &&
            dashboard[1][1] == player &&
            dashboard[2][2] == player) {
            return true;
        }
        if (dashboard[0][2] == player &&
            dashboard[1][1] == player &&
            dashboard[2][0] == player) {
            return true;
        }
        return false;
    }
}


TicTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]
);


// TicTacToe(["0 0",
//     "0 0",
//     "1 1",
//     "0 1",
//     "1 2",
//     "0 2",
//     "2 2",
//     "1 2",
//     "2 2",
//     "2 1"]
// );

// TicTacToe(["0 1",
//     "0 0",
//     "0 2",
//     "2 0",
//     "1 0",
//     "1 2",
//     "1 1",
//     "2 1",
//     "2 2",
//     "0 0"]
// );