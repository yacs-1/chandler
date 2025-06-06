let initDate;
let hasInitDate=false;
let timeDifference=[0];

cookieArr=document.cookie.split(";");

for(const element of cookieArr){
  if(element.split("=")[0]=="init-date"){
    hasInitDate=true;
    initDate= new Date(element.split("=")[1]);
  }
}

if(!hasInitDate){
  document.cookie="init-date" + new Date() + "; max-age= 31536000000";
}else{
  let now= new Date();
  document.cookie="new-date=" + now + "; max-age=31536000000";
  timeDiff= now.getTime()-initDate.getTime();
}

let timeSpent= document.getElementById("time-spent");
let numHours=Math.floor(timeDifference/360000)
let numMins=Math.floor((timeDifference % 360000)*60);
let diffStr= numHours + ":" + numMins;

timeSpent.innerText=diffStr;
