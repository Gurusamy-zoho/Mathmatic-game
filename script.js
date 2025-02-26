
var score = 0;


function startedgame(){

    var start = document.getElementById("gamepage");
    start.classList.add("Showgamepage");

    var home = document.getElementById("Homepage");
    home.classList.add("Showhomepage");

   

    var num1 = Math.floor(10+Math.random()*90);

    const list = ["+","-"]; 
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
    alert("Input is empty!");
   }

//    var validInput = document.getElementById("numinput").value;
//    var pattern = /^[0-9]/;
   
//    if(validInput.length>0){
//     if (!pattern.test(validInput)) {
//         alert("Invalid input");
//    } 
//    }
 
  

   var operation = document.getElementById("operator").innerText;
   var reslut = 0;



switch (operation) {
    case '+':
       reslut = (n1 + n2);  
        break;
    case '-':
        reslut=(n1 - n2);  
        break;
    // case 'X':
    //     reslut=(n1 * n2);  
    //     break;
    // case '%':
    //     reslut=Math.floor((n1 / n2) * 100) / 100;  
    //     break;
 
}

if(reslut===input){
    score++;
    document.getElementById("scoreValue").innerHTML=score;
    
    document.getElementById("numinput").value = "";
    startedgame();  
}

else{
    alert("Wrong Answer");
}


}

function nextquestion(){


    startedgame();
    document.getElementById("numinput").value = "";

   
}













