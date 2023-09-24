let taskprogress=document.querySelector(".taskprogress");

let canceltask=document.querySelector(".canceltask");
taskprogress.addEventListener("click",(e)=>{
//    console.log(e.target);
//    e.target.outerHTML=`<i class="taskcompleteicon fa-solid fa-circle-check fa-xl cursor-pointer" style="color: #ff8000;"></i>`
     console.log(e.target.classList);
   if (e.target.classList.contains("taskcompleteicon")){
    console.log("Hello");
    e.target.outerHTML=`<i class="taskprogress taskincompleteicon fa-solid fa-circle fa-xl cursor-pointer" style="color: #ff8000;"></i>`
     
   }
   else{
    e.target.outerHTML=`<i class="taskprogress taskcompleteicon fa-solid fa-circle-check fa-xl cursor-pointer" style="color: #ff8000;"></i>`
   }
});
