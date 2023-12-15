const adBtn = document.querySelector('button');
const todoList = document.querySelector('.todolist')
const input = document.querySelector('input');

adBtn.addEventListener('click', (e)=>{
    // it is one way to achive the data and list the same 
    // const list = document.getElementById('ol');
    // const listdata = document.createElement('li');

    // listdata.textContent = input;
    // list.appendChild(listdata);
    // document.querySelector('input').value = ''; 

    // it is second way to achive the data and list the same 

    const newItem = document.createElement('div');
    newItem.setAttribute('class', 'item');
    let str = ` <div class="sec-A">
                    <input class="checkbox" type="checkbox">
                    <ol id="ol">
                        <li>${input.value}</li>
                    </ol>
                </div>
                <div class="sec-B">
                    <span class="up-arrow">⬆️</span>
                    <span class="bin">🗑️</span>
                    <span class="down-arrow">⬇️</span>
                </div> `
    newItem.innerHTML = str;
    input.value = '';

    todoList.appendChild(newItem);
})

todoList.addEventListener('click', (e)=>{
    const element = e.target.getAttribute('class');
    // console.log(element);
    // console.log(e.target.parentElement.parentElement);

    if(element === 'bin'){
        const parent = e.target.parentElement.parentElement;
        
        parent.remove();
    }
    else if(element === 'up-arrow'){

        const currentItem = e.target.parentElement.parentElement;
        const prevItem = currentItem.previousElementSibling;
        
        prevItem.before(currentItem);
    }
    else if(element === 'down-arrow'){

        const currentItem = e.target.parentElement.parentElement;
        const nextItem = currentItem.nextElementSibling;
        
        nextItem.after(currentItem);
    }

    else if(element === 'checkbox'){

        const chekedItm = e.target.nextElementSibling;
        chekedItm.classList.toggle('checked');
    }
})
