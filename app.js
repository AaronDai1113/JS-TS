const boxNumber=100

for(i=0;i<boxNumber;i++){
    let boxTemplate="<div class='box'><div class='circle'>"+
    "</div><div class='square'></div></div>"
    document.write(boxTemplate)
    setCircle(i)

    setSquare(i)
}

function setCircle(i){
    document.getElementsByClassName('circle')[i].style.backgroundColor='#aaa'
    document.getElementsByClassName('circle')[i].style.width='70px'
    document.getElementsByClassName('circle')[i].style.height='70px'
    document.getElementsByClassName('circle')[i].style.top='50px'
    document.getElementsByClassName('circle')[i].style.left='30px'
}
function setSquare(i){
    document.getElementsByClassName('square')[i].style.backgroundColor='#ddd'
    document.getElementsByClassName('square')[i].style.width='30px'
    document.getElementsByClassName('square')[i].style.height='30px'
    document.getElementsByClassName('square')[i].style.top='10px'
    document.getElementsByClassName('square')[i].style.left='10px'
}