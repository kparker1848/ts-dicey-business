var dieArray = [];
var divCount = 1;
var rollDieButton = document.createElement("button");
rollDieButton.id = "rollDieButton";
var buttonText = document.createTextNode("Roll Die");
rollDieButton.append(buttonText);
document.body.append(rollDieButton);
document.getElementById("rollDieButton").addEventListener("click", function () {
    dieArray.forEach(function (die) { return die.roll(); });
});
var dieContainer = document.createElement("div");
dieContainer.setAttribute("id", "dieContainer");
document.body.append(dieContainer);
document.getElementById("dieContainer").className += "die-container";
document.getElementById("newDieButton").addEventListener("click", function () {
    new Die();
});
var sumDieButton = document.createElement("button");
var sumDieText = document.createTextNode("Add All Die");
sumDieButton.setAttribute("id", "sumDieButton");
sumDieButton.append(sumDieText);
document.body.append(sumDieButton);
document.getElementById("sumDieButton").addEventListener("click", function () {
    sumDice();
});
var Die = /** @class */ (function () {
    function Die() {
        var _this = this;
        this.div = document.createElement("div");
        this.div.id = ("" + divCount);
        this.div.setAttribute("id", this.div.id);
        this.roll();
        this.div.classList.add("die-style");
        document.getElementById("dieContainer").append(this.div);
        dieArray.push(this);
        console.log(dieArray);
        document.getElementById(this.div.id).addEventListener("click", function () {
            _this.roll();
        });
        document.getElementById(this.div.id).addEventListener("dblclick", function () {
            _this.removeDie();
        });
        divCount++;
    }
    Die.prototype.roll = function () {
        var dieValue = randomVal(1, 7);
        var divText = document.createTextNode("" + dieValue);
        this.div.append(divText);
    };
    ;
    Die.prototype.removeDie = function () {
        this.div.remove();
        dieArray.splice(dieArray.indexOf(this));
    };
    ;
    return Die;
}());
;
var sumDice = function () {
    var total = dieArray.reduce(addDie, 0);
    alert(total);
};
var addDie = function (a, b) {
    console.log(b);
    return a + b.value;
};
function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
;
