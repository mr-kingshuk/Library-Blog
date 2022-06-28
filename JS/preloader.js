var preloader = document.querySelector('.preloader');

window.addEventListener("load", () =>{
    setTimeout(()=>{
        preloader.style.opacity = "0";
        setTimeout(()=>{
            preloader.style.display = "none";
        },1200);
    },3000);
});