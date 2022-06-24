//alert('')

const modalBtn = document.querySelector(`.modal-btn`);

const modal = document.querySelector(`.modal-overlay`);

const closeBtn  = document.querySelector(`.close-btn`);

modalBtn.addEventListener(`click` , function(){
    modal.classList.add(`open-modal`)
    
})

//  const openList = document.getElementsByClassName(`.modal-btn`)
 
function  getTechniquesofGame(){
  fetch('http://smashlounge.com/api/techs/all')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(function(error){
    console.log(`Not  right technique`)
    return `techniques available`
  })
  }
getTechniquesofGame();

closeBtn.addEventListener(`click`,  function(){
    modal.classList.remove(`open-modal`)
    
})

document.querySelector('.banner').addEventListener
 (`mouseover`, e => console.log(`Hi`)) //  as an arrow function
// mouseover event created

