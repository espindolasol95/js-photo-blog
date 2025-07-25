
document.addEventListener('DOMContentLoaded', () =>{

    //prendo l'elemento html che conterrà le card dinamiche
    const photoContainer = document.getElementById ('api-photos')
    
    //faccio la richiesta http all' api usando axios
    axios.get('https://lanciweb.github.io/demo/api/pictures/').then(response=>{

        //controlando, response.data, contiene un array 
        const photos = response.data;
        //per ogni oggetto
        photos.forEach(photo => {
            //creo un <div> per con la classe "col" 
            const col = document.createElement('div');
            //qua aggiungo col dentro div che dobrebbe servire per il layout
            col.classList.add('col');
            //metto l’ html della card dentro il div
            col.innerHTML = `
            <div class="card h-100">
            <img src="img/pin.svg" class="puntina" alt="pin">
            <img src="${photo.url}" class="card-img-top" alt="${photo.title}">
            <div class="card-body">
              <h5 class="card-title text-center">${photo.title}</h5>
              <p class="card-text text-center">
                <small class="text-muted">${photo.date}</small>
              </p>
            </div>
          </div>
        `;

         //metto la card nel contenitore
         photoContainer.appendChild(col);

         //aggiungo il 'click' alla card 
         const img = col.querySelector('.card-img-top'); //prendo la foto del col.inerHTML
         img.addEventListener('click' , () => {
         const overlay = document.getElementById('overlay');// prendo l'overlay
         const overlayimg = document.getElementById('overlay-img') // prendo <img> dentro overlay

         overlayimg.src = photo.url; //cambio l'imagine con quella cliccata
         overlay.classList.remove ('d-none'); //rimuovo la clase che lo nasconde 
        });
         
      });

    });
    
    //evento per chiudere l'overlay quando clicco il bottone 
    const closebtn = document.getElementById('close-overlay');
    closebtn.addEventListener('click', () =>{
    const overlay = document.getElementById('overlay');
    //riaggiungo la classe per nasconderlo
    overlay.classList.add('d-none');
    });

     

});

