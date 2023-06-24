document.addEventListener('DOMContentLoaded' , function(){
  const box = document.querySelector('.box');
  const viewXside = window.innerWidth;
  const viewYside = window.innerHeight;
  const boxX = 200;
  const boxY = 200;
  const ToWidth = viewXside - boxX;
  const ToHight = viewYside - boxY;
// give rendom value in this screen
  let Xposition = getrendomvalue(ToWidth);
  let Yposition = getrendomvalue(ToHight);
  box.style.left  = Xposition + "px";
  box.style.top  =  Yposition + "px";
  document.addEventListener('mouseover', function(){
    
    Xposition = getrendomvalue(ToWidth);
    Yposition = getrendomvalue(ToHight);
    
    box.style.left  = Xposition + "px";
    box.style.top  =  Yposition + "px";
  })
  function getrendomvalue(max){
    return Math.floor(Math.random()*max);
  }
})