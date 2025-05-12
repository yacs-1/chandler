function compute(){
 let inputArr= document.querySelectorAll("input");
let _a=inputArr[0].value;
let _b=inputArr[1].value;
let _c=inputArr[2].value;
let _Solut1;
let _Solut2;

if(_a !=""&&_b !=""&& _c !=""){
_Solut1=(-_b+Math.sqrt(Math.pow(_b,2-4*_a*_c)))/(_a*2);
 _Solut2=(-_b-Math.sqrt(Math.pow(_b,2-4*_a*_c)))/(_a*2);
  
  document.getElementById("Solut1").innerText=_Solut1;
document.getElementById("Solut2").innerText=_Solut2;
}



else{
  window.alert("please inter more numbers")
}
}

