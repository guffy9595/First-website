document.addEventListener('DOMContentLoaded', function(){

    const nav = document.querySelector('.navbar')
    const allNavItems = document.querySelectorAll('.nav-link')
    const navList = document.querySelector('.navbar-collapse')
    
    function addShadow() {
        if(window.scrollY >= 100) {
            nav.classList.add('shadow-bg')
        } else {
            nav.classList.remove('shadow-bg')
        }
    }

    allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))

    window.addEventListener('scroll', addShadow)
   

})

var loader = document.getElementById("preloader");
	window.addEventListener("load", function(){
		loader.style.display = "none", 30000;
	})