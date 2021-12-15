const buyTicketButtons=document.querySelectorAll('.js-buy-btn');
const modal=document.querySelector('.modal');
const closeBtn=document.querySelector('.js-modal-close');
const modalContainer=document.querySelector('.js-modal-container');
const menuBtn=document.querySelector('.menu-btn');
const header=document.querySelector('#header');
const menuItems=document.querySelectorAll('#header #nav li');

menuBtn.addEventListener('click',closeOpenMenu);
modal.addEventListener('click',closeModal);
closeBtn.addEventListener('click',closeModal);

/*CloseOpenMenu except home and more
*/
for(var i=1;i<menuItems.length;i++){
    var subNav=menuItems[i].querySelector('.subnav');
    if(!subNav){
        menuItems[i].addEventListener('click',closeOpenMenu);
    }
}
/** Open modal when click "Buy tickets" */
for(const buyTicketButton of buyTicketButtons ){
    buyTicketButton.addEventListener('click',openModal);
}
function closeOpenMenu(){
    header.classList.toggle('flexible-height-menu');
}
function openModal(){
    modal.classList.add('open-modal');
}
function closeModal(){
    modal.classList.remove('open-modal');
}
/**Avoid bubbling to modal */
modalContainer.addEventListener('click',function(event){
   event.stopPropagation();
});