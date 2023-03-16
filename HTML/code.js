<img id='Pic0' class='eachPicImg' src='Photo/IMG_2485.jpg'>
<img id='Pic1' class='eachPicImg' src='Photo/IMG_2454.jpg'>
<img id='Pic2' class='eachPicImg' src='Photo/IMG_2485.jpg'>
<img id='Pic8' class='eachPicImg' src='Photo/IMG_2598.jpg'>
<img id='Pic3' class='eachPicImg' src='Photo/IMG_2549.jpg'>
<img id='Pic4' class='eachPicImg' src='Photo/IMG_1352.jpg'>
<img id='Pic5' class='eachPicImg' src='Photo/IMG_2549.jpg'>
<img id='Pic9' class='eachPicImg' src='Photo/IMG_2598.jpg'>
<img id='Pic6' class='eachPicImg' src='Photo/IMG_2454.jpg'>
<img id='Pic7' class='eachPicImg' src='Photo/IMG_1352.jpg'>


/*setTimeout(wakeUpUser, 5000);
        function wakeUpUser() {
            alert("Феликс - красотун. Не так ли ?!");
        }
*/
   
/*
var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
    guess = prompt('Готовы убивать ? Введите число от 0-6:');
    if (guess < 0 || guess > 6) {
        alert('Введите корректоное число от 0 до 6');
    }
    else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
          alert('Попал!');
          hits = hits + 1;
         
            if (hits == 3) {
               isSunk = true;
               alert('Игра окончена, сучара! Ты победил!');
            }
        } else {
           alert('Мимо');
        }
}
}
var stats = 'Ты совершил ' + guesses + ' попыток.' + ' Твоя меткость ' + (hits / guesses * 100);
alert(stats);
*/

 /*
   var anyNumber = Math.floor(Math.random() * 11);
   var x = 0;
   var guesses = 0;
   var i = false;
   while (i == false) {
    if (x == anyNumber) {
        i = true;
    }
    else if (x != anyNumber) {
        console.log(anyNumber);
        x = x + 0;
        guesses = guesses + 1;
    }
}
console.log('Количество попыток: ' + guesses);
console.log('Случайное число: ' + anyNumber);
*/

/*
function mature() {
    var words1 = ['хорошенький', 'каканный', 'милый'];
    var words2 = ['толстун', 'мурчун', 'сволочун'];

    var phrase1 = Math.floor(Math.random() * words1.length);
    var phrase2 = Math.floor(Math.random() * words2.length);

    var goal = 'Феликс сегодня ' + words1[phrase1] + ' ' + words2[phrase2] + '!!!';
    alert(goal);
}

function againAgain() {
    var repite = 0;
    while (repite <= 5) {
        repite = repite + 1;
        mature()
    }
}
console.log(againAgain());
*/

/*
var scores = [60, 50, 60, 58, 54, 54, 
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];

var costs = [.25, .27, .25, .25, .25, .25, 
             .33, .31, .25, .29, .27, .22,
             .31, .25, .25, .33, .21, .25,
             .25, .25, .28, .25, .24, .25,
             .20, .25, .30, .25, .24, .25,
             .25, .25, .27, .25, .26, .29];

function printAndGetHighResult(scores) {
var allTests = scores.length;
var highestScore = 0;
var output;
for (var i = 0; i < scores.length; i++) {
    output = 'Bubble solution #' + i + ' score: ' + scores[i];
    console.log(output);
    if (scores[i] > highestScore) {
        highestScore = scores[i];
    }
} return highestScore;
}

var highestScore = printAndGetHighResult(scores);
function getBestResults(scores, highestScore) {
var bestSolutions = [];
for (var i = 0; i < scores.length; i++) {
    if (scores[i] == highestScore) {
        bestSolutions.push(i);
    }
} return bestSolutions;
}
var bestSolutions = getBestResults(scores, highestScore);

function GMCES(scores, costs, highestScore) {
   var cost = 100;
   var index;
   for (var i = 0; i < scores.length; i++) {
    if (scores[i] == highestScore) {
        if (cost > costs[i]) {
            index = i;
            cost = costs[i];
        }
    }
   }return index;
} 
var zbc = GMCES(scores, costs, highestScore);


console.log('Bubble tests: ' + scores.length);
console.log('Higest bubble score: ' + highestScore);
console.log('Solutions with highest score: ' + bestSolutions);
console.log('Bubble solution #' + zbc + ' is the most cost effective');
*/

/*
var names = ['Эрнест', 'Инна'];
var goalsE = [];
var goalsI = [];

// ДОБАВЛЕНИЕ СЛУЧАЙНЫХ ЧИСЕЛ В МАССИВ
function scores(name, ggg) {
for (var hits = 1; hits !== 11; hits++) {
    ggg.push(Math.floor(Math.random() * 11));
    console.log(hits + '.' + name + ': ' + ggg);
 } return ggg;
}

// ВЫСЧИТЫВАЕНИЕ СУММЫ СЛУЧАЙНЫХ ЧИСЕЛ В МАССИВЕ
function summa(numbs) {
var sum = 0;
for (var i = 0; i < numbs.length; i++) {
    sum += numbs[i];
 } return sum;
}

// СРАВНЕНИЕ СУММ ЧИСЕЛ ИЗ МАССИВОВ И ОПРЕДЕЛЕНИЕ БОЛЬШЕГО
function comeAndWin(one, two) {
var winner = 0;
if (winner < one) {
    winner = one;
    if (winner > two) {
        winner = ('Эрнест - ' + one + ' очков');
    }
    else if (winner < two) {
        winner = ('Инна - ' + two + ' очков');
    }
    else if (winner == two) {
       winner = 'НИЧЬЯ!';
    }
 } return winner;
}

scores(names[0], goalsE);
console.log('Общее количество очков: ' + summa(goalsE));
console.log('');
scores(names[1], goalsI);
console.log('Общее количество очков: ' + summa(goalsI));
console.log('');
console.log('Победитель: ' + comeAndWin(summa(goalsE),summa(goalsI)));
*/


/*
var carVolga = {
    mark: 'Volga',
    model: 'Volda luxe',
    year: 2008,
    color: 'Silver',
    fuel: 0,
    started: false,
    start: function() {
        if (this.fuel == 0) {
            alert('Сука, без бензина не завести тачилу');
        } else {
            this.started == true;
        }
    },
    stop: function() {
        this.started == false;
    },
    drive: function() {
        if (this.started) {
            if (this.fuel > 0) {
               alert(this.mark + ' ' + this.model + ' goes zoom zoom!');
               this.fuel = this.fuel - 1;
            }
            else {
                alert('Out of fuel!!!');
                this.stop();
            }
        } else {
            alert('В начале нужно завести машину');
        }
    },
    addFuel: function(amount) {
    this.fuel = this.fuel + amount;
    }
};


carVolga.start();
carVolga.drive();
carVolga.addFuel(2);
carVolga.start();
carVolga.drive();
carVolga.drive();
carVolga.drive();
carVolga.stop();
*/

/*
var view = {
    displayMessage: function(msg){
        var messageArea = document.getElementById('messageArea');
        messageArea.innerHTML = msg;

    },
    displayHit: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute('class', 'hit');

    },
    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute('class', 'miss');
    }
};

var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,

    ships: [{ locations: [0, 0, 0], hits: ["", "", ""] },
            { locations: [0, 0, 0], hits: ["", "", ""] },
            { locations: [0, 0, 0], hits: ["", "", ""] }],

    fire: function(guess) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[index] = 'hit';
                view.displayHit(guess);
                view.displayMessage('HIT!');
                if (this.isSunk(ship)) {
                    view.displayMessage('You sank my ship');
                    this.shipsSunk++;
                }
                return true;
            }

        } 
         view.displayMiss(guess);
         view.displayMessage('You missed.');
         return false;

    },

      isSunk: function(ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== 'hit') {
                return false;
            }
        } return true;
    },

    generateShipLocations: function() {
        var locations;
        for (var i = 0; i < this.numShips; i++) {
            do {
                locations = this.generateShip();
            } while (this.collision(location));
            this.ships[i].locations = locations;
        }
    },

    generateShip: function() {
        var direction = Math.floor(Math.random() * 2);
        var row, col;
        if (direction === 1) {
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * this.shipLength);
        } else {
            row = Math.floor(Math.random() * this.shipLength);
            col = Math.floor(Math.random() * this.boardSize);
        }
        var newShipLocations = [];
        for (var i = 0; i < this.shipLength; i++) {
            if (direction === 1) {
                newShipLocations.push(row + '' + (col + i));
            } else {
                newShipLocations.push((row + i) + '' + col);
            }
        } return newShipLocations;
    },

    collision: function(locations) {
        for (var i = 0; i <this.numShips; i++) {
            var ship = model.ships[i];
            for (var j = 0; j < locations.lenght; j++) {
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    return true;
                }
            }
        } return false;
    } 
};


var controller = {
    guesses: 0,

    processGuess: function(guess) {
        var location = parseGuess(guess);
        if (location) {
            this.guesses++;
            var hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage('Ты потопил все мои корабли! Количество попыток: ' + this.guesses);
            }
        }
    }

};

function parseGuess(guess) {
        var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

        if (guess === null || guess.length !== 2) {
            alert('Введите координаты коробля')
        } else {
            firstChar = guess.charAt(0);
            var row = alphabet.indexOf(firstChar);
            var column = guess.charAt(1);

            if (isNaN(row) || isNaN(column)) {
                alert('Этого нет на доске координат');
            } else if (row < 0 || row >= model.boardSize || 
                       column < 0 || column >= model.boardSize) {
                alert('Вы вышли за пределы доступных координат');
            } else {
                return row + column;
            }
        } return null;
    }

function init() {
    var fireButton = document.getElementById('fireButton');
    fireButton.onclick = handleFireButton;
    var guessInput = document.getElementById('guessInput');
    guessInput.onkeypress = handleKeyPress;
    model.generateShipLocations();
}

function handleFireButton() {
    var guessInput = document.getElementById('guessInput');
    var guess = guessInput.value;
    controller.processGuess(guess);
    guessInput.value = '';
}

function handleKeyPress(e) {
    var fireButton = document.getElementById('fireButton');
    if (e.keyCode === 13) {
        fireButton.click();
        return false;
    }
}


window.onload = init;
*/




var view = {
    addX: function(eventObj) {
        var xCell = eventObj.target;
        var checkCell = xCell.id;
        //model.xCells.push(checkCell);
        if (xCell.classList.contains('xoX') || xCell.classList.contains('xoO')) {
            return false;
        } else {
         xCell.classList.add('xoX');
         model.startNumCell++;
        }
      
    },

    addO: function(eventObj) {
        var xCell = eventObj.target;
        var checkCell = xCell.id;
        //model.xCells.push(checkCell);
        if (xCell.classList.contains('xoO') || xCell.classList.contains('xoX')) {
            return false;
        } else {
         xCell.classList.add('xoO');
         model.startNumCell++;
        }
    },
    
};

var model = {
    startNumCell: 0,
    maxNumCell: 8,
    endToStart: 10,
    turn: 0,
    cellsToWin: 3,
    xCells: ['4', '6', '2'],
    oCells: ['0', '1'],

    xToO: function(eventObj) {
        if (model.startNumCell <= model.maxNumCell) {
            if (model.turn % 2 == 0) {
                if (model.startNumCell % 2 == 0) {
                    view.addX(eventObj);
                } else if (model.startNumCell % 2 != 0) {
                    view.addO(eventObj); 
                }
            } else if (model.turn % 2 != 0) {
                 if (model.startNumCell % 2 == 0) {
                    view.addO(eventObj);
                 } else if (model.startNumCell % 2 != 0) {
                    view.addX(eventObj); 
                 }
            }
        } else if (model.startNumCell > model.maxNumCell) {
            newGame();
            model.turn++;
          }
    },

    winners: [{winNums: ['0', '1', '2'], hits: ['', '', '']}, 
              {winNums: ['3', '4', '5'], hits: ['', '', '']},
              {winNums: ['6', '7', '8'], hits: ['', '', '']},
              {winNums: ['0', '3', '6'], hits: ['', '', '']},
              {winNums: ['1', '4', '7'], hits: ['', '', '']},
              {winNums: ['2', '5', '8'], hits: ['', '', '']},
              {winNums: ['0', '4', '8'], hits: ['', '', '']},
              {winNums: ['2', '4', '6'], hits: ['', '', '']}],



   gggg: function() {
        for (var i = 0; i < model.winners.length; i++) {
            var winner = model.winners[i];
            var index = winner.winNums.indexOf(model.xCells[i]);
            if (index >= 0) {
                winner.hits[index] = 'hit';
            } 
        }       
    },

    earlyWin: function() {
        for (var i = 0; i < model.sellsToWin; i++) {
            if (winner.hits[i] !== 'hit') {
                return false;
            }
        } return true;
    }

};






function init() {
    var cell = document.getElementsByClassName('td');
    for (var i = 0; i < cell.length; i++) {
        cell[i].onclick = model.xToO;
    } 
}

function newGame() {
    var cells = document.getElementsByClassName('td');
    for (var i = 0; i < cells.length; i++) {
        cells[i].classList.remove('xoX', 'xoO');
    }
    model.startNumCell = 0;
}



window.addEventListener('load', init);


/*
var xxx = [];
var reName = 'Photo/IMG_2598.jpg';

function init() {
var felix = document.getElementsByClassName('fex');
for (var i = 0; i < felix.length; i++) {
    felix[i].onmouseover = showFelix;
    felix[i].onmouseout = reShowFelix;
}
};

function showFelix(eventObj) {
    var felixImg = eventObj.target;
    var name = felixImg.getAttribute('src');
    xxx.push(name);
    
    felixImg.src = reName;
    

setTimeout(felixBack, 2000, felixImg);
}
/*
function felixBack(felixImg) {
    var name = 'Photo/VGiU1InN-aE.jpg';
    felixImg.src = name;
}

function reShowFelix(eventObj) {
    var felixImg = eventObj.target;
    felixImg.src = xxx;

}
*/
/*
function init() {
    var map = document.getElementById('map');
    map.onmousemove = showCoords;
}
function showCoords(eventObj) {
    var map = document.getElementById('coords');
    var x = eventObj.clientX;
    var y = eventObj.clientY;
    map.innerHTML = 'Map coordinates: ' + x + ', ' + y;
}
*/

numbButtons: function(eventObj) {
        var theNumbButton = eventObj.target.textContent;
        if (calcModel.sign.length == 0) {
            calcModel.numbArr.push(theNumbButton);
            calcView.numbShow();
        } else {
           calcModel.numbArrTwo.push(theNumbButton);
           calcView.numbShowTwo();
        }
    },
    numbButtonsTwo: function(eventObj) {
        var theNumbButton = eventObj.target.textContent;
        calcModel.numbArrTwo.push(theNumbButton);
        calcView.numbShowTwo();
    },
    theSign: function(eventObj) {
        var checkSign = eventObj.target.textContent;
        if (calcModel.sign.length == 0) {
            calcModel.sign.push(checkSign);
        } else {
            calcModel.sign.splice(0);
            calcModel.sign.push(checkSign);
        }
    },
    calculations: function() {
      arrToNumb();
      console.log(arrToNumb()); 
    }

}



function numButtons() {
    var theNumButtons = document.getElementsByClassName('numButton');
    for (var i = 0; i < theNumButtons.length; i++) {
        theNumButtons[i].onclick = calcModel.numbButtons;
    }
}
function signButtons() {
    var theSignButton = document.getElementsByClassName('sign');
    for (var i = 0; i < theSignButton.length; i++) {
        theSignButton[i].onclick = calcModel.theSign;
    }
}
function equalityButton() {
    var theEqualityButton = document.getElementById('equally');
    theEqualityButton.onclick = calcModel.calculations;
}
function arrToNumb() {
    for (i = 0; i < calcModel.numbArr.length; i++) {
        var number = calcModel.numbArr.shift();
    } return number;
} 
