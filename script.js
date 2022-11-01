function consolaYAz(){
    console.log('sagol');
}

function yaziniYaz(e){
    console.log(e.innerText);
}

function yaziniYazEvent(h){
 console.log( h.target.innerText);  
}

let cvb=document.getElementById('cavab')

function tekcut(e){
  let a=Number(e.target.value)
  if(a%2==0){
    cvb.innerText='cutdur'
  }else{
    cvb.innerText='tekdir'
  }
}