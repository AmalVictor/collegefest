const todoList = [{
    name: 'make dinner',
    duedate: '2022-12-24',
},{
    name: 'wash dishes',
    duedate: '2022-23-12'}];

addtolist();

function addtolist(){
    let todoListhtml = '';
    
todoList.forEach(function(todovalueobject, index){
                    
                   
                    const name = todovalueobject.name;
                    const date = todovalueobject.duedate;
                    const todohtml = `
                    <div>${name}</div>
                    <div>${date}</div> 
                    <button onclick="
                        todoList.splice(${index}, 1);
                        addtolist();
                    
                    " class="deletebutton">Delete</button>
                    `;
                    todoListhtml += todohtml;
})

                 
    
    
    
    

        



    document.querySelector('.todo').innerHTML = todoListhtml;
                        }

function addTodo(){

    const inputElement = document.querySelector('.js-name')
    const name = inputElement.value;

    const dateinputelement = document.querySelector('.dateinput');
    const duedate = dateinputelement.value;

    todoList.push({
        name,
        duedate});

    inputElement.value = '';

    addtolist();
}