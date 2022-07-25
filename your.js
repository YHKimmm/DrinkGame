const userNum = document.querySelector('.form-control');
const goBtn = document.querySelector('.go-button');
const resultTxt = document.querySelector('.result-text');
const resetBtn = document.querySelector('.reset-button');
const chanceArea = document.querySelector('.chance-area');
const mainImg = document.querySelector('.main-image');

let randomNum = 0;
let chances = 5;
let gameOver = false;
let userHistory = [];


goBtn.addEventListener('click', playGame);
resetBtn.addEventListener('click', reset);
userNum.addEventListener('focus',focusInput);


function pickRandomNum() {
    randomNum = Math.floor(Math.random() * 100) + 1;
    console.log('정답', randomNum);
}


function playGame() {
    const userTypeValue = userNum.value;
    console.log(userTypeValue);
    
    if (userTypeValue < 1 || userTypeValue  > 100) {
        resultTxt.innerText = '1부터 100까지의 숫자를 입력하시오';
        mainImg.src = 'http://127.0.0.1:5501/image/giphy.webp';
        return;
    }
    
    if (userHistory.includes(userTypeValue)) {
        resultTxt.innerText = '이미 입력한 숫자입니다 다른 숫자를 입력해주세요';
        mainImg.src = 'https://media0.giphy.com/media/l2YWi2sidEYWQztQc/giphy.gif?cid=ecf05e47u7mr863nvnj0aey6ac8wo1i295sze3a5rhvcp10a&rid=giphy.gif&ct=g';
        return;
    }  
    
    if (userTypeValue < randomNum) {
        resultTxt.innerText = 'Up!!!';
        mainImg.src = 'https://media0.giphy.com/media/xT9IgAakXAITtXIWje/giphy.gif?cid=ecf05e47wewfu6qy28nn8og1cnocfn3657kpv6g1hi9zw9t8&rid=giphy.gif&ct=g';
    }
    else if(userTypeValue > randomNum){
        resultTxt.innerText = 'Down!!!';
        mainImg.src = 'https://media.giphy.com/media/r2puuhrnjG7vy/giphy.gif';
    }
    else {
        resultTxt.innerText = 'You got it!!!';
        mainImg.src = 'https://media4.giphy.com/media/26tknCqiJrBQG6bxC/giphy.gif?cid=ecf05e47dn1b2we19mh8kico5c752024r1yt6i0y9zilym12&rid=giphy.gif&ct=g';
        goBtn.disabled = true;
    }
    
    chances--;
    chanceArea.innerHTML = `남은 기회:${chances}`;

    userHistory.push(userTypeValue);
    console.log(userHistory);
    
    
    if (chances == 0) {
        gameOver = true;
    }

    if (gameOver == true) {
        goBtn.disabled = true;
    }
}

function reset() {
    pickRandomNum();
    userNum.value = '';
    mainImg.src = 'http://127.0.0.1:5501/image/giphy.webp';
    resultTxt.innerHTML = '죽기 싫다면 맞춰라';
    gameOver = false;
    goBtn.disabled = false;
    chances = 5;
    chanceArea.innerHTML = `남은 기회:${chances}`;
    userHistory = [];
}

function focusInput() {
    userNum.value = '';
}



pickRandomNum();





