document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random()) //the cards will be sorted randomly and the order is decided based on whether the its negative or positive pair wise


const grid= document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen=[]
let cardsChosenId =[]
let cardsWon =[]

//create the board
function createBoard()
{
  for(let i=0;i<cardArray.length;i++)
  {
    const card=document.createElement('img')
    card.setAttribute('src','images/blank.png')
    card.setAttribute('data-id',i)
    card.addEventListener('click',flipCard)
    grid.appendChild(card)
  }
}

//check for matches
function checkForMatch()
{
  const cards=document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]

  if(optionOneId==optionTwoId)
  {
    cards[optionOneId].setAttribute('src','images/blank.png')
    cards[optionTwoId].setAttribute('src','images/blank.png')
    alert('You have clicked the same image!')
  }
  else if (cardsChosen[0]==cardsChosen[1]) {
    alert('you found a match')
    cards[optionOneId].setAttribute('src','images/blank.png')
    cards[optionTwoId].setAttribute('src','images/blank.png')
    cards[optionOneId].removeEventListener('click',flipCard)
    cards[optionTwoId].removeEventListener('click',flipCard)
    cardsWon.push(cardsChosen)
  }
  else {
    cards[optionOneId].setAttribute('src','images/blank.png')
    cards[optionTwoId].setAttribute('src','images/blank.png')
    alert('Sorry,try again')

  }
  cardsChosen=[]
  cardsChosenId=[]
  resultDisplay.textContent = cardsWon.length
  if(cardsWon.length === cardArray.length/2)
  {
    resultDisplay.innerHTML="Congrats! you found them all"

  }
}

//flip your card
function flipCard()
{
  let cardId = this.getAttribute('data-id')
  cardsChosen.push(cardsArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src',cardArray[cardId].img)
  if(cardsChosen.length ===2)
  {
    setTimeout(checkForMatch,500)
  }
}

createBoard()
})
