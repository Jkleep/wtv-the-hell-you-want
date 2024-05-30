let buttonOne = document.querySelector(".buttonOne");
let Question1 = document.querySelector(".Question1");
let Question2 = document.querySelector(".Question2");
let message = document.querySelector(".message");
let patrick = document.querySelector(".patrick");
let squidward = document.querySelector(".squidward");
let spongebob = document.querySelector(".spongebob");
let mrkrabs = document.querySelector(".mrkrabs");

buttonOne.addEventListener ("click", function() {
 let answer1 = document.querySelector(".answer1").value;
 let answer2 = document.querySelector(".answer2").value;

if(answer1 === "Yes" && answer2 === "Boring job"){
 message.innerHTML = "You are confused Snake. You just want money and don't care how you get it. Greedy ah ";
 buttonOne.style.display = "none";
Question1.style.display = "none";
Question2.style.display = "none";
mrkrabs.style.display = "block";
} else if (answer1 === "No" && answer2 === "Boring job"){
 message.innerHTML = "You are lazy snake. You want to work but want to get paid nicely either way";
 buttonOne.style.display = "none";
Question1.style.display = "none";
Question2.style.display = "none";
squidward.style.display = "block";
 } 
 else if (answer1 === "Work" && answer2 === "Fun job"){
    message.innerHTML = "You are SPONGEBOB. You don't care much for money but you like having fun with everything";
    buttonOne.style.display = "none";
Question1.style.display = "none";
Question2.style.display = "none";
spongebob.style.display = "block";
    }else if (answer1 === "No" && answer2 === "Fun job"){
        message.innerHTML = "You are PATRICK. You don't want to work but if you had to you want to have fun doing it'";
        buttonOne.style.display = "none";
Question1.style.display = "none";
Question2.style.display = "none";
patrick.style.display = "block";
         }else{
    message.innerHTML = "Thats not the right response"
}



});
