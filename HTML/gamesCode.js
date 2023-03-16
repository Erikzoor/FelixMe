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
window.addEventListener('load', callPic);
window.addEventListener('load', restartCardGame);
window.addEventListener('load', numButtons);
window.addEventListener('load', signButtons);
window.addEventListener('load', equalityButton);
window.addEventListener('load', deletingAll);




var zzz = {
    showThePic: function(eventObj) {
        var eachPic = eventObj.target;
        if (eachPic.classList.contains('eachPicImgShow')) {
            return false;
        } else {
            eachPic.setAttribute('class', 'eachPicImgShow');
            var getPicSrc = eachPic.getAttribute('src');
            xxx.picOne.push(getPicSrc);
        }
    },
    endGameBox: function() {
        var showEndGameRestart = document.getElementById('endGameBox');
        var removeEndGameRestart = document.getElementById('affliction1');
        removeEndGameRestart.setAttribute('class', 'displayNone');
        zzz.resultOfCardGame();
        showEndGameRestart.hidden = false;
    },
    resultOfCardGame: function() {
        var cardsNums = document.getElementById('cardsNumb');
        var mistakes = document.getElementById('mistakes');
        cardsNums.textContent = 'Количество карт: ' + xxx.picsNumbs;
        mistakes.textContent = 'Количество ошибок: ' + xxx.guesses;
    }
    
};

var xxx = {
    picsNumbs: 18,
    guesses: 0,
    maxClick: 2,
    startClick: 0,
    picOne: [],
    picTwo: [],
    srcArrOne: ['Photo/gameofcards/IMG_2485.jpg', 'Photo/gameofcards/IMG_2454.jpg', 'Photo/gameofcards/IMG_2598.jpg', 'Photo/gameofcards/IMG_2549.jpg', 'Photo/gameofcards/IMG_1352.jpg', 
                'Photo/gameofcards/IMG_2485.jpg', 'Photo/gameofcards/IMG_2454.jpg', 'Photo/gameofcards/IMG_2598.jpg', 'Photo/gameofcards/IMG_2549.jpg', 'Photo/gameofcards/IMG_1352.jpg',
                'Photo/gameofcards/IMG_1640.jpg', 'Photo/gameofcards/IMG_1753.jpg', 'Photo/gameofcards/IMG_2146.jpg', 'Photo/gameofcards/IMG_1677.jpg',
                'Photo/gameofcards/IMG_1640.jpg', 'Photo/gameofcards/IMG_1753.jpg', 'Photo/gameofcards/IMG_2146.jpg', 'Photo/gameofcards/IMG_1677.jpg'],
    

    shirtToPic: function(eventObj) {
            if (xxx.picOne.length == 0) {
                var eachPic = eventObj.target;
                var getPicId = eachPic.id;
                var kkk = document.getElementById(getPicId);
                xxx.picTwo.push(kkk);
                zzz.showThePic(eventObj);
            } else {
                var eachPic = eventObj.target;
                var getPicId = eachPic.id;
                var kkk = document.getElementById(getPicId);
                var index = xxx.picTwo.indexOf(kkk); 
                if (index != -1) {
                    return false;
                }
                else {
                    xxx.picTwo.push(kkk);
                    zzz.showThePic(eventObj);
                    if (xxx.picOne.length == 2) {
                        setTimeout(xxx.onlyTwoPics, 1000);

                    }
                }
            }
        
                
    }, 
        
    onlyTwoPics: function() {
            var eachPic = document.getElementsByClassName('eachPic');
            var firstPicSrc = xxx.picOne[0];
            var secondPicSrc = xxx.picOne[1];
            var firstPicId = xxx.picTwo[0];
            var secondPicId = xxx.picTwo[1];
            if (firstPicSrc == secondPicSrc) {
                var parentOfPic1 = firstPicId.parentElement;
                var parentOfPic2 = secondPicId.parentElement;
                parentOfPic1.setAttribute('class', 'displayNone')
                parentOfPic2.setAttribute('class', 'displayNone')
                xxx.picOne.splice(0);
                xxx.picTwo.splice(0);
                if (eachPic.length <= 0) {
                    zzz.endGameBox();
                } 

            } else if (firstPicSrc != secondPicSrc) {
                firstPicId.setAttribute('class', 'eachPicImg');
                secondPicId.setAttribute('class', 'eachPicImg');
                xxx.picOne.splice(0);
                xxx.picTwo.splice(0);
                xxx.guesses++;
                        
            }
    },

    theNewGame: function() {
        var showEndGameRestart = document.getElementById('endGameBox');
        var removeEndGameRestart = document.getElementById('affliction1');  
        for (var i = 0; i < xxx.picsNumbs; i++) {
            childOfshowAllCards = removeEndGameRestart.querySelectorAll('div.eachPic-Parrent > div');
            var imgIsOff = removeEndGameRestart.querySelectorAll('div.eachPic-Parrent > div > img');
            childOfshowAllCards[i].classList.remove('displayNone');
            childOfshowAllCards[i].classList.add('eachPic');
            imgIsOff[i].classList.remove('eachPicImgShow');
            imgIsOff[i].classList.add('eachPicImg');
        }

        showEndGameRestart.hidden = true;  
        removeEndGameRestart.setAttribute('class', 'gameOfPics containerForCards');
        xxx.guesses = 0;
        xxx.srcArrOne.push('Photo/gameofcards/IMG_2485.jpg', 'Photo/gameofcards/IMG_2454.jpg', 'Photo/gameofcards/IMG_2598.jpg', 'Photo/gameofcards/IMG_2549.jpg', 'Photo/gameofcards/IMG_1352.jpg', 
                'Photo/gameofcards/IMG_2485.jpg', 'Photo/gameofcards/IMG_2454.jpg', 'Photo/gameofcards/IMG_2598.jpg', 'Photo/gameofcards/IMG_2549.jpg', 'Photo/gameofcards/IMG_1352.jpg',
                'Photo/gameofcards/IMG_1640.jpg', 'Photo/gameofcards/IMG_1753.jpg', 'Photo/gameofcards/IMG_2146.jpg', 'Photo/gameofcards/IMG_1677.jpg',
                'Photo/gameofcards/IMG_1640.jpg', 'Photo/gameofcards/IMG_1753.jpg', 'Photo/gameofcards/IMG_2146.jpg', 'Photo/gameofcards/IMG_1677.jpg');
        ahahah();
        

        

    }    
};



function callPic() {
    var eachPic = document.getElementsByClassName('eachPicImg');
    for (var i = 0; i < eachPic.length; i++) {
        eachPic[i].onclick = xxx.shirtToPic;
    }
}

function restartCardGame() {
    var clickToRestart = document.getElementById('StartTheCards');
    clickToRestart.onclick = xxx.theNewGame;
}


function ahahah() {
    var getClassForSrc = document.getElementsByClassName('eachPicImg');
    for (var i = 0; i < xxx.picsNumbs; i++) {
        var randomSrcOne = Math.floor(Math.random() * (xxx.srcArrOne.length));
        getClassForSrc[i].setAttribute('src', xxx.srcArrOne[randomSrcOne]);
        xxx.srcArrOne.splice(randomSrcOne, 1);

    }
}





var calcView = {
   numbShow: function() {
    var display = document.getElementById('displayOfCalc');
    display.textContent = calcModel.numbArr.join('');
   },
   numbShowTwo: function() {
    var display = document.getElementById('displayOfCalc');
    display.textContent = calcModel.numbArrTwo.join('');
   },

   signShow: function() {
    var display = document.getElementById('displayOfCalc');
    display.textContent = calcModel.sign.join('');
   },
   resultShow: function() {
    var display = document.getElementById('displayOfCalc');
    display.textContent = calcModel.result;
   },
   deleting: function() {
    var display = document.getElementById('displayOfCalc');
    display.textContent = '';
   }
}


var calcModel = {
    numbArr: [],
    numbArrTwo: [],
    result: [],
    sign: [],
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
        if (calcModel.sign.indexOf('+') != -1) {
            calcModel.result = Number(calcModel.numbArr.join('')) + Number(calcModel.numbArrTwo.join(''));
            calcView.resultShow();
            
        } else if (calcModel.sign.indexOf('-') != -1) {
            calcModel.result =  Number(calcModel.numbArr.join('')) - Number(calcModel.numbArrTwo.join(''));
            calcView.resultShow();
          
        } else if (calcModel.sign.indexOf('×') != -1) {
            calcModel.result = Number(calcModel.numbArr.join('')) * Number(calcModel.numbArrTwo.join(''));
            calcView.resultShow();
            
        } else if (calcModel.sign.indexOf('÷') != -1) {
            calcModel.result = Number(calcModel.numbArr.join('')) / Number(calcModel.numbArrTwo.join(''));
            calcView.resultShow();
        } 
    },
    purgeAll: function() {
        calcView.deleting();
        calcModel.numbArr.splice(0);
        calcModel.numbArrTwo.splice(0);
        calcModel.sign.splice(0);
        calcModel.result.splice(0);
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
function deletingAll() {
    var deletingAll = document.getElementById('AC');
    deletingAll.onclick = calcModel.purgeAll;
}
 




/* .SORT */
var passengers = [{name: 'Всеволод Ануфриев', drank: '1200'},
                  {name: 'Эрнест Колесников', drank: '300'},
                  {name: 'Климентий Тарасенко', drank: '1100'},
                  {name: 'Дмитрий Зезюлин', drank: '800'},
                  {name: 'Инна Кроткова', drank: '450'},
                  {name: 'Алина Сафина', drank: '600'}]



function compareVodka(vodkaA, vodkaB) {
   return vodkaB.drank - vodkaA.drank;
}

passengers.sort(compareVodka);
console.log(passengers);


/* Firstclass Functions */

var alcos = [{name: 'Всеволод Ануфриев', faceId: true, drink: 'vodka'},
             {name: 'Эрнест Колесников', faceId: true, drink: 'beer'},
             {name: 'Климентий Тарасенко', faceId: true, drink: 'beer'},
             {name: 'Дмитрий Зезюлин', faceId: true, drink: 'vodka'},
             {name: 'Инна Кроткова', faceId: true, drink: 'beer'},
             {name: 'Алина Сафина', faceId: false, drink: 'vodka'}]


function processAlcos(alcos, testFaceId) {
    for (var i = 0; i < alcos.length; i++) {
        if (testFaceId(alcos[i])) {
            return false;
        }
    } return true;
}

function checkFaceId(alco) {
    return (!alco.faceId);
}
function enemyList(alco) {
    return (alcos.name === 'Инна Кроткова');
}


var allCanDrink = processAlcos(alcos, checkFaceId);
if (!allCanDrink) {
    console.log('Бухать нельзя');
}

function printAlcos(alco) {
    console.log(alco);
}

processAlcos(alcos, printAlcos);

/* --------------------------*/ 

function ourAlcos(alcos) {
    for (var i = 0; i < alcos.length; i++) {
        serveAlcos(alcos[i]);
    }
}

function drinkOrder(alco) {
    var orderFunction;

    if (alco.drink === 'vodka') {
        orderFunction = function() {
            console.log('This is your VODKA, sir ' + alco.name);
        };
    } else if (alco.drink === 'beer'){
            orderFunction = function() {
                console.log('my boy, BEEER yeah! ' + alco.name);
            };
        } return orderFunction;
        
    } 

function serveAlcos(alco) {
    var getYourDrink = drinkOrder(alco);
    getYourDrink();
    getYourDrink();

}
ourAlcos(alcos);


/* ГЕНЕРАТОР ЧИСЕЛ */ 

window.onload = function() {
    var numbFrom;
    var numbTo;

    var generateNumb = document.getElementById('generateNumb');
    generateNumb.onclick = function() {
        var nFrom = document.getElementById('NumberFrom').value;
        var nTo  = document.getElementById('NumberTo').value;
        
        generateNumb.classList.add('randomNumber-scaleButton');
        setTimeout(function() {
            generateNumb.classList.remove('randomNumber-scaleButton');
        }, 100);
      
        var randomResult = document.getElementById('randomNumber_result');

        var generatAndShow = function(min, max) {
            var randNumb = Number(min) + Math.random() * (Number(max) + 1 - Number(min));
            return Math.floor(randNumb);
        };
        randomResult.textContent = generatAndShow(nFrom, nTo);

    };  
    
}



/* УПРАЖНЕНИЯ */ 

var now = new Date();
console.log(now);
var dateString = now.toString();
console.log(dateString);
var theYear = now.getFullYear();
console.log(theYear);
var theDayOfWeek = now.getDay();
console.log(theDayOfWeek);
var birthday = new Date("May 1, 1983 08:03 pm"); 
console.log(birthday);


var felixxx = new Array(3);
for (i = 0; i < felixxx.length; i++) {
    var gf = Math.floor(Math.random() * 11);
    felixxx[i] = gf;
}
console.log(felixxx);

var felixQ = felixxx.every(function(x) {
    return (x > 4);
});

console.log(felixQ);



//hasOwnProperty
function Dog(name, breed, weight) {
 this.name = name;
 this.breed = breed;
 this.weight = weight;
}

function ShowDog(name, breed, weight, handler) {
    Dog.call(this, name, breed, weight);
    this.handler = handler;
}

Dog.prototype.species = "Canine";

Dog.prototype.bark = function() {
 if (this.weight > 25) {
     console.log(this.name + " says Woof!");
 } else {
   console.log(this.name + " says Yip!");
   }
};

Dog.prototype.run = function() {
 console.log("Run!");
};

Dog.prototype.wag = function() {
 console.log("Wag!");
};

Dog.prototype.sit = function() {
    console.log(this.name + ' is now sitting');
}


ShowDog.prototype = new Dog();
ShowDog.prototype.constructor = ShowDog;

ShowDog.prototype.league = "Webville";

ShowDog.prototype.stack = function() {
    console.log("Stack");
};
ShowDog.prototype.bait = function() {
    console.log("Bait");
};
ShowDog.prototype.gait = function(kind) {
    console.log(kind + "ing");
};
ShowDog.prototype.groom = function() {
    console.log("Groom");
};


var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);

spot.bark = function() {
    console.log(this.name + ' says WOOF!');
}

var scotty = new ShowDog('Scotty', 'Scottish Terrier', 15, 'Cookie');
var beatrice = new ShowDog("Beatrice", "Pomeranian", 5, "Hamilton");


function Robot(name, year, owner) {
 this.name = name;
 this.year = year;
 this.owner = owner;
}
Robot.prototype.toString = function() {
    return this.name + ' Robot belonging to ' + this.owner;
}
var toy = new Robot("Toy", 2013, "Avary");
console.log(toy.toString());
console.log("Robot is: " + toy);



String.prototype.cliche = function() {
 var cliche = ["lock and load","touch base", "open the kimono"];
 for (var i = 0; i < cliche.length; i++) {
 var index = this.indexOf(cliche[i]);
 if (index >= 0) {
 return true;
 }
 }
 return false;
};

var sentences = ["I'll send my car around to pick you up.",
 "Let's touch base in the morning and see where we are",
 "We don't want to open the kimono, we just want to inform them."];
for (var i = 0; i < sentences.length; i++) {
 var phrase = sentences[i];
 if (phrase.cliche()) {
 console.log("CLICHE ALERT: " + phrase);
 }
}




/* ПОЛЕ ЧУДЕС */ 

var poleView = {

   
}

var poleModel = {
    hostPhrases: ['Выберите персонажей!\u{1F600}', ', крутите барабан!', 'Есть такая буква!!!', 'Такой буквы нет...', ''],
    hostSpeechStart: 0,
    playerOne: [],
    playerTwo: [],
    hostSpeach: function(text) {
        var speed = 50; 
        if (poleModel.hostSpeechStart < text.length) {
        document.getElementById("poleHost").textContent += text.charAt(poleModel.hostSpeechStart);
         poleModel.hostSpeechStart++;
        setTimeout(poleModel.hostSpeach, speed, text);
        }
    }

   
    

}

var poleController = {
    addName: function() {
        var firstChar = document.getElementById('firstChar');
        var secondChar = document.getElementById('secondChar');
    }

}

poleModel.hostSpeach(poleModel.hostPhrases[0]);



let serial = {
    name: 'name',
    rating: 0
}

let breakingBad = Object.create(serial);
breakingBad.name = 'Breaking Bad';
breakingBad.link = 'Photo/breakingBad.jpg';

let narko = Object.create(serial);
narko.name = 'Narko';
narko.link = 'Photo/narko.jpg';

let goT = Object.create(serial);
goT.name = 'Game of Thrones';
goT.link = 'Photo/got.jpg';

let tweenPeaks = Object.create(serial);
tweenPeaks.name = 'Tween Peaks';
tweenPeaks.link = 'Photo/tween.jpg';

let allSerials = [breakingBad.link, narko.link, goT.link, tweenPeaks.link];

let showTheSerial = function() {
    let z = document.getElementById('serialOne');
    let x = document.getElementById('serialTwo');
    let serialOT = [z, x];

    for (i = 0; i < 2; i++) {
        let img = document.createElement('img');
        serialOT[i].append(img);
        for (let j = 0; j < 2; j++) {
            let rndSerial = Math.floor(Math.random() * allSerials.length); 
            img.setAttribute('src', allSerials[rndSerial]);
        }

    }
    serialOT[i].onclick = function() {
        alert('xyu');
    }
    
    
 
}

window.onload = showTheSerial;



