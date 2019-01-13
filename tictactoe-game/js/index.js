document.addEventListener('DOMContentLoaded', function() {
	let playButton = document.getElementById("playButton");
	
    playButton.addEventListener("click", function() {
		playButton.innerHTML = "Reset";
        checkDraw = currentValue => {
            return currentValue > 0;
		};

        isEven = value => {
            if (value % 2 == 0) {
                return true;
            } else {
                return false;
            };
		};
		
        isOdd = value => {
            if (value % 1 == 0) {
                return true;
            } else {
                return false;
            };
		};
		
        allSame = array => {
            let first = array[0];
            if (array[0] == "") {
                return false;
            } else {
                return array.every(function(element) {
                    return element == first;
                });
            };
        };

        let bg = "rgba(54, 108, 72, 0.58)";
		let boardSize = parseInt(document.getElementById("boardSize").value);
        let gameBoard = [];
		let numSquares = (boardSize * boardSize);
		
		if (boardSize == "0") {
            playButton.innerHTML = "Let's play";
            alert("You have to select board\'s size before start game");
            return;
        }

        for (let i = 0; i < numSquares; i++) {
            gameBoard.push(i);
        };

        document.getElementById("gameplay").innerHTML = "<div id='board'></div>";
		let board = document.getElementById("board");
		let squares = document.getElementsByClassName("square");
        board.style.margin = "0 auto";
        board.style.height = (100 * boardSize) + "px";
        board.style.width = (100 * boardSize) + "px";
        board.style.border = "solid 2px #366C48";

        for (let i = 0; i < numSquares; i++) {
            board.innerHTML += "<div class='square'></div>";
        };

        for (let i = 0; i < numSquares; i++) {
            squares[i].style.height = "100px";
            squares[i].style.width = "100px";
            squares[i].style.float = "left";
            squares[i].style.lineHeight = "100px";
            squares[i].setAttribute("id", i.toString());
        };

        if (numSquares % 2 !== 0) {
            for (let i = 0; i < numSquares; i += 2) {
                squares[i].style.backgroundColor = bg;
            };
        } else {
            for (i = 0; i < numSquares; i += 1) {
                if (isEven(i / boardSize)) {
                    for (let squareNum = i; squareNum < (i + boardSize); squareNum += 2) {
                        squares[squareNum].style.backgroundColor = bg;
                    };
                } else if (isOdd(i / boardSize)) {
                    for (let squareNum = i + 1; squareNum < (i + boardSize); squareNum += 2) {
                        squares[squareNum].style.backgroundColor = bg;
                    };
                } else {};
            };
        };

        let info = document.getElementById("info")
        info.style.color = "#000000";
        info.innerHTML = "Now is X Turn";
		let boardClicks = 0;
		let squareClicks = [];
		let winningPlayer;

        board.addEventListener("click", function() {
            if (determineWinner()) {
                info.style.color = "#CC0D0D";
                info.innerHTML = winningPlayer[0] + ' wins!';
            } else if (!determineWinner() && squareClicks.every(checkDraw)) {
                info.style.color = "#CC0D0D";
                info.innerHTML = "It\'s Draw";
            } else if (isEven(boardClicks)) {
                info.style.color = "#366C48";
                info.innerHTML = "Now is O Turn";
            } else {
                info.style.color = "#000000";
                info.innerHTML = "Now is X Turn";
            };
            boardClicks++;
        });

        for (let i = 0; i < numSquares; i++) {
            squareClicks[i] = 0;
        };

        let determineWinner = () => {

			// Win by row
            for (i = 0; i < numSquares; i += 1) {
                if ((i % boardSize) == 0) {
					let rowCheck = [];
					
                    for (let squareNum = i; squareNum < (i + boardSize); squareNum += 1) {
                        rowCheck.push(squares[squareNum].innerHTML);
                    };

                    if (allSame(rowCheck)) {
                        winningPlayer = rowCheck;
                        return true;
                    };
                };
			};
			
            // Win by column
            for (i = 0; i < numSquares; i += 1) {
                if (i < boardSize) {
					let colCheck = [];
					
                    for (let squareNum = i; squareNum < numSquares; squareNum += boardSize) {
                        colCheck.push(squares[squareNum].innerHTML);
                    };

                    if (allSame(colCheck)) {
                        winningPlayer = colCheck;
                        return true;
                    };
                };
			};
			
            // Win by left diagonal
			let diag1Check = [];
			
            for (i = 0; i < numSquares; i += 1) {
                if ((i % (boardSize + 1)) == 0) {
                    diag1Check.push(squares[i].innerHTML);
                };
            };
            
            if (allSame(diag1Check)) {
                winningPlayer = diag1Check;
                return true;
			};
			
            // Win by right diagonal
            let diag2Check = [];
            for (i = (boardSize - 1); i < (numSquares - 1); i += 1) {
                if ((i % (boardSize - 1)) == 0) {
                    diag2Check.push(squares[i].innerHTML);
                };
			};

            if (allSame(diag2Check)) {
                winningPlayer = diag2Check;
                return true;
            };
        };

        let countClicks = function() {
            let divID = this.getAttribute("id");
			squareClicks[divID] += 1;
			
            if (isEven(boardClicks) && squareClicks[divID] == 1) {
                this.innerHTML = 'X';
            } else if (isOdd(boardClicks) && squareClicks[divID] == 1) {
                this.innerHTML = 'O';
                this.style.color = "#366C48";
            } else if (!determineWinner()) {
                alert('You can\'t move there');
                boardClicks -= 1;
            } else {

            };

            if (determineWinner()) {
                for (let i = 0; i < numSquares; i++) {
                    squareClicks[i] = 2;
				};
				
                document.getElementById("playButton").innerHTML = "Play again?"
            } else {
                if (!determineWinner() && squareClicks.every(checkDraw)) {
                    document.getElementById("playButton").innerHTML = "Play again?"
                }
            };
        };

        for (let i = 0; i < numSquares; i++) {
            squares[i].addEventListener("click", countClicks);
        };
    });
});