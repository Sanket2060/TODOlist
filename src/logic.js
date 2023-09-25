//list of tasks
let tasksdiv=document.querySelector(".tasksdiv");
let tasksArray=Array.from(tasksdiv.children);
// console.log(tasksArray);



// Add tasks
let textBox=document.querySelector(".textbox");
let addButton=document.querySelector(".addbutton");

addButton.addEventListener("click",addTasks);
function addTasks(){
      let newTask=tasksArray[0].cloneNode(true);
      newTask.childNodes[3].innerHTML=`${textBox.value}`;
      tasksArray.push(newTask);
      // console.log(tasksArray);
   reRenderTasksList();
}


//Show All tasks at screen
function reRenderTasksList(){
   tasksdiv.innerHTML=""
   tasksArray.forEach(element => {
      tasksdiv.appendChild(element);
   });
}

let count=-1;
//Delete the task
tasksArray.forEach((element)=>{
   element.querySelector(".X").addEventListener("click",(e)=>{
   console.log("Hey");
   count++;
   // tasksArray.pop(element);
   tasksArray.push(tasksArray.splice(count,1)[0]);
   tasksArray.pop();
   reRenderTasksList();
   })
   
})

//Check task completion and incompletion
tasksArray.forEach((element)=>{
   element.querySelector(".taskprogress").addEventListener("click",(e)=>{
   // console.log(e.target);
   if (e.target.classList.contains("taskincomplete")){
      console.log("Hello");
      e.target.classList.replace("fa-circle","fa-check");
      e.target.classList.replace("taskincompleteicon","taskcompleteicon");
   }
   else{
      console.log(e.target);
      e.target.classList.replace("fa-check","fa-circle");
      e.target.classList.replace("taskcompleteicon","taskincompleteicon");
      
   }

   
   })
})