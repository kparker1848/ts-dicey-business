let dieArray: Die[] = [];
let divCount: number = 1;

const rollDieButton = document.createElement("button");
rollDieButton.id = "rollDieButton";
rollDieButton.innerHTML = "Roll Die";
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
sumDieButton.innerHTML ="Add All Die";
sumDieButton.setAttribute("id", "sumDieButton");
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
        this.div.innerHTML = "";
        let dieValue = randomVal(1, 7);
        this.div.innerHTML = (`${dieValue}`);
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