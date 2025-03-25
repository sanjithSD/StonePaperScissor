let userDiv = document.getElementById('UserDiv')
let pcDiv = document.getElementById('pcDiv')
let clickbtn = document.getElementsByClassName('btn')
let userimageset = document.getElementById('userimageset')
let pcimageset = document.getElementById('pcimageset')
let tie = document.getElementById('tie')
let win = document.getElementById('win')
let lose = document.getElementById('lose')
let box=document.getElementById('box')
let userDisplay =document.getElementById('userDisplay')
let display =document.getElementById('display')
let pcDisplay =document.getElementById('pcDisplay')
let noneguy = document.getElementsByClassName('noneguy')
let video = document.getElementById('shadowFightVideo1')
let usercount =0
let pccount= 0
let rescount=0
function Uploadimg(e){
    let whatimg = e.target.src
    let userselection = e.target.getAttribute('id')
     userimageset.setAttribute('src',whatimg) 
    let pcselection = randomvalue()
    pcimageset.src=`./Assets/${pcselection}.webp`
    Result(userselection,pcselection)  
}
for(let i=0; i<clickbtn.length; i++){
    clickbtn[i].addEventListener("click",Uploadimg)
}
function randomvalue(){
    let randomArray=['stone','paper','scissor']
    let randomval = Math.floor(Math.random()*randomArray.length)
    return randomArray[randomval] 
}
function endanimation(){
    if(usercount>pccount){
        video.style.display='none'
        box.style.backgroundColor='black'
        for(let i=0; i<noneguy.length; i++){
            noneguy[i].style.visibility='hidden'
        }
        win.style.display="block"
        win.addEventListener('animationend', showNoneguy);
   }else if(usercount<pccount){
         video.style.display='none'
             box.style.backgroundColor='black'
        for(let i=0; i<noneguy.length; i++){
            noneguy[i].style.visibility='hidden'
        }
        lose.style.display="block"
        lose.addEventListener('animationend', showNoneguy);
       }else{
         video.style.display='none'
             box.style.backgroundColor='black'
        for(let i=0; i<noneguy.length; i++){
            noneguy[i].style.visibility='hidden'
        }
        tie.style.display="block"
        tie.addEventListener('animationend', showNoneguy);
    }
    reset()
}
function showNoneguy() {
    userimageset.removeAttribute('src',"")
    pcimageset.removeAttribute('src',"")
    for (let i = 0; i < noneguy.length; i++) {
        noneguy[i].style.visibility = 'visible';
    }
    video.style.display='block'
    box.style.backgroundColor='transparent'
    win.style.display = "none";
    lose.style.display = "none";
    tie.style.display = "none";
}
function reset(){
     userDisplay.innerHTML=`Shadow->`
     display.innerHTML = `Results`
      pcDisplay.innerHTML =`<-Titan`
     usercount =0
      pccount = 0
      rescount=0
}
function Result(userselection,pcselection){
    rescount++
    if(rescount===10){ 
         
      endanimation()  
    }
    else{
        if((userselection ==="stone" && pcselection === "scissor")||
        (userselection ==='paper' && pcselection === 'stone') ||
        (userselection ==='scissor' && pcselection === 'paper')){
            usercount++
            userDisplay.innerHTML=`Shadow-> ${usercount}`
            display.innerHTML =`Shadow Won!!`
        }else if(userselection === pcselection){
        
            display.innerHTML = `Draw`
        }else{
            pccount++
            pcDisplay.innerHTML =`${pccount} <-Titan`
            display.innerHTML ='Titan Won'}}}




