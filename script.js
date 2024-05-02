function toggletheme(){
        const DMToggle = document.getElementById("Atoggle");
        DMToggle.onclick = function(){

            document.body.classList.toggle('dark-mode');
    }
}
function togglemenu(){
    const MenuToggle = document.getElementById("MenuToggle");
    const MenuBox = document.getElementById("Navbar-Box");
    MenuToggle.onclick = function(){
        if(MenuBox.classList.contains('Closed-Menu')){
            MenuBox.classList.remove('Closed-Menu');
            MenuBox.classList.add('Open-Menu');    
        }else if(MenuBox.classList.contains('Open-Menu')){
            MenuBox.classList.remove('Open-Menu');
            MenuBox.classList.add('Closed-Menu');   
        }else{
            MenuBox.classList.add('Closed-Menu'); 
        }
    }
}

function killanimation(){
    const ScreenResize = window.addEventListener(ScreenResize);
    if(ScreenResize){
        document.body.style = "transition: none"
    }

}