//Consumir Servicio POST
const URI='https://accounts.spotify.com/api/token'

const DATO1="client_id=2dfc179e4a3b451eb524279c4ea03fef";
const DATO2="client_secret=8b6bdbc57cdb4d958270df90b0b412b8";
const DATO3="grant_type=client_credentials";

const REQUEST={
    method:'POST',
    headers:{
        'Content-Type':'application/x-www-form-urlencoded'
    },
    body:DATO1+'&'+DATO2+'&'+DATO3

    
}

fetch(URI,REQUEST)
.then(function(response){
    return response.json();
})
.then(function(response){
    //console.log(response);
    //Armando el TOKEN
    const TOKEN=response.token_type+" "+response.access_token
    console.log(TOKEN);

    const URI='https://api.spotify.com/v1/albums/3AieuV7WztobSMYG86Hdez/tracks?market=US&limit=8&offset=5';

    const PETICION={
        method:'GET',
        headers:{
            Authorization:TOKEN
        }
    }

    fetch(URI, PETICION)
    .then(function (response) {
        return response.json() //Aseguro el formato de respuesta
    })
    .then(function(response){
        //Usar la respuesta
        console.log(response)
        console.log(response.album)
        // response.tracks.forEach(function(cancion){
        //     console.log(cancion.preview_url)
        // })
        mostarCanciones(response.items);
    })
    .catch(function(response){
        console.log(response)
    })

    //Funcion para pintar datos
    function mostarCanciones(canciones){
        //Pasos para pintar(renderizar) en la GUI(Interfaz Grafica de Usuario)

        //1.Crear referencia a la base sobre la cual pintar
        let fila = document.getElementById('fila');

        //2. Recorrer los datos que llegan
        canciones.forEach(function(cancion) {
            //console.log("hola")
            //Aplicando Traversing()
            //2.1 Crear columnas
            let columna=document.createElement("div");
            //Agregar Clases al elemento
            columna.classList.add("col", "mt-5");

            //2.2 Crear Tarjeta(card)
            let card=document.createElement("div");
            card.classList.add("card", "h-100","p-3","shadow");

            //2.3 Crear el Audio
            let audio=document.createElement("audio");
            audio.classList.add("w-100","mt-3");
            audio.src=cancion.preview_url
            //Agregar Atributos al elemento
            audio.setAttribute("controls","controls");

            //2.4 Crear el Nombre de la cancion
            let nombreCancion=document.createElement("h3")
            nombreCancion.classList.add("text-center")
            nombreCancion.textContent=cancion.name

            //2.5 Creando la foto del album
            let fotoAlbum=document.createElement("img")
            fotoAlbum.classList.add("img-fluid","w-100")
            fotoAlbum.src='/assets/images/img11.jpg'

            

            //2.7 Crear Pista
            let pista=document.createElement("h4")
            pista.classList.add("text-center","fw-bold")
            pista.textContent="Pista: " + cancion.track_number

            //Final definir jerarquias (Padres e Hijos)
            card.appendChild(fotoAlbum)
            card.appendChild(audio)
            card.appendChild(nombreCancion)
            card.appendChild(pista)
            columna.appendChild(card)
            fila.appendChild(columna)



        });
    }

})
.catch(function(error){
    console.log(error)
})