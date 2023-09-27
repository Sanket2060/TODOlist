let tasksArray=[];
class Task{
   constructor(task){
     this.task=task;
     this.isCompleted=false;
     this.cancelTask=false; 
   }
 
}


let tasksdiv=document.querySelector(".tasksdiv");
let form=document.querySelector("form");
// submit form to add new task
form.addEventListener("submit",(e)=>{
 e.preventDefault();  
 let task=form[0].value;
 let taskInstance=new Task(task);
 tasksArray.push(taskInstance);
 console.log(tasksArray);
 reRenderTasks();
//  deleteTask();
})



//Rerender tasks at browser
function reRenderTasks(){
  
   
  tasksdiv.innerHTML="";
  tasksArray.forEach((element)=>{
   console.log(tasksArray);
   let newTask;
   if (!element.isCompleted){
     newTask= `<div class="tasks flex  content-center justify-evenly items-center ml-3 searchdiv w-72  h-12 border-2 border-green-500 mt-6">
     <i class="taskprogress taskincompleteicon fa-regular fa-circle fa-xl cursor-pointer"></i>
     <div class="taskstext w-60">${element.task}</div>
     <i class="X deletetaskicon fa-solid fa-xmark fa-xl cursor-pointer"></i>        
 </div>`
   }
 else{
   newTask= `<div class="tasks flex  content-center justify-evenly items-center ml-3 searchdiv w-72  h-12 border-2 border-green-500 mt-6">
   <i class="taskprogress taskincompleteicon fa-solid fa-check fa-xl cursor-pointer"></i>
   <div class="taskstext w-60">${element.task}</div>
   <i class="X deletetaskicon fa-solid fa-xmark fa-xl cursor-pointer"></i>        
   </div>` 
 }
 tasksdiv.insertAdjacentHTML("beforeend",newTask);
//  console.log("from rerender tasks");

// changeIsCompleted(element);
// console.log("from changeiscompleted");
//Change value of IsCompleted according to click
   let taskprogressicons=document.querySelectorAll(".taskprogress");
   taskprogressicons.forEach((progressionicon)=>{
      progressionicon.addEventListener("click",()=>{                          
      element.isCompleted=!element.isCompleted;
         console.log(element.isCompleted);
      })
   })
   

})


//Deleting task event listener defined 
let iconsCount=-1;
 let deleteTaskIconArray=document.querySelectorAll(".deletetaskicon");
 deleteTaskIconArray.forEach((deletetaskicon)=>{
    iconsCount++;
   deletetaskicon.addEventListener("click",(e)=>{
       console.log("Hello");
       tasksArray.splice(iconsCount,1);
       reRenderTasks();
      })
   })
 
   
}

//change_IsCompleted value in object
// function changeIsCompleted(element){
//    console.log("from changeiscompleted");
//    let taskprogressicons=document.querySelectorAll(".taskprogress");
//    taskprogressicons.forEach((progressionicon)=>{
//       progressionicon.addEventListener("click",()=>{                          
//       element.isCompleted=!element.isCompleted;
//          console.log(element.isCompleted);
//       })
//    })
   
// }

// function deleteTask(){
//    // console.log("delete tasks");

//  let iconsCount=-1;
//  let deleteTaskIconArray=document.querySelectorAll(".deletetaskicon");
//  deleteTaskIconArray.forEach((deletetaskicon)=>{
//     iconsCount++;
//    deletetaskicon.addEventListener("click",(e)=>{
//        console.log("Hello");
//        tasksArray.splice(iconsCount,1);
//        reRenderTasks();
//       })
//    })
   
// }








   
   
   
   
   
   
   
   
   










// ///What if form have multiple buttons?