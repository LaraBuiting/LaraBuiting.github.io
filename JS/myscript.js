let dogimg = document.getElementById("dogImg");
let buttonmaniaNum = document.getElementById("buttonManiaNum");
let shownPlanet = document.getElementById("shownPlanet");
let inputText = document.getElementById("inputText");
let planetList = document.getElementById("planetList");

let buttonmaniaNewNum = 0;

let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
let currentPlanet = 0;

function hideDog(){
    dogimg.style.display="none";
}

function showDog(){
    dogimg.style.display="block";
}

function reset(){
    buttonmaniaNewNum = 0;
    buttonmaniaNum.innerText = buttonmaniaNewNum;

}

function plus1(){
    buttonmaniaNewNum++;
    buttonmaniaNum.innerText = buttonmaniaNewNum;
}

function triple(){
    buttonmaniaNewNum*3;
    buttonmaniaNum.innerText = buttonmaniaNewNum;
}

function previous(){
    if (currentPlanet>0){
        currentPlanet = currentPlanet - 1;
        shownPlanet.innerText = planets[currentPlanet];
    }
}

function next() {
    if (currentPlanet < planets.length - 1) {
        currentPlanet = currentPlanet + 1;
        shownPlanet.innerText = planets[currentPlanet];
    }
}

function boom(){
    planets.shift();
}

function addPlanet(){
    planets.push("planet");
}

function addPlanet2(){
    input = inputText.value;
    planets.push(input);
}

function showAllPlanets(){
    planetList.innerText = planets.toString();
}