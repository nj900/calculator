const fortunestext=[`${name} something good is waiting for you`, `${name} life is like an elevator`, `${name} you are lucky`, `${name} you are not lucky today`];
const colors=["red", "green", "blue", "purple", "orange"];
const texttransform=["uppercase", "lowercase", "capitalize", "none", "inherit"];
const fontsize=["24", "34", "44", "54", "64"];
const textdecoration=["overline", "line-through", "underline", "underline overline", "none"];

function halfNumber (number) {
    let result=parseFloat(number/2);
    console.log(`half of ${number} is ${result}`);
    alert(`half of ${number} is ${result}`);
}

function CalculateHalfNumber () {
    let input=document.getElementById ("half-input").value;
    halfNumber(input);
}

function fortune (name) {
    const fortunestext=[`${name} something good is waiting for you`, `${name} life is like an elevator`, `${name} you are lucky`, `${name} you are not lucky today`];
    let randomNumber = Math.floor(Math.random()*fortunestext.length);
    document.getElementById ("fortune-output").innerText=fortunestext[randomNumber];
    restyle();
}

function restyle () {
    let randomNumber = Math.floor(Math.random()*5);
    console.log(randomNumber);
    document.getElementById ("fortune-output").style.color=colors[randomNumber];
    document.getElementById ("fortune-output").style.textTransform=texttransform[randomNumber];
    document.getElementById ("fortune-output").style.fontSize=`${fontsize[randomNumber]}px`;
    document.getElementById ("fortune-output").style.textDecoration=textdecoration[randomNumber];
}

function PrintFortuneText () {
    let input=document.getElementById ("fortune-input").value;
    fortune(input);
}