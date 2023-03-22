

var Button = document.querySelectorAll('.accordion-button');
for(let i=0; i<Button.length;i++){
    document.querySelectorAll('.accordion-button')[i].addEventListener('click',function(){
//  .classList.toggle('bold');
this.classList.toggle('bold');
}); 

}

// $('.accordion-button').click(function(){
//   $('.show').toggleClass('bold');
// })

// console.log( document.querySelectorAll('button'));