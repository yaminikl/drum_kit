var drums=document.querySelectorAll(".drum");

for(var i=0;i<drums.length;i++){
    drums[i].addEventListener("click",function(){
        var k=this.innerHTML;
        
        var audio;
        makesound(k);
        buttonAnimation(k);
        
        
    })
    document.addEventListener("keydown",function(event){
        var key=event.key;
        makesound(key);
        buttonAnimation(key);
    });
    function makesound(key){
        switch(key){
            case "j":
                audio=new Audio('sounds/crash.mp3');
                audio.play();
                break;
            
            case "k":
                audio=new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;
            
            case "l":
                audio=new Audio('sounds/snare.mp3');
                audio.play();
                break;
            
            case "w":
                audio=new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            
            case "a":
                audio=new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
            case "s":
                audio=new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
            case "d":
                audio=new Audio('sounds/tom-4.mp3');
                audio.play();
                break;
            default: console.log();
        }
    }
    function buttonAnimation(currenKey){
        var activeButton=document.querySelector("."+currenKey);
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed")
        },300);
    }
}


