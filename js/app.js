// api
const elementList = "https://lanciweb.github.io/demo/api/pictures/";
// container 
const cardElement = document.getElementById('card-container');
// overplay 
const overlay = document.getElementById("overlay");
// img
const imageElement = document.getElementById('img');
// button
const buttonElement = document.getElementById('butt');
// body scroll
const body = document.querySelector('body')
// se premo il bottone chiudo l'immagine 
buttonElement.addEventListener('click', function(){
  overlay.classList.add("d-none");
  // rimuovo overflow all body
  body.classList.remove("overflow-hidden")
});
// variabiile vuota dove inserire html
let photo = "";
// chiamo l'api con axios
axios.get(elementList)
     .then(response =>{
        // assegno una variabile all array 
        dataPhoto = response.data
        // ciclo per creare le 6 card  
        dataPhoto.forEach(element => {
            // destrutturazione per perndere i dati che ci servono 
            const { title, date, url } = element;
            // inseriamo l'html sulla variabile photo
            photo += `
            <div class="col-lg col-md col-sm position-relative">
            <div class="card rounded-0 p-3 text-start ">
              <img src="img/pin.svg" alt="pin" class="position-absolute top-0 start-50 translate-middle">
              <img src="${url}" class="card-img-top" alt="${title}">
              <div class="card-body px-0">
                <h5 class="card-title">${date}</h5>
                <p>${title}</p>
              </div>
            </div>
          </div>`
          cardElement.innerHTML = photo
        })

       const card = document.querySelectorAll('.card')
       console.log(card)
       // se premo l'immagine si si ingrandisce  
       card.forEach(element => {
        element.addEventListener('click', function() {
          const img = this.querySelector('.card-img-top')
          imageElement.src=img.src;
          overlay.classList.replace("d-none","d-block");
          // aggiungo overflow all body
          body.classList.add("overflow-hidden")
        })
      })
    })
 // errore
 .catch(error => {
    console.log(error)
});

