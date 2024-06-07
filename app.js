
//getting all the required elements
const toDoLists=document.querySelector(".todolists"),
inputField=document.querySelector(".input-field textarea"),
noteIcon=document.querySelector(".note-icon"),
clearBtn=document.querySelector(".clear-button")
console.log(toDoLists, inputField,noteIcon,clearBtn)
const placeholderText = inputField.getAttribute("placeholder");


let UpdateItem=()=>{
    let inputVal=inputField.value.trim();
    console.log(inputVal)
    if (inputVal.length === 0) return;
    let li=document.createElement("li");
    li.innerHTML=` <input type="checkbox"/>
               <span class="task"></span>
               <span class="material-symbols-outlined i">
                   delete
                   </span>
                   </li>`
                   li.classList.add("list");
                   toDoLists.append(li)

                   //defining task
                   let tasks=li.querySelector(".task");
                   tasks.textContent=inputVal;

                   //deleting task
                   let delTask=li.querySelector(".i");
                   delTask.addEventListener("click",()=>{
                    li.remove();

                   })


}

noteIcon.addEventListener("click",()=>{
    UpdateItem();
    inputField.value="";
})

inputField.addEventListener("keyup",(e)=>{
    if (e.key==="Enter" ) {
        
        UpdateItem();
        inputField.value="";
    }
})

clearBtn.addEventListener("click",()=>{
    
    toDoLists.innerHTML=""

})