const cardArray = [
    {
        name:'donut',
        img:'images/donut.jpeg',
    },
    {
        name:'ice cream',
        img:'images/ice-cream.jpeg',
    },
    {
        name:'moon',
        img:'images/moon.jpeg'
    },
    {
        name:'pop corn',
        img:'images/pop-corn.jpeg',
    },
    {
        name:'sun glasses',
        img:'images/sun-glasses.png',
    },
    {
        name:'sun',
        img:'images/sun.jpeg'
    },
    {
        name:'donut',
        img:'images/donut.jpeg',
    },
    {
        name:'ice cream',
        img:'images/ice-cream.jpeg',
    },
    {
        name:'moon',
        img:'images/moon.jpeg'
    },
    {
        name:'pop corn',
        img:'images/pop-corn.jpeg',
    },
    {
        name:'sun glasses',
        img:'images/sun-glasses.png',
    },
    {
        name:'sun',
        img:'images/sun.jpeg'
    }
]

cardArray.sort(() => 0.5 - Math.random());
//console.log(cardArray);

const grid = document.querySelector("#grid");
const result = document.querySelector("#result")
const won = document.querySelector("#won")
//const restart = document.querySelector("#restart")
let  cardChosen = [];
let  cardChosenIds = [];
const cardWon = [];


function createBoard() {
    for(let i = 0; i < cardArray.length; i++){
       const card = document.createElement('img');
       card.setAttribute('src', 'images/colors.jpeg');
       console.log(cardArray, 'img')
       card.setAttribute('data-id', i);
       grid.append(card);
       card.addEventListener('click',flipCard)
    
    }
}

createBoard();

function checkMatch() {
   const cards = document.querySelectorAll('img')
   const oneSelect = cardChosenIds[0];
   const twoSelect = cardChosenIds[1];
   if(oneSelect == twoSelect) {
       alert('You have click the same image')
   }
    console.log('check for matchh');
    if(cardChosen[0] == cardChosen[1]){
        //alert('You Find!');
        cards[oneSelect].setAttribute('src', 'images/background.jpeg');
        cards[twoSelect].setAttribute('src', 'images/background.jpeg');
        cards[oneSelect].removeEventListener('click', flipCard);
        cards[twoSelect].removeEventListener('click', flipCard);
        cardWon.push(cardChosen)
    }else{
        cards[oneSelect].setAttribute('src', 'images/colors.jpeg');
        cards[twoSelect].setAttribute('src', 'images/colors.jpeg');
        //alert('Keep Trying...')
    }
    result.innerHTML =  cardWon.length
    cardChosen = [];
    cardChosenIds = [];

    if(cardWon.length == (cardArray.length / 2)){
       alert('Congratulations, You Won!')
    }
}

//checkMatch();

function flipCard () {
    const cardId = this.getAttribute('data-id');
    cardChosen.push(cardArray[cardId].name);
    cardChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if(cardChosen.length === 2){
        setTimeout(checkMatch, 500);
    }


}

document.querySelector('#restart').addEventListener('click', function(){
    window.location.reload();
    return false;
  });


