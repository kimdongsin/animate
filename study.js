(function(){
    var text = document.querySelector("#a");
    var num = 0;

    text.addEventListener("click", function show(){
        if(num == 0){
            text.className = "animate__animated animate__bounceInDown";
            num = 1;
        }else{
            text.classList.remove('animate__animated', 'animate__bounceInDown');
            num = 0;
        }
    });
})()