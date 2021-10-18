const squares = document.querySelectorAll('.square')
const mole= document.querySelector('.mole')
const timeLeft=document.querySelector('#time-left')
const score =document.querySelector('#score')

let result=0
let hitPosition
let gamelength=30
let currentTime=gamelength
let timerID = null
let countDownTimerID=0


function randomSquare(){
    squares.forEach(square =>{
        square.classList.remove('mole')
    })
    let randomSquare = squares[Math.floor(Math.random()*8)]
    randomSquare.classList.add('mole')
    hitPosition=randomSquare.id
}

squares.forEach(square=>{
    square.addEventListener('mousedown', () => {
        if(square.id == hitPosition)
        {
            result++
            score.textContent = result
            hitPosition= null
        }
    })
})


function moveMole() {
    timerID=setInterval(randomSquare,400)
}

//start
function start() {
    moveMole()
    countDownTimerID = setInterval(countDown, 1000)
}






function countDown(){
    currentTime--
    timeLeft.textContent=currentTime

    if (currentTime==0){
        clearInterval(countDownTimerID)
        clearInterval(timerID)
        countDownTimerID=currentTime=gamelength
        alert('Game over, your final score is '+ result)
    }
}

