AOS.init();

let visible = false;
let menu = document.getElementById('menu');
menu.addEventListener('click',()=>{

  if(visible === false){
     document.getElementById('header').style.height = "220px";
     visible = true;
  } else{
     document.getElementById('header').style.height = "50px";
     visible = false;
  }
});