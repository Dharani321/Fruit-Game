document.querySelector(".reload").addEventListener("click",()=>{
    window.location.reload();
});


let rotate=document.querySelector(".rotate");
let knife1=document.querySelector(".knife1");
let knife2=document.querySelector(".knife2");
let count=0;
let game_over=0;
rotate.addEventListener("click",()=>{

    // knife1.style.top=-600+"px";
    // knife1.style.transform="translateY(-500px)";
    // knife1.style.position="unset";
    // knife2.style.transform="translateY(-500px)";
    // knife2.style.position="unset";
    // if(knife1.style.transform=="translateY(150px)")
    // {
    //     knife1.style.transform="scale(1.5)";
    // }
    if(count==2)
        {
            alert("Your Have no kniife");
        }
    
    let rk=document.querySelectorAll(".kn");
    
//    rk.forEach((hi)=>{
       rk[count].style.top=-620 +"px";
       //rk[count].classList.add("ani");

    //    console.log(rk[count].offsetLeft);
    //    console.log(rk[count].offsetTop);
     //console.log(rk[count].getBoundingClientRect());
       let g=document.querySelectorAll(".or");
       g.forEach((item)=>{
          //console.log(item.getBoundingClientRect());
          //console.log(item.offsetLeft);
          console.log(item.offsetLeft);
          console.log(rk[count].offsetLeft);
          if(item.offsetLeft-(rk[count].offsetLeft)<=10)

          {
            score=score+20;
            document.querySelector(".score").innerHTML=score;
            //item.innerHTML="Os";
          }

       });


       let bomb=document.querySelectorAll(".pi");
       bomb.forEach((item1)=>{
          //console.log(item1.getBoundingClientRect());
        //   console.log(item1.offsetLeft);
        //   console.log(rk[count].offsetLeft);
          if((item1.offsetLeft)-((rk[count].offsetLeft))>=10)

          {
            //score=score+20;
            alert("You have clicked on bomb");
            game_over=1;
            if(game_over==1)
            {
                document.querySelector(".container").innerHTML="Game Over ! Your Score is"+score;
                document.querySelector(".score").innerHTML="";
                document.querySelector(".score").style.backgroundColor="transparent";
                let reset=document.createElement("button");
                reset.setAttribute('class','reset');
                reset.innerHTML="Reset";
                document.querySelector("body").appendChild(reset);
                document.querySelector(".reset").addEventListener("click",()=>{
                //    game_over=0;
                //    gameloop();
                   
                   
                   
                });


            }
            //document.querySelector(".score").innerHTML=score;
            //item.innerHTML="Os";
          }

       });
    //    });
       count++;
       
   });
    

let score=0;



let fruitb=document.createElement("div");
fruitb.setAttribute('class','rf');

document.querySelector(".container").appendChild(fruitb);


for(i=0;i<1;i++){
    let fruits=document.createElement('div');
      fruits.setAttribute('class','t');
      fruits.x=(i*180);
      //console.log(fruits.x);
      fruits.style.left=fruits.x +"px";
      //fruits.style.offsetleft=fruits+"px";
      
      //console.log(fruits.style.top);
     
      let rf=document.querySelector(".rf");
   rf.appendChild(fruits);
}

for(i=0;i<2;i++){
    let k=document.createElement('div');
      k.setAttribute('class','kn');
      k.x=20;
      //console.log(fruits.x);
      k.style.top=(30) +"px";
      k.style.left=(i*100-20)+"px";
      //fruits.style.offsetleft=fruits+"px";
      //console.log(k.style.top);
    
      let rf=document.querySelector(".rotate");
   rf.appendChild(k);
   
   let rk=document.querySelectorAll(".kn");
   rk.forEach((hi)=>{
       hi.addEventListener("click",()=>{
          alert("hi");
        //   hi.style.top=-600+"px";

       });
   });
}



for(j=1;j<3;j++){
    let pine=document.createElement('div');
      pine.setAttribute('class','pi');
      pine.x=(j*200);
      //console.log(fruits.x);
      pine.style.left=pine.x +"px";
     
      //fruits.style.offsetleft=fruits+"px";
      //console.log(pine.style.top);
    
      let rf=document.querySelector(".rf");
   rf.appendChild(pine);
}

for(z=0;z<6;z++){
    let mango=document.createElement('div');
      mango.setAttribute('class','Ma');
      mango.x=(z*150);
      //console.log(fruits.x);
      mango.style.left=mango.x +"px";
     
      //fruits.style.offsetleft=fruits+"px";
      //console.log(pine.style.top);
    
      let rf=document.querySelector(".rf");
   rf.appendChild(mango);
}

for(x=0;x<6;x++){
    let orange=document.createElement('div');
      orange.setAttribute('class','or');
      orange.x=(x*150);
      //console.log(fruits.x);
      orange.style.left=orange.x +"px";
     
      //fruits.style.offsetleft=fruits+"px";
      //console.log(pine.style.top);
    
      let rf=document.querySelector(".rf");
   rf.appendChild(orange);
}

for(b=0;b<6;b++){
    let banana=document.createElement('div');
      banana.setAttribute('class','b');
      banana.x=(x*140);
      //console.log(fruits.x);
      //banana.style.left=banana.x +"px";
      let bana=document.querySelectorAll(".b");
      bana.forEach((hi)=>{
       //console.log(hi.offsetLeft);
      })

      //console.log(banana.offsetLeft);
      //fruits.style.offsetleft=fruits+"px";
      //console.log(pine.style.top);
    
      let rf=document.querySelector(".rf");
   rf.appendChild(banana);

 let score=0;

   let a=document.querySelectorAll(".b");
    a.forEach((apple)=>{

    apple.addEventListener("click",()=>{
        score=score+10;
        alert(score);
        document.querySelector(".score").innerHTML=score;
    });
  
});

}
// let fruit=document.createElement("div");
// fruit.setAttribute('class','f');
// document.querySelector(".rf").appendChild(fruit);

let width=document.querySelector(".rf").offsetLeft;
//console.log(width);

let height=document.querySelector(".rf").offsetTop;
//console.log(height);
let speed=5;
function gameloop()
{
    
   width=width+speed;
   if(width>=600)
   {
    width=0;
    
    document.querySelectorAll(".t").forEach((item)=>{
        item.style.top=(Math.random()*100) +"px";
    });
    document.querySelectorAll(".pi").forEach((item1)=>{
        item1.style.top=(Math.random()*100) +"px";
        console.log(item1.offsetTop);
        console.log(item1.offsetLeft);
    });

    document.querySelectorAll(".Ma").forEach((item2)=>{
        item2.style.top=(Math.random()*120) +"px";
    });
    //pine.style.top=(Math.random()*100) +"px";
    
   }
  document.querySelector(".rf").style.left= width +"px";



   window.requestAnimationFrame(gameloop);
}
if(game_over=0){
    gameloop();
}


//let x=true;
// while(x){
// let speed=5;
// width=width+speed;
// // document.querySelector(".rf").style.offsetLeft= width;
// }
