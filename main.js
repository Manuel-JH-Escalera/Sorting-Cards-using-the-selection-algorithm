const cardsHand = document.querySelector("#cardsHand");
const containerLog = document.querySelector("#containerLog");
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const suit = ["hearth", "diamond", "clubs", "spades"];
let cArray = [];

function newCard(chosenCard, container){
    let blankCard = document.createElement("div");
    container.appendChild(blankCard);
    blankCard.style.backgroundColor = "#FFFFFF";
    blankCard.style.width = "55px";
    blankCard.style.height = "100%";
    blankCard.style.border = "solid 1px gray",
    blankCard.style.borderRadius = "5px";
    blankCard.style.marginLeft = "4px";
    blankCard.style.display = "inline-block";
    blankCard.style.fontSize = "20px";
    blankCard.style.boxShadow = "5px 10px black";
    let upSymbol = document.createElement("div");
    blankCard.appendChild(upSymbol);
    upSymbol.style.marginLeft = "3px";
    let value = document.createElement("div");
    blankCard.appendChild(value);
    value.style.marginTop = "4px";
    value.style.textAlign = "center";
    let downSymbol = document.createElement("div");
    blankCard.appendChild(downSymbol);
    downSymbol.style.marginRight = "3px";
    downSymbol.style.marginTop = "11px";
    downSymbol.style.transform = "rotate(-180deg)";
    giveColor(chosenCard, upSymbol, value, downSymbol);
    giveValue(chosenCard, value);
    giveSuit(chosenCard, upSymbol, downSymbol);
}

function chooseCard(arr1, arr2){
    let cardValues = [];
    cardValues.push(arr1[Math.floor(Math.random()*arr1.length)]);
    cardValues.push(arr2[Math.floor(Math.random()*arr2.length)]);
    return cardValues;
}

function giveColor(arr, elem1, elem2, elem3){
    if(arr[1] === "hearth" || arr[1] === "diamond"){
        elem1.style.color = "red";
        elem2.style.color = "red";
        elem3.style.color = "red";
    }
}
function giveSuit(arr, elem1, elem2){
    if(arr[1] === "hearth"){
        elem1.innerHTML = "♥";
        elem2.innerHTML = "♥";
    }
    else if(arr[1] === "diamond"){
        elem1.innerHTML = "♦";
        elem2.innerHTML = "♦";
    }
    else if(arr[1] === "clubs"){
        elem1.innerHTML = "♣";
        elem2.innerHTML = "♣";
    }
    else{
        elem1.innerHTML = "♠";
        elem2.innerHTML = "♠";
    }
}
function giveValue(arr, elem){
    if(arr[0] >= 2 && arr[0]<= 10){
        elem.innerHTML = arr[0];
    }
    else if(arr[0] === 1){
        elem.innerHTML = "A";
    }
    else if(arr[0] === 11){
        elem.innerHTML = "J";
    }
    else if(arr[0] === 12){
        elem.innerHTML = "Q";
    }
    else{
        elem.innerHTML = "K";
    }
}

function clear(container){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function selectionSort(){
    let cards = cArray.slice();
    let init = 0;
    let iteration = 0;
    while(init < cards.length){
        for(let i = init+1; i<cards.length; i++){
            if(cards[init][0] > cards[i][0]){
                let lowestCard = cards[i];
                cards[i] = cards[init];
                cards[init] = lowestCard;
                let newContainer = document.createElement("div");
                containerLog.appendChild(newContainer);
                newContainer.style.height = "80px";
                newContainer.style.marginBottom = "10px";
                let containerNumber = document.createElement("div");
                containerNumber.style.float = "left";
                containerNumber.style.width = "20px";
                newContainer.appendChild(containerNumber);
                let iterationNumber = document.createElement("span");
                iterationNumber.innerHTML = iteration;
                containerNumber.appendChild(iterationNumber);
                for(let j=0; j<cards.length; j++){
                    newCard(cards[j], newContainer);
                }
            iteration++;   
            }
        }
        init++;
    }
}

document.querySelector("#drawButton").addEventListener("click", function(){
    cArray = [];
    clear(cardsHand);
    clear(containerLog);
    let input = document.querySelector("#nCards");
    let numberOfCards = parseInt(input.value);
    for( let i=0; i<numberOfCards; i++){
        let chosenCard = chooseCard(values, suit);
        cArray.push(chosenCard);
        newCard(chosenCard, cardsHand);
    }
});

document.querySelector("#selectButton").addEventListener("click", function() {
    clear(containerLog);
    selectionSort();
});
