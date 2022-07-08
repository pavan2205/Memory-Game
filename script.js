const cardArray=[
    {
        name:"romanreigns",
        img:"./images/romanreigns.jpg"
    },
    {
        name:"brocklesnar",
        img:"./images/brocklesnar.jpg"
    },
    {
        name:"undertaker",
        img:"./images/undertaker.jpg"
    },
    {
        name:"johncena",
        img:"./images/johncena.webp"
    },
    {
        name:"reymysterio",
        img:"./images/reymysterio.jpg"
    },
    {
        name:"finnbalor",
        img:"./images/finnbalor.jpg"
    },
    {
        name:"sethrollins",
        img:"./images/sethrollins.jpg"
    },
    {
        name:"randyorton",
        img:"./images/randyorton.webp"
    },
    {
        name:"romanreigns",
        img:"./images/romanreigns.jpg"
    },
    {
        name:"brocklesnar",
        img:"./images/brocklesnar.jpg"
    },
    {
        name:"undertaker",
        img:"./images/undertaker.jpg"
    },
    {
        name:"johncena",
        img:"./images/johncena.webp"
    },
    {
        name:"reymysterio",
        img:"./images/reymysterio.jpg"
    },
    {
        name:"finnbalor",
        img:"./images/finnbalor.jpg"
    },
    {
        name:"sethrollins",
        img:"./images/sethrollins.jpg"
    },
    {
        name:"randyorton",
        img:"./images/randyorton.webp"
    },
]
cardArray.sort(()=>0.5-Math.random())//random generator
const restart=document.getElementById('restart')
const gridDisplay=document.querySelector('#grid');
function createBoard(){
for(let i=0;i<cardArray.length;i++){
    const card=document.createElement('img');
    card.setAttribute('height',"120px")
    card.setAttribute('width',"120px")
    card.setAttribute('src',`./images/wwe${i}.png`);
    card.setAttribute('data-id',i)
    card.setAttribute('border',"5px solid #0000FF")
    card.addEventListener('click',flipcard)
    gridDisplay.appendChild(card);
}
}
createBoard();
let cardchosen=[];
let cardchosenIds=[];
let cardsWon=[];
let results=document.getElementById("result");
function flipcard(){
    let cardId=this.getAttribute('data-id')
    cardchosen.push(cardArray[cardId].name)
    cardchosenIds.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    console.log(cardchosenIds)
    if(cardchosen.length===2){
        setTimeout(checkMatch,500)
    }
}

//function to check match
function checkMatch(){
    let cards=document.querySelectorAll('img')
    console.log("Check for Match");
    if(cardchosen[0]==cardchosen[1]){
        console.log('You found a Match')
        cards[cardchosenIds[0]].setAttribute('border',"5px solid yellow")
        cards[cardchosenIds[1]].setAttribute('border',"5px solid yellow")
        cards[cardchosenIds[0]].removeEventListener('click',flipcard)
        cards[cardchosenIds[1]].removeEventListener('click',flipcard)
        cardsWon.push(cardchosen)
    }
    else{
        cards[cardchosenIds[0]].setAttribute('src',`./images/wwe${cardchosenIds[0]}.png`)
        cards[cardchosenIds[1]].setAttribute('src',`./images/wwe${cardchosenIds[1]}.png`);
    }
    results.textContent=cardsWon.length
    cardchosen=[];
    cardchosenIds=[];
    if(cardsWon.length===cardArray.length/2){
        results.textContent="You Won"
    }
}