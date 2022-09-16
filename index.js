let form = document.getElementById('form');
let input = document.getElementById('input');
let msg = document.getElementById('msg');
let posts = document.getElementById('posts');
let data = {};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('button clicked');

    formValidation()
})

function formValidation() { };

function formValidation() {
    if (input.value === '') {
        msg.textContent = 'Post cannot be blank'
        console.log('error')
    } else {
        msg.textContent = ''
        console.log('successful')
        acceptData()
    }
}

function acceptData() {
    data = input.value
    createPost()
}

function createPost() {
    posts.innerHTML += `
    <div>
                        <p class="get-el">${data}</p>
                        <span class="options">
                            <i onclick="deletePost(this)" class="fas fa-trash-alt"></i>
                            <i onclick="editPost(this)" class="fas fa-edit"></i>
                        </span>
                    </div>
    `
    let key = data.split(" ")[0];
    localStorage.setItem(key, data);

    input.value = ''
}

editPost = (e) => {
    let getEl = e.parentElement.previousElementSibling.innerHTML
    let get = getEl.split(" ")[0];
    let edit = localStorage.getItem(get);
    console.log(edit);
    input.value = edit;
    e.parentElement.parentElement.remove();
    console.log('yes')
}

deletePost = (e) => {
    e.parentElement.parentElement.remove();
    console.log('no')
}
