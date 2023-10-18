const inputSlider=document.querySelector("[data-lengthSlider ]");

const lengthDisplay=document.querySelector("[data-lengthNumber]");

const passwordDisplay=document.querySelector("[data-passwordDisplay]");

const copybtn=document.querySelector("[data-copy]");

const copyMsg=document.querySelector("[data-copyMsg]");

const uppercaseCheck=document.querySelector("#uppercase");

const lowercaseCheck=document.querySelector("#lowercase");

const numbersCheck=document.querySelector("#Numbers");

const symbolsCheck=document.querySelector("#symbols");

const indicator=document.querySelector("[data-indicator]");

const generateBtn=document.querySelector(".generateButton");

const allCheckBox=document.querySelectorAll("input[type=checkbox]");

const symbol='~`!@#$%^&*()_-+={[}]:;"><.,?/';
let password=" ";

let passwordLength=10;

let checkCount=1;
handleSlider();
// set strength circle color to grey

// set passwordLength
function handleSlider(){
  inputSlider.value=passwordLength;
  lengthDisplay.innerText=passwordLength;
}

// set Indicator
function setIndicator(color){
    indicator.style.backgroundColor=color;
}

function getRndInteger(min,max){
  return  Math.floor( Math. random()*(max-min))+min;
}


// Generate Random Number
function generateRandomNumber(){
  return getRndInteger(0,9);
}

function generateLowerCase(){
         return String.fromCharCode(getRndInterger(97,123));
}

function generateUpperCase(){
  return String.fromCharCode(getRndInterger(65,91));
}

function generateSymbol(){
  const random=getRndInteger(0,symbols.legth);
  return symbols.charAt(randNum);
}

function calStrength(){
  let hasUpper=false;
  let hasLower=false;
  let hasNum=false;
  let hasSym=false;

  if(uppercaseCheck.checked) hasUpper=true;
  if(lowercaseCheck.checked) hasLower=true;
  if(numbersChecked) hasNum=true;
  if(symbolsCheck.Checked) hasSym=true;

  if(hasUpper && hasLower (hasNum || hasSym ) && passwordLength>=8){
    setIndicator("#0f0");
  }else if(
    (hasLower || hasUpper)&&
    (hasNum || hasSym)&&
    passwordLength>=6
  ){
    setIndicator("#ff0");
  }else {
    setIndicator("#f00");
  }
}
