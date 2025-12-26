const inputBox=document.getElementById("input-box")
const listContainer=document.getElementById("list-container")

function addTask(){
    if(inputBox.value===''){
        alert("You must write something!!!");
    }else{
        // create new HTML element ,"li" means list item element [Same as writing <li> </li> in HTML ] 
        // [let li]===> Stores the created <li> element in a variable called li
        let li=document.createElement("li");
        
        // Takes the text typed by the user in an input field and Puts that text inside the <li>
        // inputBox.value = user-entered text
        li.innerHTML=inputBox.value;

        //Adds the newly created <li> inside a list
        listContainer.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
    inputBox.value="";
    saveData();

}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();