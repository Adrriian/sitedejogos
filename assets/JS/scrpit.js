function  clicou(){
    const ul = document.querySelector('ul');

    if(ul.style.display == 'none'){
        ul.style.display = 'flex';
    } else {
        ul.style.display = 'none';
    }
}
const menu = document.querySelector('.menu');
menu.addEventListener('click', clicou);