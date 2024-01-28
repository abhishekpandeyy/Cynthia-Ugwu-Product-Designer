var follower=document.querySelector("#follower");
document.addEventListener("mousemove",(dim)=>{
    follower.style.left=`${dim.x}px`;
    follower.style.top=`${dim.y}px`;
})

// window.addEventListener('scroll', function() {
//     var verticalScroll = window.scrollTop || document.documentElement.scrollTop;
//     var horizontalScroll = window.scrollLeft || document.documentElement.scrollLeft;
//     // console.log('Vertical Scroll:', verticalScroll);
//     // console.log('Horizontal Scroll:', horizontalScroll);
//     follower.style.left=`${dim.x+horizontalScroll}px`;
//     follower.style.top=`${dim.y+verticalScroll}px`;
//   });

// var follower = document.querySelector("#follower");
// // var dim = { x: 0, y: 0 }; // Define dim in a broader scope


// var cnt=0;
// window.addEventListener('scroll', function() {
//     var verticalScroll = window.scrollTop || document.documentElement.scrollTop;
//     var horizontalScroll = window.scrollLeft || document.documentElement.scrollLeft;
    
    
//     // console.log('Vertical Scroll:', verticalScroll);
//     // console.log('Horizontal Scroll:', horizontalScroll);
//     cnt+=verticalScroll;
//     follower.style.left = `${dim.x + horizontalScroll}px`;
//     follower.style.top = `${dim.y + verticalScroll}px`;
// });
// setTimeout(() => {
//     console.log(cnt);
// }, 3000);
// console.log(cnt);
// document.addEventListener("mousemove", (event) => {
//     // var dimx = event.clientX; // Update dim.x with mouse x-coordinate
//     // var dimy = event.clientY; // Update dim.y with mouse y-coordinate

//     follower.style.left = `${event.x}px`;
//     follower.style.top = `${event.y}px`;
// });


// var img=document.querySelector(".imgg");
var rect=document.querySelectorAll(".animg");
// console.log(rect);
rect.forEach(function(elem){
    // console.log(elem);
    var prev=0;
    elem.addEventListener("mousemove",(dets)=>{
        follower.style.display='none';
        var i=elem.querySelector('.imgg');
        var posx=dets.x;var posy=dets.y;
        var d=elem.getBoundingClientRect().top;
        // i.style.display="block";
        console.log(posy-d);
        console.log(posx,posy);
        i.style.rotate=`${(posx-prev)/5}deg`;
        prev=posx;
        i.style.left=`${posx}px`;
        i.style.top=`${posy-d}px`;
        i.style.transform=`translate(-50%,-50%)`;
        console.log("ghum looo ");
    })
    elem.addEventListener("mouseenter",(dets)=>{
        var i=elem.querySelector('.imgg');
        i.style.display="block";
        console.log("le phir aa gya ");
    })
  
   
elem.addEventListener("mouseleave",(d)=>{
    var il=elem.querySelector('.imgg');
   
    console.log("ja rha hun bhai!");
     il.style.display="none";
})

})







