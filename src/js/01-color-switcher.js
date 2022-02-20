let intervalId = null;
let isStart = false;

const refs = {
    body: document.querySelector('body'),
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
}

switchDisabledBtns();

refs.btnStart.addEventListener('click', onBtnStartClick)
refs.btnStop.addEventListener('click', onBtnStopClick)

function onBtnStartClick() {
    switchBodyBgColor();
    intervalId = setInterval(switchBodyBgColor, 1000);
    isStart = true;
    switchDisabledBtns()
} 

function onBtnStopClick() {
    isStart = false;    
    clearInterval(intervalId);
    switchDisabledBtns();
}

function switchDisabledBtns () {    
    refs.btnStart.disabled = isStart;
    refs.btnStop.disabled = !isStart;    
}

function switchBodyBgColor() {
    const bodyBgColor = getRandomHexColor()
    refs.body.style.backgroundColor = bodyBgColor;
} 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}