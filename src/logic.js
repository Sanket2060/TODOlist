let taskprogress=document.querySelector(".taskprogress");

let canceltask=document.querySelector(".canceltask");
let tasks=document.querySelector(".tasks");
let addbutton=document.querySelector(".addbutton");


taskprogress.addEventListener("click",(e)=>{
   if (e.target.classList.contains("taskcompleteicon")){
    console.log("Hello");
    e.target.outerHTML=`<i class="taskprogress  taskincompleteicon fa-solid fa-circle fa-xl cursor-pointer" style="color: #ff8000;"></i>`    
   }
   else{
       e.target.outerHTML=`<i class="taskprogress  taskcompleteicon fa-solid fa-circle-check fa-xl cursor-pointer" style="color: #ff8000;"></i>`
       e.target.nextSibling.classList.add("line-through");
    
   }
});

canceltask.addEventListener("click",(e)=>{
   let tobedeletednode=e.target.parentNode;
   console.log(tobedeletednode);
   tobedeletednode.remove();
})
//Get input
let inputtask=document.querySelector('input');
let taskdiv=document.querySelector('.taskdiv');
let body_wrap=document.querySelector('.wrap');

///Add task
function addTask(){
  let task=inputtask.value;
  const clone=taskdiv.cloneNode(true);
  body_wrap.appendChild(clone);
  let lastchild=body_wrap.lastChild;
  let childNodes=lastchild.childNodes;
  console.log(childNodes);
  childNodes[3].innerHTML=task;
}

addbutton.addEventListener("click",addTask);


