function  clicou(){
    const ul = document.querySelector('ul');

    if(ul.style.display == 'flex'){
        ul.style.display = 'none';
    } else {
        ul.style.display = 'flex';
    }

}
const menu = document.querySelector('.menu');
menu.addEventListener('click', clicou);