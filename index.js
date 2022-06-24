document.addEventListener(`DOMContentLoaded`, function(){
    const modalBtn = document.querySelector(`.modal-btn`);

const modal = document.querySelector(`.modal-overlay`);

const closeBtn  = document.querySelector(`.close-btn`);

modalBtn.addEventListener(`click` , function(){
    modal.classList.add(`open-modal`)})
function  getTechniquesofGame(){
    fetch(`http://smashlounge.com/api/techs/all`)
    .then(response  => {
        // console.log(response)
        if(!response){
            throw Error(`ERROR`)
        }
       
        return response.json(); 
      
    }).then(data => {
        console.log(data) 
        const html = data.map(techniques => {
            return`<ol><b>Name of technique: ${techniques.tech}</b></ol>
            <ol>Technique description: ${techniques.description}</ol>
            <p>Link: ${techniques.smashwiki}</p><p>Press: ${techniques.inputs}</p>`
        }).join(``);
        console.log(html);
        document.querySelector(`#app`).insertAdjacentHTML(`afterbegin`, html)

    }).catch(error => {
        console.log(error)
    });

}
getTechniquesofGame();


closeBtn.addEventListener(`click`,  function(){
    modal.classList.remove(`open-modal`)})

document.querySelector('.banner').addEventListener
 (`mouseover`, e => console.log(`Hi`)) 




})

