const btnOpenModal = document.querySelector('.btn_modal');
const globalModal = document.querySelector('.modal');
const bgModal = document.querySelector('.bg_modal');
const btnClose = document.querySelector('.btn_close');

btnOpenModal.addEventListener('click', function(){
    globalModal.classList.add('on');
    bgModal.classList.add('on');
});

bgModal.addEventListener('click', function(){
    globalModal.classList.remove('on');
    bgModal.classList.remove('on');
});

btnClose.addEventListener('click', function(){
    globalModal.classList.remove('on');
    bgModal.classList.remove('on');
});