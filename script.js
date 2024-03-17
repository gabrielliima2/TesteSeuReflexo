const startGameButton = document.querySelector('.startGame')
const start = document.querySelector('.start')

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


const palette = document.querySelector('.palette')
const bgColor = document.querySelector('.bgColor')
const back = document.querySelector('.back')
const github = document.querySelector('.github')


const bgIntroduction = document.querySelector('.bgIntroduction')
const introduction = document.querySelector('.introduction')
const body = document.body;

bgIntroduction.addEventListener('click',()=>{
    body.style.background = 'var(--bg-primary)'
    bgIntroduction.classList.add('hide')
})

introduction.addEventListener('click',()=>{
    body.style.background = 'var(--bg-primary)'
    bgIntroduction.classList.add('hide')
})

const backRankingScreen = document.querySelector('.backRankingScreen')
backRankingScreen.addEventListener('click',()=>{
    rankingOne.classList.add('hide')
    home.classList.remove('hide')
})




const showScoreRankingOne = document.querySelector('.showScoreRankingOne')
const showScoreRankingThree = document.querySelector('.showScoreRankingThree')
const rankingOne = document.querySelector('.rankingOne')
const rankIcon = document.querySelector('#rankIcon')
rankIcon.addEventListener('click',()=>{
    rankingOne.classList.toggle('hide')
    home.classList.add('hide')
})


let numToStopCountDown = 0;
//------fazer voltar ao inico-------------------------------------


back.addEventListener('click', backToBegining)

function backToBegining(){
    newGameFunction()
    gameWithThreeCircles.classList.add('hide')
    gameWithOneCircle.classList.add('hide')
    start.classList.add('hide')
    clickedInButtonRed.classList.add('hide')
    buttonIsRed.classList.add('hide')
    score.classList.add('hide')
    startGameButton.classList.add('hide')
    rankingOne.classList.add('hide')
    resetTimerScore()
    resetTimer()
    numToStopCountDown = 1
    seconsToRestart = 2
    startingTheGameAfterClickingOnTheGreen()
}

palette.addEventListener('click',()=>{
    bgColor.classList.toggle('hide')
})



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
    start.classList.remove('hide')
    mode = 1;
})

threeCircle.addEventListener('click',()=>{
    home.classList.add('hide')
    startGameButton.classList.remove('hide')
    start.classList.remove('hide')
    mode = 3
})

//-------------------------------inciando o jogo-------------------------------
startGameButton.addEventListener('click', ()=>{
    startGameButton.classList.add('hide')
    start.classList.add('hide')
    if(mode == 1){
        gameWithOneCircle.classList.remove('hide')
    }else{
        gameWithThreeCircles.classList.remove('hide')
    }
    startTimer()
})

//-------------------------------quando clicar no círculo no jogo com um círculo-------------------------------


let randomCircle = Math.ceil(Math.random() * 3)
let averageOne = 0;
let vezes = 0;
const averageDisplay = document.querySelector('#average')

circleAlone.addEventListener('click',()=>{
    if( circleAlone.style.backgroundColor == 'rgb(0, 255, 0)'){//se o círculo for verde
        gameWithOneCircle.classList.add('hide')
        score.classList.remove('hide')
        resetTimer()
        stopTimerScore()
        vezes ++
        averageOne += miliseconds
//----------------------------------------------------------------mudar quantidade de vezes----------------------------------
        if(vezes < 3){
            countDown()
            timerTimeOut = setTimeout(function(){
                if(numToStopCountDown == 1){
                    return;
                }else{
                    startTimer()
                    resetTimerScore()
                    score.classList.add('hide')
                    gameWithOneCircle.classList.remove('hide')
                }
            }, 3000)
        }else{
            countDown()
            timerTimeOut = setTimeout(function(){
                if(numToStopCountDown == 1){
                    return;
                }else{
                    resetTimer()
                    resetTimerScore()
                    score.classList.add('hide')
                    averageScreen.classList.remove('hide')
                    averageOne = averageOne / 3
                    averageDisplay.innerText = `${Math.round(averageOne)} ms`
                    saveAverageOne()
                }
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

let averageThree = 0
firstCircle.addEventListener('click',()=>{
        if( firstCircle.style.backgroundColor == 'rgb(0, 255, 0)'){//se o círculo for verde
            gameWithThreeCircles.classList.add('hide')
            score.classList.remove('hide')
            resetTimer()
            stopTimerScore()
            vezes ++
            averageThree += miliseconds
            if(vezes < 3){
                countDown()
                timerTimeOut = setTimeout(function(){
                    if(numToStopCountDown == 1){
                        return;
                    }else{
                    startTimer()
                    resetTimerScore()
                    score.classList.add('hide')
                    gameWithThreeCircles.classList.remove('hide')
                    }
                }, 3000)
            }else{
                countDown()
                timerTimeOut = setTimeout(function(){
                    if(numToStopCountDown == 1){
                        return;
                    }else{
                    resetTimer()
                    resetTimerScore()
                    score.classList.add('hide')
                    averageScreen.classList.remove('hide')
                    averageThree = averageThree / 3
                    averageDisplay.innerText = `${Math.round(averageThree)} ms`
                    saveAverageThree()
                    }
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
        averageThree += miliseconds
        if(vezes < 3){
            countDown()
            timerTimeOut = setTimeout(function(){
                if(numToStopCountDown == 1){
                    return;
                }else{
                    startTimer()
                    resetTimerScore()
                    score.classList.add('hide')
                    gameWithThreeCircles.classList.remove('hide')
                }
            }, 3000)
        }else{
            countDown()
            timerTimeOut = setTimeout(function(){
                if(numToStopCountDown == 1){
                    return;
                }else{
                    resetTimer()
                    resetTimerScore()
                    score.classList.add('hide')
                    averageScreen.classList.remove('hide')
                    averageThree = averageThree / 3
                    averageDisplay.innerText = `${Math.round(averageThree)} ms`
                    saveAverageThree()
                }
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
        averageThree += miliseconds
        if(vezes < 3){
            countDown()
            timerTimeOut = setTimeout(function(){
                if(numToStopCountDown == 1){
                    return;
                }else{
                    startTimer()
                    resetTimerScore()
                    score.classList.add('hide')
                    gameWithThreeCircles.classList.remove('hide')
                }
            }, 3000)
        }else{
            countDown()
            timerTimeOut = setTimeout(function(){
                if(numToStopCountDown == 1){
                    return;
                }else{
                    resetTimer()
                    resetTimerScore()
                    score.classList.add('hide')
                    averageScreen.classList.remove('hide')
                    averageThree = averageThree / 3
                    averageDisplay.innerText = `${Math.round(averageThree)} ms`
                    saveAverageThree()
                }
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
    numToStopCountDown = 0
        timerTimeOut = setTimeout(function(){
            if(numToStopCountDown == 1){
                return;
            }else{
                if(seconsToRestart == 0){
                    seconsToRestart = 2
                    startingTheGameAfterClickingOnTheGreen()
                    return;
                }
                threeSecondsToStartOver.innerText = seconsToRestart
                seconsToRestart--
                countDown()
            }
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
                    circleAlone.style.border = '5px solid rgb(0, 82, 19, 0.5)'
                }else{
                    if(randomCircle == 1){
                        firstCircle.style.backgroundColor = 'rgb(0, 255, 0)'
                        firstCircle.style.border = '5px solid rgb(0, 82, 19, 0.5)'
                    }else if(randomCircle == 2){
                        secondCircle.style.backgroundColor = 'rgb(0, 255, 0)'
                        secondCircle.style.border = '5px solid rgb(0, 82, 19, 0.5)'
                    }else if(randomCircle == 3){
                        thirdCircle.style.backgroundColor = 'rgb(0, 255, 0)'
                        thirdCircle.style.border = '5px solid rgb(0, 82, 19, 0.5)'
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
        circleAlone.style.border = '5px solid rgb(191, 56, 56)'
    }else{
        randomCircle = Math.ceil(Math.random() * 3)
        firstCircle.style.backgroundColor = 'red'
        firstCircle.style.border = '5px solid rgb(191, 56, 56)'
        secondCircle.style.backgroundColor = 'red'
        secondCircle.style.border = '5px solid rgb(191, 56, 56)'
        thirdCircle.style.backgroundColor = 'red'
        thirdCircle.style.border = '5px solid rgb(191, 56, 56)'
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
newGame.addEventListener('click', newGameFunction)

function newGameFunction(){
    averageScreen.classList.add('hide')
    home.classList.remove('hide')
    averageOne = 0
    averageThree = 0
    vezes = 0
}


showAverageOneRankingAtTheBegining()
showAverageThreeRankingAtTheBegining()

//mostra o ranking do jogo com um circulo---------------------------------


function showAverageOneRankingAtTheBegining(){
    if(localStorage.getItem('averageRanking') == null){
        localStorage.getItem('averageRanking') == '[]'
        showScoreRankingOne.innerHTML = 'Não há jogadas!'
    }else{
        let oldAverageLength = JSON.parse(localStorage.getItem('averageRanking'));
        showScoreRankingOne.innerHTML = ` `
        if(oldAverageLength.length <= 5){
            for(let i = 0; i < oldAverageLength.length; i++){
                showScoreRankingOne.innerHTML += `${i+1}º:  ${oldAverageLength[i]} <br>` 
            }
        }else{
            for(let i = 0; i < 5; i++){
                showScoreRankingOne.innerHTML += `${i+1}º:  ${oldAverageLength[i]} <br>` 
            }
        }
        
    }
}

function saveAverageOne() {
    //pega o valor que der no average
    let newAverage = Math.round(averageOne)
    
    //se nao tiver nada salvo no localstorage, entao salva uma lista vazia
    if(localStorage.getItem('averageRanking') == null){
        localStorage.setItem('averageRanking', '[]')
    }
    
    //pega o averageRanking antigo e o coloca com o novo
    let oldAverage = JSON.parse(localStorage.getItem('averageRanking'))
    if(localStorage.getItem('averageRanking') == '[]'){
        oldAverage.push(newAverage)
    }else{
        let oldAverageLength = oldAverage.length;
        let indice;
        for(let i = 0; i <= oldAverageLength ; i++ ){
            if(newAverage >= oldAverage[i]){
                indice = i + 1
            }
        }
        oldAverage.splice(indice,0,newAverage)
    }
    //salva o antigo e o novo averageRanking 
    let txt = ''
    let oldAverageLength = oldAverage.length;

    showScoreRankingOne.innerHTML = ` `
    let index = 0;
    if(oldAverageLength <= 5){
        index = oldAverageLength;
    }else{
        index = 5
    }
    for(let i = 0; i < index; i++){

        txt += ` ${i+1}°: ${Math.round(oldAverage[i])} <br>`

    }
    
    showScoreRankingOne.innerHTML = txt
    localStorage.setItem('averageRanking', JSON.stringify(oldAverage))
}


//mostra o ranking do jogo com tres circulo---------------------------------

function saveAverageThree() {
    //pega o valor que der no average
    let newAverage = Math.round(averageThree)
    
    //se nao tiver nada salvo no localstorage, entao salva uma lista vazia
    if(localStorage.getItem('averageRankingThree') == null){
        localStorage.setItem('averageRankingThree', '[]')
    }
    
    //pega o averageRankingThree antigo e o coloca com o novo
    let oldAverage = JSON.parse(localStorage.getItem('averageRankingThree'))
    if(localStorage.getItem('averageRankingThree') == '[]'){
        oldAverage.push(newAverage)
    }else{
        let oldAverageLength = oldAverage.length;
        let indice;
        for(let i = 0; i <= oldAverageLength ; i++ ){
            if(newAverage >= oldAverage[i]){
                indice = i + 1
            }
        }
        oldAverage.splice(indice,0,newAverage)
    }
    
    //salva o antigo e o novo averageRankingThree 
    let txt = ''
    let oldAverageLength = oldAverage.length;
    showScoreRankingThree.innerHTML = ''
    let index = 0;
    if(oldAverageLength <= 5){
        index = oldAverageLength
    }else{
        index = 5
    }
    for(let i = 0; i < index; i++){
        txt += ` ${i+1}°: ${Math.round(oldAverage[i])} <br>`
    }
    showScoreRankingThree.innerHTML = txt
    localStorage.setItem('averageRankingThree', JSON.stringify(oldAverage))
}

function showAverageThreeRankingAtTheBegining(){
    if(localStorage.getItem('averageRankingThree') == null){
        localStorage.getItem('averageRankingThree') == '[]'
        showScoreRankingThree.innerHTML = 'Não há jogadas!'
    }else{
        let oldAverageLength = JSON.parse(localStorage.getItem('averageRankingThree'));
        showScoreRankingThree.innerHTML = ` `
        if(oldAverageLength.length<= 5){
            for(let i = 0; i < oldAverageLength.length; i++){
                showScoreRankingThree.innerHTML += `${i+1}º:  ${oldAverageLength[i]} <br>` 
            }
        }else{
            for(let i = 0; i < 5; i++){
                showScoreRankingThree.innerHTML += `${i+1}º:  ${oldAverageLength[i]} <br>` 
            }
        }
        
    }
}

