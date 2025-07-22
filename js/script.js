[
    {
        "id": 1,
        "title": "Skate Park",
        "date": "01-07-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/1.png"
    },
    {
        "id": 2,
        "title": "Passeggiata",
        "date": "16-07-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/2.png"
    },
    {
        "id": 3,
        "title": "Alpi",
        "date": "01-07-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/3.png"
    },
    {
        "id": 4,
        "title": "Sagra",
        "date": "21-08-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/4.png"
    },
    {
        "id": 5,
        "title": "Watergun",
        "date": "23-08-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/5.png"
    },
    {
        "id": 6,
        "title": "Riviera",
        "date": "30-08-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/6.png"
    }
]


document.addEventListener('DOMContentLoaded', () =>{

    //prendo l'elemento html che conterrà le card dinamiche
    const photoContainer = document.getElementById ('api-photos')
    
    //faccio la richiesta http all' api usando axios
    axios.get('https://lanciweb.github.io/demo/api/pictures/').then(response=>{

        //controlando, response.data contiene un array 
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
         
        })



    })
})