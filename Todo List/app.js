
const input = document.querySelector('input');
const button = document.querySelector('button');
const form = document.querySelector('form');
const todos = document.querySelector('.todos');

initTodos()

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value;
    if(value) {
        addTodo({
            text: value
        })
        saveTodos()
    }
    input.value = '';
})

function addTodo(todo) {
    const li = document.createElement('li');

    if (todo.status === 'completed') {
        li.setAttribute('class', 'completed');
    }

    li.innerHTML = `<span>${todo.text}</span>
                    <i class='bx bxs-trash-alt'></i>`
    
    li.querySelector('i').addEventListener('click', function (){
        this.parentElement.remove()
        saveTodos()
    })

    li.querySelector('span').addEventListener('click', function (){
        this.parentElement.classList.toggle('completed');
        saveTodos()
    })

    todos.appendChild(li);
}

function saveTodos() {
    const todos = document.querySelectorAll('li');
    const todosArray = Array.from(todos).map(function(todo) {
        return {
            text: todo.querySelector('span').innerText,
            status: todo.getAttribute('class')
        }
    })
    localStorage.setItem('todoList', JSON.stringify(todosArray));
}

function initTodos() {
    const todos = JSON.parse(localStorage.getItem('todoList'));
    if(todos) {
        todos.forEach(todo => {
            addTodo(todo);
        })
    }
}

