AFRAME.registerComponent("game-play", {
    schema:{
        elementId:{type:"string", default:"#ring1"}
    },
    init: function(){
        var duration = 120;
        const timerEl = document.querySelector("#timer");
        this.startTimer(duration,timerEl);

    },
    startTimer:function(duration,timerEl){
        var minutes;
        var seconds;
        setInterval(()=>{
            if(duration>=0){
                minutes= parseInt(duration/60);
                seconds = parseInt(duration%60);

                if(minutes<10){
                    minutes="0"+minutes;
                }
                if(seconds<10){
                    seconds="0"+seconds;
                }

                timerEl.setAttribute("text",{
                    value: minutes+ ":"+seconds
                })
                duration-=1;
            }else{
                this.gameOver();
            }

        },1000)
    },
    update:function(){
        this.isCollided(this.data.elementId);
    },
    isCollided: function(elementId){
        const element= document.querySelector(elementId);
        element.addEventListener("collide", e => {
            if(elementId.includes("#ring")){
               // console.log(elementId + " collision");

            }
            else{
                this.gameOver();
            }
            //else if(elementId.includes("#hurdle")){
            //    console.log(elementId + " collision");
            //}
        })
    },
    updateTargets:function(){

    },
    updateScore:function(){

    },
    gameOver:function(){
        var planeEl = document.querySelector("#plane_model");
        var element = document.querySelector("#game_over_text");

        element.setAttribute("visible",true);
        planeEl.setAttribute("dynamic-body",{
            mass:1
        })

    },
})
