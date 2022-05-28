const content= document.querySelector('.content');
const input = document.querySelector('.content input');
var tags = ['Nodejs', 'Reactjs'];
const btnRemoveAll = document.querySelector('.remove-all')

function render() {
    content.innerHTML = ``;
    let vitualTagDoms = ``;
    for(let i = 0; i < tags.length; i++) {
        const tag = tags[i];

        content.innerHTML += `  <li>
                                    ${tag}
                                    <i class="fa-solid fa-xmark" onclick ='removeTag(${i})'></i>
                                </li>`
        
    }
    content.appendChild(input);
    input.focus();
}

function removeTag(index) {
    tags.splice(index, 1);
    render();
}

render();

input.addEventListener('keydown', function(e) {
    if(e.key === 'Enter') {
        tags.push(input.value.trim())
        input.value = ''
        render();
    }
})

btnRemoveAll.addEventListener('click', function() {
    tags = [];
    render();
})







