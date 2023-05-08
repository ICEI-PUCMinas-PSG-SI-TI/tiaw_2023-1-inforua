document.querySelector(".hamburger").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);
const inputName = document.getElementById('inputName');
const textComment = document.getElementById('inputText');
const form = document.getElementById('formulario');
const commentPost = document.getElementById('commentPost');

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    let p= document.createElement('p');
    p.classList = 'p-2 d-flex text-wap flex-wap';
    p.innerHTML = textComment.value;
    commentPost.appendChild(p);
    textComment.value = '';

});