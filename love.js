var userName;
var userPartnerName;
var percentage;
document.querySelector(".buttons_calculate").addEventListener("click", calculateLove);

function calculateLove () {
    percentage = Math.floor(Math.random() * 100) + 1;
    userName = document.getElementById("userName").value;
    userPartnerName = document.getElementById("userPartnerName").value;

    
    var text = "";
    if(percentage >=90){
        text = document.getElementById("text");
        text.innerText = "Wow, " + userName + " & " + userPartnerName + ". " + "Love is in the air." + " Your love score is " + percentage + "%."
    } else if(percentage>= 70) {
        text = document.getElementById("text");
        text.innerText = "It's good for " + userName + " & " + userPartnerName + ". " +"Your love score is " + percentage + "%. " + "You both are a divine couple." 
    } else if(percentage >=30) {
        text = document.getElementById("text");
        text.innerText = userName + " & " + userPartnerName + " love score is " + percentage + "%. " + "Keep loving."
    } else {
        text = document.getElementById("text");
        text.innerText = userPartnerName + " is not made for you. " +"Your love score is " + percentage + "%. " + "You need to find a new partner." 
    }
    
    
}



