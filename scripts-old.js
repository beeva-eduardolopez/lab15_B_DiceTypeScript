// var dices = document.getElementsByClassName('dice');

var face0 = new Image();
face0.src = "dice1.png";
var face1 = new Image();
face1.src = "dice2.png";
var face2 = new Image();
face2.src = "dice3.png";
var face3 = new Image();
face3.src = "dice4.png";
var face4 = new Image();
face4.src = "dice5.png";
var face5 = new Image();
face5.src = "dice6.png";

// var Dice = function (value) {
//     this.value = value;
// };

// function rollDice() {
//     for (var index = 0; index < dices.length; index++) {
//         var value = Math.floor(Math.random() * 5) + 1;
//         document.images["mydice" + index].src = eval("face" + value + ".src");
//     }
// }
// function createDice() {
//     var id = dices.length;
//     var html = '<div class="dice" id="' + id + '"> <img src="dice1.png" name="mydice'+ id + '"> </div>';
//     var diceOOP = new Dice(html);
//     document.getElementById("dices-container").innerHTML += diceOOP.value;
// }
var dice = [];

var Dice = function () {
    this.value = null;
    this.div = null;
    this.insert = function () {
        this.div = document.createElement('div');
        this.div.className = 'dice';
        var id = dice.length;
        this.div.id = id;
        this.roll();
        document.getElementById('dices-container').appendChild(this.div);
    }
    this.roll = function () {
        var num = Math.floor(Math.random() * 5) + 1;
        this.value = num;
        this.div.innerHTML = num;
    }
    this.remove = function () {
        this.div.ondblclick = function deleteDice() {
            dice.splice(this.id,1);
            this.remove();
        }
    }
};

function createDice() {
    var die = new Dice();
    die.insert();
    dice.push(die);
    die.remove();
}


function rollDice() {
    for (var index = 0; index < dice.length; index++) {
        var element = dice[index];
        element.roll();
    }
}

function sumDice() {
    var sumValue = 0;
    for (var index = 0; index < dice.length; index++) {
        var element = dice[index];
        var dieValue = element.value;
        sumValue += dieValue;
    }
    alert('Sum of values of dice are: [' + sumValue + ']');
}
