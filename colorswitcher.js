document.getElementById("grayButton").onclick = switchGray;
document.getElementById("whiteButton").onclick = switchWhite;
document.getElementById("blueButton").onclick = switchBlue;
document.getElementById("yellowButton").onclick = switchYellow;
document.getElementById("redButton").onclick = switchRed;
document.getElementById("pinkButton").onclick = switchPink;
document.getElementById("purpleButton").onclick = switchPurple;
document.getElementById("greenButton").onclick = switchGreen;
document.getElementById("orangeButton").onclick = switchOrange;

function switchGray(){
    document.getElementsByTagName('body')[0].style.backgroundColor = 'gray';
    document.getElementsByTagName('body')[0].style.color = 'white';
}
function switchWhite(){
    document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
    document.getElementsByTagName('body')[0].style.color = 'black';
}
function switchBlue(){
    document.getElementsByTagName('body')[0].style.backgroundColor = 'blue';
    document.getElementsByTagName('body')[0].style.color = 'white';
}
function switchYellow(){
    document.getElementsByTagName('body')[0].style.backgroundColor = 'yellow';
    document.getElementsByTagName('body')[0].style.color = 'black';
}
function switchRed(){
    document.getElementsByTagName('body')[0].style.backgroundColor = 'red';
    document.getElementsByTagName('body')[0].style.color = 'white';
}
function switchPink(){
    document.getElementsByTagName('body')[0].style.backgroundColor = 'pink';
    document.getElementsByTagName('body')[0].style.color = 'black';
}
function switchPurple(){
    document.getElementsByTagName('body')[0].style.backgroundColor = 'purple';
    document.getElementsByTagName('body')[0].style.color = 'white';
}
function switchGreen(){
    document.getElementsByTagName('body')[0].style.backgroundColor = 'green';
    document.getElementsByTagName('body')[0].style.color = 'black';
}
function switchOrange(){
    document.getElementsByTagName('body')[0].style.backgroundColor = 'orange';
    document.getElementsByTagName('body')[0].style.color = 'white';
}