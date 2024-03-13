const startGameButton = document.querySelector('.startGame')
const instruction = document.querySelector('.instruction')

const home = document.querySelector('.home')
const oneCircle = document.querySelector('.oneCircle')
const threeCircle = document.querySelector('.threeCircle')
const gameWithThreeCircles = document.querySelector('.gameWithThreeCircles')


const firstCircle = document.querySelector('#firstCircle')
const secondCircle = document.querySelector('#secondCircle')
const thirdCircle = document.querySelector('#thirdCircle')
const circleAlone = document.querySelector('#circleAlone')
const gameWithOneCircle = document.querySelector('.gameWithOneCircle')

let randomTime = Math.round(Math.random()*(5000-1000+1))

const score = document.querySelector('.score')
const cronometro = document.querySelector('#cronometro')
const threeSecondsToStartOver = document.querySelector('#threeSecondsToStartOver')
const averageScreen = document.querySelector('.averageScreen')

const clickedInButtonRed = document.querySelector('.clickedInButtonRed')
const buttonIsRed = document.querySelector('.buttonIsRed')
const RestartRedOpition = document.querySelector('.RestartRedOpition')
const RestartWhenClickedInButtonRed = document.querySelector('.RestartWhenClickedInButtonRed')

const blue = document.querySelector("#blue")
const green = document.querySelector("#green")
const red = document.querySelector("#red")
const purple = document.querySelector("#purple")


blue.addEventListener('click',()=>{
    document.documentElement.style.setProperty('--hue', '200')
})
green.addEventListener('click',()=>{
    document.documentElement.style.setProperty('--hue', '140')
})
red.addEventListener('click',()=>{
    document.documentElement.style.setProperty('--hue', '705')
})
purple.addEventListener('click',()=>{
    document.documentElement.style.setProperty('--hue', '250')
})




let mode = 0;

oneCircle.addEventListener('click',()=>{
    home.classList.add('hide')
    startGameButton.classList.remove('hide')
    instruction.classList.remove('hide')
    mode = 1;
})

threeCircle.addEventListener('click',()=>{
    home.classList.add('hide')
    startGameButton.classList.remove('hide')
    instruction.classList.remove('hide')
    mode = 3
})

//-------------------------------inciando o jogo-------------------------------
startGameButton.addEventListener('click', ()=>{
    startGameButton.classList.add('hide')
    instruction.classList.add('hide')
    if(mode == 1){
        gameWithOneCircle.classList.remove('hide')
    }else{
        gameWithThreeCircles.classList.remove('hide')
    }
    startTimer()
})

//-------------------------------quando clicar no círculo no jogo com um círculo-------------------------------


let randomCircle = Math.ceil(Math.random() * 3)

let average = 0;
let vezes = 0;

const averageDisplay = document.querySelector('#average')

circleAlone.addEventListener('click',()=>{
    if( circleAlone.style.backgroundColor == 'rgb(0, 255, 0)'){//se o círculo for verde
        gameWithOneCircle.classList.add('hide')
        score.classList.remove('hide')
        resetTimer()
        stopTimerScore()
        vezes ++
        average += miliseconds
        if(vezes < 3){
            countDown()
            timerTimeOut = setTimeout(function(){
                startTimer()
                resetTimerScore()
                score.classList.add('hide')
                gameWithOneCircle.classList.remove('hide')
            }, 3000)
        }else{
            countDown()
            timerTimeOut = setTimeout(function(){
                resetTimer()
                resetTimerScore()
                score.classList.add('hide')
                averageScreen.classList.remove('hide')
                average = average / 3
                averageDisplay.innerText = `${Math.round(average)} ms`
            }, 3000)
        }
    }else{
        gameWithOneCircle.classList.add('hide')
        buttonIsRed.classList.remove('hide')
        resetTimer()
        resetTimerScore()
    } 
})

//-------------------------------quando clicar no círculo no jogo com três círculo-------------------------------

firstCircle.addEventListener('click',()=>{
        if( firstCircle.style.backgroundColor == 'rgb(0, 255, 0)'){//se o círculo for verde
            gameWithThreeCircles.classList.add('hide')
            score.classList.remove('hide')
            resetTimer()
            stopTimerScore()
            vezes ++
            average += miliseconds
            if(vezes < 3){
                countDown()
                timerTimeOut = setTimeout(function(){
                    startTimer()
                    resetTimerScore()
                    score.classList.add('hide')
                    gameWithThreeCircles.classList.remove('hide')
                }, 3000)
            }else{
                countDown()
                timerTimeOut = setTimeout(function(){
                    resetTimer()
                    resetTimerScore()
                    score.classList.add('hide')
                    averageScreen.classList.remove('hide')
                    average = average / 3
                    averageDisplay.innerText = `${Math.round(average)} ms`
                }, 3000)
            }
        }else{
            if(secondCircle.style.backgroundColor == 'rgb(0, 255, 0)' || thirdCircle.style.backgroundColor == 'rgb(0, 255, 0)'){
                gameWithThreeCircles.classList.add('hide')
                clickedInButtonRed.classList.remove('hide')
                randomCircle = Math.ceil(Math.random() * 3)
            }else{
                gameWithThreeCircles.classList.add('hide')
                buttonIsRed.classList.remove('hide')
            }
            resetTimer()
            resetTimerScore()
        }
})

secondCircle.addEventListener('click',()=>{
    if( secondCircle.style.backgroundColor == 'rgb(0, 255, 0)'){//se o círculo for verde
        gameWithThreeCircles.classList.add('hide')
        score.classList.remove('hide')
        resetTimer()
        stopTimerScore()
        vezes ++
        average += miliseconds
        if(vezes < 3){
            countDown()
            timerTimeOut = setTimeout(function(){
                startTimer()
                resetTimerScore()
                score.classList.add('hide')
                gameWithThreeCircles.classList.remove('hide')
            }, 3000)
        }else{
            countDown()
            timerTimeOut = setTimeout(function(){
                resetTimer()
                resetTimerScore()
                score.classList.add('hide')
                averageScreen.classList.remove('hide')
                average = average / 3
                averageDisplay.innerText = `${Math.round(average)} ms`
            }, 3000)
        }
    }else{
        if(firstCircle.style.backgroundColor == 'rgb(0, 255, 0)' || thirdCircle.style.backgroundColor == 'rgb(0, 255, 0)'){
            gameWithThreeCircles.classList.add('hide')
            clickedInButtonRed.classList.remove('hide')
            randomCircle = Math.ceil(Math.random() * 3)
        }else{
            gameWithThreeCircles.classList.add('hide')
            buttonIsRed.classList.remove('hide')
        }
        resetTimer()
        resetTimerScore()
    }
})

thirdCircle.addEventListener('click',()=>{
    if( thirdCircle.style.backgroundColor == 'rgb(0, 255, 0)'){//se o círculo for verde
        gameWithThreeCircles.classList.add('hide')
        score.classList.remove('hide')
        resetTimer()
        stopTimerScore()
        vezes ++
        average += miliseconds
        if(vezes < 3){
            countDown()
            timerTimeOut = setTimeout(function(){
                startTimer()
                resetTimerScore()
                score.classList.add('hide')
                gameWithThreeCircles.classList.remove('hide')
            }, 3000)
        }else{
            countDown()
            timerTimeOut = setTimeout(function(){
                resetTimer()
                resetTimerScore()
                score.classList.add('hide')
                averageScreen.classList.remove('hide')
                average = average / 3
                averageDisplay.innerText = `${Math.round(average)} ms`
            }, 3000)
        }
    }else{
        if(firstCircle.style.backgroundColor == 'rgb(0, 255, 0)' || secondCircle.style.backgroundColor == 'rgb(0, 255, 0)'){
            gameWithThreeCircles.classList.add('hide')
            clickedInButtonRed.classList.remove('hide')
            randomCircle = Math.ceil(Math.random() * 3)
        }else{
            gameWithThreeCircles.classList.add('hide')
            buttonIsRed.classList.remove('hide')
        }
        resetTimer()
        resetTimerScore()
    }
})

//-------------------------------se clicar no verde-------------------------------
let seconsToRestart = document.querySelector('.seconsToRestart')
seconsToRestart = 2

function countDown() {
        timerTimeOut = setTimeout(function(){
            if(seconsToRestart == 0){
                seconsToRestart = 2
                startingTheGameAfterClickingOnTheGreen()
                return;
            }
            threeSecondsToStartOver.innerText = seconsToRestart
            seconsToRestart--
            countDown()
        }, 1000)   
}
     
function startingTheGameAfterClickingOnTheGreen(){
        threeSecondsToStartOver.innerText = 3
}
    
//-------------------------------se clicar no vermelho jogo com um círculo-------------------------------

RestartRedOpition.addEventListener('click', ()=>{
        buttonIsRed.classList.add('hide')
        if(mode == 1){
            gameWithOneCircle.classList.remove('hide')
        }else{
            gameWithThreeCircles.classList.remove('hide')
        }
        startTimer()
        resetTimerScore()
})

//-------------------------------se clicar no vermelho jogo com três círculos-------------------------------

RestartWhenClickedInButtonRed.addEventListener('click', ()=>{
        clickedInButtonRed.classList.add('hide')
        if(mode == 1){
            gameWithOneCircle.classList.remove('hide')
        }else{
            gameWithThreeCircles.classList.remove('hide')
        }
        startTimer()
        resetTimerScore()
})

    
//-------------------------------timer para o circulo ficar verde-------------------------------
let timerId
let currentTime = 0

function startTimer() {
    clearTimeout(timerId)
    // Gera um tempo aleatório entre 1 e 5 segundos em milissegundos
    const randomTime = Math.floor(Math.random() * 5000) + 1000

    function updateTimer() {
        currentTime += 5
        if (currentTime < randomTime) {
            // Continua atualizando o cronômetro
            timerId = setTimeout(updateTimer, 1)
            } else {
                // O tempo aleatório foi atingido, o cronômetro para
                if(mode == 1){
                    circleAlone.style.backgroundColor = 'rgb(0, 255, 0)'
                    circleAlone.style.border = '1rem solid rgb(0, 82, 19, 0.5)'
                }else{
                    if(randomCircle == 1){
                        firstCircle.style.backgroundColor = 'rgb(0, 255, 0)'
                        firstCircle.style.border = '1rem solid rgb(0, 82, 19, 0.5)'
                    }else if(randomCircle == 2){
                        secondCircle.style.backgroundColor = 'rgb(0, 255, 0)'
                        secondCircle.style.border = '1rem solid rgb(0, 82, 19, 0.5)'
                    }else if(randomCircle == 3){
                        thirdCircle.style.backgroundColor = 'rgb(0, 255, 0)'
                        thirdCircle.style.border = '1rem solid rgb(0, 82, 19, 0.5)'
                    }
                }
                startTimerScore()
            }
        }
        
        // Inicia o cronômetro
        updateTimer()
}

function stopTimer() {
    // Para o cronômetro
    clearTimeout(timerId)
}

function resetTimer() {
    // Reseta o cronômetro
    clearTimeout(timerId)
    currentTime = 0
    if(mode==1){
        circleAlone.style.backgroundColor = 'red'
        circleAlone.style.border = '1rem solid rgb(191, 56, 56)'
    }else{
        randomCircle = Math.ceil(Math.random() * 3)
        firstCircle.style.backgroundColor = 'red'
        firstCircle.style.border = '1rem solid rgb(191, 56, 56)'
        secondCircle.style.backgroundColor = 'red'
        secondCircle.style.border = '1rem solid rgb(191, 56, 56)'
        thirdCircle.style.backgroundColor = 'red'
        thirdCircle.style.border = '1rem solid rgb(191, 56, 56)'
    }
} 
    
//-------------------------------timer para o score-------------------------------

let timer;
let miliseconds = 0;

function startTimerScore() {
  clearInterval(timer);
  timer = setInterval(updateTimerScore, 1);
}

function stopTimerScore() {
  clearInterval(timer);
}

function resetTimerScore() {
  clearInterval(timer);
  miliseconds = 0;
  updateDisplayScore();
}

function updateTimerScore() {
  miliseconds+= 3.9;
  updateDisplayScore();
}

function updateDisplayScore() {
    cronometro.innerHTML = `${Math.round(miliseconds)} ms`
}

const newGame = document.querySelector('.newGame')
newGame.addEventListener('click', ()=>{
    averageScreen.classList.add('hide')
    home.classList.remove('hide')
    average = 0
    vezes = 0
})