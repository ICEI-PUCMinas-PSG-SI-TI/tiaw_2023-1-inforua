const inputName = document.getElementById('inputName');
const inputText = document.getElementById('inputText');
const form = document.getElementById('formulario');
const commentPost = document.getElementById('commentPost');
const commentBody = document.getElementById('commentBody');

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    let p= document.createElement('p');
    p.classList = 'p-2 d-flex text-wap flex-wap';
    p.innerHTML = `<strong>${inputName.value}</strong> ${inputText.value}`;
    commentPost.appendChild(p);
    inputText.value = '';
    
});
