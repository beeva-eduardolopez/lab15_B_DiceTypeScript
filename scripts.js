var arrayDice = [];
var Dice = (function () {
    function Dice() {
    }
    Dice.prototype.insert = function () {
        var _this = this;
        var square = document.createElement('div');
        square.id = arrayDice.length.toString();
        this.id = square.id;
        square.className = 'dice';
        square.addEventListener('click', function (event) {
            _this.roll();
        });
        square.addEventListener('dblclick', function (event) {
            _this.delete();
        });
        document.getElementById('dices-container').appendChild(square);
        var number = Math.floor(Math.random() * 5) + 1;
        document.getElementById(square.id).innerText = number.toString();
    };
    Dice.prototype.roll = function () {
        this.value = (Math.floor(Math.random() * 5) + 1).toString();
        document.getElementById(this.id).innerText = this.value.toString();
    };
    Dice.prototype.delete = function () {
        arrayDice.splice(parseInt(this.id), 1);
        document.getElementById(this.id).remove();
    };
    return Dice;
}());
function createDice() {
    var dice = new Dice();
    dice.insert();
    arrayDice.push(dice);
}
function rollDice() {
    for (var i = 0; i < arrayDice.length; i++) {
        arrayDice[i].roll();
    }
}
function sumDice() {
    var sumValue = 0;
    for (var i = 0; i < arrayDice.length; i++) {
        sumValue += parseInt(arrayDice[i].value);
    }
    alert('Sum of values of dice are: [' + sumValue + ']');
}
