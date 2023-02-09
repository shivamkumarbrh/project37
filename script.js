const item = document.querySelector("#item");
const toDoBox = document.querySelector('#to-do-list')

item.addEventListener("keyup",
 function(event){
            if(event.key == "Enter"){
                addToDo(this.value)
                this.value = ""
            };
 }

)
const addToDo = (items)=>{
  const listItem = document.createElement('li');
  listItem.innerHTML = `
  ${items}
  <i class="fas fa-times"></i>
  `;
  listItem.addEventListener('click',function(){
    this.classList.toggle("done");
  })
  toDoBox.appendChild(listItem)
  listItem.querySelector('i').addEventListener('click',
function(){
    listItem.remove();
})
}
