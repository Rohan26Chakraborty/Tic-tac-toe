const btns=document.querySelectorAll(".box");
const reset=document.querySelector(".reset button");
const para=document.querySelector(".win p");
function assign(){
    let turn=true;
    let c=0;
    for(let btn of btns){
        btn.addEventListener("click",()=>{
            if(turn){
                btn.innerText='X';
                turn=false;
            }
            else{
                btn.innerText='O';
                turn=true;
            }
            btn.disabled=true;
            c++;
            let ischeck=checkwinner();
            if(ischeck===true){
                c=0;
            }
            if(c!=0 && c%9===0 && !ischeck){
                para.innerText=`Oops! No winner`;
                c=0;
            }
            
        });
    }
}
assign();
function remove(){
    for(let btn of btns){
        btn.disabled=false;
        btn.innerText="";
    }
}
function disable(){
    for(let btn of btns){
        btn.disabled=true;
    }
};
reset.addEventListener("click",()=>{
    remove();
    para.innerText=`Let see who will win this time!!`;
    
})
const winpatterns=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
function showwinner(winner){
    para.innerText=`Congratulation!!!Winner is ${winner}.`
};
const checkwinner=()=>{
    for(let pattern of winpatterns){
        let p1=btns[pattern[0]].innerText;
        let p2=btns[pattern[1]].innerText;
        let p3=btns[pattern[2]].innerText;
        if(p1!=""&& p2!=""&& p3!=""){
            if((p1===p2)&&(p2===p3)&&(p1===p3)){
                showwinner(p1);
                disable();
                return true;
            }
        }
    }
};
var countdown=new Date("Jan 1,2050 00:00:00").getTime();
var x=setInterval(function(){
    var now=new Date().getTime();
    var distance=countdown-now;
    var days=Math.floor((distance/(1000*60*60*24)));
    var hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    var minutes=Math.floor((distance%(1000*60*60))/(1000*60));
    var seconds=Math.floor((distance%(1000*60))/(1000));
    document.querySelector("#days").innerHTML=days;
    document.querySelector("#hours").innerHTML=hours;
    document.querySelector("#minutes").innerHTML=minutes;
    document.querySelector("#seconds").innerHTML=seconds;
    if(distance<0){
        clearInterval(x);
        document.querySelector("#hours").innerHTML="00";
        document.querySelector("#minutes").innerHTML="00";
        document.querySelector("#seconds").innerHTML="00";
        disable();
        para.innerText=`Game is not availabe now.`;
    }
},1000);