let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let slider = document.querySelector(".slider");
let elContainer = document.querySelector(".container");
let elBody = document.querySelector("body");

btn1.onclick = function(){
    this.style.background = "#fff";
    btn2.style.background = "transparent";
    btn3.style.background = "transparent";
    btn4.style.background = "transparent";
    slider.style.marginLeft = '0px';
    elContainer.style.background = "linear-gradient(321deg, rgba(60,197,236,1) 0%, rgba(100,156,223,0.9332107843137255) 78%)";
    elBody.style.background = "linear-gradient(321deg, rgba(160,231,229,1) 1%, rgba(160,231,229,1) 26%, rgba(100,156,223,0.9332107843137255) 85%)";

}



btn2.onclick = function(){
    this.style.background = 'white';
    btn1.style.background = "transparent";
    btn3.style.background = "transparent";
    btn4.style.background = "transparent";
    slider.style.marginLeft = '-600px';
    elContainer.style.background = "linear-gradient(321deg, rgba(203,178,240,1) 6%, rgba(231,231,104,1) 100%)";
    elBody.style.background = "linear-gradient(124deg, rgba(240,201,178,1) 32%, rgba(231,231,104,1) 88%)";

}


btn3.onclick = function(){
    this.style.background = 'white';
    btn2.style.background = "transparent";
    btn1.style.background = "transparent";
    btn4.style.background = "transparent";
    slider.style.marginLeft = '-1200px';
    elBody.style.background = "#ba9bf9";
    elContainer.style.background = "#7a46cc";
}


btn4.onclick = function(){
    this.style.background = 'white';
    btn2.style.background = "transparent";
    btn3.style.background = "transparent";
    btn1.style.background = "transparent";
    slider.style.marginLeft = '-1800px';
    elContainer.style.background = "linear-gradient(321deg, rgba(236,204,60,1) 0%, rgba(76,198,23,0.9332107843137255) 78%)";
    elBody.style.background = "linear-gradient(321deg, rgba(236,151,60,1) 0%, rgba(16,92,4,0.9332107843137255) 78%)";
}
