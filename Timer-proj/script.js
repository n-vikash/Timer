const hour= document.querySelector(".hour");
const min= document.querySelector(".min");
const sec= document.querySelector(".sec");
let running=false;
let interval=null;
let values=false;
let hVal=0;
let mVal=0;
let sVal=0;
document.querySelector(".start").addEventListener("click",function(){
  if(running) {
    return;
  }
  document.querySelector(".tag").textContent="TIMER";
        document.querySelector(".tag").classList.remove("tup");
  running =true;
  hVal=values?hVal:Number(document.querySelector(".hours").value);
  mVal=values?mVal:Number(document.querySelector(".minutes").value);
  sVal=values?sVal:Number(document.querySelector(".seconds").value);
  hour.textContent=hVal<10?"0"+hVal:hVal;
  min.textContent=mVal<10?"0"+mVal:mVal;
  sec.textContent=sVal<10?"0"+sVal:sVal;
  let cnt=0;
  const time=setInterval(function(){
    if(interval=="reset"){
      hVal=sVal=mVal=0;
      hour.textContent=hVal<10?"0"+hVal:hVal;
      min.textContent=mVal<10?"0"+mVal:mVal;
      sec.textContent=sVal<10?"0"+sVal:sVal;
      interval=null;
      running=false;
      clearInterval(time);
      return;
    }
    if(interval=="resume"){
      values="true";
      interval=null;
      running=false;
      clearInterval(time);
    }
      if(sVal<=0){
    if(mVal<=0){
      if(hVal<=0){
        document.querySelector(".tag").textContent="Times Up";
        document.querySelector(".tag").classList.add("tup");
        clearInterval(time);
        running=false;
      }
      else{
        mVal=59;
        min.textContent=mVal;
        hVal--;
        hour.textContent=hVal<10?"0"+hVal:hVal;
      }
    }
    else{
      sVal=59;
      sec.textContent=sVal;
      mVal--;
      min.textContent=mVal<10?"0"+mVal:mVal;
    }
  }
  else{
    sVal--;
    sec.textContent=sVal<10?"0"+sVal:sVal;
    
  }
},1000);
});
document.querySelector(".reset").addEventListener("click",function(){
  interval="reset";
});
document.querySelector(".resume").addEventListener("click",function(){
  interval="resume";
});



