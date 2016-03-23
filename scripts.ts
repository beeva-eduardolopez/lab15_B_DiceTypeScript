var arrayDice = [];
class Dice {
    value: string;
    id: string;
    insert() {
        var square = document.createElement('div');
        square.id = arrayDice.length.toString();
        this.id = square.id;
        square.className = 'dice';
        square.addEventListener('click', (event) => {
            this.roll();
        });
        square.addEventListener('dblclick', (event) => {
            this.delete();
        });
        document.getElementById('dices-container').appendChild(square);
        var number = Math.floor(Math.random() * 5) + 1;
        document.getElementById(square.id).innerText = number.toString();
    }
    roll() {
        this.value = (Math.floor(Math.random() * 5) + 1).toString();
        document.getElementById(this.id).innerText = this.value.toString();
    }
    delete() {
        arrayDice.splice(parseInt(this.id),1);
        document.getElementById(this.id).remove();
    }
}
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
