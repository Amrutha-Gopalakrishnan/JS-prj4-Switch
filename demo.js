let toggleBtn= document.getElementById("togglebtn")
let bulb=document.getElementById("bulb")
toggleBtn.addEventListener('click', changeimg)

function changeimg(event){
    if(toggleBtn.textContent.includes('Turn On')){
        bulb.src="bulb on.jpg";
        toggleBtn.textContent="Turn Off"
    }

    else{
        toggleBtn.textContent="Turn On"
        bulb.src="bulb off.jpg"
    }
   
}