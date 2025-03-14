
function playGame(){


    var home = document.getElementById("container");
    home.classList.add("hiddenHomePage");

    var start = document.getElementById("content");
    start.classList.add("showGamePage");

    var num1 = Math.floor(10+Math.random()*90);

    const list = ["+","-","X"]; 
    const randomElement = list[Math.floor(Math.random() * list.length)];

    
    var num2 = Math.floor(10+Math.random()*90);
    
    document.getElementById("num1").innerHTML =num1;
    document.getElementById("operator").innerHTML=randomElement;
    document.getElementById("num2").innerHTML = num2;
    document.getElementById("equalto").innerHTML="=";
}



function showReslut(){

  
   var reslut = Number(document.getElementById("sumbitbtn"));
   var n1 = Number( document.getElementById("num1").innerText);
   var n2 = Number(document.getElementById("num2").innerText);

   var input = Number(document.getElementById("numinput").value);

   if(document.getElementById("numinput").value ===""){
    alert("Invalid is input!");
    return;
   }
  
   var operation = document.getElementById("operator").innerText;
   var result = 0;

switch (operation) {
    case '+':
       result = (n1 + n2);  
        break;
    case '-':
        result =(n1 - n2);  
        break;
    case 'X':
        result =(n1 * n2);  
        break;
 
}
  let score=0;
if(result ===input){
    score++;
    document.getElementById("scoreValue").innerHTML=score;
    
    document.getElementById("numinput").value = "";
    playGame();
}

else{
    checkAnswer(input, result)
}


}


function nextquestion(){

    playGame();
    document.getElementById("numinput").value = "";

   
}



function removeHeart() {
    const hearts = document.querySelectorAll('.heart-chance');
    if (hearts.length > 0) {
        hearts[hearts.length - 1].classList.add('remove');
        setTimeout(() => {
            hearts[hearts.length - 1].remove(); 
        }, 300); 
    }

    if (hearts.length <= 1) {
        alert("Game Over!");
        location.reload();
    }
}

function checkAnswer(userAnswer, correctAnswer) {
    if (userAnswer !== correctAnswer) {
        removeHeart();
    }
}






