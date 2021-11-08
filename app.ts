let dieArray: Die[] = [];
let divCount: number = 1;

const rollDieButton = document.createElement("button");
rollDieButton.id = "rollDieButton";
const buttonText = document.createTextNode("Roll Die");
rollDieButton.append(buttonText);
document.body.append(rollDieButton);
document.getElementById("rollDieButton").addEventListener("click", () => {
    dieArray.forEach((die) => die.roll());
});

const dieContainer = document.createElement("div");
dieContainer.setAttribute("id", "dieContainer");
document.body.append(dieContainer);
document.getElementById("dieContainer").className += "die-container";

document.getElementById("newDieButton").addEventListener("click", () => {
    new Die();   
});

const sumDieButton = document.createElement("button");
const sumDieText = document.createTextNode("Add All Die");
sumDieButton.setAttribute("id", "sumDieButton");
sumDieButton.append(sumDieText);
document.body.append(sumDieButton);
document.getElementById("sumDieButton").addEventListener("click", () => {
    sumDice();
});


class Die {
    div: HTMLDivElement;
    constructor() {
        this.div = document.createElement("div");
        this.div.id = (`${divCount}`);
        this.div.setAttribute("id", this.div.id);
        this.roll();
        this.div.classList.add("die-style");
        document.getElementById("dieContainer").append(this.div);
        dieArray.push(this);
        console.log(dieArray)
        document.getElementById(this.div.id).addEventListener("click", () => {
            this.roll();
        });
        document.getElementById(this.div.id).addEventListener("dblclick", () => {
            this.removeDie();
        });
        divCount++;
    }

    roll() {
        let dieValue = randomVal(1, 7);
        let divText = document.createTextNode(`${dieValue}`)
        this.div.append(divText);
    };

    removeDie() {
        this.div.remove();
        dieArray.splice(dieArray.indexOf(this));
    };
};

let sumDice = () => {
    let total = dieArray.reduce(addDie, 0);
    alert(total);
};

let addDie = (a: number, b: any) => {
    console.log(b)
    return a + b.value;
};

function randomVal(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
};